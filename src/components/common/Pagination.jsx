import PropTypes from "prop-types";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import useTranslation from "../../hooks/useTranslation";
import { useState, useEffect, useRef } from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const { t } = useTranslation();
  const [pageInput, setPageInput] = useState("");
  const [showPageInput, setShowPageInput] = useState(false);
  const inputRef = useRef(null);
  const formRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        formRef.current &&
        !formRef.current.contains(event.target) &&
        showPageInput
      ) {
        setShowPageInput(false);
        setPageInput("");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showPageInput]);

  const handlePageInputChange = (e) => {
    const value = e.target.value;
    if (value === "" || /^\d+$/.test(value)) {
      setPageInput(value);
    }
  };

  const handlePageInputSubmit = (e) => {
    e.preventDefault();
    const pageNumber = parseInt(pageInput);
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      onPageChange(pageNumber);
      setPageInput("");
      setShowPageInput(false);
    }
  };

  const getPageNumbers = () => {
    const pages = [];
    const showEllipsis = totalPages > 7;

    if (!showEllipsis) {
      // Show all pages if total is 7 or less
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Complex pagination with ellipsis
      if (currentPage <= 3) {
        // Near the start
        for (let i = 1; i <= 4; i++) pages.push(i);
        pages.push("...");
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        // Near the end
        pages.push(1);
        pages.push("...");
        for (let i = totalPages - 3; i <= totalPages; i++) pages.push(i);
      } else {
        // Middle
        pages.push(1);
        pages.push("...");
        for (let i = currentPage - 1; i <= currentPage + 1; i++) pages.push(i);
        pages.push("...");
        pages.push(totalPages);
      }
    }

    return pages;
  };

  const handlePageClick = (page) => {
    if (page === "...") {
      setShowPageInput(true);
      return;
    }
    onPageChange(page);
  };

  const renderPageButton = (page, index) => {
    const isCurrentPage = page === currentPage;
    const isEllipsis = page === "...";

    if (isEllipsis) {
      return (
        <button
          key={`ellipsis-${index}`}
          onClick={() => handlePageClick(page)}
          className="flex h-10 w-10 items-center justify-center text-gray-500 hover:text-red-500"
        >
          {page}
        </button>
      );
    }

    return (
      <button
        key={page}
        onClick={() => handlePageClick(page)}
        className={`flex h-10 w-10 items-center justify-center rounded-lg transition-colors ${
          isCurrentPage
            ? "bg-red-500 text-white"
            : "text-gray-600 hover:bg-gray-100"
        }`}
        aria-current={isCurrentPage ? "page" : undefined}
      >
        {page}
      </button>
    );
  };

  return (
    <nav
      className="flex items-center justify-center gap-1 py-8"
      aria-label="Pagination"
    >
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="flex h-10 items-center gap-2 rounded-lg px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50"
      >
        <FaChevronLeft className="h-4 w-4" />
        {t("listings.pagination.previous")}
      </button>

      <div className="hidden items-center gap-1 sm:flex">
        {getPageNumbers().map((page, index) => renderPageButton(page, index))}
        {showPageInput && (
          <form
            ref={formRef}
            onSubmit={handlePageInputSubmit}
            className="flex items-center"
          >
            <input
              ref={inputRef}
              type="text"
              value={pageInput}
              onChange={handlePageInputChange}
              className="h-10 w-16 rounded-lg border border-gray-200 px-2 text-center text-sm focus:border-red-500 focus:outline-none"
              placeholder={`1-${totalPages}`}
              autoFocus
            />
          </form>
        )}
      </div>

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="flex h-10 items-center gap-2 rounded-lg px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {t("listings.pagination.next")}
        <FaChevronRight className="h-4 w-4" />
      </button>
    </nav>
  );
};

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default Pagination;

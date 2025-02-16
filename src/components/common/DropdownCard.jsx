import { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { FaChevronDown } from "react-icons/fa";

const DropdownCard = ({
  isOpen,
  onToggle,
  onClose,
  icon: Icon,
  label,
  children,
  isLightBg = false,
  layout = "default",
  hasSlider = false,
  disabled = false,
}) => {
  const ref = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Don't close if clicking inside the dropdown content when it has a slider
      if (hasSlider && contentRef.current?.contains(event.target)) {
        return;
      }

      // Close if clicking outside both the button and content
      if (
        !ref.current?.contains(event.target) &&
        !contentRef.current?.contains(event.target)
      ) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () =>
        document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [isOpen, onClose, hasSlider]);

  const buttonPadding = layout === "sidebar" ? "p-3" : "p-4";
  const baseButtonClasses = isLightBg
    ? "w-full rounded-lg text-left flex justify-between items-center border border-gray-300 bg-gray-100"
    : "w-full rounded-lg text-left flex justify-between items-center bg-white";

  return (
    <div className="relative" ref={ref}>
      <button
        className={`${baseButtonClasses} ${buttonPadding}`}
        onClick={onToggle}
        disabled={disabled}
      >
        <div className="flex items-center gap-2">
          <Icon className="text-lg text-gray-400" />
          <span className="text-gray-500">{label}</span>
        </div>
        <FaChevronDown
          className={`text-gray-400 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {isOpen && (
        <div
          ref={contentRef}
          className={`absolute top-full right-0 left-0 z-10 mt-2 rounded-lg bg-white p-2 shadow-lg ${
            isLightBg ? "border border-gray-200" : ""
          }`}
        >
          {children}
        </div>
      )}
    </div>
  );
};

DropdownCard.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  icon: PropTypes.elementType.isRequired,
  label: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  isLightBg: PropTypes.bool,
  layout: PropTypes.oneOf(["default", "sidebar"]),
  hasSlider: PropTypes.bool,
  disabled: PropTypes.bool,
};

export default DropdownCard;

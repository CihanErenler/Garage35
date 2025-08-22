import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import PropTypes from "prop-types";

const ImageSection = ({ car }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === car?.images?.length - 1 ? 0 : prev + 1,
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? car?.images?.length - 1 : prev - 1,
    );
  };

  return (
    <div className="mb-8">
      <div className="relative">
        <div className="relative aspect-[16/9] w-full overflow-hidden">
          {car?.images && car.images.length > 0 && (
            <img
              src={car.images[currentImageIndex].url}
              alt={`${car.make} ${car.model} - Image ${currentImageIndex + 1}`}
              className="h-full w-full object-contain transition-transform duration-500"
            />
          )}

          {/* Navigation Arrows */}
          {car?.images && car.images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute top-1/2 left-4 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white transition-colors hover:bg-black/75"
                aria-label="Previous image"
              >
                <FaChevronLeft size={24} />
              </button>

              <button
                onClick={nextImage}
                className="absolute top-1/2 right-4 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white transition-colors hover:bg-black/75"
                aria-label="Next image"
              >
                <FaChevronRight size={24} />
              </button>

              {/* Image Counter */}
              <div className="absolute right-4 bottom-4 rounded bg-black/50 px-2 py-1 text-sm text-white">
                {currentImageIndex + 1} / {car.images.length}
              </div>
            </>
          )}
        </div>

        {/* Thumbnail Preview */}
        {car?.images && car.images.length > 1 && (
          <div className="mt-4 flex gap-2 overflow-x-auto">
            {car.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`h-20 w-20 flex-shrink-0 overflow-hidden rounded ${
                  index === currentImageIndex ? "ring-2 ring-red-500" : ""
                }`}
              >
                <img
                  src={image.url}
                  alt={`${car.make} ${car.model} - Thumbnail ${index + 1}`}
                  className="h-full w-full object-cover"
                />
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

ImageSection.propTypes = {
  car: PropTypes.object.isRequired,
};

export default ImageSection;

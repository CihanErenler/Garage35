import CarInfo from "./CarInfo/CarInfo";
import ImageSection from "./ImageSection";
import PropTypes from "prop-types";

const SingleCarContent = ({ car }) => {
  return (
    <>
      <ImageSection car={car} />
      <CarInfo car={car} />
    </>
  );
};

SingleCarContent.propTypes = {
  car: PropTypes.object.isRequired,
};

export default SingleCarContent;

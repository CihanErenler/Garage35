import { useEffect, useRef } from 'react';

const Map = ({ className = "" }) => {
  return (
    <div className={`w-full rounded-lg overflow-hidden border-2 border-red-500/10 shadow-lg ${className}`}>
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1904.5958962085047!2d23.97473167719094!3d61.48661393651264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x468f1ff2704a6fa5%3A0xdc5323a259cb933!2sGarage35%20Oy!5e0!3m2!1sen!2sfi!4v1738935987700!5m2!1sen!2sfi"
        width="100%"
        height="100%"
        className="border-0"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
};

export default Map; 
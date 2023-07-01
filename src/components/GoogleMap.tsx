import { GoogleMap, LoadScriptNext, Marker } from "@react-google-maps/api";
import Link from "next/link";
import { useState } from "react";

const GoogleMapComponent = () => {
  const [show, setShow] = useState(true);
  const mapStyles = {
    height: "50vh",
    maxHeight: "640px",
    width: "100%",
    borderRadius: "8px",
  };

  const defaultCenter = {
    lat: -1.3205880892538233,
    lng: 36.82365124348525,
  };

  return (
    <LoadScriptNext
      googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY as string}
    >
      <div className="border rounded-lg shadow-md w-full relative">
        <div className="max-w-[210px]  bg-white absolute z-10 shadow-lg p-4 translate-x-full translate-y-[-50%] flex flex-col justify-center items-center">
          <p className="break-keep">SAT— FRI / 12AM - 4PM</p>

          <p className="text-center">Five Star Rd Nairobi, Kenya</p>
          <a
            href="tel:+254769807070"
            className="mt-1 px-2 py-1 bg-purple-500 rounded text-white"
          >
            254769807070
          </a>
        </div>
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={15.5}
          center={defaultCenter}
        >
          <Marker visible position={defaultCenter} />
        </GoogleMap>
      </div>
    </LoadScriptNext>
  );
};

export default GoogleMapComponent;

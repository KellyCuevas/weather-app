import { useState } from "react";
const LocationInput = () => {
  const [latitude, setLatitude] = useState<number>(0);
  const [longitude, setLongitude] = useState<number>(0);
  return (
    <div>
      <h3>Location</h3>
      <div className="date-picker-container">
        <div className="single-date-picker">
          <label htmlFor="latitude">Latitude</label>
          <input
            id="latitude"
            type="number"
            required={true}
            min="-90.000000"
            max="90.000000"
            value={latitude}
            onChange={(e) => setLatitude(parseFloat(e.target.value))}
          />
        </div>
        <div className="single-date-picker">
          <label htmlFor="longitude">Longitude</label>
          <input
            id="longitude"
            type="number"
            required={true}
            min="-180.000000"
            max="180.000000"
            value={longitude}
            onChange={(e) => setLongitude(parseFloat(e.target.value))}
          />
        </div>
      </div>
    </div>
  );
};

export default LocationInput;

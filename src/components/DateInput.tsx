import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";

const DateInput = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(startDate);
  return (
    <div>
      <h3>Date</h3>
      <div className="date-picker-container">
        <div className="single-date-picker">
          <p>Start Date</p>
          <DatePicker
            showIcon
            selected={startDate}
            onChange={(date) => setStartDate(date ? date : startDate)}
          />
        </div>
        <div className="single-date-picker">
          <p>End Date</p>
          <DatePicker
            showIcon
            selected={endDate}
            onChange={(date) => setEndDate(date ? date : endDate)}
          />
        </div>
      </div>
    </div>
  );
};

export default DateInput;

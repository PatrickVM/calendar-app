"use client";
import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const MyCalendar: React.FC = () => {
  const [value, onChange] = React.useState(new Date());

  return (
    <div>
      <Calendar value={value} />
    </div>
  );
};

export default MyCalendar;

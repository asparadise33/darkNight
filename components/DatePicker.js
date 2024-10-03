/* eslint-disable no-shadow */
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import React, { useState } from 'react';

export default function Calendar() {
  const [date, setDate] = useState(new Date());
  return (
    <div>
      <DatePicker selected={date} onChange={(date) => setDate(date)} />
    </div>
  );
}

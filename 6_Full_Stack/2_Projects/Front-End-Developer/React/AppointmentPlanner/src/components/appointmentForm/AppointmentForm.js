import React from "react";
import { ContactPicker } from '../contactPicker/ContactPicker'

const getTodayString = () => {
  const [month, day, year] = new Date()
    .toLocaleDateString("en-US")
    .split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:
          <input id="name" name="name" type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </label>
        <label htmlFor="date">Date:
          <input id="date" name="date" type="date"  value={date} onChange={(e) => setDate(e.target.value)} min={getTodayString()}/>
        </label>
        <label htmlFor="time">Time:
          <input id="time" name="time" type="time"  value={time} onChange={(e) => setTime(e.target.value)} />
        </label>
        <ContactPicker contacts={contacts} value={contact} onChange={(e) => setContact(e.target.value)} />
        <button type="submit">Add Appointment</button>
      </form>
    </>
  );
};

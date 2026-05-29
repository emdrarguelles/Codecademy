import React, { useState } from "react";

import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";

export const AppointmentsPage = ({ appointments, contacts, onAdd, onDelete, onStatusUpdate }) => {
  /*
  Define state variables for 
  appointment info
  */
 const [currentName, setCurrentName] = useState("")
 const [currentContact, setCurrentContact] = useState("")
 const [currentDate, setCurrentDate] = useState("")
 const [currentTime, setCurrentTime] = useState("")

 const formatTime = (time) => {
  const [hours, minutes] = time.split(':')
  const h = parseInt(hours)
  const ampm = h >= 12 ? 'PM' : 'AM'
  const hour12 = h % 12 || 12
  return `${hour12}:${minutes} ${ampm}`
}

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data  
    */
    onAdd(currentName, currentContact, currentDate, formatTime(currentTime))
    setCurrentName("")
    setCurrentContact("")
    setCurrentDate("")
    setCurrentTime("")
   
  };

  const sortedAppointments = [...appointments].sort((a, b) => new Date(a.date) - new Date(b.date))

  return (
    <div className="main-layout">
      <div className="form-panel">
        <h2>Add Appointment</h2>
        <AppointmentForm contacts={contacts} title={currentName} setTitle={setCurrentName} contact={currentContact} setContact={setCurrentContact} date={currentDate} setDate={setCurrentDate} time={currentTime} setTime={setCurrentTime} handleSubmit={handleSubmit} />
      </div>
      <div className="list-panel">
        <h2>Appointments</h2>
        <div className="tile-list">
          <TileList array={sortedAppointments} onDelete={onDelete} onStatusUpdate={onStatusUpdate} />
        </div>
      </div>
    </div>
  );
};
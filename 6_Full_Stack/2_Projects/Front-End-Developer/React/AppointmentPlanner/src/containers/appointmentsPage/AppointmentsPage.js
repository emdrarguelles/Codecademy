import React, { useState } from "react";

import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";

export const AppointmentsPage = ({ appointments, contacts, onAdd, onDelete}) => {
  /*
  Define state variables for 
  appointment info
  */
 const [currentName, setCurrentName] = useState("")
 const [currentContact, setCurrentContact] = useState("")
 const [currentDate, setCurrentDate] = useState("")
 const [currentTime, setCurrentTime] = useState("")


  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data  
    */
    onAdd(currentName, currentContact, currentDate, currentTime)
    setCurrentName("")
    setCurrentContact("")
    setCurrentDate("")
    setCurrentTime("")
   
  };

  return (
    <div className="main-layout">
      <div className="form-panel">
        <h2>Add Appointment</h2>
        <AppointmentForm contacts={contacts} title={currentName} setTitle={setCurrentName} contact={currentContact} setContact={setCurrentContact} date={currentDate} setDate={setCurrentDate} time={currentTime} setTime={setCurrentTime} handleSubmit={handleSubmit} />
      </div>
      <div className="list-panel">
        <h2>Appointments</h2>
        <div className="tile-list">
          <TileList array={appointments} onDelete={onDelete} />
        </div>
      </div>
    </div>
  );
};
import React, { useState, useEffect } from "react";
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Navigate } from "react-router-dom"
import Root, { ROUTES } from "./components/root/Root";
import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  /*
  Define state variables for 
  contacts and appointments 
  */
  const [contacts, setContacts] = useState(() => {
    const saved = localStorage.getItem('contacts')
    return saved ? JSON.parse(saved) : []
  })

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts))
  }, [contacts])
  
  const [appointments, setAppointments] = useState(() => {
    const saved = localStorage.getItem('appointments')
    return saved ? JSON.parse(saved) : []
  })

  useEffect(() => {
    localStorage.setItem('appointments', JSON.stringify(appointments))
  }, [appointments])
  
  /*
  Implement functions to add data to
  contacts and appointments
  */
 const addContact = (name, number, email) => {
  setContacts((prev) => (
    [...prev, {name, number, email}]
  ))
 }

 const addAppointment = (name, contact, date, time) => {
  setAppointments((prev) => (
    [...prev, {name, contact, date, time}]
  ))
 }

 const deleteContact = (name) => {
  setContacts((prev) => prev.filter((contact) => contact.name !== name))
 }

 const deleteAppointment = (name) => {
  setAppointments((prev) => prev.filter((appointment) => appointment.name !== name))
 }


  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={ <Root/> }>
      <Route index element={ <Navigate to={ROUTES.CONTACTS} replace/> }/>
      <Route path={ROUTES.CONTACTS} element={ <ContactsPage contacts={contacts} onAdd={addContact} onDelete={deleteContact} /> /* Add props to ContactsPage */ }/>
      <Route path={ROUTES.APPOINTMENTS} element={ <AppointmentsPage appointments={appointments} contacts={contacts} onAdd={addAppointment} onDelete={deleteAppointment} /> /* Add props to AppointmentsPage */ }/>
    </Route>
  ));
  
  return (
    <RouterProvider router={router}/>
  );
}

export default App;

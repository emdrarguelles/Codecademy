import React, { useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = ({contacts, onAdd, onDelete })  => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
 const [currentName, setCurrentName] = useState("")
 const [isDuplicate, setIsDuplicate] = useState(false)
 const [currentNumber, setCurrentNumber] = useState("")
 const [currentEmail, setCurrentEmail] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
   if (!isDuplicate && currentName) {
    onAdd(currentName, currentNumber, currentEmail)
    setCurrentName("")
    setCurrentNumber("")
    setCurrentEmail("")
   }
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */
 useEffect(() => {
  setIsDuplicate(contacts.some(contact => contact.name === currentName))
 }, [currentName, contacts])

  return (
    <div className="main-layout">
      <div className="form-panel">
        <h2>Add Contact</h2> 
        <p className="panel-subtext">Fill in the details below</p>
        {isDuplicate && <p className="duplicate-warning">⚠ Name already exists</p>}
        <ContactForm name={currentName} setName={setCurrentName} number={currentNumber} setNumber={setCurrentNumber} email={currentEmail} setEmail={setCurrentEmail} handleSubmit={handleSubmit} />
      </div>
      <div className="list-panel">
        <h2>Contacts</h2>
        <div className="tile-list">
          <TileList array={contacts} onDelete={onDelete} />
        </div>
      </div>
    </div>
  );
};

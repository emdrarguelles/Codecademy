import React, { useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = ({contacts, onAdd})  => {
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
    <div>
      <section>
        <h2>Add Contact</h2> 
        <ContactForm name={currentName} setName={setCurrentName} number={currentNumber} setNumber={setCurrentNumber} email={currentEmail} setEmail={setCurrentEmail} onSubmit={handleSubmit} />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList contacts={contacts} />
      </section>
    </div>
  );
};

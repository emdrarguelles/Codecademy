import React from "react";

export const ContactPicker = ({ contacts, value, onChange, name="contact" }) => {
  return (
    <>
      <label htmlFor={name}>Choose a contact:</label>
      <select name={name} id={name} onChange={onChange} value={value}>
        <option value="">No Contact Selected</option>
        {contacts.map((obj, index) => (
          <option key={index} value={obj.name}>{obj.name}</option>
        ))}
      </select>
    </>
  );
};

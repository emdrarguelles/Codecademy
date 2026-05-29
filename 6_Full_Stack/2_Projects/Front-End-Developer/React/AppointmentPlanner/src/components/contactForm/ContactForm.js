import React from "react";

export const ContactForm = ({
  name,
  setName,
  number,
  setNumber,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor='name'>Name:
          <input id='name' name='name' type='text' value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label htmlFor='number'>Number:
          <input id='number' name='number' type='tel' pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="123-456-7890" value={number} onChange={(e) => setNumber(e.target.value)} onKeyDown={(e) => {if (!/[0-9-]/.test(e.key) && e.key !== 'Backspace') {e.preventDefault()}}} />
        </label>
        <label htmlFor='email'>Email:
          <input id='email' name='email' type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <button type='submit'>Add Contact</button>
      </form>
    </>
  );
};


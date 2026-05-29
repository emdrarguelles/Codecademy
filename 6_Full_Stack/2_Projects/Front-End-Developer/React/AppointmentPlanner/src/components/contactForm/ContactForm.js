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
          <input id='name' name='name' type='text' value={name} placeholder="Juan dela Cruz" onChange={(e) => setName(e.target.value)} required/>
        </label>
        <label htmlFor='number'>Number:
        <input id='number' name='number' type='tel' pattern="[0-9]{4}-[0-9]{3}-[0-9]{4}" placeholder="0923-123-1234" value={number}
        onChange={(e) => {
          const digits = e.target.value.replace(/\D/g, '')
          if (digits.length === 0) { setNumber(''); return }
          if (digits.length <= 4) { setNumber(digits); return }
          if (digits.length <= 7) { setNumber(`${digits.slice(0,4)}-${digits.slice(4)}`); return }
          setNumber(`${digits.slice(0,4)}-${digits.slice(4,7)}-${digits.slice(7,11)}`)
        }}
        required />
        </label>
        <label htmlFor='email'>Email:
          <input id='email' name='email' type='email' value={email} placeholder="hello@gmail.com" onChange={(e) => setEmail(e.target.value)} required/>
        </label>
        <button type='submit'>Add Contact</button>
      </form>
    </>
  );
};


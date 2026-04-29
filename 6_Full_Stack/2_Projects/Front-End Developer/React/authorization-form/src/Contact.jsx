import { useState } from 'react';

function Contact() {
  const password = import.meta.env.VITE_PASSWORD;
  const [authorized, setAuthorized] = useState(false);
  const [error, setError] = useState('');

  function handleSubmit(e) {
    const enteredPassword = e.target.querySelector(
      'input[type="password"]').value;
    const auth = enteredPassword === password;
    if (auth) {
      setAuthorized(true)
      setError('')
    } else {
      setError('Incorrect password, please try again.')
      e.target.reset()
    }
  };

  const login = (
    <form action='#' onSubmit={handleSubmit}>
      <input type='password' placeholder='password' />
      <input type='submit' />
    </form>
  );

  function handleClick() {
    setAuthorized(false)
  }

  const contactInfo = (
    <>
      <ul>
        <li>
          client@example.com
        </li>
        <li>
          555.555.5555
        </li>
      </ul>
      <button onClick={handleClick}>Close Contact</button>
    </>
  );
  
  return (
      <div id="authorization">
        <h1>{authorized ? 'Contact' : 'Enter the Password'}</h1>
        {authorized ? contactInfo : login}
        {error && <p style={{color: 'red'}}>{error}</p>}
      </div>
  );
}

export default Contact;
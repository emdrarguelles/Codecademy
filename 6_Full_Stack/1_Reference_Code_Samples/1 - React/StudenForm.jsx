import { useState } from 'react';

export default function StudentForm() {
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [age, setAge] = useState('');
  const [address, setAddress] = useState('');
  const [classNumber, setClassNumber] = useState('');
  const [studentId, setStudentId] = useState('');
  const [lunch, setLunch] = useState('');

  function handleFname({target}) {
    setFname(target.value);
  }

  function handleLname({target}) {
    setLname(target.value);
  }

  function handleAge({target}) {
    setAge(target.value);
  }

  function handleAddress({target}) {
    setAddress(target.value);
  }

  function handleClassNumber({target}) {
    setClassNumber(target.value);
  }

  function handleStudentId({target}) {
    setStudentId(target.value);
  }

  function handleLunch({target}) {
    setLunch(target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log({fname, lname, age, address, classNumber, studentId, lunch});
    setFname('');
    setLname('');
    setAge('');
    setAddress('');
    setClassNumber('');
    setStudentId('');
    setLunch('');
  }

  return (
    <>
      <div>
      </div>
        <h1>Student Enrollment Form</h1>
      <form style={{display: 'flex', flexDirection: 'column'}} onSubmit={handleSubmit}>
        <label htmlFor='fname'>First name: </label>
        <input required id='fname' type='text' onChange={handleFname} value={fname}/>
        <label htmlFor='lname'>Last name: </label>
        <input required id='lname' type='text' onChange={handleLname} value={lname}/>
        <label htmlFor='age'>Age: </label>
        <input required id='age' type='number' onChange={handleAge} value={age}/>
        <label htmlFor='address'>Address: </label>
        <input required id='address' type='text' onChange={handleAddress} value={address}/>
        <label htmlFor='classNumber'>Homeroom Class number: </label>
        <input required id='classNumber' type='number' onChange={handleClassNumber} value={classNumber}/>
        <label htmlFor='studentId'>Student Id: </label>
        <input required id='studentId' type='number' onChange={handleStudentId} value={studentId}/>
        <fieldset>
          <legend>Lunch Option:</legend>
          <label>
            <input required type='radio' name='lunch' value='Oriental' onChange={handleLunch} checked={lunch === 'Oriental'}/>
             Oriental
          </label>
          <label>
            <input required type='radio' name='lunch' value='American' onChange={handleLunch} checked={lunch === 'American'}/>
             American
          </label>
          <label>
            <input required type='radio' name='lunch' value='Fusion' onChange={handleLunch} checked={lunch === 'Fusion'}/>
             Fusion
          </label>
        </fieldset>
        <input style={{marginTop: 10, width:'10rem', alignSelf: 'center'}} type='submit'/>
      </form>
    </>
  )
}
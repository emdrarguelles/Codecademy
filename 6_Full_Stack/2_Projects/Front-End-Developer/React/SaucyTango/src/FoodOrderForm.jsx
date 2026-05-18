import { useState } from "react";
import styles from "./FoodOrderForm.module.css"

function FoodOrderForm() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [address, setAddress] = useState('')
  const [order, setOrder] = useState('')

  function handleChangeName({target}) {
    setName(target.value);
  }

  function handleChangePhone({target}) {
    setPhone(target.value);
  }

  function handleChangeAddress({target}) {
    setAddress(target.value);
  }

  function handleChangeOrder({target}) {
    setOrder(target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert(
    `Order Successful! 

    Your order was ${order}.

    Please show your confirmation number for pickup.
    `)
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.field}>
        <label htmlFor='name'>Name</label>
        <input id='name' name='name' type='text' value={name} onChange={handleChangeName}/>
      </div>
      <div className={styles.field}>
        <label htmlFor='phone'>Phone</label>
        <input id='phone' name='phone' type='number' value={phone} onChange={handleChangePhone}/>
      </div>
      <div className={styles.field}>
        <label htmlFor='address'>Address</label>
        <input id='address' name='address' type='text' value={address} onChange={handleChangeAddress}/>
      </div>
      <div className={styles.field}>
        <label htmlFor='order'>Order</label>
        <input id='order' name='order' type='text' value={order} onChange={handleChangeOrder}/>
      </div>
      <input className={styles.submit} type='submit' value='Submit Order'/>
    </form>
  )
}

export default FoodOrderForm;
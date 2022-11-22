import { useState } from 'react'
import styles from '../styles/Contact.module.scss'

const Contact = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('')

  const handleForm = async (event) => {
    event.preventDefault()

    const headers = new Headers()
    headers.append("Content-Type", "application/json")
    
    const body = {
      'name': name,
      'email': email
    }
    
    const options = {
      method: "POST",
      headers,
      mode: "cors",
      body: JSON.stringify(body),
    }
    
    fetch("https://eovzb4196cu45tc.m.pipedream.net", options)
  }

  return ( 
    <div className={styles.container}>
      <h1>Contact Us</h1>
      <form onSubmit={(event) => handleForm(event)}>
        <input type="text" name="full-name" placeholder="Full Name" required onChange={e => setName(e.target.value)} />
        <input type="email" name="email" placeholder="Email" required onChange={e => setEmail(e.target.value)} />
        <input type="submit" name="full-name" value="Send" />
      </form>
    </div>
   );
}
 
export default Contact;
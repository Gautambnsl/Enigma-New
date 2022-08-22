import React from 'react';
import { AiOutlineClose } from 'react-icons/ai'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import styles from './Register.module.css';
import register from './register';
import { useState } from 'react';

const LogIn = ({login, setLogin}) => {

   let [meterId , setMeterId] =useState("");

  function temp(e){
    setMeterId(e.target.value);
  
    console.log(meterId);
    console.log('this is working');
    register(meterId);

  }

  return (  
    <div >
      {
        login &&
        <div className={styles.loginContainer}>
          <AiOutlineClose size={30} className={styles.close} onClick={() => setLogin(false)} />
          <Form className={styles.loginForm}>
            <h2 className={styles.heading}>Meter Id</h2>
            <Form.Group className={styles.formGroup} controlId="formBasicEmail">
              <Form.Control type="email" id='get' onBlur={(e)=>{temp(e)}} className={styles.formControl} placeholder="Enter Meter Number" />
            </Form.Group>
            <Form.Group className={styles.formGroup} controlId="formBasicPassword">
            <Button varient="success" className={styles.loginButton} >Register Now</Button>
          </Form.Group>
          </Form>
        </div>
      }
    </div>
  )
}

export default LogIn;
import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import styles from "./Register.module.css";
import { useState } from "react";
import Register from "./BackendConnection/register";


const LogIn = ({ login, setLogin }) => {
  let [meterId, setMeterId] = useState("");

  function temp() {
    // setMeterId(e.target.value);

    console.log(meterId);
    console.log("this is working");
    Register(meterId);
    
  }
  const handleInputChange = (e) => {
    setMeterId(e.target.value);
    console.log(meterId);
  };
  return (
    <div>
      {login && (
        <div className={styles.loginContainer}>
          <AiOutlineClose
            size={30}
            className={styles.close}
            onClick={() => setLogin(false)}
          />
          <Form className={styles.loginForm}>
            <h2 className={styles.heading}>Meter Id</h2>
            <Form.Group className={styles.formGroup}>
              <Form.Control
                type="email"
                id="get"
                onChange={handleInputChange}
                className={styles.formControl}
                placeholder="Enter Meter Number"
              />
            </Form.Group>
            <Form.Group className={styles.formGroup}>
              <Button
                varient="success"
                className={styles.loginButton}
                onClick={temp}
              >
                Register Now
              </Button>
            </Form.Group>
          </Form>
        </div>
      )}
    </div>
  );
};

export default LogIn;

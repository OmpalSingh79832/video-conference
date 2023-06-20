import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

import InputControl from "../../InputControl";
import { auth } from "../../../utils/firebaseConfig";

import styles from "./Signup.module.css";
import Gpay from "../../../assets/gpay.png";
import PayTm from "../../../assets/paytm.webp";
import Nav from "../../../homePage/Nav";
import ReCAPTCHA from "react-google-recaptcha";

function SignUpP() {
  function onChange(value) {
    console.log("Captcha value:", value);
  }
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: "",
    email: "",
    pass: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const handleSubmission = () => {
    if (!values.name || !values.email || !values.pass) {
      setErrorMsg("Fill all fields");
      return;
    }
    setErrorMsg("");

    setSubmitButtonDisabled(true);
    createUserWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {
        setSubmitButtonDisabled(false);
        const user = res.user;
        await updateProfile(user, {
          displayName: values.name,
        });
        navigate("/dashboard");
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        setErrorMsg(err.message);
      });
  };

  return (
    <>
    <Nav/>
    
    <div className={styles.container}>
      <div className={styles.innerBox}>
        <h1 className={styles.heading}>SignUp</h1>

        <InputControl
          label="Name"
          placeholder="Enter your name"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, name: event.target.value }))
          }
          />
            <InputControl
          label="Phone Number"
          placeholder="Enter Your Phone Number"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, phone: event.target.value }))
          }
          />
        <InputControl
          label="Email"
          placeholder="Enter email address"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, email: event.target.value }))
          }
        />
        <InputControl
          label="Password"
          placeholder="Enter password"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, pass: event.target.value }))
          }
        />
        <h1 className={styles.heading}>Payment method</h1>

        <div className={styles.prem_img}>
          
          <Link to="/pay"><img src={Gpay} alt=""/> </Link>
          <Link to="/pay"><img src={PayTm} alt=""/> </Link>
          
        </div>

        <div className={styles.footer}>
          <b className={styles.error}>{errorMsg}</b>
          <ReCAPTCHA
          sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
          onChange={onChange}
        />
          <button onClick={handleSubmission} disabled={submitButtonDisabled}>
            Signup
          </button>
          <p>
            Already have an account?{" "}
            <span>
              <Link to="/LoginsP">Login</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
          </>
  );
}

export default SignUpP;
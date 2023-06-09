import React, { useState, useEffect, useMemo } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import Input from "src/components/Input";
import Button from "src/components/Button";
import { RoutesList } from "src/pages/Router";
import { setUser } from "src/redux/reducers/userSlice";
import { ButtonType } from "src/utils/@globalTypes";
import styles from "./SignIn.module.scss";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [passwordTouched, setPasswordTouched] = useState(false);
  const [emailTouched, setEmailTouched] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (email.length === 0 && emailTouched) {
      setEmailError("Email is required field");
    } else {
      setEmailError("");
    }
  }, [email, emailTouched]);

  useEffect(() => {
    if (passwordTouched) {
      if (password.length === 0) {
        setPasswordError("Password is required field");
      } else {
        setPasswordError("");
      }
    }
  }, [password, passwordTouched]);

  const onChangeEmail = (value: string) => setEmail(value);
  const onChangePassword = (value: string) => setPassword(value);
  const onBlurEmail = () => setEmailTouched(true);
  const onBlurPassword = () => setPasswordTouched(true);

  const handleSignIn = (email: string, password: string) => () => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(
          setUser({ email: user.email, id: user.uid, token: user.refreshToken })
        );
        navigate(RoutesList.Main);
      })
      .catch(() => alert("Incorrect email or password"));
  };

  const isValid = useMemo(() => {
    return passwordError.length === 0 && emailTouched && passwordTouched;
  }, [passwordError, emailTouched, passwordTouched]);

  return (
    <div className={styles.container}>
      <div className={styles.inputContainer}>
        <Input
          title={"Email"}
          value={email}
          onChange={onChangeEmail}
          placeholder={"Your email"}
          className={styles.input}
          type={"email"}
          errorText={emailError}
          onBlur={onBlurEmail}
        />
        <Input
          title={"Password"}
          value={password}
          onChange={onChangePassword}
          className={styles.input}
          placeholder={"Your password"}
          type={"password"}
          errorText={passwordError}
          onBlur={onBlurPassword}
        />
      </div>
      <NavLink to={RoutesList.Reset} className={styles.forgotPass}>
        Forgot password?
      </NavLink>
      <Button
        title={"sign in"}
        onClick={handleSignIn(email, password)}
        type={ButtonType.Primary}
        disabled={!isValid}
      />
    </div>
  );
};

export default SignIn;

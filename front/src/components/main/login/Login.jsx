import { useState, useEffect } from "react";
import { useNavigate, Route, Routes, Link } from "react-router-dom";

import Form from "./form/Form";
import Registro from "./registro/Registro";

export default function Login() {
  const [account, setAccount] = useState(true);
  const [access, setAccess] = useState(false);
  const [errors, setErrors] = useState(false);
  const [userData, setUserData] = useState({
    username: "correo@correo.com",
    password: "12franco",
  });
  const navigate = useNavigate();

  const login = (username, password) => {
    if (username === userData.username && password === userData.password) {
      setAccess(true);
      setErrors(false);
    } else {
      setErrors(true);
    }
  };

  useEffect(() => {
    if (access) navigate("/Home");
  }, [access]);

  return <Form></Form>;
}

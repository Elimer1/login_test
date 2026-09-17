import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Login from "./Login";

export type User = {
  username: string;
  email: string;
  password: string;
};

const Register = () => {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const handleRegister = async (e: React.SubmitEvent) => {
    e.preventDefault();

    const user: User = {
      username: e.target["username"].value,
      email: e.target["email"].value,
      password: e.target["password"].value,
    };

    useEffect(() => {
      setLoading(true);
      fetch("http://localhost:3004/register", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(user),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setLoading(false);
        })
        .catch((err) => {
          console.log(`Error: ${err}`);
          setError(error);
          setLoading(false);
        });
    }, []);
  };
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  return (
    <>
      <form onSubmit={handleRegister}>
        <div>
          <label htmlFor="email">Email</label>
          <input type="text" id="email" name="email" />
        </div>
        <div>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input type="text" id="password" name="password" />
        </div>

        <button type="submit">Register</button>
      </form>

      <p>Already have an Account?</p>
      <Link to="/login">go to login</Link>
    </>
  );
};

export default Register;

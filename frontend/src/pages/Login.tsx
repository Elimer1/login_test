import React, { useState } from "react";
import { Link } from "react-router-dom";

type UserLogin = {
  email: string;
  password: string;
};

const Login = () => {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const handleOnSubmit = async (e: React.SubmitEvent) => {
    const userLogin: UserLogin = {
      email: e.target["email"].value,
      password: e.target["password"].value,
    };

    await fetch("http://localhost:3004/login", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(userLogin),
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
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  return (
    <>
      <form onSubmit={handleOnSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input type="text" id="email" />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input type="text" id="password" />
        </div>

        <button type="submit">Login</button>
      </form>
      <p>Dont have an Account?</p>
      <Link to="/register">Register</Link>
    </>
  );
};

export default Login;

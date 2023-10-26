import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { swalFire } from "../../lib/swalFire";

import Form from "../../components/Form/Form";
import { authContext } from "../../context/AuthProvider";

export default function SignIn() {
  const navigate = useNavigate();
  const { handleSetUser } = useContext(authContext);
  const [signInData, setSignInData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    setSignInData({ ...signInData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const response = await fetch("http://localhost:5172/sign-in", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(signInData),
    });
    setLoading(false);
    setSignInData({
      email: "",
      password: "",
    });
    const user = await response.json();
    const isSuccess = swalFire(response);
    if (isSuccess) {
      navigate("/rooms");
      handleSetUser({ userId: user.user.userId, isAdmin: user.user.isAdmin });
    }
  };

  const content = (
    <>
      <h2 className="mb-10 text-center text-5xl font-bold text-purple-600">
        Sign In Form
      </h2>
      <section className="flex flex-col p-2">
        <label htmlFor="email" className="text-lg">
          Email
        </label>
        <input
          required
          id="email"
          type="email"
          name="email"
          autoComplete="off"
          onChange={handleChange}
          value={signInData.email}
          placeholder="Enter your email"
          className="rounded-md bg-purple-200 p-2 outline-none"
        />
      </section>
      <section className="flex flex-col p-2">
        <label htmlFor="password" className="text-lg">
          Password
        </label>
        <input
          required
          id="password"
          type="password"
          name="password"
          autoComplete="off"
          onChange={handleChange}
          value={signInData.password}
          placeholder="Enter your password"
          className="rounded-md bg-purple-200 p-2 outline-none"
        />
      </section>
    </>
  );

  return (
    <Form content={content} handleSubmit={handleSubmit} loading={loading} />
  );
}

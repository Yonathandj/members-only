import Swal from "sweetalert2";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Form from "../../components/Form/Form";

export default function SignUp() {
  const navigate = useNavigate();

  const [signUpData, setSignUpData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setSignUpData({ ...signUpData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const response = await fetch("http://localhost:5172/sign-up", {
      method: "POST",
      mode: "cors",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(signUpData),
    });
    setLoading(false);
    setSignUpData({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
    if (response.ok) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Registration success",
        showConfirmButton: false,
        timer: 2000,
      });
      return navigate("/sign-in");
    } else {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Registration failed. Try again",
        showConfirmButton: false,
        timer: 2000,
      });
    }
    return;
  };

  const content = (
    <>
      <h2 className="mb-10 text-center text-4xl font-bold text-purple-600 sm:text-5xl">
        Sign Up Form
      </h2>
      <section className="flex flex-col gap-2 sm:flex-row">
        <section className="flex w-full flex-col p-2 sm:w-2/4">
          <label htmlFor="firstName" className="text-lg">
            First name
          </label>
          <input
            minLength={3}
            required
            type="text"
            id="firstName"
            name="firstName"
            autoComplete="off"
            onChange={handleChange}
            value={signUpData.firstName}
            placeholder="Enter your first name"
            className="rounded-md bg-purple-200 p-2 outline-none"
          />
        </section>
        <section className="flex w-full flex-col p-2 sm:w-2/4">
          <label htmlFor="lastName" className="text-lg">
            Last name
          </label>
          <input
            required
            type="text"
            id="lastName"
            minLength={5}
            name="lastName"
            autoComplete="off"
            onChange={handleChange}
            value={signUpData.lastName}
            placeholder="Enter your last name"
            className="rounded-md bg-purple-200 p-2 outline-none"
          />
        </section>
      </section>
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
          value={signUpData.email}
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
          minLength={10}
          type="password"
          name="password"
          autoComplete="off"
          onChange={handleChange}
          value={signUpData.password}
          placeholder="Enter your password"
          className="rounded-md bg-purple-200 p-2 outline-none"
        />
      </section>
      <section className="flex flex-col p-2">
        <label htmlFor="confirmPassword" className="text-lg">
          Confirm password
        </label>
        <input
          required
          minLength={10}
          type="password"
          autoComplete="off"
          id="confirmPassword"
          name="confirmPassword"
          onChange={handleChange}
          value={signUpData.confirmPassword}
          placeholder="Enter your confirm password"
          className="rounded-md bg-purple-200 p-2 outline-none"
        />
      </section>
    </>
  );

  return (
    <Form content={content} loading={loading} handleSubmit={handleSubmit} />
  );
}
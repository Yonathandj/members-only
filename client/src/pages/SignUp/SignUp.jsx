import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Swal from "sweetalert2";

import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";

import Form from "../../components/Form/Form";
import useAuth from "../../hooks/useAuth";

export default function SignUp() {
  const navigate = useNavigate();
  const { response, loading, error, setError, signUp } = useAuth();

  const [signUpData, setSignUpData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    isAdmin: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    setSignUpData({ ...signUpData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await signUp(signUpData);
    setSignUpData({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      isAdmin: "",
    });
    return;
  };

  if (error) {
    Swal.fire({
      icon: "error",
      title: "Ooops... Something went wrong!",
      text: error,
    });
    setError(null);
  }
  if (response) {
    Swal.fire({
      icon: "success",
      title: "Success",
      text: response.message,
    });
    navigate("/sign-in");
  }

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
            required
            type="text"
            minLength={3}
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
            minLength={3}
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
      <section className="relative flex flex-col p-2">
        <label htmlFor="password" className="text-lg">
          Password
        </label>
        <input
          required
          id="password"
          minLength={10}
          name="password"
          autoComplete="off"
          onChange={handleChange}
          value={signUpData.password}
          placeholder="Enter your password"
          type={showPassword ? "text" : "password"}
          className="rounded-md bg-purple-200 p-2 outline-none"
        />
        {showPassword ? (
          <EyeIcon
            className="absolute right-4 top-11 w-6"
            onClick={() => setShowPassword(!showPassword)}
          />
        ) : (
          <EyeSlashIcon
            className="absolute right-4 top-11 w-6"
            onClick={() => setShowPassword(!showPassword)}
          />
        )}
      </section>
      <section className="relative flex flex-col p-2">
        <label htmlFor="confirmPassword" className="text-lg">
          Confirm password
        </label>
        <input
          required
          minLength={10}
          autoComplete="off"
          id="confirmPassword"
          name="confirmPassword"
          onChange={handleChange}
          value={signUpData.confirmPassword}
          placeholder="Enter your confirm password"
          type={showConfirmPassword ? "text" : "password"}
          className="rounded-md bg-purple-200 p-2 outline-none"
        />
        {showConfirmPassword ? (
          <EyeIcon
            className="absolute right-4 top-11 w-6"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          />
        ) : (
          <EyeSlashIcon
            className="absolute right-4 top-11 w-6"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          />
        )}
      </section>
      <br />
      <hr />
      <section className="flex flex-col p-2">
        <label htmlFor="isAdmin" className="text-lg">
          Admin code
        </label>
        <input
          type="text"
          autoComplete="off"
          id="isAdmin"
          name="isAdmin"
          onChange={handleChange}
          value={signUpData.isAdmin}
          placeholder="Enter your admin code"
          className="rounded-md bg-purple-200 p-2 outline-none"
        />
      </section>
    </>
  );

  return (
    <Form content={content} loading={loading} handleSubmit={handleSubmit} />
  );
}

import { useState } from "react";
import Form from "../../components/Form/Form";

export default function SignUp() {
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
    const data = await response.json();
    console.log(data);
  };

  const content = (
    <>
      <h2 className="text-4xl sm:text-5xl mb-10 text-purple-600 font-bold text-center">
        Sign Up Form
      </h2>
      <section className="flex flex-col sm:flex-row gap-2">
        <section className="flex flex-col p-2 w-full sm:w-2/4">
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
            className="p-2 bg-purple-200 rounded-md outline-none"
          />
        </section>
        <section className="flex flex-col p-2 w-full sm:w-2/4">
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
            className="p-2 bg-purple-200 rounded-md outline-none"
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
          className="p-2 bg-purple-200 rounded-md outline-none"
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
          className="p-2 bg-purple-200 rounded-md outline-none"
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
          className="p-2 bg-purple-200 rounded-md outline-none"
        />
      </section>
    </>
  );

  return (
    <Form content={content} handleSubmit={handleSubmit} loading={loading} />
  );
}

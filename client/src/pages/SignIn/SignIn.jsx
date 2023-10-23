import { useState } from "react";
import Form from "../../components/Form/Form";

export default function SignIn() {
  const [signInData, setSignInData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setSignInData({ ...signInData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSignInData({
      email: "",
      password: "",
    });
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

  return <Form content={content} handleSubmit={handleSubmit} />;
}

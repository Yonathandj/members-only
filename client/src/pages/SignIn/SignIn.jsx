import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

import useAuth from "../../hooks/useAuth";
import Form from "../../components/Form/Form";
import { authContext } from "../../context/AuthProvider";

export default function SignIn() {
  const navigate = useNavigate();
  const { handleSetUser } = useContext(authContext);

  const [signInData, setSignInData] = useState({
    email: "",
    password: "",
  });

  const { response, loading, error, setError, signIn } = useAuth();

  const handleChange = (e) => {
    setSignInData({ ...signInData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await signIn(signInData);
    setSignInData({
      email: "",
      password: "",
    });
    return;
  };

  if (error) {
    Swal.fire({
      icon: "error",
      title: "Ooops... Something went wrong!",
      text: "Retry again! Password or email may be incorrect",
    });
    setError(null);
  }
  if (response) {
    handleSetUser({
      userId: response.user.userId,
      isAdmin: response.user.isAdmin,
    });
    navigate("/rooms");
    Swal.fire({
      icon: "success",
      title: "Success",
      text: response.message,
    });
  }

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
    <Form content={content} loading={loading} handleSubmit={handleSubmit} />
  );
}

import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import useSwalFire from "../../hooks/useSwalFire";
import useNavigation from "../../hooks/useNavigation";
import useHandlerActiveUser from "../../hooks/useHandlerActiveUser";
import Form from "../../components/Form/Form";

export default function SignIn() {
  const { handleSetActiveUser } = useHandlerActiveUser();
  const { response, loading, error, setError, fetcher } = useFetch();
  const { navigation } = useNavigation();
  const { swalFire } = useSwalFire();

  const [signInData, setSignInData] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  useEffect(() => {
    if (response) {
      handleSetActiveUser(response.user);
      navigation("/");
    }
  }, [response, navigation, handleSetActiveUser]);
  const handleChange = (e) => {
    setSignInData({ ...signInData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetcher({
      url: "http://localhost:3200/sign-in",
      method: "POST",
      credentials: "include",
      data: signInData,
    });
    setSignInData({
      email: "",
      password: "",
    });
  };
  swalFire(
    response,
    error,
    loading,
    {
      title: "Wait a second...",
      text: "Login process",
    },
    setError,
  );

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
      <section className="relative flex flex-col p-2">
        <label htmlFor="password" className="text-lg">
          Password
        </label>
        <input
          required
          id="password"
          name="password"
          autoComplete="off"
          onChange={handleChange}
          value={signInData.password}
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
    </>
  );

  return (
    <Form content={content} loading={loading} handleSubmit={handleSubmit} />
  );
}

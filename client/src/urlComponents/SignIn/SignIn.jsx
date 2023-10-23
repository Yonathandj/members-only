import Form from "../../components/Form/Form";

export default function SignIn() {
  return (
    <Form>
      <h2 className="text-5xl mb-10 text-purple-600 font-bold text-center">Sign In Form</h2>
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
          type="password"
          name="password"
          autoComplete="off"
          placeholder="Enter your password"
          className="p-2 bg-purple-200 rounded-md outline-none"
        />
      </section>
    </Form>
  );
}

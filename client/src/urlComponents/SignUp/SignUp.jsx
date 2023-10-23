import Form from "../../components/Form/Form";

export default function SignUp() {
  return (
    <Form>
      <h2 className="text-5xl mb-10 text-purple-600 font-bold text-center">
        Sign Up Form
      </h2>
      <section className="flex gap-2">
        <section className="flex flex-col p-2 w-2/4">
          <label htmlFor="firstName" className="text-lg">
            First name
          </label>
          <input
            min={3}
            required
            type="text"
            id="firstName"
            name="firstName"
            autoComplete="off"
            placeholder="Enter your first name"
            className="p-2 bg-purple-200 rounded-md outline-none"
          />
        </section>
        <section className="flex flex-col p-2 w-2/4">
          <label htmlFor="lastName" className="text-lg">
            Last name
          </label>
          <input
            required
            min={5}
            type="text"
            id="lastName"
            name="lastName"
            autoComplete="off"
            placeholder="Enter your last name"
            className="p-2 bg-purple-200 rounded-md outline-none"
          />
        </section>
      </section>

      {/*  */}

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

      {/*  */}
      <section className="flex flex-col p-2">
        <label htmlFor="password" className="text-lg">
          Password
        </label>
        <input
          required
          min={10}
          id="password"
          type="password"
          name="password"
          autoComplete="off"
          placeholder="Enter your password"
          className="p-2 bg-purple-200 rounded-md outline-none"
        />
      </section>
      {/*  */}
      <section className="flex flex-col p-2">
        <label htmlFor="password" className="text-lg">
          Confirm Password
        </label>
        <input
          required
          min={10}
          id="password"
          type="password"
          name="password"
          autoComplete="off"
          placeholder="Enter your confirm password"
          className="p-2 bg-purple-200 rounded-md outline-none"
        />
      </section>
    </Form>
  );
}

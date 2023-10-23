import { Link } from "react-router-dom";

export default function Error() {
  return (
    <div className="flex h-screen items-center justify-center">
      <section>
        <h1 className="text-6xl">
          <span className="text-purple-600">Page</span> Not Found
        </h1>
        <p className="mt-4 text-center text-lg">
          Sorry, page you are looking for not found
        </p>
        <Link to={"/"} className="text-sky-600">
          <p className="mt-4 text-center">Back to home</p>
        </Link>
      </section>
    </div>
  );
}

import { Link } from "react-router-dom";

export default function Error() {
  return (
    <div className="h-screen flex justify-center items-center">
      <section>
        <h1 className="text-6xl">
          <span className="text-purple-600">Page</span> Not Found
        </h1>
        <p className="text-lg text-center mt-4">
          Sorry, page you are looking for not found
        </p>
        <Link to={"/"} className="text-sky-600">
          <p className="text-center mt-4">Back to home</p>
        </Link>
      </section>
    </div>
  );
}

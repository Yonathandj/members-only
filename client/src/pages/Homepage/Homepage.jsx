import NavBar from "../../components/Navbar/NavBar";

export default function Homepage() {
  return (
    <>
      <NavBar />
      <h2 className="mx-auto mt-10 text-center text-5xl font-bold text-purple-600 sm:text-7xl">
        Members Only
      </h2>
      <h2 className="mx-auto mt-2 text-center text-5xl font-bold text-purple-600 sm:text-7xl">
        Room Chat
      </h2>
      <p className="mt-6 text-center text-purple-600 sm:text-lg">
        Welcome Home, Yonathan Dawang
      </p>
    </>
  );
}

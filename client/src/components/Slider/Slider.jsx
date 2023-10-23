export default function Slider() {
  return (
    <div className="mx-auto mt-14 max-w-[80%] sm:max-w-[40%]">
      <h2 className="text-center text-2xl font-semibold">
        <span className="text-purple-600">Rooms</span> available
      </h2>
      <marquee direction="left">
        <div className="mt-8 flex gap-4 tracking-wider text-white">
          <span className="rounded-2xl bg-purple-600 px-3 py-1">Sport</span>
          <span className="rounded-2xl bg-purple-600 px-3 py-1">Gaming</span>
          <span className="rounded-2xl bg-purple-600 px-3 py-1">Pet</span>
          <span className="rounded-2xl bg-purple-600 px-3 py-1">Food</span>
        </div>
      </marquee>
      <marquee direction="right">
        <div className="flex gap-4 tracking-wider text-white">
          <span className="rounded-2xl bg-purple-600 px-3 py-1">
            Environment
          </span>
          <span className="rounded-2xl bg-purple-600 px-3 py-1">Space</span>
          <span className="rounded-2xl bg-purple-600 px-3 py-1">Coding</span>
          <span className="rounded-2xl bg-purple-600 px-3 py-1">Health</span>
          <span className="rounded-2xl bg-purple-600 px-3 py-1">Politic</span>
        </div>
      </marquee>
    </div>
  );
}

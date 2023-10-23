export default function Slider() {
  return (
    <div className="max-w-[40%] mx-auto mt-14">
      <h2 className="text-2xl text-center font-semibold">
        <span className="text-purple-600">Room</span> available
      </h2>
      <marquee direction="left">
        <div className="flex gap-4 mt-8 text-slate-50">
          <span className="py-1 px-3 bg-purple-600 rounded-2xl">Sport</span>
          <span className="py-1 px-3 bg-purple-600 rounded-2xl">Gaming</span>
          <span className="py-1 px-3 bg-purple-600 rounded-2xl">Pet</span>
          <span className="py-1 px-3 bg-purple-600 rounded-2xl">Food</span>
        </div>
      </marquee>
      <marquee direction="right">
        <div className="flex gap-4 text-slate-50">
          <span className="py-1 px-3 bg-purple-600 rounded-2xl">
            Environment
          </span>
          <span className="py-1 px-3 bg-purple-600 rounded-2xl">Space</span>
          <span className="py-1 px-3 bg-purple-600 rounded-2xl">Coding</span>
          <span className="py-1 px-3 bg-purple-600 rounded-2xl">Health</span>
          <span className="py-1 px-3 bg-purple-600 rounded-2xl">Politic</span>
        </div>
      </marquee>
    </div>
  );
}

export default function Card(props) {
  return (
    <div>
      <div className="flex-col justify-center h-60 w-80 bg-yellow-100 lg:overflow-hidden lg:w-[300px] lg:h-auto mb-10">
        <img
          src="/cityview.jpg"
          alt="egs icon"
          className="lg:hover:scale-110 transition-transform ease-in-out duration-500 shadow-lg"
        />{" "}
        <div className="mt-2">This is Card</div>
      </div>
    </div>
  );
}

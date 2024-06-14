import { FaCaretRight } from "react-icons/fa";

function Banner() {
  return (
    <main className="flex h-[70vh] text-zinc-900 relative">
      <div className="w-[90vw] md:w-[75vw] h-full flex flex-col-reverse md:flex-row justify-center text-center md:text-left md:justify-between gap-4 items-center mx-auto ">
        <div>
          <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold uppercase">Molka Prints</h1>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold uppercase text-zinc-800">
            Start Each Day With A Plan
          </h2>
          <div className="buttons">
            <button className="mx-auto md:mx-0 group py-4 px-4 flex justify-center items-center gap-1 bg-pinky text-white mt-4 font-medium text-xl">
              Browse Our Products
              <FaCaretRight className="group-hover:translate-x-1 w-5 h-5 transition-all" />
            </button>
          </div>
        </div>
        <img
          src="/todolist.jpg"
          className="w-1/3 lg:w-[330px] lg:h-[430px] float-start"
          alt="img"
        />
      </div>
    </main>
  );
}

export default Banner;

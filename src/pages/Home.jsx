import React from "react";

const Home = () => {
  return (
    <div className="w-full">
      <section className="w-full h-full flex flex-col gap-y-20 py-4">
        <div className="w-full h-fit flex justify-center items-center">
          <h2 className="text-2xl font-bold text-center">
            Addition of Vectors
          </h2>
        </div>
        <div className="flex flex-col justify-center items-center w-full h-fit">
          <div className="flex justify-center items-center w-full h-fit gap-x-5">
            <div className="flex justify-center items-center gap-x-3">
              <span className="font-semibold text-2xl">A</span>
              <span className="font-semibold text-2xl">=</span>
            </div>
            <div className="flex gap-x-3 justify-center items-center w-full">
              <span className="w-fit flex gap-x-1 justify-center flex-col h-fit">
                <p className="text-xl font-semibold font-mono text-gray-700">x component</p>
                <input
                  type="text"
                  className="h-[4em] w-full rounded-2xl border"
                />
              </span>
              <span>+</span>
              <span className="w-fit flex gap-x-1 justify-center flex-col h-fit">
                <p className="text-xl font-semibold font-mono text-gray-700">y component</p>
                <input
                  type="text"
                  className="h-[4em] w-full rounded-2xl border"
                />
              </span>
              <span>+</span>
              <span className="w-fit flex gap-x-1 justify-center flex-col h-fit">
                <p className="text-xl font-semibold font-mono text-gray-700">z component</p>
                <input
                  type="text"
                  className="h-[4em] w-full rounded-2xl border"
                />
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

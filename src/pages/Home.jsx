import { Calculator } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [X1, setX1] = useState(null);
  const [X2, setX2] = useState(null);
  const [Y1, setY1] = useState(null);
  const [Y2, setY2] = useState(null);
  const [Z1, setZ1] = useState(null);
  const [Z2, setZ2] = useState(null);
  const [Ans, setAns] = useState("");

  const handleCalculate = () => {
    const I = Number(X1) + Number(X2);
    const J = Number(Y1) + Number(Y2);
    const K = Number(Z1) + Number(Z2);

    let result = "";

    if (I !== 0) result += `${I}i`;
    if (J !== 0) result += `${result ? (J > 0 ? " + " : "-") : ""}${Math.abs(J)}j`;
    if (K !== 0) result += `${result ? (K > 0 ? " + " : "-") : ""}${Math.abs(K)}k`;

    if (!result) result = "0";

    setAns(result);
  };

  // setAns(" " + IComponent + "i" + "+" + (JComponent + "j") + (+ * KComponent + "k"));
  return (
    <div className="w-full">
      <section className="w-full h-full flex flex-col gap-y-20 py-10">
        <div className="w-full h-fit flex justify-center items-center">
          <h2 className="text-2xl font-bold text-center">
            Addition of Vectors
          </h2>
        </div>
        <div className="w-full h-fit flex justify-center items-center flex-col gap-y-5">
          <div className="flex flex-col justify-center items-center w-full h-fit">
            <div className="flex justify-center items-center w-full h-fit gap-x-5">
              <div className="flex justify-center items-center gap-x-3">
                <span className="font-semibold text-2xl text-blue-700">A</span>
                <span className="font-semibold text-2xl text-blue-700">=</span>
              </div>
              <div className="flex gap-x-3 justify-center items-center w-full">
                <span className="w-fit flex gap-x-1 justify-center flex-col h-fit">
                  {/* <label
                    htmlFor="xComp"
                    className="text-[15px] text-xl font-mono text-gray-700"
                  >
                    X component
                  </label> */}
                  <input
                    type="text"
                    onChange={(e) => setX1(e.target.value)}
                    placeholder="X component"
                    value={X1}
                    name="xComp"
                    className="h-[3em] w-full outline-0 pl-4 rounded-2xl border border-gray-700"
                  />
                </span>
                <span className="text-xl text-black/80 font-bold">+</span>
                <span className="w-fit flex gap-x-1 justify-center flex-col h-fit">
                  {/* <label
                    htmlFor="yComp"
                    className="text-[15px] text-xl font-mono text-gray-700"
                  >
                    Y component
                  </label> */}
                  <input
                    type="text"
                    onChange={(e) => setY1(e.target.value)}
                    placeholder="Y component"
                    value={Y1}
                    className="h-[3em] w-full outline-0 pl-4 rounded-2xl border border-gray-700"
                  />
                </span>
                <span className="text-xl text-black/80 font-bold">+</span>
                <span className="w-fit flex gap-x-1 justify-center flex-col h-fit">
                  {/* <label
                    htmlFor="zComp"
                    className="text-[15px] font-mono text-gray-700"
                  >
                    Z component
                  </label> */}
                  <input
                    type="text"
                    onChange={(e) => setZ1(e.target.value)}
                    placeholder="Z component"
                    value={Z1}
                    className="h-[3em] w-full outline-0 pl-4 rounded-2xl border border-gray-700"
                  />
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center w-full h-fit">
            <div className="flex justify-center items-center w-full h-fit gap-x-5">
              <div className="flex justify-center items-center gap-x-3">
                <span className="font-semibold text-2xl text-blue-700">B</span>
                <span className="font-semibold text-2xl text-blue-700">=</span>
              </div>
              <div className="flex gap-x-3 justify-center items-center w-full">
                <span className="w-fit flex gap-x-1 justify-center flex-col h-fit">
                  {/* <label
                    htmlFor="xComp"
                    className="text-[15px] text-xl font-mono text-gray-700"
                  >
                    X component
                  </label> */}
                  <input
                    type="text"
                    onChange={(e) => setX2(e.target.value)}
                    placeholder="X component"
                    value={X2}
                    name="xComp"
                    className="h-[3em] w-full outline-0 pl-4 rounded-2xl border border-gray-700"
                  />
                </span>
                <span className="text-xl text-black/80 font-bold">+</span>
                <span className="w-fit flex gap-x-1 justify-center flex-col h-fit">
                  {/* <label
                    htmlFor="yComp"
                    className="text-[15px] text-xl font-mono text-gray-700"
                  >
                    Y component
                  </label> */}
                  <input
                    type="text"
                    onChange={(e) => setY2(e.target.value)}
                    placeholder="Y component"
                    value={Y2}
                    className="h-[3em] w-full outline-0 pl-4 rounded-2xl border border-gray-700"
                  />
                </span>
                <span className="text-xl text-black/80 font-bold">+</span>
                <span className="w-fit flex gap-x-1 justify-center flex-col h-fit">
                  {/* <label
                    htmlFor="zComp"
                    className="text-[15px] font-mono text-gray-700"
                  >
                    Z component
                  </label> */}
                  <input
                    type="text"
                    onChange={(e) => setZ2(e.target.value)}
                    value={Z2}
                    placeholder="Z component"
                    className="h-[3em] w-full outline-0 pl-4 rounded-2xl border border-gray-700"
                  />
                </span>
              </div>
            </div>
          </div>

          <div className="w-full h-fit justify-center items-center flex">
            <Link
              to="/"
              className="w-full h-fit py-3 flex justify-center border border-green-300 items-center text-center bg-[#14d41434] rounded-2xl text-[16px] uppercase font-semibold gap-x-2 hover:bg-[#14d4143f]"
              onClick={handleCalculate}
            >
              <Calculator />
              Calculate
            </Link>
          </div>
          <div className="w-full h-fit justify-center items-center flex">
            <span className="w-full h-fit py-3 flex justify-start px-4 items-center text-center bg-white shadow-xl rounded-2xl text-[16px] uppercase font-semibold">
              Answer: <span className="lowercase font-normal">{Ans}</span>
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

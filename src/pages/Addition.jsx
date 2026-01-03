// import { Calculator } from "lucide-react";
// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// const Addition = () => {
//   const [X1, setX1] = useState(null);
//   const [X2, setX2] = useState(null);
//   const [Y1, setY1] = useState(null);
//   const [Y2, setY2] = useState(null);
//   const [Z1, setZ1] = useState(null);
//   const [Z2, setZ2] = useState(null);
//   const [Ans, setAns] = useState("");

//   const handleCalculate = () => {
//     const I = Number(X1) + Number(X2);
//     const J = Number(Y1) + Number(Y2);
//     const K = Number(Z1) + Number(Z2);

//     let result = "";

//     if (I !== 0) result += `${I}i`;
//     if (J !== 0) result += `${result ? (J > 0 ? " + " : "-") : ""}${Math.abs(J)}j`;
//     if (K !== 0) result += `${result ? (K > 0 ? " + " : "-") : ""}${Math.abs(K)}k`;

//     if (!result) result = "0";

//     setAns(result);
//   };

//   // setAns(" " + IComponent + "i" + "+" + (JComponent + "j") + (+ * KComponent + "k"));
//   return (
//     <div className="w-full">
//       <section className="w-full h-full flex flex-col gap-y-20 py-10">
//         <div className="w-full h-fit flex justify-center items-center">
//           <h2 className="text-2xl font-bold text-center">
//             Addition of Vectors
//           </h2>
//         </div>
//         <div className="w-full h-fit flex justify-center items-center flex-col gap-y-5">
//           <div className="flex flex-col justify-center items-center w-full h-fit">
//             <div className="flex justify-center items-center w-full h-fit gap-x-5">
//               <div className="flex justify-center items-center gap-x-3">
//                 <span className="font-semibold text-2xl text-blue-700">A</span>
//                 <span className="font-semibold text-2xl text-blue-700">=</span>
//               </div>
//               <div className="flex gap-x-3 justify-center items-center w-full">
//                 <span className="w-fit flex gap-x-1 justify-center flex-col h-fit">
//                   {/* <label
//                     htmlFor="xComp"
//                     className="text-[15px] text-xl font-mono text-gray-700"
//                   >
//                     X component
//                   </label> */}
//                   <input
//                     type="text"
//                     onChange={(e) => setX1(e.target.value)}
//                     placeholder="X component"
//                     value={X1}
//                     name="xComp"
//                     className="h-[3em] w-full outline-0 pl-4 rounded-2xl border border-gray-700"
//                   />
//                 </span>
//                 <span className="text-xl text-black/80 font-bold">+</span>
//                 <span className="w-fit flex gap-x-1 justify-center flex-col h-fit">
//                   {/* <label
//                     htmlFor="yComp"
//                     className="text-[15px] text-xl font-mono text-gray-700"
//                   >
//                     Y component
//                   </label> */}
//                   <input
//                     type="text"
//                     onChange={(e) => setY1(e.target.value)}
//                     placeholder="Y component"
//                     value={Y1}
//                     className="h-[3em] w-full outline-0 pl-4 rounded-2xl border border-gray-700"
//                   />
//                 </span>
//                 <span className="text-xl text-black/80 font-bold">+</span>
//                 <span className="w-fit flex gap-x-1 justify-center flex-col h-fit">
//                   {/* <label
//                     htmlFor="zComp"
//                     className="text-[15px] font-mono text-gray-700"
//                   >
//                     Z component
//                   </label> */}
//                   <input
//                     type="text"
//                     onChange={(e) => setZ1(e.target.value)}
//                     placeholder="Z component"
//                     value={Z1}
//                     className="h-[3em] w-full outline-0 pl-4 rounded-2xl border border-gray-700"
//                   />
//                 </span>
//               </div>
//             </div>
//           </div>

//           <div className="flex flex-col justify-center items-center w-full h-fit">
//             <div className="flex justify-center items-center w-full h-fit gap-x-5">
//               <div className="flex justify-center items-center gap-x-3">
//                 <span className="font-semibold text-2xl text-blue-700">B</span>
//                 <span className="font-semibold text-2xl text-blue-700">=</span>
//               </div>
//               <div className="flex gap-x-3 justify-center items-center w-full">
//                 <span className="w-fit flex gap-x-1 justify-center flex-col h-fit">
//                   {/* <label
//                     htmlFor="xComp"
//                     className="text-[15px] text-xl font-mono text-gray-700"
//                   >
//                     X component
//                   </label> */}
//                   <input
//                     type="text"
//                     onChange={(e) => setX2(e.target.value)}
//                     placeholder="X component"
//                     value={X2}
//                     name="xComp"
//                     className="h-[3em] w-full outline-0 pl-4 rounded-2xl border border-gray-700"
//                   />
//                 </span>
//                 <span className="text-xl text-black/80 font-bold">+</span>
//                 <span className="w-fit flex gap-x-1 justify-center flex-col h-fit">
//                   {/* <label
//                     htmlFor="yComp"
//                     className="text-[15px] text-xl font-mono text-gray-700"
//                   >
//                     Y component
//                   </label> */}
//                   <input
//                     type="text"
//                     onChange={(e) => setY2(e.target.value)}
//                     placeholder="Y component"
//                     value={Y2}
//                     className="h-[3em] w-full outline-0 pl-4 rounded-2xl border border-gray-700"
//                   />
//                 </span>
//                 <span className="text-xl text-black/80 font-bold">+</span>
//                 <span className="w-fit flex gap-x-1 justify-center flex-col h-fit">
//                   {/* <label
//                     htmlFor="zComp"
//                     className="text-[15px] font-mono text-gray-700"
//                   >
//                     Z component
//                   </label> */}
//                   <input
//                     type="text"
//                     onChange={(e) => setZ2(e.target.value)}
//                     value={Z2}
//                     placeholder="Z component"
//                     className="h-[3em] w-full outline-0 pl-4 rounded-2xl border border-gray-700"
//                   />
//                 </span>
//               </div>
//             </div>
//           </div>

//           <div className="w-full h-fit justify-center items-center flex">
//             <Link
//               to="/"
//               className="w-full h-fit py-3 flex justify-center border border-green-300 items-center text-center bg-[#14d41434] rounded-2xl text-[16px] uppercase font-semibold gap-x-2 hover:bg-[#14d4143f]"
//               onClick={handleCalculate}
//             >
//               <Calculator />
//               Calculate
//             </Link>
//           </div>
//           <div className="w-full h-fit justify-center items-center flex">
//             <span className="w-full h-fit py-3 flex justify-start px-4 items-center text-center bg-white shadow-xl rounded-2xl text-[16px] uppercase font-semibold gap-x-1.5">
//               Answer: <span className="lowercase font-normal">{Ans}</span>
//             </span>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Addition;

import React, { useState } from "react";
import { Calculator, ArrowRight } from "lucide-react";

const Addition = () => {
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
    if (J !== 0)
      result += `${result ? (J > 0 ? " + " : "-") : ""}${Math.abs(J)}j`;
    if (K !== 0)
      result += `${result ? (K > 0 ? " + " : "-") : ""}${Math.abs(K)}k`;

    if (!result) result = "0";

    setAns(result);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Vector Addition
          </h1>
          <p className="text-lg text-gray-600">
            Add two 3D vectors component by component
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Vector A Card */}
          <div className="bg-white rounded-3xl shadow-xl p-8 border border-blue-100">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center">
                <span className="text-2xl font-bold text-blue-700">A</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Vector A</h2>
            </div>

            <div className="space-y-6">
              <InputGroup
                label="X Component (i)"
                value={X1}
                onChange={setX1}
                placeholder="e.g. 5"
              />
              <InputGroup
                label="Y Component (j)"
                value={Y1}
                onChange={setY1}
                placeholder="e.g. -3"
              />
              <InputGroup
                label="Z Component (k)"
                value={Z1}
                onChange={setZ1}
                placeholder="e.g. 2"
              />
            </div>

            <div className="mt-8 p-5 bg-blue-50 rounded-2xl">
              <code className="text-lg font-mono text-blue-900">
                <strong>A</strong> = {X1 || "0"}i {Y1 >= 0 ? "+" : ""}{" "}
                {Y1 || "0"}j {Z1 >= 0 ? "+" : ""} {Z1 || "0"}k
              </code>
            </div>
          </div>

          {/* Vector B Card */}
          <div className="bg-white rounded-3xl shadow-xl p-8 border border-green-100">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center">
                <span className="text-2xl font-bold text-green-700">B</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Vector B</h2>
            </div>

            <div className="space-y-6">
              <InputGroup
                label="X Component (i)"
                value={X2}
                onChange={setX2}
                placeholder="e.g. -2"
              />
              <InputGroup
                label="Y Component (j)"
                value={Y2}
                onChange={setY2}
                placeholder="e.g. 7"
              />
              <InputGroup
                label="Z Component (k)"
                value={Z2}
                onChange={setZ2}
                placeholder="e.g. 4"
              />
            </div>

            <div className="mt-8 p-5 bg-green-50 rounded-2xl">
              <code className="text-lg font-mono text-green-900">
                <strong>B</strong> = {X2 || "0"}i {Y2 >= 0 ? "+" : ""}{" "}
                {Y2 || "0"}j {Z2 >= 0 ? "+" : ""} {Z2 || "0"}k
              </code>
            </div>
          </div>
        </div>

        {/* Calculate Button */}
        <div className="flex justify-center mb-10">
          <button
            onClick={handleCalculate}
            className="group flex items-center gap-4 px-10 py-5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-xl font-bold rounded-3xl shadow-2xl hover:shadow-indigo-500/50 transition-all duration-300 hover:scale-105"
          >
            <Calculator size={28} />
            Calculate Sum
            <ArrowRight
              className="group-hover:translate-x-2 transition-transform"
              size={24}
            />
          </button>
        </div>

        {/* Result */}
        {Ans && (
          <div className="max-w-3xl mx-auto">
            <div className="bg-gradient-to-r from-purple-100 via-pink-100 to-indigo-100 rounded-3xl p-10 shadow-2xl text-center border border-purple-200">
              <h3 className="text-3xl font-bold text-gray-800 mb-6">
                Result: <strong className="text-purple-700">A + B</strong>
              </h3>
              <div className="inline-block bg-white px-12 py-8 rounded-3xl shadow-inner">
                <code className="text-4xl font-bold font-mono text-indigo-800 tracking-wider">
                  {Ans}
                </code>
              </div>
              <p className="mt-6 text-xl text-gray-700">
                The resultant vector is <strong>{Ans}</strong>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// Reusable Input Component
const InputGroup = ({ label, value, onChange, placeholder }) => (
  <div>
    <label className="block text-sm font-semibold text-gray-700 mb-2">
      {label}
    </label>
    <input
      type="text"
      value={value}
      onChange={(e) => {
        const val = e.target.value;
        if (val === "" || /^-?\d*\.?\d*$/.test(val)) {
          onChange(val);
        }
      }}
      placeholder={placeholder}
      className="w-full px-6 py-4 text-lg text-center bg-gray-50 border-2 border-gray-200 rounded-2xl focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 transition-all outline-none"
    />
  </div>
);

export default Addition;

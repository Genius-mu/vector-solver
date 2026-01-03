import React from "react";
import { Link } from "react-router-dom";
import {
  Plus,
  Minus,
  X,
  Layers,
  Ruler,
  ArrowUpDown,
  Calculator,
  Zap,
  Sparkles,
} from "lucide-react";

const features = [
  {
    name: "Addition",
    icon: Plus,
    desc: "Add two vectors component-wise",
    color: "blue",
  },
  {
    name: "Subtraction",
    icon: Minus,
    desc: "Subtract vectors effortlessly",
    color: "emerald",
  },
  {
    name: "Dot Product",
    icon: X,
    desc: "Calculate scalar dot product",
    color: "purple",
  },
  {
    name: "Cross Product",
    icon: Layers,
    desc: "Find the vector cross product",
    color: "pink",
  },
  {
    name: "Magnitude",
    icon: Ruler,
    desc: "Compute vector length/norm",
    color: "amber",
  },
  {
    name: "Normalize",
    icon: ArrowUpDown,
    desc: "Get unit vector in same direction",
    color: "cyan",
  },
];

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-indigo-50 to-purple-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-6 py-20 md:py-32">
        <div className="max-w-6xl mx-auto text-center">
          {/* Background Decoration */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
          </div>

          <div className="flex justify-center mb-8">
            <div className="p-6 bg-white/80 backdrop-blur rounded-3xl shadow-2xl">
              <Calculator className="w-20 h-20 text-indigo-600" />
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            VectorCalc
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto mb-10 leading-relaxed">
            The simple, beautiful, and powerful tool for 3D vector calculations.
            <br />
            Perfect for students, engineers, physicists, and math enthusiasts.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              to="/addition"
              className="group px-10 py-5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-xl font-bold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center gap-3"
            >
              <Zap size={28} />
              Start Calculating
              <ArrowUpDown
                className="group-hover:translate-y-1 transition-transform"
                size={24}
              />
            </Link>
            <div className="flex items-center gap-4 text-gray-600">
              <Sparkles className="w-6 h-6 text-yellow-500" />
              <span className="text-lg font-medium">
                Free • No login required
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="px-6 py-20 bg-white/60 backdrop-blur">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Powerful Vector Operations
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need for vector math in one clean interface
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => {
              const Icon = feature.icon;
              const colorClasses = {
                blue: "from-blue-500 to-indigo-600",
                emerald: "from-emerald-500 to-teal-600",
                purple: "from-purple-500 to-pink-600",
                pink: "from-pink-500 to-rose-600",
                amber: "from-amber-500 to-orange-600",
                cyan: "from-cyan-500 to-blue-600",
              };

              return (
                <Link
                  key={feature.name}
                  to={`/${feature.name
                    .toLowerCase()
                    .replace(" ", "-")
                    .replace(".", "-")}`}
                  className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 overflow-hidden"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${
                      colorClasses[feature.color]
                    } opacity-0 group-hover:opacity-10 transition-opacity`}
                  />
                  <div className="p-8 text-center">
                    <div
                      className={`inline-flex p-5 rounded-2xl bg-gradient-to-br ${
                        colorClasses[feature.color]
                      } text-white shadow-lg mb-6 group-hover:scale-110 transition-transform`}
                    >
                      <Icon size={40} />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">
                      {feature.name}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-sm font-medium text-indigo-600 flex items-center gap-2">
                      Try it now
                      <ArrowUpDown
                        size={16}
                        className="group-hover:translate-x-2 transition-transform"
                      />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer Call to Action */}
      <section className="px-6 py-16 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Ready to master vectors?
          </h2>
          <p className="text-xl text-gray-600 mb-10">
            Join thousands of learners using VectorCalc every day.
          </p>
          <Link
            to="/addition"
            className="inline-flex items-center gap-4 px-8 py-4 bg-gray-900 text-white text-lg font-bold rounded-2xl hover:bg-gray-800 transition-all hover:shadow-xl"
          >
            <Calculator size={24} />
            Open Vector Calculator
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;

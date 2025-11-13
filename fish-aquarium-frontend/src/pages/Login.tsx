import loginImage from "../assets/freepik__a-vibrant-osca-fish-swims-in-a-clear-tank-bubbles-__26356.png";
import bgImage from "../assets/top-view-colorful-koi-fishes.jpg";

function Login() {
  return (
    <div
      className="flex min-h-screen items-center justify-center bg-cover bg-center bg-no-repeat absolute inset-0 -z-10 "
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="bg-black/50 text-white shadow-lg backdrop-blur-sm rounded-2xl p-8 w-full max-w-md border border-sky-200 opacity-100">
        {/* Logo / Title */}
        <div className="text-center mb-6">
          <img
            src={loginImage}
            alt="AquaWorld Logo"
            className="w-26 h-26 mx-auto mb-2 rounded-full"
          />
          <h2 className="text-3xl font-bold ">Aqua World</h2>
          <p className=" text-sm mt-1">
            Welcome back to your aquarium world.
          </p>
        </div>

        {/* Login Form */}
        <form>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block  font-medium mb-2"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 border border-sky-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="password"
              className="block font-medium mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="••••••••"
              className="w-full px-4 py-2 border border-sky-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400"
              required
            />
          </div>

          <div className="flex items-center justify-between mb-4">
            <label className="flex items-center text-sm ">
              <input type="checkbox" className="mr-2 accent-sky-600" />
              Remember me
            </label>
            <a href="#" className="text-sm  hover:underline">
              Forgot Password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-sky-700 hover:bg-sky-800 text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
          >
            Login
          </button>
        </form>

        {/* Divider */}
        <div className="my-6 border-t border-gray-300 text-center">
          <span className=" px-2 text-sm">or</span>
        </div>

        {/* Signup Link */}
        <p className="text-center  text-sm">
          Don’t have an account?{" "}
          <a
            href="/register"
            className="text-sky-700 font-medium hover:underline"
          >
            Create one
          </a>
        </p>
      </div>
    </div>
  );
}

export default Login;

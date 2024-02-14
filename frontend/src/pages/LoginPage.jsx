import React from "react";
import { Link } from "react-router-dom";

function LoginPage() {
  const handleGoogleLogin = () => {};

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="p-4 w-80 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <form>
          <input
            className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            type="email"
            placeholder="Email Address"
          />
          <input
            className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            type="password"
            placeholder="Password"
          />
          <button
            className="w-full px-4 py-2 mb-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            type="submit"
          >
            Login
          </button>
        </form>
        <button
          className="w-full px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 focus:outline-none focus:bg-gray-300"
          onClick={handleGoogleLogin}
        >
          <Link to="/home">Login with Google</Link>
        </button>
      </div>
    </div>
  );
}

export default LoginPage;

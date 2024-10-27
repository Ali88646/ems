import { useState } from "react";

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault(); // terminate default behaviour
    handleLogin(email, password);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div className="border-2 border-red-500 p-20 rounded-xl">
        <form
          onSubmit={(e) => submitHandler(e)}
          className="flex flex-col items-center justify-center"
        >
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="border-2 border-red-500 rounded-full py-3 px-5 text-xl  outline-none bg-transparent placeholder:text-gray-400 text-gray-100"
            type="email"
            placeholder="Enter your email"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="border-2 border-red-500 rounded-full py-3 px-5 text-xl  outline-none bg-transparent placeholder:text-gray-400 mt-3 text-gray-100"
            type="password"
            placeholder="Enter Password"
          />
          <button className=" bg-red-500 rounded-full py-3 px-5 text-xl  outline-none placeholder:text-white mt-10 w-full">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

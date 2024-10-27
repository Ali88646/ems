import { useState } from "react";
import { setLocalStorage } from "../../utils/localStorage";

const Header = ({ setUser }) => {
  // const [username, setUsername] = useState("");
  // if (!data) {
  //   setUsername("Admin");
  // } else {
  //   setUsername(data.firstName);
  // }
  const logoutUser = () => {
    localStorage.setItem("loggedInUser", "");
    setUser("");
  };
  return (
    <div className="flex items-end justify-between">
      <h1 className="text-2xl font-medium">
        Hello <br />
        <span className="text-3xl font-semibold">Ali Ahmed</span>
      </h1>
      <button
        onClick={() => {
          logoutUser();
        }}
        className="bg-red-500 hover:bg-red-600 duration-300 text-white px-5 py-2 rounded-sm text-lg font-medium"
      >
        Log Out
      </button>
    </div>
  );
};

export default Header;

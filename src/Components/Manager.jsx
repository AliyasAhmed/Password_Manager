import { React, useRef, useState, useEffect } from "react";
import VisibleEye from "../assets/svg/VisibleEye.svg";
import NotVisibleEye from "../assets/svg/VisibleOffeye.svg";
const Manager = () => {
  useEffect(() => {
    let passwords = localStorage.getItem("password");
    let passwordArray;
    if (passwords) {
      setpasswordArray(JSON.parse(passwords));
    }
  }, []);
  const [Form, SetForm] = useState({ website: "", username: "", password: "" });
  const [passwordArray, setpasswordArray] = useState([]);
  const ref = useRef();
  const Showpassword = () => {
    if (ref.current.src.includes(NotVisibleEye)) {
      ref.current.src = VisibleEye;
    } else {
      ref.current.src = NotVisibleEye;
    }
  };
  const SavePassWord = () => {
    setpasswordArray([...passwordArray, Form])
    localStorage.setItem('password', JSON.stringify([...passwordArray, Form]))
  };
  const handlechange = (e) => {
    SetForm({ ...Form, [e.target.name]: e.target.value });
  };
  return (
    <>
      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      <div className="mx-auto max-w-4xl text-center ">
        <p className="text-2xl">Your own paswword manager</p>
        <div className="text-white flex flex-col p-4 gap-3">
          <input
            className="bg-[#3f3f3f27] text-white w-full rounded-lg p-3 focus:border-green-600"
            type="text"
            name="website"
            id=""
            placeholder="Enter website URL"
            value={Form.website}
            onChange={handlechange}
          />
          <div className="flex w-full gap-8">
            <input
              className=" w-full rounded-lg bg-[#3f3f3f27] text-white p-3"
              type="text"
              name="username"
              id=""
              placeholder="Enter Username"
              value={Form.username}
              onChange={handlechange}
            />
            <div className="relative">
              <input
                className=" w-full rounded-lg bg-[#3f3f3f27] text-white p-3"
                type="text"
                name="password"
                id=""
                placeholder="Enter password"
                value={Form.password}
                onChange={handlechange}
              />
              <span className="absolute right-0 text-purple-700 top-[0.8em] px-1 cursor-pointer">
                <img src={VisibleEye} alt="" onClick={Showpassword} ref={ref} />
              </span>
            </div>
          </div>
        </div>

        <button
          onClick={SavePassWord}
          className="bg-[#2f00ff34] p-3 rounded-xl flex justify-center items-center mx-auto hover:scale-[95%] transition-all px-20"
        >
          <lord-icon
            src="https://cdn.lordicon.com/sbnjyzil.json"
            trigger="hover"
            state="hover-swirl"
            colors="primary:#7166ee,secondary:#7166ee"
          ></lord-icon>
        </button>
      </div>
    </>
  );
};

export default Manager;

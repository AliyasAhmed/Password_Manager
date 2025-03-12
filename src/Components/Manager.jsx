import { React, useRef, useState, useEffect } from "react";
import VisibleEye from "../assets/svg/VisibleEye.svg";
import NotVisibleEye from "../assets/svg/VisibleOffeye.svg";
import copy from "../assets/svg/copy.png";
import { v4 as uuidv4 } from "uuid";

const Manager = () => {
  useEffect(() => {
    let passwords = localStorage.getItem("password");
    if (passwords) {
      setpasswordArray(JSON.parse(passwords));
    }
  }, []);
  const [Form, SetForm] = useState({ website: "", username: "", password: "" });
  const [passwordArray, setpasswordArray] = useState([]);
  const ref = useRef();
  const passwordRef = useRef();
  const Showpassword = () => {
    if (ref.current.src.includes(NotVisibleEye)) {
      passwordRef.current.type = "password";
      ref.current.src = VisibleEye;
    } else {
      ref.current.src = NotVisibleEye;
      passwordRef.current.type = "text";
    }
  };
  const SavePassWord = () => {
    setpasswordArray([...passwordArray, { ...Form, id: uuidv4() }]);
    SetForm({ website: "", username: "", password: "" })
    localStorage.setItem(
      "password",
      JSON.stringify([...passwordArray, { ...Form, id: uuidv4() }])
    );
  };
  const Deletepassword = (id) => {
    let c = confirm("Do you Want to Delete this");
    if (c) {
      setpasswordArray(passwordArray.filter((item) => item.id !== id));
      localStorage.setItem(
        "password",
        JSON.stringify(passwordArray.filter((item) => item.id !== id))
      );
    }
  };
  const Editpassword = (id) => {
    SetForm(passwordArray.filter((item) => item.id === id)[0]);
    setpasswordArray(passwordArray.filter((item) => item.id !== id));
  };
  const handlechange = (e) => {
    SetForm({ ...Form, [e.target.name]: e.target.value });
  };
  const CopyText = (text) => {
    navigator.clipboard.writeText(text);
  };
  return (
    <>
      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      <div className="mx-auto max-w-4xl text-center ">
        <p className="text-2xl">Your own paswword manager</p>
        <div className="text-white flex flex-col p-4 gap-3">
          <input
            className="bg-[#3f3f3f27] text-white w-full rounded-lg p-3 focus:ring-1 focus:ring-[#2516c7] focus:outline-none"
            type="text"
            name="website"
            id=""
            placeholder="Enter website URL"
            value={Form.website}
            onChange={handlechange}
          />
          <div className="flex w-full gap-8">
            <input
              className=" w-full rounded-lg bg-[#3f3f3f27] text-white p-3 focus:ring-1 focus:ring-[#2516c7] focus:outline-none"
              type="text"
              name="username"
              id=""
              placeholder="Enter Username"
              value={Form.username}
              onChange={handlechange}
            />
            <div className="relative">
              <input
                className=" w-full rounded-lg bg-[#3f3f3f27] text-white p-3 focus:ring-1 focus:ring-[#2516c7] focus:outline-none"
                type="password"
                name="password"
                id=""
                placeholder="Enter password"
                value={Form.password}
                onChange={handlechange}
                ref={passwordRef}
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

        {/* SAved passwords session */}

        <div className="passwords mt-10 bg-[#3f3f3f27] rounded-xl p-5">
          <h2 className="font-bold text-2xl mb-5">Your Passwords</h2>
          {passwordArray.length === 0 ? (
            <div>No passwords to show</div>
          ) : (
            <table className="table-auto w-full">
              <thead className="bg-[#2f00ff34]">
                <tr>
                  <th className="py-2">Site</th>
                  <th className="py-2">Username</th>
                  <th className="py-2">Passwords</th>
                  <th className="py-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {passwordArray.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td className="text-center w-32 py-3 items-center">
                        <a href="" target="_blank">
                          {item.website}
                        </a>
                        <img
                          onClick={() => {
                            CopyText(item.website);
                          }}
                          src={copy}
                          alt="Copy Icon"
                          className="w-5 h-5 inline-block ml-3 cursor-pointer hover:scale-[90%]"
                        />
                      </td>
                      <td className="text-center w-32 py-3 ">
                        {item.username}
                        <img
                          onClick={() => {
                            CopyText(item.username);
                          }}
                          src={copy}
                          alt="Copy Icon"
                          className="w-5 h-5 inline-block ml-3 cursor-pointer hover:scale-[90%]"
                        />
                      </td>
                      <td className="text-center w-32 py-3">
                        {item.password}
                        <img
                          onClick={() => {
                            CopyText(item.password);
                          }}
                          src={copy}
                          alt="Copy Icon"
                          className="w-5 h-5 inline-block ml-2 cursor-pointer hover:scale-[90%]"
                        />
                      </td>
                      {/* Action Buttons */}
                      <td className="text-center w-32 py-3 ">
                        {/* Edit */}
                        <span
                          className="cursor-pointer mx-1"
                          onClick={() => {
                            Editpassword(item.id);
                          }}
                        >
                          <lord-icon
                            src="https://cdn.lordicon.com/exymduqj.json"
                            trigger="hover"
                            state="hover-line"
                            colors="primary:#7166ee,secondary:#4030e8"
                          ></lord-icon>
                        </span>
                        {/* delete */}
                        <span
                          className="cursor-pointer mx-1"
                          onClick={() => {
                            Deletepassword(item.id);
                          }}
                        >
                          <lord-icon
                            src="https://cdn.lordicon.com/hwjcdycb.json"
                            trigger="hover"
                            colors="primary:#7166ee,secondary:#4030e8"
                          ></lord-icon>
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </>
  );
};

export default Manager;

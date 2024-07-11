import { useRouter } from "next/router";
import React, { useContext, useState, useRef } from "react";
import Button from "../widtgets/Button";
import toast from "react-hot-toast";
import menuContext from "../../contexts/menu/menuContext";
import { setEmail } from "../../api/emailApi";
export default function RegisterNow({ text_btn, text_placeholder }) {
  const [txt, setTxt] = useState("");
  const [chk, setChk] = useState(true);

  const chkref = useRef(false);
  async function registerEmail() {
    if (chkref.current.checked && txt.trim().length > 0) {
      try {
        const res = await setEmail(locale, { email: txt });
        if (res?.error) {
          toast.error(res?.error);
        } else {
          toast.success(res?.message);
          setTxt("");
          chkref.current.checked = false;
        }
      } catch (error) {
        toast.error(JSON.stringify(error));
        setTxt("");
        chkref.current.checked = false;
      }
    } else {
      return;
    }
  }

  return (
    <div className="flex items-center space-x-5">
      <input
        className="form-control input-register px-3 py-2"
        placeholder={text_placeholder}
        value={txt}
        onChange={(e) => setTxt(e.target.value)}
      ></input>
      <button className="btn-v2 btn-black-v2 px-5 py-2" onClick={registerEmail}>
        <span className="py-1">{text_btn}</span>
      </button>
    </div>
  );
}

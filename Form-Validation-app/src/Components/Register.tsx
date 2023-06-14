import React, { useRef, useEffect, useState } from "react";
import "../register.css";
import "bootstrap/dist/css/bootstrap.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faInfoCircle,
    faTimes,
    faCheck,
} from "@fortawesome/free-solid-svg-icons";
import axios from '../api/axios.js'

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{6,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

export const Register = () => {
    const userRef = useRef(null); //user input
    const errorRef = useRef(null); // 如果有 error 要把滑鼠焦點放到錯誤格子(??)

    const [user, setUser] = useState("");
    const [validName, setValidName] = useState(false); //是否符合格式要求
    const [userFocus, setUserFocus] = useState(false); // 沒有聚焦的時候不用顯示提示框(??)

    const [pwd, setPsw] = useState("");
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [matchPwd, setMatchPwd] = useState("");
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const [success, setSuccess] = useState(false);

    const [errMsg, setErrMsg] = useState("");
    const errRef = useRef();

    //正在編輯的當下不顯示錯誤訊息
    useEffect(() => {
        setErrMsg("");
    }, [user, pwd, matchPwd]);

    useEffect(() => {
        userRef.current.focus();
        // 利用 useEffect 的 dependency 設 [] 空陣列時會在元件第一次渲染後執行一次的特性、將滑鼠聚焦在輸入框。
    }, []);
    // 檢查 Username 格式 -> validName
    useEffect(() => {
        const boolean = USER_REGEX.test(user);
        setValidName(boolean);
    }, [user]);
    // 檢查 psw、pswChk 格式 validPwd、validMatch
    useEffect(() => {
        const formatBoolean = PWD_REGEX.test(pwd);
        setValidPwd(formatBoolean);
        const match = pwd == matchPwd;
        setValidMatch(match);
    }, [pwd, matchPwd]);

    // submit 之後，如果有架設後端可進行其他連結的操作
    const handleSubmit = async (e: any) => {
        e.preventDefault();
        // 再檢查一次帳密的格式，錯誤的話顯示失敗訊息
        const v1 = USER_REGEX.test(user);
        const v2 = PWD_REGEX.test(pwd);
        if (!v1 || !v2) {
            setErrMsg("Invalid Entry");
            return;
        }
        setSuccess(true);
        // try{
        //     const response = await axios.post();
        // }catch(e){

        // }
    };

    return (
        <>
            {success ? (
                <section  className="p-5 rounded">
                    <h1 className="text text-white">Success!</h1>
                    <p className="mt-4">
                        <a href="#"  className="text text-white bg-dark rounded-pill p-3">Sign In</a>
                    </p>
                </section>
            ) : (
                <section className="p-5 rounded">
                    <p
                        className={`${
                            errMsg ? "show" : "hide"
                        } text text-center fs-3 rounded-4 bg-dark bg-gradient text-danger`}
                    >
                        {errMsg}
                    </p>
                    <h1 className="text text-white-50">Register</h1>
                    <form className="form" onSubmit={handleSubmit}>
                        <div className="form-group my-4">
                            <label
                                htmlFor="username"
                                className="text text-white fs-5"
                            >
                                Username:
                                <FontAwesomeIcon
                                    icon={faCheck}
                                    className={`${
                                        validName ? "show" : "hide"
                                    }  text-success icon`}
                                />
                                <FontAwesomeIcon
                                    icon={faTimes}
                                    className={`${
                                        validName || !user ? "hide" : "show"
                                    }  text-danger icon`}
                                />
                            </label>
                            <input
                                ref={userRef}
                                value={user}
                                onChange={(e) => setUser(e.target.value)}
                                className="form-control"
                                type="text"
                                id="username"
                                required
                                onFocus={() => setUserFocus(true)}
                                onBlur={() => setUserFocus(false)}
                            />
                            <p
                                className={`${
                                    user && userFocus && !validName
                                        ? "instruction"
                                        : "offScreen"
                                } form-control hint text-center mt-1 bg-dark rounded text-white`}
                            >
                                <FontAwesomeIcon
                                    icon={faInfoCircle}
                                    style={{ marginRight: "10px" }}
                                />
                                6 to 24 characters.
                                <br />
                                Must begin with a letter.
                            </p>
                        </div>

                        <div className="form-group my-4">
                            <label
                                htmlFor="password"
                                className="text text-white fs-5"
                            >
                                Password:
                                <FontAwesomeIcon
                                    icon={faCheck}
                                    className={`${
                                        validPwd ? "show" : "hide"
                                    }  text-success icon`}
                                />
                                <FontAwesomeIcon
                                    icon={faTimes}
                                    className={`${
                                        validPwd || !pwd ? "hide" : "show"
                                    }  text-danger icon`}
                                />
                            </label>
                            <input
                                className="form-control"
                                type="password"
                                id="password"
                                onChange={(e) => setPsw(e.target.value)}
                                value={pwd}
                                onFocus={() => setPwdFocus(true)}
                                onBlur={() => setPwdFocus(false)}
                                required
                            />
                            <p
                                className={`${
                                    pwdFocus && !validPwd
                                        ? "instruction"
                                        : "offScreen"
                                } hint text-center mt-1 bg-dark rounded text-white`}
                            >
                                <FontAwesomeIcon
                                    icon={faInfoCircle}
                                    style={{ marginRight: "10px" }}
                                />
                                Must contains
                                <br /> 8 to 24 characters、
                                <br />
                                one UpperCase
                                <br />
                                one LowerCase
                                <br />
                                one number
                                <br />
                                one Special character.{" "}
                            </p>
                        </div>

                        <div className="form-group my-4">
                            <label
                                htmlFor="pswChk"
                                className="text text-white fs-5"
                            >
                                Confirm Password:
                                <FontAwesomeIcon
                                    icon={faCheck}
                                    className={`${
                                        validMatch && matchPwd ? "show" : "hide"
                                    }  text-success icon`}
                                />
                                <FontAwesomeIcon
                                    icon={faTimes}
                                    className={`${
                                        validMatch || !matchPwd
                                            ? "hide"
                                            : "show"
                                    }  text-danger icon`}
                                />
                            </label>
                            <input
                                className="form-control"
                                type="password"
                                id="pswChk"
                                onChange={(e) => setMatchPwd(e.target.value)}
                                onFocus={() => setMatchFocus(true)}
                                onBlur={() => setMatchFocus(false)}
                                required
                            />
                            <p
                                className={`${
                                    (!matchPwd || !validMatch) && matchFocus
                                        ? "instruction"
                                        : "offScreen"
                                } hint text-center mt-1 bg-dark rounded text-white `}
                            >
                                <FontAwesomeIcon
                                    icon={faInfoCircle}
                                    style={{ marginRight: "10px" }}
                                />
                                Password Unmatch.
                                <br />
                                Please verify again.
                            </p>
                        </div>

                        <button
                            className="btn btn-warning btn-lg"
                            disabled={
                                validName && validPwd && validMatch
                                    ? false
                                    : true
                            }
                        >
                            Sign Up
                        </button>
                    </form>

                    <div className="footer mt-4">
                        <p className="text text-white">Already registered?</p>
                        {/* {put react router here} */}
                        <a href="#" className="text text-white">
                            Sign In
                        </a>
                    </div>
                </section>
            )}
        </>
    );
};

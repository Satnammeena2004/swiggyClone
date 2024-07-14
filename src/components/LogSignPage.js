import {useContext, useRef, useState} from "react";
import {Form,useNavigate,useActionData} from "react-router-dom";
import UserContext from "../utils/UserContext";
function LogSignPage() {
  const [signIn, setSignIn] = useState(false);
  const {user,setUser} = useContext(UserContext);
  const [warnigs,setWarnings] = useState("");
  const  naviagate = useNavigate()
  const form = useRef();
  const action = useActionData();
  console.log("action",action);

  const [validation, setValidation] = useState({
    userName: "",
    email: "",
    password: "",
  });

  const userNameRef = useRef();
  const passwordRef = useRef();
  const emailRef = useRef();

  function handleLogIn(e) {
    e.preventDefault();
    let formData = new FormData(form.current);
    // console.log(localStorage.getItem("Users"));
    localStorage.setItem(
      "Users",
      JSON.stringify([
        {userName: formData.get("userName"), password: formData.get("password")},
      ])
    );
    
    setUser({...user,name:formData.get("userName"),email:formData.get("email")})
    naviagate("/",{replace:true});
  
    
  }
  function handleSignIn() {
    let formData = new FormData(form.current);

    localStorage.removeItem("Users");
    localStorage.setItem(
      "Users",
      JSON.stringify([
        {userName: formData.get("userName"), password: formData.get("password")},
      ])
    );
  }

  function handleChange(e) {
    console.log(e.target.validationMessage);
    setValidation({...validation, [e.target.name]: e.target.validationMessage});
  }

  return (
    <div className="border-2 p-4 m-2 rounded-sm h-full ">
      <Form
      ref={form}
        className="p-4 border flex flex-col w-2/5 min-w-60 mx-auto bg-blue-300 rounded-md"
      >
        {!signIn && (
          <>
            <label htmlFor="userName" />
            <input
              ref={userNameRef}
              className="border-2 outline-none p-2 border-gray-200 rounded-sm border-hidden bg-blue-50 my-2"
              type="text"
              name="userName"
              placeholder="@john"
              onChange={handleChange}
            />
            {validation.userName}
          </>
        )}
        <label htmlFor="email" />
        <input
          ref={emailRef}
          className="border-2 p-2 outline-none border-gray-200 rounded-sm border-hidden bg-blue-50 my-2"
          placeholder="some@gmail.com"
          type="email"
          name="email"
          pattern="/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i"
          onChange={handleChange}
        />
        {validation.email}
        <label htmlFor="password" />
        <input
          ref={passwordRef}
          placeholder="password"
          className="border-2 p-2 outline-none border-gray-200 rounded-sm border-hidden bg-blue-50 my-1"
          id="password"
          type="password"
          name="password"
        />
        {warnigs}
        {signIn && (
          <>
            <label htmlFor="confirmPassword" />
            <input
              name="confirmPassword"
              placeholder="confirm password"
              className="border-2 p-2 outline-none border-gray-200 rounded-sm border-hidden bg-blue-50 my-1"
              id="confirmPassword"
              type="password"
            />
          </>
        )}

        {signIn ? (
          <button
            type="submit"
            className="bg-sky-400 text-stone-50 p-2 rounded-md my-1"
            onClick={handleSignIn}
          >
            Sign In
          </button>
        ) : (
          <button
            className="bg-sky-400 text-stone-50 p-2 rounded-md my-1"
            onClick={handleLogIn}
          >
            Log In
          </button>
        )}

        <div className="flex justify-end">
          <span
            className="border-transparent cursor-pointer border-s text-stone-50 p-1 border-b-2 border-b-slate-700 rounded-md"
            onClick={() => setSignIn(!signIn)}
          >
            {!signIn ? "Sign In" : "Log In"}
          </span>
        </div>
      </Form>
    </div>
  );
}

export async function action({param, request}) {
  let formData = await request.formData();
  for (let [key, value] of formData) {
    console.log(key, value);
  }
 
  return {name:formData.get("userName"),email:formData.get("email")};
}

export default LogSignPage;

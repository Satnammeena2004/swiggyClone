import {useRouteError} from "react-router-dom";

const Error = () => {
  const err = useRouteError();

  console.log(err);
  return (
    <div style={{transform: " translate(40%, 50%)"}}>
      <h1> Oops!</h1>
      <h2>Something went Wrong</h2>
      <h2>{err?.error?.message}</h2>
      <h2>
        {err?.status} : {err?.statusText}
      </h2>
    </div>
  );
};

export default Error;

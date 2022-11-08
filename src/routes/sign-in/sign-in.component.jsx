import { signinWithGooglePopup } from "../../utlils/firebase/firebase.utils";

const Signin = () => {
  const logGoogleUser = async () => {
    const response = await signinWithGooglePopup();
    console.log(response);
  };
  return (
    <div>
      <h1>Sigin in </h1>
      <button onClick={logGoogleUser}>Get user </button>
    </div>
  );
};

export default Signin;

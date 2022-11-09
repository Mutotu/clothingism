import {
  createUserDocumentFromAuth,
  signinWithGooglePopup,
} from "../../utlils/firebase/firebase.utils";

const Signin = () => {
  const logGoogleUser = async () => {
    const { user } = await signinWithGooglePopup();
    // const userDocRef = await createUserDocumentFromAuth;

    createUserDocumentFromAuth(user);
  };
  return (
    <div>
      <h1>Sigin in </h1>
      <button onClick={logGoogleUser}>Get user </button>
    </div>
  );
};

export default Signin;

import SingUpForm from "../../components/sign-up-form/sign-up-form.component";
import {
  createUserDocumentFromAuth,
  signinWithGooglePopup,
} from "../../utlils/firebase/firebase.utils";

const Signin = () => {
  const logGoogleUser = async () => {
    const { user } = await signinWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sigin in </h1>
      <button onClick={logGoogleUser}>Get Google user </button>
      <SingUpForm />
    </div>
  );
};

export default Signin;

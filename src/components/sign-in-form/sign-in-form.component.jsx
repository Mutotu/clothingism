import { useState, useContext } from "react";
import {
  signinWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from "../../utlils/firebase/firebase.utils";
import { UserContext } from "../../context/user.context";
import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import "./sign-in-form.styles.scss";

const defaultFormFields = {
  email: "",
  password: "",
};

const SingInForm = () => {
  const [formFIelds, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFIelds;
  const { setCurrentUser } = useContext(UserContext);
  const resetFormField = () => {
    setFormFields(defaultFormFields);
  };
  const signinWithGoogle = async () => {
    const { user } = await signinWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { user } = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      setCurrentUser(user);
      resetFormField();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("Wrong password");
          break;
        case "auth/user-not-found":
          alert("Wrong email");
          break;
        default:
          console.log(error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFIelds, [name]: value });
  };
  return (
    <div className='sign-up-container'>
      <h2>Already an account?</h2>
      <span>Sign in with you email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label='Email'
          type='text'
          required
          onChange={handleChange}
          name='email'
          value={email}
        />
        <FormInput
          label='Password'
          type='password'
          required
          onChange={handleChange}
          name='password'
          value={password}
        />
        <div className='buttons-container'>
          <Button type='submit'>Sign In</Button>
          <Button type='button' buttonType='google' onClick={signinWithGoogle}>
            Google In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SingInForm;

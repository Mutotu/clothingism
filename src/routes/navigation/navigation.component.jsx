import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import CartIcon from "../../components/card-icon/cart-icon.component";
import CartDropdown from "../../components/card-dropdown/card-dropdown.component";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import "./navigation.styles.scss";
import { UserContext } from "../../context/user.context";
import { signOutUser } from "../../utlils/firebase/firebase.utils";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);

  const className = "nav-link";
  return (
    <Fragment>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
          <CrwnLogo className='logo' />
        </Link>
        <div className={className + "s-container"}>
          <Link className={className} to='/shop'>
            Shop
          </Link>
          {currentUser ? (
            <span className={className} onClick={signOutUser}>
              SIGN OUT
            </span>
          ) : (
            <Link className={className} to='/auth'>
              Sign in
            </Link>
          )}
          <CartIcon />
        </div>
        <CartDropdown />
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;

import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useAppDispatch } from "../app/store/hooks";
import { setUser } from "../app/authStates/authStates.slice";
import { getFbAuth } from "../components/firebase/config";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

function AuthPage() {
  const auth = getFbAuth;
  const provider = new GoogleAuthProvider();
  const dispatch = useAppDispatch()
  const [cookies, setCookie] = useCookies(['user']);
  let navigate = useNavigate();

  const loginFunc = () => {
    signInWithPopup(auth, provider).then((result) => {
      // const credential = GoogleAuthProvider.credentialFromResult(result);
      // const token = credential?.accessToken;
      const user = result.user;
      setCookie('user', user);
      dispatch(setUser(user))
      navigate('/')
    }).catch((error) => {
      //   const errorCode = error.code;
      //   const email = error.customData.email;
      //   const credential = GoogleAuthProvider.credentialFromError(error);
      const errorMessage = error.message;
      console.log('error', errorMessage)
    });
  }

  return (
    <div className="App">
      <button onClick={loginFunc}>Login</button>
    </div>
  );
}

export default AuthPage;

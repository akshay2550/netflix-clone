import { useContext, useState } from "react";
import { Form } from "../components";
import { FooterContainer } from "../containers/footer";
import { HeaderContainer } from "../containers/header";
import { FirebaseContext } from "../context/firebase";

import * as ROUTES from "../constants/routes";
import { useHistory } from "react-router";

const Signin = () => {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const isInvalid = password === "" || emailAddress === "";

  const handleSignin = (e) => {
    e.preventDefault();

    firebase
      .auth()
      .signInWithEmailAndPassword(emailAddress, password)
      .then(() => {
        history.push(ROUTES.BROWSE);
      })
      .catch((error) => {
        setEmailAddress("");
        setPassword("");
        setError(error.message);
      });
  };

  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign In</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}
          <Form.Base onSubmit={handleSignin} method="POST">
            <Form.Input
              type="email"
              placeholder="Email address"
              value={emailAddress}
              onChange={({ target }) => {
                setError("");
                setEmailAddress(target.value);
              }}
            />
            <Form.Input
              type="password"
              placeholder="Password"
              autoComplete="off"
              value={password}
              onChange={({ target }) => {
                setError("");
                setPassword(target.value);
              }}
            />
            <Form.Submit disabled={isInvalid} type="submit">
              Sign in
            </Form.Submit>
          </Form.Base>

          <Form.Text>
            New to Netflix?<Form.Link to="/signup"> Sign up Now.</Form.Link>
          </Form.Text>
          <Form.TextSmall>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot.
          </Form.TextSmall>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  );
};

export default Signin;

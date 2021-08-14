import * as React from "react";
import { WelcomeContainer } from "../Styles/Auth";
import AuthButton from "../Components/AuthButton";
import { RouteChildrenProps } from "react-router-dom";

const Welcome: React.FC<RouteChildrenProps> = (props: RouteChildrenProps) => {
  const goLogin = () => {
    props.history.push("/Login");
  };

  const goSignUp = () => {
    props.history.push("/SignUp");
  };

  return (
    <WelcomeContainer>
      <AuthButton
        label="로그인"
        styles={{ marginBottom: 24 }}
        onClick={goLogin}
      />
      <AuthButton label="회원가입" onClick={goSignUp} />
    </WelcomeContainer>
  );
};

export default Welcome;

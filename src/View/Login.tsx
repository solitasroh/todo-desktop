import * as React from "react";
import { Link, RouteChildrenProps } from "react-router-dom";
import { LoginContainer, LoginForm, AuthViewTitle } from "../Styles/Auth";
import { Checkbox, FormControlLabel, TextField } from "@material-ui/core";
import AuthButton from "../Components/AuthButton";

const Login: React.FC<RouteChildrenProps> = (props: RouteChildrenProps) => {
  console.log(props);

  return (
    <LoginContainer>
      <AuthViewTitle style={{ color: "black" }}>COUPLE TODO</AuthViewTitle>

      <LoginForm>
        <TextField
          type="text"
          placeholder="email"
          margin="normal"
          variant="outlined"
          fullWidth
          autoFocus
          required
        />
        <TextField
          type="password"
          placeholder="password"
          margin="normal"
          variant="outlined"
        />

        <FormControlLabel
          style={{ color: "black" }}
          control={<Checkbox value="remember" color="primary" />}
          label="Remember me"
        />

        <AuthButton label="Login" styles={{ marginBottom: "10px" }} />
      </LoginForm>
      <label style={{ color: "black" }}>
        <Link to="/welcome">
          비밀번호를 잊어버리셨나요? 여기에서 찾아보세요
        </Link>
      </label>
    </LoginContainer>
  );
};

export default Login;

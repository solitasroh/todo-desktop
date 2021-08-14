import * as React from "react";
import { Link, RouteChildrenProps } from "react-router-dom";
import { FieldValues, useForm } from "react-hook-form";
import {
  LoginContainer,
  LoginForm,
  AuthViewTitle,
  ValidityLabel,
} from "../Styles/Auth";
import { Checkbox, FormControlLabel, TextField } from "@material-ui/core";
import { gql, useMutation } from "@apollo/client";
import AuthButton from "../Components/AuthButton";

// mutation{
//   login(loginInput: {
//     userId: "soojang",
//     password: "1224",
//   }) {
//     ok,
//     token,
//     error
//   }
// }
type FormData = {
  id: string;
  password: string;
};

const LOGIN_MUTATION = gql`
  mutation Login($loginInput: LoginInput!) {
    login(loginInput: $loginInput) {
      ok
      token
      error
    }
  }
`;

const Login: React.FC<RouteChildrenProps> = (props: RouteChildrenProps) => {
  console.log(props);
  const {
    register,
    handleSubmit,
    formState: { errors }, // 사용자 입력에러에 대해 검사
  } = useForm<FormData>();

  const [Login, { loading }] = useMutation(LOGIN_MUTATION, {
    onCompleted({ login }) {
      const { ok, token, error } = login;
      if (!ok) {
        alert(error);
        return;
      } else {
        alert(`login success , token =${token}`);
      }
      props.history.push("/");
    },
  });

  const onSubmit = (data: FieldValues) => {
    if (loading) {
      return;
    }

    Login({
      variables: {
        loginInput: {
          userId: data.id,
          password: data.password,
        },
      },
    });
  };
  return (
    <LoginContainer>
      <AuthViewTitle style={{ color: "black" }}>COUPLE TODO</AuthViewTitle>

      <LoginForm onSubmit={handleSubmit(onSubmit)}>
        <TextField
          type="text"
          placeholder="id"
          margin="normal"
          variant="outlined"
          fullWidth
          autoFocus
          required
          size="small"
          {...register("id", { required: true })}
        />
        <ValidityLabel>
          {errors.id?.type === "required" && "아이디가 입력되지 않았습니다"}
        </ValidityLabel>
        <TextField
          type="password"
          placeholder="password"
          margin="normal"
          variant="outlined"
          size="small"
          required
          {...register("password", { required: true })}
        />
        <ValidityLabel>
          {errors.password?.type === "required" &&
            "password가 입력되지 않았습니다"}
        </ValidityLabel>
        <FormControlLabel
          style={{ color: "black" }}
          control={<Checkbox value="remember" color="primary" />}
          label="Remember me"
        />

        <AuthButton
          label="Login"
          type="submit"
          onClick={handleSubmit(onSubmit)}
          styles={{ marginBottom: "10px" }}
        />
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

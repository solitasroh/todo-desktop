import * as React from "react";
import { FieldValues, useForm } from "react-hook-form";
import { RouteChildrenProps } from "react-router-dom";
import {
  LoginContainer,
  LoginForm,
  AuthViewTitle,
  ValidityLabel,
} from "../Styles/Auth";
import { TextField } from "@material-ui/core";
import AuthButton from "../Components/AuthButton";
type FormData = {
  id: string;
  password: string;
  name: string;
  email: string;
};
const SignUp: React.FC<RouteChildrenProps> = (props: RouteChildrenProps) => {
  const goToHome = () => {
    props.history.push("/Login");
  };
  const {
    register,
    handleSubmit,
    formState: { errors }, // 사용자 입력에러에 대해 검사
  } = useForm<FormData>();

  const onSubmit = (data: FieldValues) => {
    console.log(data);
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
          {...register("password", { required: true })}
        />
        <ValidityLabel>
          {errors.password?.type === "required" &&
            "비밀번호가 입력되지 않았습니다"}
        </ValidityLabel>
        <TextField
          type="text"
          placeholder="name"
          margin="normal"
          variant="outlined"
          fullWidth
          autoFocus
          required
          size="small"
          {...register("name", { required: true })}
        />
        <ValidityLabel>
          {errors.name?.type === "required" && "이름이 입력되지 않았습니다"}
        </ValidityLabel>
        <TextField
          type="text"
          placeholder="email"
          margin="normal"
          variant="outlined"
          fullWidth
          autoFocus
          required
          size="small"
          {...register("email", { required: true })}
        />
        <ValidityLabel>
          {errors.email?.type === "required" && "이메일이 입력되지 않았습니다"}
        </ValidityLabel>

        <AuthButton
          label="Sign Up"
          type="submit"
          onClick={handleSubmit(onSubmit)}
          styles={{ marginBottom: "10px" }}
        />
      </LoginForm>
    </LoginContainer>
  );
};

export default SignUp;

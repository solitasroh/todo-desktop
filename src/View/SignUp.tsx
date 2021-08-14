import * as React from "react";
import { FieldValues, useForm } from "react-hook-form";
import { RouteChildrenProps } from "react-router-dom";
import { gql, useMutation } from "@apollo/client";
import {
  LoginContainer,
  LoginForm,
  AuthViewTitle,
  ValidityLabel,
} from "../Styles/Auth";

import { TextField } from "@material-ui/core";
import AuthButton from "../Components/AuthButton";

interface createAccountInput {
  userId: string;
  userName: string;
  password: string;
  email: string;
}

type FormData = {
  id: string;
  password: string;
  name: string;
  email: string;
};
// type Mutation {
//   createAccount(createAccountInput: CreateAccountInput!): CreateAccountResult!
//   login(loginInput: LoginInput!): LoginResult!
// }

// 서버로 보내기 위한 query 또는 mutation을 정의
const SIGNUP = gql`
  mutation CreateAccount($createAccountInput: CreateAccountInput!) {
    createAccount(createAccountInput: $createAccountInput) {
      ok
      error
    }
  }
`;

const SignUp: React.FC<RouteChildrenProps> = (props: RouteChildrenProps) => {
  //
  const [create, { loading }] = useMutation(SIGNUP, {
    onCompleted({ createAccount }) {
      const { ok, error } = createAccount;
      if (!ok) {
        alert(error);
        return;
      } else {
        alert("success sign up");
      }
      props.history.push("/");
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors }, // 사용자 입력에러에 대해 검사
  } = useForm<FormData>();

  const onSubmit = async (data: FieldValues) => {
    if (loading) {
      return;
    }
    console.log(create);
    console.log(data);
    const result = await create({
      variables: {
        createAccountInput: {
          userId: data.id,
          userName: data.name,
          password: data.password,
          email: data.email,
        },
      },
    });
    console.log(result);
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

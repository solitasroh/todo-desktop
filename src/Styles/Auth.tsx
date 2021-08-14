import styled from "styled-components";

export const WelcomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 10px;
  background-color: #fdf6f0;
  justify-content: center;
`;
export const ValidityLabel = styled.label`
  color: red;
  font-size: 12px;
  font-weight: 600;
`;
export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 10px;
  background-color: #fdf6f0;
  justify-content: center;
`;

export const AuthViewTitle = styled.label`
  text-align: center;
  width: 100%;
  font-size: 2.5em;
  font-weight: 600;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 40px;
`;
export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const LoginField = styled.input.attrs({
  type: "text",
})`
  margin-bottom: 10px;
`;

export const PasswordField = styled.input.attrs({
  type: "password",
})`
  margin-bottom: 10px;
`;

export const LoggedInButton = styled.button`
  margin-bottom: 24px;
  width: 100%;
  height: 40px;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  border-width: 1px;
  border-color: goldenrod;
  background-color: #9e0b0b;
  &:hover {
    background-color: #252525;
    border-color: #9e0b0b;
  }
  &:active {
    border-width: 1px;
    border-color: #9e0b0b;
    background-color: aliceblue;
  }
`;

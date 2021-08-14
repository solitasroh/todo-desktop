import * as React from "react";
import styled, { CSSProperties } from "styled-components";
import Button from "@material-ui/core/Button";

const SButton = styled(Button)`
  display: inline-flex;
  outline: none;
  border: none;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;
  padding-left: 1rem;
  padding-right: 1rem;

  /* 크기 */
  height: 2.25rem;
  font-size: 1rem;
  /* 색상 */

  box-shadow: rgba(30, 22, 54, 0.4) 0 0px 0px 2px inset;
  color: white;
  &:hover {
    box-shadow: rgba(30, 22, 54, 0.7) 0 0px 0px 40px inset;
  }
  &:active {
    box-shadow: rgba(30, 22, 54, 0.1) 0 0px 0px 40px inset;
  }

  /* 기타 */
  margin-top: 1rem;
`;

const Label = styled.label`
  color: rgba(30, 22, 54, 0.6);
  cursor: pointer;
  &:hover {
    color: rgba(255, 255, 255, 0.85);
  }
`;

interface Props {
  label: string;
  styles?: CSSProperties;
  onClick?: () => void;
  type?: "submit" | "reset" | "button" | undefined;
}

const AuthButton: React.FC<Props> = ({
  label,
  styles,
  onClick,
  type,
}: Props) => {
  return (
    <SButton type={type} onClick={onClick} style={styles}>
      <Label>{label}</Label>
    </SButton>
  );
};

export default AuthButton;

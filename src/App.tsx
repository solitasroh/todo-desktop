import * as React from "react";
import * as ReactDOM from "react-dom";
import LoggedOutRouter from "./Routers/MainRouter";
import GlobalStyle from "./Styles/GlobalStyles";
import { StylesProvider } from "@material-ui/core/styles";
/*
 * 스타일 주입순서의 문제를 해결하는 방법
 * material-ui 에서 제공하는 styling 방법 대신 styled-components의 styling을 사용하기 위해
 * StyledProivder 컴포넌트로 감싸고 injectFirst props를 준다.
 */
function render() {
  ReactDOM.render(
    <React.Fragment>
      <StylesProvider injectFirst>
        <GlobalStyle></GlobalStyle>
        <LoggedOutRouter />
      </StylesProvider>
    </React.Fragment>,
    document.body
  );
}

render();

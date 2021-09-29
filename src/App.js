import React from "react";
import { Provider } from "react-redux";
// import configureStore from "./store";
import "./App.css";
import store from "./store/index";
import styled from "styled-components";
import Ticker from "./ticker/ticker";

// const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Container>
          <Ticker />
        </Container>
      </div>
    </Provider>
  );
}

export const Container = styled.div`
  display: flex;
  flex-flow: row;
`;

export default App;

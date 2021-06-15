import "./App.css";
import React, { Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import theme from "./common/theme";

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  padding-top: 100px;
  justify-content: center;
  align-items: flex-start;
  flex-direction: row;
  background-color: ${theme.colors.primary};
`;

const PageNotFoundTitle = styled.h1`
  color: ${theme.colors.white};
  font-weight: 300;
`;

const Loader = styled.div`
  font-size: 1rem;
  font-weight: 300;
  color: ${theme.colors.white};
`;

//Pages.
const Home = React.lazy(() => import("./pages/Home"));
const StartNew = React.lazy(() => import("./pages/StartNew"));
const JoinMatch = React.lazy(() => import("./pages/JoinMatch"));
const StartGame = React.lazy(() => import("./pages/StartGame"));

class App extends React.PureComponent {
  render() {
    return (
      <Wrapper>
        <BrowserRouter>
          <Suspense fallback={<Loader>Loading....</Loader>}>
            <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/start-new" component={StartNew} exact />
              <Route path="/join-match" component={JoinMatch} exact />
              <Route path="/start-game" component={StartGame} exact />
              <Route
                path="**"
                component={() => (
                  <PageNotFoundTitle>404, Page not found</PageNotFoundTitle>
                )}
              />
            </Switch>
          </Suspense>
        </BrowserRouter>
      </Wrapper>
    );
  }
}

export default App;

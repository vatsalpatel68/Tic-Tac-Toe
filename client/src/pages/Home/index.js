import React from "react";
import styled from "styled-components";
import theme from "../../common/theme";
import { Link } from "react-router-dom";

const Box = styled.div`
  min-height: 50vh;
  width: 30%;
  background-color: ${theme.colors.white};
  border-radius: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    width: 80%;
  }
`;

const Button = styled(Link)`
  padding: 0.5rem 2rem;
  text-decoration: none;
  border: 1px solid ${theme.colors.primary};
  margin: 10px;
  font-size: 2rem;
  color: ${theme.colors.primary};
  transition-duration: 700ms;

  :hover {
    background-color: ${theme.colors.primary};
    color: white;
  }
`;

class Home extends React.PureComponent {
  render() {
    return (
      <>
        <Box>
          <Button to="/start-new">Start new game.</Button>
          <Button to="/join-match">Join match</Button>
        </Box>
      </>
    );
  }
}

export default Home;

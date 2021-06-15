import React from "react";
import styled from "styled-components";
import theme from "../../common/theme";
import { Link } from "react-router-dom";
import SnackBar from "../../common/snackBar";

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

const Button = styled.button`
  padding: 0.5rem 2rem;
  text-decoration: none;
  border: 1px solid ${theme.colors.primary};
  margin: 10px;
  font-size: 2rem;
  color: ${theme.colors.primary};
  transition-duration: 700ms;
  background-color: ${theme.colors.white};

  :hover {
    background-color: ${theme.colors.primary};
    color: white;
  }
`;

const CustomLink = styled(Link)`
  padding: 0.5rem 2rem;
  text-decoration: none;
  border: 1px solid ${theme.colors.primary};
  margin: 10px;
  font-size: 2rem;
  color: ${theme.colors.primary};
  transition-duration: 700ms;
  background-color: ${theme.colors.white};

  :hover {
    background-color: ${theme.colors.primary};
    color: white;
  }
`;

class StartNew extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      showWarning: false,
    };
  }

  render() {
    return (
      <>
        {this.state.showWarning && (
          <SnackBar
            message="In production! Not at this time."
            color={theme.colors.warn}
          />
        )}
        <Box>
          <Button onClick={() => this.setState({ showWarning: true })}>
            vs Player.
          </Button>
          <CustomLink to="/start-game">vs Computer</CustomLink>
        </Box>
      </>
    );
  }
}

export default StartNew;

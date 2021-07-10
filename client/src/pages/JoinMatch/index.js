import React from "react";
import styled from "styled-components";
import theme from "../../common/theme";
import SnackBar from "../../common/snackBar";
import { Redirect } from "react-router-dom";

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
  width: 50%;

  :hover {
    background-color: ${theme.colors.primary};
    color: white;
  }
`;

const Input = styled.input`
  width: 50%;
  font-size: 1.5rem;
  height: 50px;
  text-align: start;
  border-color: ${theme.colors.primary};
`;

class JoinMatch extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      showWarning: false,
      errorMessage: "",
      hasRedirect: false,
    };
    this.inputRef = React.createRef(null);
  }

  joinMatch = () => {
    let value = this.inputRef.current.value;
    if (value.length != 5) {
      this.setState({
        showWarning: true,
        errorMessage: "Match id should have 5 character.",
      });
    } else {
      this.setState({
        showWarning: false,
        errorMessage: "",
        hasRedirect: true,
      });
    }
  };
  render() {
    return (
      <>
        {this.state.hasRedirect && <Redirect to="/start-game" />}
        {this.state.showWarning && (
          <SnackBar message={this.state.errorMessage} />
        )}
        <Box>
          <Input
            type="text"
            placeholder="Please enter the match Id"
            ref={this.inputRef}
          ></Input>
          <Button onClick={this.joinMatch}>Join match</Button>
        </Box>

        {this.state.hasRedirect && <Redirect to="/start-game" />}
        {this.state.showWarning && (
          <SnackBar message={this.state.errorMessage} />
        )}
        <Box>
          <Input
            type=
      </>
    );
  }
}

export default JoinMatch;

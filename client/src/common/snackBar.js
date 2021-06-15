import React from "react";
import styled from "styled-components";
import theme from "./theme";

const Wrapper = styled.div`
  position: absolute;
  align-self: flex-start;
  margin-bottom: 2rem;
  bottom: 20px;
  color: white;
  width: 60%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  z-index: 1;
  opacity: 0.7;
  padding: 20px 10px;
  background-color: ${(props) =>
    props.color ? props.color : theme.colors.success};

  @media screen and (max-width: 768px) {
    width: 80%;
  }
`;

const Text = styled.h2`
  font-size: 2rem;
  font-weight: 300;
`;

class SnackBar extends React.PureComponent {
  render() {
    return (
      <>
        <Wrapper color={this.props.color}>
          <Text>{this.props.message}</Text>
        </Wrapper>
      </>
    );
  }
}

export default SnackBar;

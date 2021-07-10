import React from "react";
import styled from "styled-components";
import theme from "../../common/theme";
import ApiService from "../../common/ApiService";
import SnackBar from "../../common/snackBar";

const Box = styled.div`
  height: auto;
  width: 30%;
  background-color: ${theme.colors.white};
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: flex-start;
  padding: 20px;

  > * {
    min-width: 30%;
    border: 1px solid ${theme.colors.primary};
    border-collapse: collapse;
    height: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 4rem;

    :hover {
      background-color: ${theme.colors.primary};
      opacity: 0.3;
    }
  }

  @media screen and (max-width: 992px) {
    width: 80%;
  }
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media screen and (max-width: 992px) {
    width: 80%;
  }
`;

const TurnText = styled.h3`
  font-size: 4rem;
  margin-top: 0px;
  color: ${theme.colors.white};
  font-weight: 300;
  margin-bottom: 2rem !important;
  opacity: 0.7;
`;

class StartGame extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      userTurn: true,
      showResultDialog: false,
      dialogMessage: "",
      values: [0, 1, 2, 3, 4, 5, 6, 7, 8],
    };
  }

  computerTurn = () => {
    this.props
      .makePostRequest("/", {
        values: this.state.values,
      })
      .then((res) => {
        this.setState(
          {
            values: res.data.data,
            userTurn: true,
          },
          () => {
            if (res.data.message) {
              this.setState({
                userTurn: true,
                showResultDialog: true,
                dialogMessage: res.data.message,
              });
            }
          }
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };

  clickBox = (index) => {
    if (!this.state.userTurn) {
      return;
    }
    let arr = this.state.values;
    arr[index] = "X";

    this.setState(
      {
        userTurn: false,
        values: arr,
        dialogMessage: "",
        showResultDialog: false,
      },
      this.computerTurn
    );
     this.props
      .makePostRequest("/", {
        values: this.state.values,
      })
      .then((res) => {
        this.setState(
          {
            values: res.data.data,
            userTurn: true,
          },
  };

  render() {
    return (
      <>
        {this.state.showResultDialog && (
          <SnackBar message={this.state.dialogMessage} />
        )}
        <Container>
          <TurnText>
            {this.state.userTurn ? "Your Turn !" : "My Turn !"}
          </TurnText>
          <Box>
           this.props
      .makePostRequest("/", {
        values: this.state.values,
      })
      .then((res) => {
        this.setState(
          {
            values: res.data.data,
            userTurn: true,
          },
            {this.state.values.length > 0 &&
              this.state.values.map((once, index) => {
                return (
                  <div key={index} onClick={() => this.clickBox(index)}>
                    {!Number.isInteger(once) ? once : null}
                  </div>
                );
              })}
          </Box>
        </Container>
      </>
    );
  }
}

export default ApiService(StartGame);

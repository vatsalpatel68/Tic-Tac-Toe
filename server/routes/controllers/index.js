const GenericError = require("../../Errors/GenericError");
const MissingBodyPropertyError = require("../../Errors/MissingBodyPropertyError");
const TicTacToeRepo = require("../../Repos/TicTacToe");
const utilities = require("../../utilities/ArraySerialize");

module.exports.solve = async function solve(req, res, next) {
  try {
    let values = req.body.values;

    if (values.length != 9) {
      throw new GenericError("Values must be 9 character long");
    }

    let result = TicTacToeRepo.solve(values);
    console.log(result);
    if (result.score == 10) {
      res.status(200).json({
        data: [0, 1, 2, 3, 4, 5, 6, 7, 8],
        message: "Computer wins!",
      });
    } else if (result.score == -10) {
      res.status(200).json({
        data: [0, 1, 2, 3, 4, 5, 6, 7, 8],
        message: "User wins!",
      });
    } else if (!result.hasOwnProperty("index")) {
      res.status(200).json({
        data: [0, 1, 2, 3, 4, 5, 6, 7, 8],
        message: "Game Tie!",
      });
    } else {
      values[result.index] = "O";
      res.status(200).json({
        data: values,
      });
    }
  } catch (err) {
    console.log("SOLVE ::: ", err);
    next(err);
  }
};

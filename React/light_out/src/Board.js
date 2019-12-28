import React, {Component} from "react";
import Cell from "./Cell";
import './Board.css';


/** Game board of Lights out.
 *
 * Properties:
 *
 * - nrows: number of rows of board
 * - ncols: number of cols of board
 * - chanceLightStartsOn: float, chance any cell is lit at start of game
 *
 * State:
 *
 * - hasWon: boolean, true when board is all off
 * - board: array-of-arrays of true/false
 *
 *    For this board:
 *       .  .  .
 *       O  O  .     (where . is off, and O is on)
 *       .  .  .
 *
 *    This would be: [[f, f, f], [t, t, f], [f, f, f]]
 *
 *  This should render an HTML table of individual <Cell /> components.
 *
 *  This doesn't handle any clicks --- clicks are on individual cells
 *
 **/

class Board extends Component {

  constructor(props) {
    super(props);

    // TODO: set initial state
    this.state = {
      board: this.initializeBoard(),
      hasWon: false,
    }

    this.isWin = this.isWin.bind(this);
    this.flipCellsAround = this.flipCellsAround.bind(this);
  }

  static defaultProps = {
    nrows: 5,
    ncols: 5,
    chanceLightStartsOn: 0.5,
  }

  /** create a board nrows high/ncols wide, each cell randomly lit or unlit */

  initializeBoard() {
    let {nrows, ncols} = this.props;
    let board = [];
    // TODO: create array-of-arrays of true/false values
    for(let i=0; i<nrows; i++){
      let row=[];
      for(let j=0; j<ncols; j++){
        let b = Math.random()<this.props.chanceLightStartsOn? true:false;
        row.push(b);
      }
      board.push(row);
    }
    return board
  }

  createBoard(){
    let board = [];
    for(let i=0; i<this.props.nrows; i++){
      let row=[];
      for(let j=0; j<this.props.ncols; j++){
        row.push(<Cell key={`${i}-${j}`} coord={`${i}-${j}`}isLit={this.state.board[i][j]} flipCellsAroundMe={this.flipCellsAround}/>);
      }
      board.push(<tr>{row}</tr>)
    }
    return board;
  }

  /** handle changing a cell: update board & determine if winner */

  flipCellsAround(coord) {
    let {ncols, nrows} = this.props;
    let board = this.state.board;
    let [r, c] = coord.split("-").map(Number);


    function flipCell(r, c) {
      // if this coord is actually on board, flip it
      console.log("attempting to flip:"+r+","+c);
      if (r >= 0 && r < nrows && c >= 0 && c < ncols) {
        board[r][c] = !board[r][c];
      }
    }

    // TODO: flip this cell and the cells around it
    flipCell(r,c);
    flipCell(r+1,c);
    flipCell(r-1,c);
    flipCell(r,c-1);
    flipCell(r,c+1);
    // win when every cell is turned off
    // TODO: determine is the game has been won
    if(this.isWin()) this.setState({hasWon: true});

    //this.setState({board, hasWon});
    this.setState({board: board});
  }

  isWin(){
    let {ncols, nrows} = this.props;
    let board = this.state.board;
    for(let i=0; i<nrows; i++){
      for(let j=0; j<ncols; j++){
        if(board[i][j]==true) return false;
      }
    }
    return true;
  }

  /** Render game board or winning message. */

  render() {
    return(
      <div>
        {this.isWin()
          ?
          <h1>You win!</h1>
          :
          <div>
            <h1>Lights Out</h1>
            <table>
              {this.createBoard()}
            </table>
          </div>}
      </div>
    )
    // if the game is won, just show a winning msg & render nothing else
    
    // make table board

    // TODO
  }
}


export default Board;

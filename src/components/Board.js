import React from 'react';
import Square from './Square';

class Board extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      squaresArray : Array(64).fill(null)
    }
  }
  render() {
    const chessBoard = this.state.squaresArray.map((element, index) => {
      let row;
      let color = (index % 2) ? "Brown" : "Tan";
      return<Square color={color}/>
    });
    return(
      <div className="Board">
          {chessBoard}
      </div>
      
    )
    };
}

export default Board;

import React from 'react';
import Row from './Row';

class Board extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      rowsArray : Array(8).fill(null)
    }
  }
  render() {
    const chessBoard = this.state.rowsArray.map((element, index) => {
      let rowNumber = index + 1;
      return<Row rownumber={rowNumber} key={rowNumber}/>
    });
    return(
      <div className="Board">
          {chessBoard}
      </div>
      
    )
  };
}

export default Board;

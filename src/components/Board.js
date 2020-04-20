import React from 'react';
import Row from './Row';
import Square from './Square'

class Board extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      squaresArray: Array(64).fill(null),
      rowsArray : Array(8).fill(null)
    }
  }
  render() {
    const chessBoard = this.state.squaresArray.map((element, index) => {
      let colNumber = index + 1;      //need to fix this still.
      let rowNumber = Math.ceil(colNumber/8);
      const keyName = rowNumber.toString() + '-' + colNumber.toString()
      let color;
      if(rowNumber % 2){
          color = (index % 2) ? "Brown" : "Tan";
      }else{
          color = (index % 2) ? "Tan" : "Brown";
      }
      return(
          <>
              <Square color={color} rownumber={rowNumber} colnumber={colNumber}
                  key={keyName}/>
          </>
      )
  });
    // const chessBoard = this.state.rowsArray.map((element, index) => {
    //   let rowNumber = index + 1;
    //   return<Row rownumber={rowNumber} key={rowNumber}/>
    // });
    return(
      <div className="Board">
          {chessBoard}
      </div>
    )
  };
}

export default Board;

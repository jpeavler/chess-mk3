import React from 'react';
import Piece from './Piece'

function Square(props) {
  return (
    <div className="Square" color={props.color} rownumber={props.rownumber}
    colnumber={props.colNumber} >
        {/* {props.rownumber}-{props.colnumber} */}
        <Piece color="white" type="pawn"/>
    </div>
  );
}

export default Square;

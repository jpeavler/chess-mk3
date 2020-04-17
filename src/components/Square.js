import React from 'react';

function Square(props) {
  return (
    <div className="Square" color={props.color} rownumber={props.rownumber}
    colnumber={props.colNumber} >
        {/* {props.rownumber}-{props.colnumber} */}
    </div>
  );
}

export default Square;

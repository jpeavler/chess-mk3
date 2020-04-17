import React from 'react';

function Square(props) {
  return (
    <div className="Square" color={props.color} rownumber={props.rownumber}
    colnumber={props.colNumber} pieceinside={props.pieceinside}>
        
    </div>
  );
}

export default Square;

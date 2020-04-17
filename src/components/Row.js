import React from 'react';
import Square from './Square';

class Row extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            squaresArray: Array(8).fill(null)
        }
    }
    render(){
        const chessRow = this.state.squaresArray.map((element, index) => {
            let rowNumber = this.props.rowNumber;
            let color;
            if(rowNumber % 2){
                color = (index % 2) ? "Brown" : "Tan";
            }else{
                color = (index % 2) ? "Tan" : "Brown";
            }
            
            return<Square color={color}/>
        });
        return (
            <div className="Row" rowNumber={this.props.rowNumber}>
                {chessRow}
            </div>
          );
    }
   
}

export default Row;

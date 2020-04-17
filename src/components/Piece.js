import React from 'react'

function Piece(props) {
    function renderPiece(type, color){
        let pieceLetter;
        switch(type) {
            case "pawn":
                pieceLetter = "P";
                break;
            case "rook":
                pieceLetter = "R";
                break;
            case "knight":
                pieceLetter = "K";
                break;
            case "bishop":
                pieceLetter = "B";
                break;
            case "queen":
                pieceLetter = "Q";
                break;
            case "king":
                pieceLetter = "K";
                break;
            default:
                pieceLetter = ""       //Will Represent No Piece
        }
        return<div className="Piece" color={color} type={type}>{pieceLetter}</div>;
    }
    return (
        renderPiece(props.type, props.color)
    )
}
export default Piece;

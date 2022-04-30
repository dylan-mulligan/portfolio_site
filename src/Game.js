import React from 'react';
import ReactDOM from 'react-dom';
import './Game.css';

function Square(props) {
    return (
        <button id={props.id} className="square" onClick={props.onClick}>
            {props.value}
        </button>
    );
}

class Board extends React.Component {
    handleClick(e) {
        if(calculateWinner(this.props.squares)) return;
        this.props.updateBoard(e.target.id);
    }

    renderSquare(i) {
        return <Square
            id={i}
            value={this.props.squares[i]}
            onClick={this.handleClick.bind(this)}
        />;
    }

    render() {
        const winner = calculateWinner(this.props.squares);
        let status;

        if(winner) status = (winner === 'Tie' ? 'Tie Game' : 'Winner: ' + winner);
        else status = 'NEXT PLAYER: ' + (this.props.xIsNext ? 'X' : 'O');

        return (
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    // check for win
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        // if winner found
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }

    // check for tie
    let filled = 0;
    for (let i = 0; i < 9; i++) {
        // count filled squares
        if(squares[i]) { filled++; }
    }
    if(filled === 9) {
        return 'Tie';
    }
    return null;
}

class Game extends React.Component {
    state = {
        squares: ['', '', '', '', '', '', '', '', ''],
        xIsNext: true
    }

    render() {
        return (
            <div className="game" id='game'>
                <div className="game-board" >
                    <Board squares={this.state.squares} xIsNext={this.state.xIsNext} updateBoard={this.updateBoard.bind(this)}/>
                </div>
                <div className="game-info">
                    <div>{/* status */}</div>
                    <ol>{/* TODO */}</ol>
                </div>
                <div className='container'>
                    <button className='button' onClick={this.reset.bind(this)}>Play Again</button>
                </div>
            </div>
        );
    }

    updateBoard(n) {
        const squares = this.state.squares;
        squares[n] = this.state.xIsNext ? 'X' : 'O';
        this.setState({squares: squares, xIsNext: !this.state.xIsNext});
    }

    reset() {
        this.setState({squares: ['', '', '', '', '', '', '', '', ''], xIsNext: true});
    }
}

export default Game;

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


class Game extends React.Component{
  render()
  {
    return(
      <div className="game">
        <div className="game-board">
          <Board/>
        </div>

      </div>

    )
  }
}
class Board extends React.Component 
{
  constructor(props)
  {
    super(props);
    this.state={
      squares:Array(9).fill(null),
    }
  }
  renderSquare(i)
  {
    return <Square value={this.state.squares[i]}/>;
  }
  render(){
    const status = 'Next Player: X';
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
    )

  }

} 
class Square extends React.Component{

  constructor(props)
  {
    super(props);
    // this.HandleClick = this.HandleClick.bind(this);
    this.state={
      value:null,
    };
  }

  // HandleClick(e){
  //   this.setState( )
  //   e.preventDefault();
  // }

  render (){
    return(
      <button className="square" onClick={()=>this.setState({value:'0'})}>
        {this.state.value}
      </button>
    );
  }
}



ReactDOM.render(
  <React.StrictMode>
    <Game />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

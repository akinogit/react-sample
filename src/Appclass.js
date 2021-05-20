import './App.css';
import React, { Component } from 'react'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      count: 0,
    }
  }

  componentDidMount(){
    console.log("didmount")
  }

  componentDidUpdate(){
    console.log("didupdate")
  }

  render() {
    return (
      <>
        <p>{`${this.state.count}回クリックされました`}</p>
        <div>
          <button onClick={()=> this.setState({count: this.state.count + 1})} >
            ボタン
          </button>
          <button onClick={()=> this.setState({count: 0})}>
            リセット
          </button>
        </div>
      </>
    )
  }
}

export default App
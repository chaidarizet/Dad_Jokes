import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'reactstrap';
import axios from 'axios';

class App extends Component {
  constructor(){
    super();
    this.state={
      tebakan:'',
      jawaban:''
    }
  }
  GetLaugh(){
    var url='https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_joke'
    axios.get(url).then((x)=>{
      console.log(x.data)
      this.setState({
        tebakan:x.data.punchline,
        jawaban:x.data.setup
      })
    })
  }
  render() {
    const cardp = 
      {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width:'400px',
      };
const teks =
      {
      textAlign:'center'
      };  
    return (
      <div style={{backgroundColor:"pink", height:"800px"}}>
      <center>
        <div className="card" style={cardp}>
          <div className="card-body">
            <h5 className="card-title" style={teks}>{this.state.jawaban}</h5>
            <p className="card-text" style={teks}>{this.state.tebakan}</p>
            <p className="card-text" style={teks}>😀</p> 
            <button onClick={()=>{this.GetLaugh()}} class="btn btn-primary btn-sm btn-right " style={teks}>Get Laugh</button>
          </div>
        </div>
        </center>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {firebaseConnect} from './firebaseConnect';
import * as firebase from 'firebase';
class App extends Component {

  pushData = () => {
    var connectData = firebase.database().ref('dataForNote');
    connectData.push({
      id: "4",
      titleNote : "Title demo",
      contentNote: "content demo"
    })
  }


  deleteData = (id) => {
    var connectData = firebase.database().ref('dataForNote');
    connectData.child(id).remove();
    console.log('xoa rồi má ơi');
  }

  render() {
    console.log(firebaseConnect);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <button onClick={() => this.pushData()}>Click me</button>
        <button onClick={() => this.deleteData("-LNQslYJGUxhUUEKss6W")}>Xóa me</button>
      </div>
    );
  }
}

export default App;

import './App.css';
import React from 'react';
import Button from '@material-ui/core/Button';
import red from '@material-ui/core/colors/red';

// import logo from './logo.svg';
// import ReactDOM from 'react-dom';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
//
// export default App;


export default function App() {

    const primary = red[500];

    return (
        <Button variant="contained" color='primary'>
            你好，世界
        </Button>
    );
}

// ReactDOM.render(<App />, document.querySelector('#app'));

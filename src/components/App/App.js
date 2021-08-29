// import logo from './logo.svg';
import './App.scss';
import CustomNavbar from "../CustomNavbar/CustomNavbar";

function App() {
    return (
    <div className="App">
        {/*<header className="App-header">*/}
        {/*  <img src={logo} className="App-logo" alt="logo" />*/}
        {/*  <p>*/}
        {/*    Edit <code>src/App.js</code> and save to reload.*/}
        {/*  </p>*/}
        {/*  <a*/}
        {/*    className="App-link"*/}
        {/*    href="https://reactjs.org"*/}
        {/*    target="_blank"*/}
        {/*    rel="noopener noreferrer"*/}
        {/*  >*/}
        {/*    Learn React*/}
        {/*  </a>*/}
        {/*</header>*/}
        <CustomNavbar />
        <h1>Welcome to Brendan's personal website!</h1>
        <p>This serves as a test environment to learn React and SASS.</p>
    </div>
    );
}

export default App;

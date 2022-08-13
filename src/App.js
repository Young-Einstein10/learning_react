import logo from "./logo.svg";
import "./App.css";
import HelloWorld from "./HelloWorld";

function App() {
  const data = [
    {
      title: "Blog Title 1",
      content: "This is Blog Title 1",
    },
    {
      title: "Blog Title 2",
      content: "This is Blog Title 2",
    },
    {
      title: "Blog Title 3",
      content: "This is Blog Title 3",
    },
    {
      title: "Blog Title 4",
      content: "This is Blog Title 4",
    },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      {data.map((item) => {
        return <HelloWorld blog={item} className="test" />;
      })}
    </div>
  );
}

export default App;

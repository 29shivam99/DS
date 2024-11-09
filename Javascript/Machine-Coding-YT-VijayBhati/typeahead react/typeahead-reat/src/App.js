import "./App.css";
import ItemsList from "./ItemsList";
import SearchBox from "./SearchBox";

function App() {
  return (
    <div className="App">
      <SearchBox
        name={"input"}
        label={"Search the warriors"}
        placeholder={"Search something"}
        errorMessage={() => <div>Some error occurred</div>}
        noResults={() => <div>No results found</div>}
        url={`https://swapi.dev/api/people/?search=`}
        debounceDelay={400}
        autoComplete={true}
        resultantItems={10}
        styleType={{ input: { backgroundColor: "blue", padding: "10px" } }}
      />
    </div>
  );
}

export default App;

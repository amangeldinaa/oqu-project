import '../App.css';
import Header from "./Header/Header"
import Books from "./Book/Books"
import Search from "./Search/Search"


function App() {
  return (
    <div className='app'>
      <Header />
      <Search/>
      {/* <Books/> */}
    </div>
  );
}

export default App;

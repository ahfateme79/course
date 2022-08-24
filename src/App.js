import Header from './components/header/header';
import Navigation from './components/navigation/nav';
import TabBar from './components/course/course-tab';
import Items from './components/items/item';
import './App.css'
import TabItems from './components/tab/tab';


function App() {
  return (
    <div className="App">
      {/* <i className="fa fa-spinner fa-spin"></i> */}
      <Header/>
      <Navigation/>
      <TabBar/>
      <TabItems/>
      <Items/>
   
    </div>
  );
}

export default App;

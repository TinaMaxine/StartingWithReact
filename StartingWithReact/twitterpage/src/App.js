import './App.css';
import SideNav from './components/left-comp/SideNav';
import NewPost from './components/middle-comp/NewPost';
function App() {
  return (
    <>
      <div className="outest-div">
        <SideNav className="side-nav"></SideNav>
        <div className="middle-sec">
          <NewPost></NewPost>
        </div>
      </div>
    </>
  );
}

export default App;

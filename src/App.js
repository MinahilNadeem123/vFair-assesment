import './App.css';
import SideNav from './Components/sidenav/SideNav';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import TopNav from './Components/topnav/TopNav';

function App() {
  return (
    <div className="App">
      <TopNav />
      <SideNav />
    </div>
  );
}

export default App;

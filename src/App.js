import logo from './logo.svg';
// import './App.css';
import NavigationBar from './components/navigation/NavigationBar';
import IconSidebar from './components/Icon Sidebar/IconSidebar';
import LeftSidebar from './components/left sidebar/LeftSidebar';

function App() {
  return (
    <div className='App'>
      <NavigationBar />
      <IconSidebar />
      <LeftSidebar />
    </div>
  );
}

export default App;

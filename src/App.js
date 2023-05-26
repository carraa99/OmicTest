import logo from './logo.svg';
// import './App.css';
import NavigationBar from './components/navigation/NavigationBar';
import IconSidebar from './components/Icon Sidebar/IconSidebar';
import LeftSidebar from './components/left sidebar/LeftSidebar';
import Editor from './components/editor/Editor';

function App() {
  return (
    <div className='App'>
      <NavigationBar />
      <IconSidebar />
      <LeftSidebar />
      <Editor />
    </div>
  );
}

export default App;

import logo from './logo.svg';
// import './App.css';
import './assets/global.css'
import NavigationBar from './components/navigation/NavigationBar';
import IconSidebar from './components/Icon Sidebar/IconSidebar';
import LeftSidebar from './components/left sidebar/LeftSidebar';
import Editor from './components/editor/Editor';
import Table from './components/table/Table';
import OmicLayout from './components/omic-layout/OmicLayout';

function App() {
  return (
    <div className='App'>
      {/* <NavigationBar />
      <IconSidebar />
      <LeftSidebar />
      <Editor />
      <Table /> */}
      <OmicLayout />
    </div>
  );
}

export default App;

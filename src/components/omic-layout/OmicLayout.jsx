import './OmicLayout.css'
import NavigationBar from "../navigation/NavigationBar";
import IconSidebar from "../Icon Sidebar/IconSidebar";
import LeftSidebar from "../left sidebar/LeftSidebar";
import Editor from "../editor/Editor";
import Table from "../table/Table";
const OmicLayout = () => {
    return <div className="omicLayout">
        <NavigationBar />
        <IconSidebar />
        <LeftSidebar />
        <Editor />
        <Table />
    </div>;
}
 
export default OmicLayout;
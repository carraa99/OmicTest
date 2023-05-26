import './LeftSidebar.css'
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import {AiFillFolder} from "react-icons/ai"
const LeftSidebar = () => {
    return (
      <div className="leftSidebar">
        <h2
          style={{
            color: "white",
            fontStyle: "bold",
                    margin: 15,
                    marginBottom:5,
            padding: 20,
            paddingLeft: 15,
          }}
        >
          Files
        </h2>
        <div className="sidebarWrapper">
          <div className="bage1">config</div>
          <div style={{ color: "#B5BFC7" }}>dataform</div>
        </div>
        <div className="sidebarWrapper">
          <div className="bage1">config</div>
          <div style={{ color: "#B5BFC7" }}>package-lock</div>
        </div>
        <div className="sidebarWrapper">
          <div className="bage1">config</div>
          <div style={{ color: "#B5BFC7" }}>package</div>
        </div>

        <div className="lists">
          <div>
            {" "}
            <ExpandMoreIcon style={{ color: "#727E8A" }} />
          </div>
          <div>
            <AiFillFolder style={{ color: "#727E8A" }} size={25} />
          </div>
          <div style={{ color: "#B5BFC7" }}> models</div>
        </div>
        <div className="list2">
          <div>
            {" "}
            <ExpandMoreIcon style={{ color: "#727E8A" }} />
          </div>
          <div>
            <AiFillFolder style={{ color: "#727E8A" }} size={25} />
          </div>
          <div style={{ color: "#B5BFC7" }}> 1_simple_examples</div>
        </div>
        <div
          className="sidebarWrapper3"
          style={{ backgroundColor: "#2E3A46", padding: 5, paddingLeft: 0 }}
        >
          <div className="bage1 bgClass" style={{ backgroundColor: "#8CA261" }}>
            SQL
          </div>
          <div style={{ color: "#B5BFC7" }}>dataset_1</div>
          <div style={{ color: "#B5BFC7", fontSize: 20, marginTop: -7 }}>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;...
          </div>
        </div>
        <div className="sidebarWrapper2">
          <div className="bage1" style={{ backgroundColor: "#8CA261" }}>
            SQL
          </div>
          <div style={{ color: "#B5BFC7" }}>dataset_2_with_ref </div>
        </div>
        <div className="list2">
          <div>
            {" "}
            <ExpandMoreIcon style={{ color: "#727E8A" }} />
          </div>
          <div>
            <AiFillFolder style={{ color: "#727E8A" }} size={25} />
          </div>
          <div style={{ color: "#B5BFC7" }}> 2_advanced_examples</div>
        </div>
        <div className="sidebarWrapper2">
          <div className="bage1" style={{ backgroundColor: "#8CA261" }}>
            SQL
          </div>
          <div style={{ color: "#B5BFC7" }}>dataset_3 increa...</div>
        </div>
        <div className="sidebarWrapper2">
          <div
            className="bage1"
            style={{ backgroundColor: "#E8D44D", color: "black" }}
          >
            JS
          </div>
          <div style={{ color: "#B5BFC7" }}>dataset_4_increase...</div>
        </div>
        <div className="list2">
          <div>
            {" "}
            <ExpandMoreIcon style={{ color: "#727E8A" }} />
          </div>
          <div>
            <AiFillFolder style={{ color: "#727E8A" }} size={25} />
          </div>
          <div style={{ color: "#B5BFC7" }}> 3_operations_and_as</div>
        </div>
        <div className="sidebarWrapper2">
          <div className="bage1" style={{ backgroundColor: "#518E9B" }}>
            ops
          </div>
          <div style={{ color: "#B5BFC7" }}>grant_assess</div>
        </div>
        <div className="sidebarWrapper2">
          <div
            className="bage1"
            style={{ backgroundColor: "#C48A69", color: "white" }}
          >
            assert
          </div>
          <div style={{ color: "#B5BFC7" }}>simple_assertion...</div>
        </div>
        <div className="lists">
          <div>
            {" "}
            <ExpandMoreIcon style={{ color: "#727E8A" }} />
          </div>
          <div>
            <AiFillFolder style={{ color: "#727E8A" }} size={25} />
          </div>
          <div style={{ color: "#B5BFC7" }}> models_2</div>
        </div>
      </div>
    );
}
 
export default LeftSidebar;
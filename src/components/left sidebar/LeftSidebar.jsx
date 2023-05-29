import "./LeftSidebar.css";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { AiFillFolder } from "react-icons/ai";
import React from "react";
import PropTypes from "prop-types";
import SvgIcon from "@material-ui/core/SvgIcon";
import { alpha, makeStyles, withStyles } from "@material-ui/core/styles";
import TreeView from "@mui/lab/TreeView";
import TreeItem, { treeItemClasses } from "@mui/lab/TreeItem";
import Collapse from "@mui/material/Collapse";
import { useSpring, animated } from "@react-spring/web";

import "@mui/lab/TreeItem";
function MinusSquare(props) {
  return (
    <SvgIcon fontSize="inherit" style={{ width: 14, height: 14 }} {...props}>
      {/* tslint:disable-next-line: max-line-length */}
      <path d="M22.047 22.074v0 0-20.147 0h-20.12v0 20.147 0h20.12zM22.047 24h-20.12q-.803 0-1.365-.562t-.562-1.365v-20.147q0-.776.562-1.351t1.365-.575h20.147q.776 0 1.351.575t.575 1.351v20.147q0 .803-.575 1.365t-1.378.562v0zM17.873 11.023h-11.826q-.375 0-.669.281t-.294.682v0q0 .401.294 .682t.669.281h11.826q.375 0 .669-.281t.294-.682v0q0-.401-.294-.682t-.669-.281z" />
    </SvgIcon>
  );
}

function PlusSquare(props) {
  return (
    <SvgIcon fontSize="inherit" style={{ width: 14, height: 14 }} {...props}>
      {/* tslint:disable-next-line: max-line-length */}
      <path d="M22.047 22.074v0 0-20.147 0h-20.12v0 20.147 0h20.12zM22.047 24h-20.12q-.803 0-1.365-.562t-.562-1.365v-20.147q0-.776.562-1.351t1.365-.575h20.147q.776 0 1.351.575t.575 1.351v20.147q0 .803-.575 1.365t-1.378.562v0zM17.873 12.977h-4.923v4.896q0 .401-.281.682t-.682.281v0q-.375 0-.669-.281t-.294-.682v-4.896h-4.923q-.401 0-.682-.294t-.281-.669v0q0-.401.281-.682t.682-.281h4.923v-4.896q0-.401.294-.682t.669-.281v0q.401 0 .682.281t.281.682v4.896h4.923q.401 0 .682.281t.281.682v0q0 .375-.281.669t-.682.294z" />
    </SvgIcon>
  );
}

function CloseSquare(props) {
  return (
    <SvgIcon
      className="close"
      fontSize="inherit"
      style={{ width: 14, height: 14 }}
      {...props}
    >
      {/* tslint:disable-next-line: max-line-length */}
      <path d="M17.485 17.512q-.281.281-.682.281t-.696-.268l-4.12-4.147-4.12 4.147q-.294.268-.696.268t-.682-.281-.281-.682.294-.669l4.12-4.147-4.12-4.147q-.294-.268-.294-.669t.281-.682.682-.281.696 .268l4.12 4.147 4.12-4.147q.294-.268.696-.268t.682.281 .281.669-.294.682l-4.12 4.147 4.12 4.147q.294.268 .294.669t-.281.682zM22.047 22.074v0 0-20.147 0h-20.12v0 20.147 0h20.12zM22.047 24h-20.12q-.803 0-1.365-.562t-.562-1.365v-20.147q0-.776.562-1.351t1.365-.575h20.147q.776 0 1.351.575t.575 1.351v20.147q0 .803-.575 1.365t-1.378.562v0z" />
    </SvgIcon>
  );
}

function TransitionComponent(props) {
  const style = useSpring({
    from: { opacity: 0, transform: "translate3d(20px,0,0)" },
    to: {
      opacity: props.in ? 1 : 0,
      transform: `translate3d(${props.in ? 0 : 20}px,0,0)`,
    },
  });

  return (
    <animated.div style={style}>
      <Collapse {...props} />
    </animated.div>
  );
}

TransitionComponent.propTypes = {
  /**
   * Show the component; triggers the enter or exit states
   */
  in: PropTypes.bool,
};

const StyledTreeItem = withStyles((theme) => ({
  iconContainer: {
    "& .close": {
      opacity: 0.3,
    },
  },
  group: {
    marginLeft: 7,
    paddingLeft: 18,
    borderLeft: `1px dashed ${alpha(theme.palette.text.primary, 0.4)}`,
  },
}))((props) => (
  <TreeItem {...props} TransitionComponent={TransitionComponent} />
));

const useStyles = makeStyles({
  root: {
    height: 264,
    flexGrow: 1,
    maxWidth: 400,
  },
});
const LeftSidebar = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(["1"]);

  const handleToggle = (event, nodeIds) => {
    setExpanded(nodeIds);
  };
  return (
    <div className="leftSidebar">
      <div class="vl"></div>
      <div class="v2"></div>
      <div class="v3"></div>
      <div class="v4"></div>
      <h2
        style={{
          color: "white",
          fontStyle: "bold",
          margin: 15,
          marginBottom: 5,
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

      {/* IT STARTS HERE */}

      {/* IT ENDS  */}

      <div className="lists">
        <div>
          {" "}
          <ExpandMoreIcon style={{ color: "#727E8A" }} />
        </div>
        <div>
          <AiFillFolder style={{ color: "#727E8A" }} size={25} />
        </div>
        <div style={{ color: "#B5BFC7", marginBottom:95.3 }}> models_2</div>
      </div>
    </div>
  );
};

export default LeftSidebar;

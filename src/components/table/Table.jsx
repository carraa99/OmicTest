import "./Table.css";
import { RiFileSearchLine } from "react-icons/ri";
import { TbSchema } from "react-icons/tb";
import { MdRefresh } from "react-icons/md";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import * as React from "react";
import PropTypes from "prop-types";
import SvgIcon from "@mui/material/SvgIcon";
import { alpha, styled } from "@mui/material/styles";
import TreeView from "@mui/lab/TreeView";
import TreeItem, { treeItemClasses } from "@mui/lab/TreeItem";
import Collapse from "@mui/material/Collapse";
import { useSpring, animated } from "@react-spring/web";
import { BsEye } from "react-icons/bs";
import { makeStyles } from "@material-ui/core/styles";
import { IoMdClose } from "react-icons/io";

const useStyles = makeStyles((theme) => ({
  customTreeView: {
    height: 190,
    flexGrow: 1,
    maxWidth: 400,
    overflow: "hidden",
    backgroundColor: "#24303C",
    marginTop: -1,
  },
  customTreeItem: {
    "& .MuiTreeItem-group": {
      borderColor: "#fff", // Replace with your desired color
    },
  },
}));
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
    from: {
      opacity: 0,
      transform: "translate3d(20px,0,0)",
    },
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

const StyledTreeItem = styled((props) => (
  <TreeItem {...props} TransitionComponent={TransitionComponent} />
))(({ theme }) => ({
  [`& .${treeItemClasses.iconContainer}`]: {
    "& .close": {
      opacity: 0.3,
    },
  },
  [`& .${treeItemClasses.group}`]: {
    marginLeft: 15,
    paddingLeft: 18,
    borderLeft: "0.2px solid rgb(86, 90, 93, .8)",
  },
}));

const Table = () => {
  return (
    <div className="omicTable">
      <div className="headerWrapper">
        <div className="tableHeader">
          <div>
            <RiFileSearchLine />
          </div>
          <div>Query results</div>
        </div>
        <div className="tableHeader2">
          <div>
            <TbSchema />
          </div>
          <div>Schemas</div>
        </div>
      </div>
      {/* table data */}
      <div className="tableData">
        <div className="columnDataWrapper">
          <div className="leftColumn">
            <div className="leftColumnHeader">
              <div className="columnTitle" style={{ marginTop: -5 }}>
                {" "}
                Refresh
              </div>
              <div>
                <MdRefresh style={{ marginTop: 0 }} />
              </div>
            </div>
            <div className="columnData" style={{ display: "block" }}>
              {/* <ExpandMoreIcon style={{ color: "#727E8A" }} /> */}
              <TreeView
                aria-label="customized"
                defaultExpanded={[""]}
                defaultCollapseIcon={<ExpandMoreIcon />}
                defaultExpandIcon={<ExpandMoreIcon />}
                defaultEndIcon={<BsEye />}
                sx={{
                  height: 190,
                  flexGrow: 1,
                  maxWidth: 400,
                  overflow: "hidden",
                  backgroundColor: "#24303C",
                  marginTop: -1,
                }}
              >
                <StyledTreeItem
                  nodeId=""
                  label="datafrom_demo"
                  className="omicTablePrimaryTextColor"
                >
                  <StyledTreeItem
                    nodeId="2"
                    label="dataset_1"
                    className="omicTablePrimaryTextColor"
                  />

                  <StyledTreeItem
                    nodeId="4"
                    label="dataset_5_from_script_builder"
                    style={{ color: "#CDD9DD", backgroundColor: "#2D3945" }}
                  />
                  <StyledTreeItem
                    nodeId="5"
                    label="dataset_3_incremental_date"
                    className="omicTablePrimaryTextColor"
                  />
                  <StyledTreeItem
                    nodeId="6"
                    label="dataset_4_incremental_snapshot"
                    className="omicTablePrimaryTextColor"
                  />
                  <StyledTreeItem
                    nodeId="7"
                    label="reporting_gb"
                    className="omicTablePrimaryTextColor"
                  />
                </StyledTreeItem>
                <StyledTreeItem
                  nodeId="1"
                  label="datafrom_set2"
                  className="omicTablePrimaryTextColor"
                >
                  <StyledTreeItem nodeId="10" label="dataset_1" />
                </StyledTreeItem>
              </TreeView>
            </div>
          </div>
          <div className="rightColumn">
            <div className="rightColumnHeader">
              <div className="bage1" style={{ backgroundColor: "#528D99" }}>
                view
              </div>
              <div className="omicPrimaryTextColor">datfrom_demo.dataset_1</div>
              <div style={{ color: "#57636F", marginLeft: 530 }}>
                <IoMdClose size={25} />
              </div>
            </div>
            <table className="myTable custom-table">
              {/* <thead>
                <tr>
                  <th>Column 1</th>
                  <th>Column 2</th>
                </tr>
              </thead> */}
              <tbody>
                <tr>
                  <td>Field</td>
                  <td>Type</td>
                </tr>
                <tr className="omicTablePrimaryTextColor">
                  <td>date</td>
                  <td>date</td>
                </tr>
                <tr className="omicTablePrimaryTextColor">
                  <td>device_type</td>
                  <td>character varying</td>
                </tr>
                <tr className="omicTablePrimaryTextColor">
                  <td>country</td>
                  <td>character varying</td>
                </tr>
                <tr className="omicTablePrimaryTextColor">
                  <td>sessions</td>
                  <td>integer</td>
                </tr>
                <tr className="omicTablePrimaryTextColor">
                  <td>revenue</td>
                  <td>integer</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;

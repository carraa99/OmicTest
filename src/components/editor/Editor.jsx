import React from "react";
import "./Editor.css";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import { FaRegQuestionCircle } from "react-icons/fa";
import { BsThreeDots} from 'react-icons/bs'
import { TbSquareRoundedNumber3Filled } from 'react-icons/tb'
import {MdExpandMore} from 'react-icons/md'
import {TbNumber3} from 'react-icons/tb'
const useStyles = makeStyles((theme) => ({
  root: {
    // width: "35vw",
    maxWidth: 360,
    backgroundColor: "#2E3A46",
    top: 56,
    paddingRight: -10,
    marginRight: -10,
  },
  divider: {
    borderBottom: "0.2px solid rgb(86, 90, 93, .8)",
  },
}));

const Editor = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(2);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  return (
    <div className="editorWrapper">
      <div className="editor">
        <div className="editorHeader">
          <p style={{ color: "#BDC6CF" }}>
            definitions/1_simple_examples/dataset2_with_ref.sql
          </p>
          {/* <Button variant="contained">Default</Button> */}
          <button className="editorSave">Save</button>
        </div>
        <div className="editorBox">
          <div className="numbers">1</div>
          <div>-- learn more on https://docs.project.co/guides/tables/</div>
        </div>
        <div className="editorBox">
          <div className="numbers">2</div>
          <div></div>
        </div>
        <div className="editorBox">
          <div className="numbers">3</div>
          <div>
            -- js <span style={{ color: "#80B579" }}>type</span>('table')
          </div>
        </div>
        <div className="editorBox">
          <div className="numbers">4</div>
          <div></div>
        </div>
        <div className="editorBox">
          <div className="numbers">5</div>
          <div>
            <span style={{ color: "#7B6DB2" }}>SELECT</span> country
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
            &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;{" "}
            <span style={{ color: "#7B6DB2" }}>as</span> country
          </div>
        </div>
        <div className="editorBox">
          <div className="numbers">6</div>
          <div>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;device_type
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;{" "}
            <span style={{ color: "#7B6DB2" }}>as</span> device_type
          </div>
        </div>
        <div className="editorBox">
          <div className="numbers">7</div>
          <div>
            {" "}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span style={{ color: "#80B579" }}>
              <span style={{ color: "#80B579" }}>sum</span>
            </span>
            (revenue) &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span style={{ color: "#7B6DB2" }}>as</span>{" "}
            <span style={{ color: "#80B579" }}>
              <span style={{ color: "#80B579" }}>sum</span>
            </span>
            (revenue)
          </div>
        </div>
        <div className="editorBox">
          <div className="numbers">8</div>
          <div>
            {" "}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span style={{ color: "#80B579" }}>
              <span style={{ color: "#80B579" }}>sum</span>
            </span>
            (sessions) &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span style={{ color: "#7B6DB2" }}>as</span> sessions
          </div>
        </div>
        <div className="editorBox">
          <div className="numbers">9</div>
          <div>
            {" "}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span style={{ color: "#80B579" }}>sum</span>(pageviews)
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span style={{ color: "#7B6DB2" }}>as</span> pageviews
          </div>
        </div>
        <div className="editorBox">
          <div className="numbers">10</div>
          <div>
            <span style={{ color: "#7B6DB2" }}>FROM</span> country &nbsp;
            <span style={{ color: "#7B6DB2" }}>
              {" "}
              <span style={{ color: "#83A2E3" }}>my_table</span>
            </span>
          </div>
        </div>
        <div className="editorBox">
          <div className="numbers">11</div>
          <div>
            <span style={{ color: "#7B6DB2" }}>WHERE</span> country &nbsp;=
            <span style={{ color: "#C8A75A" }}> FRANCE</span>
          </div>
        </div>
        <div className="editorBox">
          <div className="numbers">12</div>
          <div>
            <span style={{ color: "#7B6DB2" }}>GROUP</span> BY &nbsp;=
            <span style={{ color: "#955574" }}> 1, 2</span>
          </div>
        </div>
      </div>
      {/* Right Side Bar */}
      <div className="rightSideBar">
        <Paper
          square
          style={{ height: 0, backgroundColor: "#2E3A46", border: "none" }}
        >
          <Tabs
            value={value}
            TabIndicatorProps={{
              style: {
                backgroundColor: "#C5CDD3",
              },
            }}
            textColor="primary"
            onChange={handleChange}
            aria-label="disabled tabs example"
            style={{
              height: 55.5,
              borderBottom: "0.2px solid rgb(86, 90, 93, .5)",
              marginLeft: 20,
            }}
          >
            <Tab
              label="Outline"
              style={{ color: "#FBFDFF", textTransform: "capitalize" }}
            />

            <Tab
              label="Documentation"
              style={{
                color: "#9099A2",
                textTransform: "capitalize",
              }}
            />
          </Tabs>
        </Paper>
        <List
          component="nav"
          className={classes.root}
          aria-label="mailbox folders"
        >
          <ListItem button style={{ color: "#AD9966" }}>
            <FaRegQuestionCircle style={{ marginRight: 10 }} />{" "}
            <ListItemText primary="No compilation issue" />
          </ListItem>
          <ListItem button style={{ color: "#AD9966" }}>
            <div
              className="rightSidebar2"
              style={{ backgroundColor: "#2E3A46", paddingLeft: 0 }}
            >
              <div className="bage1" style={{ backgroundColor: "#528D99" }}>
                table
              </div>
              <div style={{ color: "#B5BFC7" }}>dataset_2_with_ref</div>
              <div
                style={{
                  color: "#B5BFC7",
                  fontSize: 20,
                  marginTop: -7,
                  marginLeft: 65,
                }}
              >
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;...
              </div>
            </div>
          </ListItem>
          <Divider classes={{ root: classes.divider }} />
          <ListItem button divider>
            <ListItemText primary="Dependencies" style={{ color: "#BDC6CF" }} />
            <TbNumber3
              size={20}
              style={{ color: "white", backgroundColor: "#3D4854" }}
            />
            <MdExpandMore
              size={20}
              style={{ color: "#626E7A", marginLeft: 10 }}
            />
          </ListItem>
          <Divider classes={{ root: classes.divider }} />
          <ListItem button>
            <ListItemText primary="Compiled" style={{ color: "#BDC6CF" }} />
            <MdExpandMore
              size={20}
              style={{ color: "#626E7A", marginLeft: 10 }}
            />
          </ListItem>
          <Divider classes={{ root: classes.divider }} />
          <ListItem button>
            <ListItemText primary="Query" style={{ color: "#BDC6CF" }} />
            <MdExpandMore
              size={20}
              style={{ color: "#626E7A", marginLeft: 10 }}
            />
          </ListItem>
          <div style={{ marginLeft: 20, marginTop:20 }}>
            <button
              style={{
                padding: 10,
                backgroundColor: "#505D6B",
                border: "none",
                borderRadius: 10,
                paddingRight: 20,
                paddingLeft: 20,
                color: "#E4E9EA",
              }}
            >
              Execute query
            </button>
            <button
              style={{
                padding: 10,
                paddingRight: 20,
                paddingLeft: 20,
                marginLeft: 20,
                backgroundColor: "#3F51B5",
                border: "none",
                borderRadius: 10,
                color: "#E4E9EA",
              }}
            >
              Run this code
            </button>
          </div>
        </List>
      </div>
    </div>
  );
};

export default Editor;

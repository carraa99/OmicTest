import React, { useState } from 'react';
import { MdOutlineExpandMore } from 'react-icons/md'
import { RiLayoutLeft2Line } from 'react-icons/ri'
import { RiLayoutBottom2Line } from 'react-icons/ri'
import { RiLayoutRight2Line } from 'react-icons/ri'
import { RxSlider } from "react-icons/rx";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Button from "@material-ui/core/Button";
import './NavigationBar.css'
const NavigationBar = () => {
    return (
      <div className="navigationBar">
        <div className="header">
          <div style={{ marginLeft: 200 }}>
            <p style={{ color: "#6E7982" }}>
              Project Name <ExpandMoreIcon />
            </p>
          </div>

          <div className="secondItem">
            <p style={{ color: "#9DA4A8" }}>
              Development <ExpandMoreIcon />
            </p>
          </div>
          <div style={{ color: "#ccc" }}>
            <h2>..</h2>
          </div>

          <div>
            {" "}
            <Button
              variant="contained"
              color="primary"
              style={{ textTransform: "capitalize", borderRadius: 8 }}
              startIcon={<RxSlider />}
            >
              Commit (2 files)
            </Button>
          </div>
        </div>
        <div className="layout">
          <div style={{ color: "#6A7682" }}>
            <RiLayoutLeft2Line size={25} />
          </div>
          <div style={{ color: "#6A7682" }}>
            <RiLayoutBottom2Line size={25} />
          </div>
          <div style={{ color: "#6A7682" }}>
            <RiLayoutRight2Line size={25} />
          </div>
        </div>
      </div>
    );
}
 
export default NavigationBar;
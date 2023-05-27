import React, { useState } from "react";
import { MdOutlineExpandMore } from "react-icons/md";
import { RiLayoutLeft2Line } from "react-icons/ri";
import { RiLayoutBottom2Line } from "react-icons/ri";
import { RiLayoutRight2Line } from "react-icons/ri";
import { RxSlider } from "react-icons/rx";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Button from "@material-ui/core/Button";
import "./NavigationBar.css";
const NavigationBar = () => {
  return (
    <div className="navigationBar">
      <div className="header">
        <div
          style={{
            marginLeft: 100,
            display: "flex",
            justifyContent: "center",
            gap: "5px",
            alignItems: "center",
          }}
        >
          <p style={{ color: "#6E7982" }}>Project Name</p>
          <div style={{ marginTop: "8px", color: "#727E8A" }}>
            <ExpandMoreIcon />
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "5px",
            alignItems: "center",
            border: "0.2px solid rgb(86, 90, 93, .8)",
            // padding: "0px 20px",
            borderRadius: "10px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "5px",
              alignItems: "center",
              // border: "1px solid black",
              padding: "0px 0px 0px 20px",
              // borderRadius: "15px",
            }}
          >
            <div className="secondItem">
              <p style={{ color: "#9DA4A8", margin: 0 }}>Development</p>
            </div>
            <div style={{ marginTop: "8px", color: "#727E8A" }}>
              <ExpandMoreIcon />
            </div>
          </div>
          <div
            style={{
              color: "#ccc",
              fontSize: "20px",
              // marginBottom: "8px",
              borderLeft: "0.2px solid rgb(86, 90, 93, .8)",
              // padding: "0px 20px 0px 5px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <span
              style={{
                marginBottom: "8px",
                // borderLeft: "3px solid black",
                padding: "0px 10px 0px 10px",
              }}
            >
              ..
            </span>
          </div>
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
};

export default NavigationBar;

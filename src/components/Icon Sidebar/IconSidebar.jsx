import React from "react";
import "./IconSidebar.css";
import { AiFillPlayCircle } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { ImClock } from 'react-icons/im'
import { CgNotes } from 'react-icons/cg'
import { AiOutlineContainer } from 'react-icons/ai'
import { AiFillAlipayCircle } from 'react-icons/ai'
import { GiAbstract074 } from 'react-icons/gi'
import { ImSpinner8 } from "react-icons/im";
import { BiChevronRight } from "react-icons/bi";
import { CiSliderHorizontal } from "react-icons/ci";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import {BsFillDatabaseFill} from 'react-icons/bs'
import Avatar from "@material-ui/core/Avatar";
import girl from '../../assets/girl.jpg'
import osr from '../../assets/osr.jpg'
import {TbFidgetSpinner} from 'react-icons/tb'
const IconSideBar = () => {
  return (
    <div className="iconSidebar">
      <div className="icons">
        {/* <ImSpinner8 style={{ color: "white", marginBottom: 20 }} size={25} /> */}
        <img
          src={osr}
          style={{
            color: "white",
            marginBottom: 20,
            borderRadius: "50%",
            height: 30,
            widht: 40,
          }}
        />
        <PlayArrowIcon
          style={{
            color: "white",
            backgroundColor: "#547CD7",
            marginBottom: 22,
            borderRadius: 5,
          }}
          size={30}
        />

        <hr />

        <AiFillAlipayCircle
          style={{ marginBottom: 22 }}
          size={25}
          className="omicPrimaryIconColor"
        />
        <FiSearch
          style={{ marginBottom: 22 }}
          size={25}
          className="omicPrimaryIconColor"
        />
        <hr style={{ color: "#484545", width: 22 }} />

        <TbFidgetSpinner
          style={{ color: "#fff", marginBottom: 22 }}
          size={25}
        />
        <ImClock
          style={{ marginBottom: 22 }}
          size={25}
          className="omicPrimaryIconColor"
        />
        <CgNotes
          style={{ marginBottom: 22 }}
          size={25}
          className="omicPrimaryIconColor"
        />
        <BsFillDatabaseFill
          style={{ marginBottom: 22 }}
          size={25}
          className="omicPrimaryIconColor"
        />
        <hr style={{ color: "#484545", width: 20 }} />
        <BiChevronRight
          style={{ marginBottom: 22, marginTop: 20 }}
          size={35}
          className="omicPrimaryIconColor"
        />
        <CiSliderHorizontal
          style={{ marginBottom: 22, marginTop: 100 }}
          size={35}
          className="omicPrimaryIconColor"
        />
        <Avatar src={girl} style={{ marginBottom: 36 }}></Avatar>
      </div>
    </div>
  );
};

export default IconSideBar;

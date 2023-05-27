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
        <img src={osr} style={{ color: "white", marginBottom: 20, borderRadius:'50%', height:30, widht:40 }} />
        <PlayArrowIcon
          style={{
            color: "white",
            backgroundColor: "#547CD7",
            marginBottom: 22,
            borderRadius: 5,
          }}
          size={30}
        />
        <hr style={{ color: "#484545", width: 22 }} />
        <AiFillAlipayCircle
          style={{ color: "#6C767E", marginBottom: 22 }}
          size={25}
        />
        <FiSearch style={{ color: "#6C767E", marginBottom: 22 }} size={25} />
        <hr style={{ color: "#484545", width: 22 }} />

        <TbFidgetSpinner
          style={{ color: "#fff", marginBottom: 22 }}
          size={25}
        />
        <ImClock style={{ color: "#6C767E", marginBottom: 22 }} size={25} />
        <CgNotes style={{ color: "#6C767E", marginBottom: 22 }} size={25} />
        <BsFillDatabaseFill
          style={{ color: "#6C767E", marginBottom: 22 }}
          size={25}
        />
        <hr style={{ color: "#484545", width: 20 }} />
        <BiChevronRight
          style={{ color: "#6C767E", marginBottom: 22, marginTop: 20 }}
          size={35}
        />
        <CiSliderHorizontal
          style={{ color: "#6C767E", marginBottom: 22, marginTop: 100 }}
          size={35}
        />
        <Avatar src={girl} style={{ marginBottom: 15 }}></Avatar>
      </div>
    </div>
  );
};

export default IconSideBar;

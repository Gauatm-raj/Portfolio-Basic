import React from 'react'
import theme from "../../assets/theme_pattern.svg"
import data from "../../assets/project_data"
import arrow from "../../assets/arrow_icon.svg";
import "./project.css";

const Project = () => {
    
  return (
    <>
      <div id="project" className="project">
        <div className="project-title">
            <h1>My Projects</h1>
            <img src={theme} alt="" />
        </div>
        <div className="project-container">
           {data.map((text)=>{
            return  <div key={text.s_no} className="project_format">
            <h3>{text.s_no}</h3>
            <h2>{text.name}</h2>
            <p>{text.tech}</p>
            <div className="project-readmore">
                <p>Read More</p>
                <img src={arrow} alt="" />
            </div>
        </div>
           })}
        </div>
      </div>

    </>
  )
}

export default Project
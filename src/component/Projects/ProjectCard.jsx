import React from "react";
import h1 from "../../assets/h1.png";
import h3 from "../../assets/h3.png";
import h4 from "../../assets/h4.png";
import h5 from "../../assets/h5.png";
import h6 from "../../assets/h6.png";
import h7 from "../../assets/h7.png";
import h8 from "../../assets/h8.png";
import h9 from "../../assets/h9.png";
import h10 from "../../assets/h10.png";
import h11 from "../../assets/h11.png";
import h12 from "../../assets/h12.png";
import h13 from "../../assets/h13.png";
import h15 from "../../assets/h15.png";
import h2 from "../../assets/h2.png";

const ProjectCard = ({ project }) => {
  console.log(project.s_no);

  return (
    <div>
      {project.s_no == 1 && (
        <div>
          <h3 style={{ color: "black" }}>{project.name}</h3>
          <p style={{ color: "#a0a0a0" }}>{project.tech}</p>
          {project.desc != undefined ? (
            <p style={{ color: "black" }}>
              {project.desc.map(
                (data, idx) => idx + 1 + ": " + data.description
              )}
            </p>
          ) : (
            <p style={{ color: "black" }}>Not work</p>
          )}
          <div className="img-container">
            <img src={h1} alt="" />
            <img src={h2} alt="" />
            <img src={h3} alt="" />
            <img src={h4} alt="" />
            <img src={h5} alt="" />
            <img src={h6} alt="" />
            <img src={h7} alt="" />
            <img src={h8} alt="" />
            <img src={h9} alt="" />
            <img src={h10} alt="" />
            <img src={h11} alt="" />
            <img src={h12} alt="" />
            <img src={h13} alt="" />
            <img src={h15} alt="" />
          </div>
        </div>
      )}

                 
           {project.s_no==2 && <div>
            <h3 style={{color:"black"}}>{project.name}</h3>
            <p style={{color:"#a0a0a0"}}>{project.tech}</p>
            { project.desc!=undefined ? (
            <p style={{color:"black"}}>{project.desc.map((data,idx)=>(idx+1+": "+data.description))}</p>)
             :(<p style={{color:"black"}}>Not work</p>)}
           <div className="img-container">
            <img src={h1} alt="" />
            <img src={h2} alt="" />
           </div>

           </div>}

           {project.s_no==3 && <div>
            <h3 style={{color:"black"}}>{project.name}</h3>
            <p style={{color:"#a0a0a0"}}>{project.tech}</p>
            { project.desc!=undefined ? (
            <p style={{color:"black"}}>{project.desc.map((data,idx)=>(idx+1+": "+data.description))}</p>)
             :(<p style={{color:"black"}}>Not work</p>)}
           <div className="img-container">
            <img src={h1} alt="" />
            <img src={h2} alt="" />
           </div>

           </div>}

           {project.s_no==4 && <div>
            <h3 style={{color:"black"}}>{project.name}</h3>
            <p style={{color:"#a0a0a0"}}>{project.tech}</p>
            { project.desc!=undefined ? (
            <p style={{color:"black"}}>{project.desc.map((data,idx)=>(idx+1+": "+data.description))}</p>)
             :(<p style={{color:"black"}}>Not work</p>)}
           <div className="img-container">
            <img src={h1} alt="" />
            <img src={h2} alt="" />
           </div>

           </div>}

           {project.s_no==5 && <div>
            <h3 style={{color:"black"}}>{project.name}</h3>
            <p style={{color:"#a0a0a0"}}>{project.tech}</p>
            { project.desc!=undefined ? (
            <p style={{color:"black"}}>{project.desc.map((data,idx)=>(idx+1+": "+data.description))}</p>)
             :(<p style={{color:"black"}}>Not work</p>)}
           <div className="img-container">
            <img src={h1} alt="" />
            <img src={h2} alt="" />
           </div>

           </div>}
    </div>
  );
};

export default ProjectCard;

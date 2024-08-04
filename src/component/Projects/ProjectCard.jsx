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
import S0 from "../../assets/S0.png";
import S1 from "../../assets/S1.png";
import S3 from "../../assets/S3.png";
import S4 from "../../assets/S4.png";
import S5 from "../../assets/S5.png";
import S6 from "../../assets/S6.png";
import S7 from "../../assets/S7.png";
import Y1 from "../../assets/Y1.png";
import Y2 from "../../assets/Y2.png";
import Y3 from "../../assets/Y3.png";
import Y4 from "../../assets/Y4.png";
import F1 from "../../assets/F1.png";
import F2 from "../../assets/F2.png";
import F3 from "../../assets/F3.png";
import F4 from "../../assets/F4.png";
import F5 from "../../assets/F5.png";
import F6 from "../../assets/F6.png";
import G1 from "../../assets/G1.png";
import G2 from "../../assets/G2.png";
import t1 from "../../assets/t1.png";
import t2 from "../../assets/t2.png";
import t3 from "../../assets/t3.png";

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
            <img src={S0} alt="" />
            <img src={S1} alt="" />
            <img src={S3} alt="" />
            <img src={S4} alt="" />
            <img src={S5} alt="" />
            <img src={S6} alt="" />
            <img src={S7} alt="" />
           </div>

           </div>}

           {project.s_no==3 && <div>
            <h3 style={{color:"black"}}>{project.name}</h3>
            <p style={{color:"#a0a0a0"}}>{project.tech}</p>
            { project.desc!=undefined ? (
            <p style={{color:"black"}}>{project.desc.map((data,idx)=>(idx+1+": "+data.description))}</p>)
             :(<p style={{color:"black"}}>Not work</p>)}
           <div className="img-container">
            <img src={Y1} alt="" />
            <img src={Y2} alt="" />
            <img src={Y3} alt="" />
            <img src={Y4} alt="" />
           </div>

           </div>}

           {project.s_no==4 && <div>
            <h3 style={{color:"black"}}>{project.name}</h3>
            <p style={{color:"#a0a0a0"}}>{project.tech}</p>
            { project.desc!=undefined ? (
            <p style={{color:"black"}}>{project.desc.map((data,idx)=>(idx+1+": "+data.description))}</p>)
             :(<p style={{color:"black"}}>Not work</p>)}
           <div className="img-container">
            <img src={F1} alt="" />
            <img src={F2} alt="" />
            <img src={F3} alt="" />
            <img src={F4} alt="" />
            <img src={F5} alt="" />
            <img src={F6} alt="" />
           </div>

           </div>}

           {project.s_no==5 && <div>
            <h3 style={{color:"black"}}>{project.name}</h3>
            <p style={{color:"#a0a0a0"}}>{project.tech}</p>
            { project.desc!=undefined ? (
            <p style={{color:"black"}}>{project.desc.map((data,idx)=>(idx+1+": "+data.description))}</p>)
             :(<p style={{color:"black"}}>Not work</p>)}
           <div className="img-container">
            <img src={G1} alt="" />
            <img src={G2} alt="" />
           </div>

           </div>}

           {project.s_no==6 && <div>
            <h3 style={{color:"black"}}>{project.name}</h3>
            <p style={{color:"#a0a0a0"}}>{project.tech}</p>
            { project.desc!=undefined ? (
            <p style={{color:"black"}}>{project.desc.map((data,idx)=>(idx+1+": "+data.description))}</p>)
             :(<p style={{color:"black"}}>Not work</p>)}
           <div className="img-container">
            <img src={t1} alt="" />
            <img src={t2} alt="" />
            <img src={t3} alt="" />
           </div>

           </div>}
    </div>
  );
};

export default ProjectCard;

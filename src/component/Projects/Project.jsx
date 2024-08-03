import React, { useState } from 'react'
import theme from "../../assets/theme_pattern.svg"
import data from "../../assets/project_data"
import arrow from "../../assets/arrow_icon.svg";
import "./project.css";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ProjectCard from './ProjectCard';

function MyVerticallyCenteredModal(props) {
  
  //console.log(props.project.desc!=undefined)
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter" style={{color:"#a0a0a0"}}>
          {props.project.s_no}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
       <ProjectCard project={props.project}/>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

const Project = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const[curr,setCurr]=useState([
    {
      s_no:"",
      name:"",
      tech:"",
      desc:[
          {description:""},
          {description:""},
          {description:""},
          {description:""},
          {description:""},
          {description:""},
     ],
     image:"",
      
  }
  ]);
  
  function handleClick(text){
    setModalShow(true)
    setCurr(text);
    
  }
  if(setModalShow==false){
    setCurr([{
      s_no:"",
      name:"",
      tech:"",
      desc:[
          {description:""},
          {description:""},
          {description:""},
          {description:""},
          {description:""},
          {description:""},
     ],
     image:"",
      
  }])
  }
  
    
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
                <p onClick={()=>handleClick(text)}>Read More</p>
                <img src={arrow} onClick={()=>handleClick(text)}alt="" />
            </div>
            <MyVerticallyCenteredModal project={curr}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
        </div>
           })}
        </div>
       
      </div>

    </>
  )
}

export default Project
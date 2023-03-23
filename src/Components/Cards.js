import React from "react";
import C from "./C";
import "../Style/Card.css";

const Cards=()=>{
    const data  = [
      
        {
            id : 2,
            img: "./Img/cloudlb.jpg",
            title: "Market Place",
            des: "Test Estimation is a management activity which approximates how long a Task would take to complete. "
        },
        {
            id:3,
            img: "./Img/collateral.jpg",
            title: "Experience Labs",
            des: "Software Collateral means all printed and electronic documentation provided to User."
        },
        {
            id:4,
            img: "./Img/hld.jpg",
            title: "AI enabled HLD/LLD Generation",
            des: "Cloud hosting services within the industry facilitates multiple types of information sharing, including email services."
        },
        {
            id:5,
            img: "./Img/cloud.png",
            title: "Cloud Test Stratergy Generation",
            des: "A DevOps pipeline is a set of automated processes and tools that allows both developers and operations professionals."
        }
    
    ]
    
    return(
        <>
        <div className="card_div">
            
        {data.map((item,index)=>{return(
            <C title={item.title} des={item.des} img={item.img} />
)
        })}
        </div>
        </>

    )
}
export default Cards

import React from "react";
const Navbar = (props) => {
   
  return (
                                    ///navbar-1
    <nav style={{height:"80px",width:"100%",background:"rgb(220, 10, 248)"}} >
     
      <a className="navbar-brand m-2" href="/home" 
        style={{ color: "red",width:"200px",height:"200px",marginLeft:"30px",marginRight:"30px",fontSize:"40px"}}>
        <img src="logo.PNG" alt="not found" style={{width:"100px",height:"80px",borderRadius:"30%"}}></img>          
      </a>
      
      <div  style={{direction:"rtl",float:"right",marginRight:"100px",marginTop:"30px"}} >
       
          
            <a  class="as" href="/contact_us"   style={{ color: "yellow",display:"inline-block" ,marginRight:"40px",fontSize:"20px",fontStyle:"oblique",textDecoration:"none"}}>
              Contact_us
            </a>

            <a class="as" href="/about"   style ={{ color: "yellow" ,display:"inline-block",marginRight:"40px",fontSize:"20px",fontStyle:"oblique",textDecoration:"none"}}>
              About             
            </a>

            <a class="as" href="/home"  style= {{ color: "yellow" ,display:"inline-block",marginRight:"40px",fontSize:"20px",fontStyle:"oblique",textDecoration:"none"}}>
              Home           
            </a>
            
         
        
      </div>
      
    </nav>

 
  );
};
export default Navbar;

import React,{ Component } from "react"; 

class About extends Component
{
    state={};
   
    render(){
        return(
            <div style={{marginTop:"-30px",height:"400px",marginLeft:"-100px",marginRight:"-100px",backgroundColor:"rgb(32, 221, 174)"}}>
                <h3 style={{color:"white",marginLeft:"350px",marginTop:"30px"}}>This is AS Stylish</h3>
                <h6 style={{color:"red",marginLeft:"410px",marginTop:"10px"}}>Creativity,</h6>
                <h6 style={{color:"blue",marginLeft:"393px"}}>Customization,</h6>
                <h6 style={{color:"yellow",marginLeft:"405px"}}>Connection,</h6>
                <h6 style={{color:"green",marginLeft:"340px"}}> Through Products and Designs.</h6>
                <section style={{color:"rgb(220, 10, 248)",marginLeft:"40px",marginTop:"20px"}}>
                It’s about more, more than we see through the natural eye.
                about sets out to place an abstract value to each individual garment. 
                These values then find homage to a new owner. We carry a sweet fragrance that is honorable and pleasing.
                 We are the light.
                </section>
                    {/* FOOter */}
            <footer style={{height:"180px",width:"100%",background:"black"}}>
                <div className='footer-content'  style={{direction:"rtl",float:"right",marginRight:"100px",marginTop:"30px"}}>   
                    <a class="g" href="/home" style={{marginTop:"40px",textDecoration:"none",marginRight:"40px"}}>HOME</a>
                    <a class="g" href="/men's_clothes" style={{textDecoration:"none",marginRight:"40px"}}>MEN's TOP</a>
                    <a class="g" href="/woman's_clothes" style={{textDecoration:"none",marginRight:"40px"}}>WOMAN's TOP</a>
                    <a class="g" href="/baby's_clothes" style={{textDecoration:"none",marginRight:"150px"}}>BABY's TOP</a>
                    <h5 class="g"  style={{textDecoration:"none",marginRight:"0px",marginLeft:"600px"}}>FOLLOW_US</h5>
                    <div>
                        <a  href='https://www.facebook.com/ahmed.shkra.5' target={"_blank"}> 
                            <i class="fa-brands fa-facebook"></i>
                        </a>
                        <a style={{marginRight:"20px"}} href='https://github.com/ahmedshkra' target={"_blank"}> 
                            <i class="fa-brands fa-github"></i>
                        </a>
                        <a style={{marginRight:"20px"}} href='https://www.linkedin.com/in/ahmed-shkra-1a7b72240' target={"_blank"}> 
                            <i class="fa-brands fa-linkedin"></i>
                        </a>
                        <a style={{marginRight:"20px"}} href='https://www.instagram.com/ahmedshkra/' target={"_blank"}> 
                            <i class="fa-brands fa-instagram"></i>
                        </a>
                
                </div>
                <div style={{direction:"ltr"}}>
                    <h5 class="g"  style={{textDecoration:"none",marginRight:"600px",marginTop:"-50px"}}>CONTACT_US</h5>
                    <a  style={{textDecoration:"none",marginLeft:"10px",direction:"ltr",marginTop:"-40px"}} href='#'> 
                        01024657933 <i class="fa-brands fa-telegram"></i>
                    </a>
                </div>
                <div style={{direction:"ltr"}}>
                    <a  style={{textDecoration:"none",marginLeft:"10px",direction:"ltr",marginTop:"-10px"}} href='#'> 
                        01024657933 <i class="fa-brands fa-square-whatsapp"></i>
                    </a>
                </div>
                <div style={{direction:"ltr"}}>
                    <p style={{color:"rgb(202, 31, 68)",marginTop:"0px",marginLeft:"200px"}}>Our Address : " 71 ELSAD EL3ALLY Street in Shoubra " </p>
                </div>
                <div>           
                    <a href="/home"  style={{color:"rgb(220, 10, 248)",textDecoration:"none",backgroundColor:"black",float:"right",marginTop:"-100px",marginRight:"260px",fontFamily:" cursive"}}>
                    <h2>AS STYLISH </h2>
                    </a>
                </div>
               
            
                </div>
            </footer>
            </div>
            
        );
    }
}
export default About;
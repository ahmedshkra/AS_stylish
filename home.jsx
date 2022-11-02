import React,{ Component } from "react"; 
import {Navigation,Pagination,Scrollbar} from 'swiper';
import { Carousel } from "react-bootstrap";


import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css';
class Home extends Component
{
    state={};
    render(){
        return(
            
            <div className="App" style={{marginRight:"-100px",marginLeft:"-110px"}}>
            
                
            <div >
            <Carousel className='carousel'
                //scroll right && left 
                modules={[Navigation,Pagination,Scrollbar]}
                navigation
                pagination={{clickable:true,dynamicBullets:true}}
                scrollbar={{draggable:true,dynamicBullets:true,draggable:true}}
                //////////////////////
                style={{background:"rgb(220, 10, 248)",height:"350px",width:"290px",marginLeft:"10px",borderRadius:"5%"}}
                spaceBetween={0}  //distance between each slide
                slidesPerView={1}  //numer slides in screen
            >   
                <Carousel.Item interval={800}  style={{height:"400px"}}>
                    <img src='woman6.jpg' style={{width:"290px",height:"350px",borderRadius:"20%"}}></img>
                </Carousel.Item>
                <Carousel.Item interval={800}  style={{height:"400px"}}>
                    <img src='a5.jpg' style={{width:"290px",height:"350px",borderRadius:"20%"}}></img>
                </Carousel.Item>
                <Carousel.Item interval={800} style={{height:"400px"}}> 
                    <img src='mt20.PNG' style={{width:"290px",height:"350px",borderRadius:"20%"}}></img>
                </Carousel.Item>
                <Carousel.Item interval={800} style={{height:"400px"}}> 
                    <img src='bo1.PNG' style={{width:"290px",height:"350px",borderRadius:"20%"}}></img>
                </Carousel.Item>
                <Carousel.Item interval={800} style={{height:"400px"}}> 
                    <img src='man.jpg' style={{width:"290px",height:"350px",borderRadius:"20%"}}></img>
                </Carousel.Item>
                <Carousel.Item interval={800} style={{height:"400px"}}> 
                    <img src='woman.jpg' style={{width:"290px",height:"350px",borderRadius:"20%"}}></img>
                </Carousel.Item>
                <Carousel.Item interval={800} style={{height:"400px"}}> 
                    <img src='woman2.jpg' style={{width:"290px",height:"350px",borderRadius:"20%"}}></img>
                </Carousel.Item>
                <Carousel.Item interval={800} style={{height:"400px"}}> 
                    <img src='man5.jpg' style={{width:"290px",height:"350px",borderRadius:"20%"}}></img>
                </Carousel.Item>
                <Carousel.Item interval={800} style={{height:"400px"}}> 
                    <img src='woman3.jpg' style={{width:"290px",height:"350px",borderRadius:"20%"}}></img>
                </Carousel.Item>
                <Carousel.Item interval={800} style={{height:"400px"}}> 
                    <img src='woman5.jpg' style={{width:"290px",height:"350px",borderRadius:"20%"}}></img>
                </Carousel.Item>
                <Carousel.Item interval={800} style={{height:"400px"}}> 
                    <img src='man3.jpg' style={{width:"290px",height:"350px",borderRadius:"20%"}}></img>
                </Carousel.Item>
                <Carousel.Item interval={800} style={{height:"400px"}}> 
                    <img src='ch1.jpg' style={{width:"290px",height:"350px",borderRadius:"20%"}}></img>
                </Carousel.Item>
                <Carousel.Item interval={800} style={{height:"400px"}}> 
                    <img src='ch2.jpg' style={{width:"290px",height:"350px",borderRadius:"20%"}}></img>
                </Carousel.Item>
                <Carousel.Item interval={800} style={{height:"400px"}}> 
                    <img src='ch.jpg' style={{width:"290px",height:"350px",borderRadius:"20%"}}></img>
                </Carousel.Item>
                <Carousel.Item interval={800} style={{height:"400px"}}> 
                    <img src='woman9.jpg' style={{width:"290px",height:"350px",borderRadius:"20%"}}></img>
                </Carousel.Item>
                <Carousel.Item interval={800} style={{height:"400px"}}> 
                    <img src='man (2).jpg' style={{width:"290px",height:"350px",borderRadius:"20%"}}></img>
                </Carousel.Item>
                <Carousel.Item interval={800} style={{height:"400px"}}> 
                    <img src='a7.jpg' style={{width:"290px",height:"350px",borderRadius:"20%"}}></img>
                </Carousel.Item>
                <Carousel.Item interval={800} style={{height:"400px"}}> 
                    <img src='a14.jpg' style={{width:"290px",height:"350px",borderRadius:"20%"}}></img>
                </Carousel.Item>
                <Carousel.Item interval={800} style={{height:"400px"}}> 
                    <img src='a1.jpg' style={{width:"290px",height:"350px",borderRadius:"20%"}}></img>
                </Carousel.Item>
                <Carousel.Item interval={800} style={{height:"400px"}}> 
                    <img src='logo.PNG' style={{width:"290px",height:"350px",borderRadius:"20%"}}></img>
                </Carousel.Item>
            </Carousel>
            </div>
            {/* ////////////////////////// */}  
            <div style={{float:"right",marginTop:"-310px",marginRight:"300px",fontFamily:"impact"}}>           
                     <h2>Wolcome in </h2>
            </div>
            <div>           
                    <a href="/home" onMouseOver={{color:"red"}}  style={{color:"black",textDecoration:"none",backgroundColor:"rgb(220, 10, 248)",float:"right",marginTop:"-315px",marginRight:"100px",fontFamily:" cursive",border:"2px red solid",borderRadius:"20%"}}>
                     <h2>AS STYLISH </h2>
                    </a>
            </div>
          
            {/* clothes { men , woman , baby } */}
            <div  style={{backgroundColor:"rgb(220, 10, 248)",float:"right",marginTop:"-150px",marginRight:"400px",border:"2px red solid",borderRadius:"50%",padding:"15px"}}>           
                     <a href="/men's_clothes" style={{color:"black",textDecoration:"none",backgroundColor:"rgb(220, 10, 248)"}}> Men's <br/> CLOTHES</a>
            </div>

            <div  style={{backgroundColor:"rgb(220, 10, 248)",float:"right",marginTop:"-150px",marginRight:"230px",border:"2px red solid",borderRadius:"50%",padding:"15px"}}>           
                     <a href="/baby's_clothes" style={{color:"black",textDecoration:"none",backgroundColor:"rgb(220, 10, 248)"}}> Baby's <br/> CLOTHES</a>
            </div>
           
            <div  style={{backgroundColor:"rgb(220, 10, 248)",float:"right",marginTop:"-150px",marginRight:"60px",border:"2px red solid",borderRadius:"50%",padding:"15px"}}>           
                     <a href="/woman's_clothes" style={{color:"black",textDecoration:"none"}}> Woman's <br/> CLOTHES</a>
            </div>

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
        
        )
    }
}
export default Home;
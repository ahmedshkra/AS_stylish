import React,{ Component } from "react"; 
import {DropdownButton,Dropdown} from 'react-bootstrap';




class Woman extends Component
{
    state={
        x:0,
        name:"cart.PNG",
        price:"Your purchase price :",
        p:0
    };
    onClick= () =>{

        var m=parseFloat(prompt("Please enter ( **PRODUCT PRICE** ) :",this.state.p));
        console.log(this.state.x++);
        console.log(parseFloat(this.state.p)+parseFloat(m));
       this.setState({x:this.state.x++})
       this.setState({p:parseFloat(this.state.p) + parseFloat(m)})
      
     };
     ///DELETE
     delete =()=>{

        var del=parseFloat(prompt("Please enter ( **PRODUCT PRICE** ) :",this.state.p));
        console.log(this.state.x--);
        console.log(parseFloat(this.state.p)-parseFloat(del));
        this.setState({x:this.state.x--})
        this.setState({p:parseFloat(this.state.p) - parseFloat(del)})
     }
   
    render(){
        return(
    <div style={{backgroundColor:"rgba(255, 75, 240, 0.986)",marginRight:"-100px",marginLeft:"-110px"}}>
        <div >
        <DropdownButton className="dropdown-basic-button" title="Refine by Category" style={{backgroundColor:"rgb(220, 10, 248)",float:"right",marginRight:"670px",padding:"10px",paddingLeft:"30px",paddingRight:"35px",borderBottomRightRadius:"20%",borderBottomLeftRadius:"20%"}}>
                    
            <Dropdown style={{backgroundColor:"rgba(247, 21, 255, 0.699)",overflow:"auto",height:"100px"}}>
             
          
                <a className="dropdown-item " href="/woman's_clothes" style={{color:"rgba(2, 0, 136, 0.699)",fontStyle:"oblique"}}>Woman's Tops</a>
                <a className="dropdown-item" href="/woman's_tshirt" style={{color:"rgba(2, 0, 136, 0.699)",fontStyle:"oblique"}}>Woman's T-Shirts</a>
                <a className="dropdown-item" href="/woman's_sweetshirt" style={{color:"rgba(2, 0, 136, 0.699)",fontStyle:"oblique"}}>Woman's Sweetshirts</a>
                <a className="dropdown-item " href="/woman's_plus" style={{color:"rgba(2, 0, 136, 0.699)",fontStyle:"oblique"}}>Woman's Plus Size Clothes</a>
                <a className="dropdown-item " href="/girl's_tshirt" style={{color:"rgba(2, 0, 136, 0.699)",fontStyle:"oblique"}}>Girl's T-Shirts</a>

                {/* six LINKS */}

            </Dropdown>
        
        </DropdownButton>
        </div>
                 {/* shopping CART */}
        <button style={{height:"30px",width:"30px",backgroundImage:"url(cart2.PNG)",backgroundSize:"28px",backgroundRepeat:"no-repeat",display:"inline-block",marginLeft:"860px",marginTop:"-135px",color:"black",position:"fixed"}}>
            <h6>            
             <i className="bi bi-cart" style={{color:"black"}}>
                 {this.state.x}
             </i>
            </h6>
        </button>
        <button style={{height:"40px",width:"65px",backgroundImage:"url(cart3.PNG)",backgroundSize:"50px",backgroundRepeat:"no-repeat",display:"inline-block",marginLeft:"840px",marginTop:"-100px",color:"black",position:"fixed"}}>
            <h6>            
             <i className="bi bi-cart" style={{color:"black"}}>
                 $
                 {this.state.p}
                 
             </i>
            </h6>
        </button>
        <button onClick={this.delete} style={{marginLeft:"800px",marginTop:"-100px",position:"fixed",backgroundColor:"rgba(247, 21, 255, 0.699)"}}>
            <i className="fas fa-trash m-2"></i>
        </button>
            {/* //////// */}

         {/* resources */}
         <div style={{display:"inline-block",width:"800px",marginLeft:"55px"}}> 
            <img  class="im" src="w1.jpg" style={{height:"240px",width:"220px",borderRadius:"20px",marginLeft:"-10px"}}></img>
            <button  class="b" onClick={this.onClick} style={{paddingLeft:"70px",paddingRight:"100px",backgroundColor:"rgb(170, 221, 255)",backgroundImage:"cart.PNG",backgroundImage:"url(cart.PNG)",backgroundSize:"55px",backgroundRepeat:"no-repeat",height:"50px",width:"40px",marginLeft:"5px",borderRadius:"10px"}}>140.90$</button>
            
            <img class="im" src="w2.jpg" style={{height:"240px",width:"220px",borderRadius:"20px",marginLeft:"10px",marginTop:"10px"}}></img>
            <button class="b" onClick={this.onClick} style={{paddingLeft:"70px",paddingRight:"100px",backgroundColor:"rgb(170, 221, 255)",backgroundImage:"cart.PNG",backgroundImage:"url(cart.PNG)",backgroundSize:"55px",backgroundRepeat:"no-repeat",height:"50px",width:"40px",marginLeft:"5px",borderRadius:"10px"}}>150.00$</button>
             </div>
            <div style={{display:"inline-block",width:"800px",marginLeft:"55px"}}> 
            <img class="im" src="w3.jpg" style={{height:"240px",width:"220px",borderRadius:"20px",marginLeft:"-10px"}}></img>
            <button class="b" onClick={this.onClick} style={{paddingLeft:"70px",paddingRight:"100px",backgroundColor:"rgb(170, 221, 255)",backgroundImage:"cart.PNG",backgroundImage:"url(cart.PNG)",backgroundSize:"55px",backgroundRepeat:"no-repeat",height:"50px",width:"40px",marginLeft:"5px",borderRadius:"10px"}}>160.88$</button>
            
            <img class="im" src="w4.jpg" style={{height:"240px",width:"220px",borderRadius:"20px",marginLeft:"10px",marginTop:"10px"}}></img>
            <button class="b" onClick={this.onClick} style={{paddingLeft:"70px",paddingRight:"100px",backgroundColor:"rgb(170, 221, 255)",backgroundImage:"cart.PNG",backgroundImage:"url(cart.PNG)",backgroundSize:"55px",backgroundRepeat:"no-repeat",height:"50px",width:"40px",marginLeft:"5px",borderRadius:"10px"}}>90.90$</button>
            </div>
            <div style={{display:"inline-block",width:"800px",marginLeft:"55px"}}> 
            <img class="im" src="w5.jpg" style={{height:"240px",width:"220px",borderRadius:"20px",marginLeft:"-10px"}}></img>
            <button class="b" onClick={this.onClick} style={{paddingLeft:"70px",paddingRight:"100px",backgroundColor:"rgb(170, 221, 255)",backgroundImage:"cart.PNG",backgroundImage:"url(cart.PNG)",backgroundSize:"55px",backgroundRepeat:"no-repeat",height:"50px",width:"40px",marginLeft:"5px",borderRadius:"10px"}}>99.99$</button>
            
            <img class="im" src="w6.jpg" style={{height:"240px",width:"220px",borderRadius:"20px",marginLeft:"10px",marginTop:"10px"}}></img>
            <button class="b" onClick={this.onClick} style={{paddingLeft:"70px",paddingRight:"100px",backgroundColor:"rgb(170, 221, 255)",backgroundImage:"cart.PNG",backgroundImage:"url(cart.PNG)",backgroundSize:"55px",backgroundRepeat:"no-repeat",height:"50px",width:"40px",marginLeft:"5px",borderRadius:"10px"}}>110.00$</button>
            </div>
            <div style={{display:"inline-block",width:"800px",marginLeft:"55px"}}> 
            <img class="im" src="w7.jpg" style={{height:"240px",width:"220px",borderRadius:"20px",marginLeft:"-10px"}}></img>
            <button class="b" onClick={this.onClick} style={{paddingLeft:"70px",paddingRight:"100px",backgroundColor:"rgb(170, 221, 255)",backgroundImage:"cart.PNG",backgroundImage:"url(cart.PNG)",backgroundSize:"55px",backgroundRepeat:"no-repeat",height:"50px",width:"40px",marginLeft:"5px",borderRadius:"10px"}}>80.00$</button>
            
            <img class="im" src="w8.jpg" style={{height:"240px",width:"220px",borderRadius:"20px",marginLeft:"10px",marginTop:"10px"}}></img>
            <button class="b" onClick={this.onClick} style={{paddingLeft:"70px",paddingRight:"100px",backgroundColor:"rgb(170, 221, 255)",backgroundImage:"cart.PNG",backgroundImage:"url(cart.PNG)",backgroundSize:"55px",backgroundRepeat:"no-repeat",height:"50px",width:"40px",marginLeft:"5px",borderRadius:"10px"}}>120.10$</button>
            </div>
            <div style={{display:"inline-block",width:"800px",marginLeft:"55px"}}> 
            <img class="im" src="w9.jpg" style={{height:"240px",width:"220px",borderRadius:"20px",marginLeft:"-10px"}}></img>
            <button class="b" onClick={this.onClick} style={{paddingLeft:"70px",paddingRight:"100px",backgroundColor:"rgb(170, 221, 255)",backgroundImage:"cart.PNG",backgroundImage:"url(cart.PNG)",backgroundSize:"55px",backgroundRepeat:"no-repeat",height:"50px",width:"40px",marginLeft:"5px",borderRadius:"10px"}}>70.90$</button>
            
            <img class="im" src="w10.jpg" style={{height:"240px",width:"220px",borderRadius:"20px",marginLeft:"10px",marginTop:"10px"}}></img>
            <button class="b" onClick={this.onClick} style={{paddingLeft:"70px",paddingRight:"100px",backgroundColor:"rgb(170, 221, 255)",backgroundImage:"cart.PNG",backgroundImage:"url(cart.PNG)",backgroundSize:"55px",backgroundRepeat:"no-repeat",height:"50px",width:"40px",marginLeft:"5px",borderRadius:"10px"}}>150.00$</button>
            </div>
            <div style={{display:"inline-block",width:"800px",marginLeft:"55px"}}> 
            <img class="im" src="w11.jpg" style={{height:"240px",width:"220px",borderRadius:"20px",marginLeft:"-10px"}}></img>
            <button class="b" onClick={this.onClick} style={{paddingLeft:"70px",paddingRight:"100px",backgroundColor:"rgb(170, 221, 255)",backgroundImage:"cart.PNG",backgroundImage:"url(cart.PNG)",backgroundSize:"55px",backgroundRepeat:"no-repeat",height:"50px",width:"40px",marginLeft:"5px",borderRadius:"10px"}}>100.00$</button>
            
            <img class="im" src="w12.jpg" style={{height:"240px",width:"220px",borderRadius:"20px",marginLeft:"10px",marginTop:"10px"}}></img>
            <button class="b" onClick={this.onClick} style={{paddingLeft:"70px",paddingRight:"100px",backgroundColor:"rgb(170, 221, 255)",backgroundImage:"cart.PNG",backgroundImage:"url(cart.PNG)",backgroundSize:"55px",backgroundRepeat:"no-repeat",height:"50px",width:"40px",marginLeft:"5px",borderRadius:"10px"}}>100.99$</button>
            </div>
            <div style={{display:"inline-block",width:"800px",marginLeft:"55px"}}> 
            <img class="im" src="w13.jpg" style={{height:"240px",width:"220px",borderRadius:"20px",marginLeft:"-10px"}}></img>
            <button class="b" onClick={this.onClick} style={{paddingLeft:"70px",paddingRight:"100px",backgroundColor:"rgb(170, 221, 255)",backgroundImage:"cart.PNG",backgroundImage:"url(cart.PNG)",backgroundSize:"55px",backgroundRepeat:"no-repeat",height:"50px",width:"40px",marginLeft:"5px",borderRadius:"10px"}}>90.99$</button>
            
            <img class="im" src="w14.jpg" style={{height:"240px",width:"220px",borderRadius:"20px",marginLeft:"10px",marginTop:"10px"}}></img>
            <button class="b" onClick={this.onClick} style={{paddingLeft:"70px",paddingRight:"100px",backgroundColor:"rgb(170, 221, 255)",backgroundImage:"cart.PNG",backgroundImage:"url(cart.PNG)",backgroundSize:"55px",backgroundRepeat:"no-repeat",height:"50px",width:"40px",marginLeft:"5px",borderRadius:"10px"}}>80.99$</button>
            </div>
            <div style={{display:"inline-block",width:"800px",marginLeft:"55px"}}> 
            <img class="im" src="w15.jpg" style={{height:"240px",width:"220px",borderRadius:"20px",marginLeft:"-10px"}}></img>
            <button class="b" onClick={this.onClick} style={{paddingLeft:"70px",paddingRight:"100px",backgroundColor:"rgb(170, 221, 255)",backgroundImage:"cart.PNG",backgroundImage:"url(cart.PNG)",backgroundSize:"55px",backgroundRepeat:"no-repeat",height:"50px",width:"40px",marginLeft:"5px",borderRadius:"10px"}}>99.99$</button>
            
            <img class="im" src="w17.jpg" style={{height:"240px",width:"220px",borderRadius:"20px",marginLeft:"10px",marginTop:"10px"}}></img>
            <button class="b" onClick={this.onClick} style={{paddingLeft:"70px",paddingRight:"100px",backgroundColor:"rgb(170, 221, 255)",backgroundImage:"cart.PNG",backgroundImage:"url(cart.PNG)",backgroundSize:"55px",backgroundRepeat:"no-repeat",height:"50px",width:"40px",marginLeft:"5px",borderRadius:"10px"}}>70.99$</button>
            </div>
            <div style={{display:"inline-block",width:"800px",marginLeft:"55px"}}> 
            <img class="im" src="w18.jpg" style={{height:"240px",width:"220px",borderRadius:"20px",marginLeft:"-10px"}}></img>
            <button class="b" onClick={this.onClick} style={{paddingLeft:"70px",paddingRight:"100px",backgroundColor:"rgb(170, 221, 255)",backgroundImage:"cart.PNG",backgroundImage:"url(cart.PNG)",backgroundSize:"55px",backgroundRepeat:"no-repeat",height:"50px",width:"40px",marginLeft:"5px",borderRadius:"10px"}}>90.00$</button>
            
            <img class="im" src="w19.jpg" style={{height:"240px",width:"220px",borderRadius:"20px",marginLeft:"10px",marginTop:"10px"}}></img>
            <button class="b" onClick={this.onClick} style={{paddingLeft:"70px",paddingRight:"100px",backgroundColor:"rgb(170, 221, 255)",backgroundImage:"cart.PNG",backgroundImage:"url(cart.PNG)",backgroundSize:"55px",backgroundRepeat:"no-repeat",height:"50px",width:"40px",marginLeft:"5px",borderRadius:"10px"}}>80.90$</button>
            </div>
            <div style={{display:"inline-block",width:"800px",marginLeft:"55px"}}> 
            <img class="im" src="w20.jpg" style={{height:"240px",width:"220px",borderRadius:"20px",marginLeft:"-10px"}}></img>
            <button class="b" onClick={this.onClick} style={{paddingLeft:"70px",paddingRight:"100px",backgroundColor:"rgb(170, 221, 255)",backgroundImage:"cart.PNG",backgroundImage:"url(cart.PNG)",backgroundSize:"55px",backgroundRepeat:"no-repeat",height:"50px",width:"40px",marginLeft:"5px",borderRadius:"10px"}}>90.99$</button>
            
            <img class="im" src="w21.jpg" style={{height:"240px",width:"220px",borderRadius:"20px",marginLeft:"10px",marginTop:"10px"}}></img>
            <button class="b" onClick={this.onClick} style={{paddingLeft:"70px",paddingRight:"100px",backgroundColor:"rgb(170, 221, 255)",backgroundImage:"cart.PNG",backgroundImage:"url(cart.PNG)",backgroundSize:"55px",backgroundRepeat:"no-repeat",height:"50px",width:"40px",marginLeft:"5px",borderRadius:"10px"}}>100.99$</button>
            </div>
            <div style={{display:"inline-block",width:"800px",marginLeft:"55px"}}> 
            <img class="im" src="w22.jpg" style={{height:"240px",width:"220px",borderRadius:"20px",marginLeft:"-10px"}}></img>
            <button class="b" onClick={this.onClick} style={{paddingLeft:"70px",paddingRight:"100px",backgroundColor:"rgb(170, 221, 255)",backgroundImage:"cart.PNG",backgroundImage:"url(cart.PNG)",backgroundSize:"55px",backgroundRepeat:"no-repeat",height:"50px",width:"40px",marginLeft:"5px",borderRadius:"10px"}}>200.00$</button>
            
            <img class="im" src="w23.jpg" style={{height:"240px",width:"220px",borderRadius:"20px",marginLeft:"10px",marginTop:"10px"}}></img>
            <button class="b" onClick={this.onClick} style={{paddingLeft:"70px",paddingRight:"100px",backgroundColor:"rgb(170, 221, 255)",backgroundImage:"cart.PNG",backgroundImage:"url(cart.PNG)",backgroundSize:"55px",backgroundRepeat:"no-repeat",height:"50px",width:"40px",marginLeft:"5px",borderRadius:"10px"}}>199.99$</button>
            </div>
            <div style={{display:"inline-block",width:"800px",marginLeft:"55px"}}> 
            <img class="im" src="w24.jpg" style={{height:"240px",width:"220px",borderRadius:"20px",marginLeft:"-10px"}}></img>
            <button class="b" onClick={this.onClick} style={{paddingLeft:"70px",paddingRight:"100px",backgroundColor:"rgb(170, 221, 255)",backgroundImage:"cart.PNG",backgroundImage:"url(cart.PNG)",backgroundSize:"55px",backgroundRepeat:"no-repeat",height:"50px",width:"40px",marginLeft:"5px",borderRadius:"10px"}}>180.99$</button>
            
            <img class="im" src="w25.jpg" style={{height:"240px",width:"220px",borderRadius:"20px",marginLeft:"10px",marginTop:"10px"}}></img>
            <button class="b" onClick={this.onClick} style={{paddingLeft:"70px",paddingRight:"100px",backgroundColor:"rgb(170, 221, 255)",backgroundImage:"cart.PNG",backgroundImage:"url(cart.PNG)",backgroundSize:"55px",backgroundRepeat:"no-repeat",height:"50px",width:"40px",marginLeft:"5px",borderRadius:"10px"}}>170.00$</button>
            </div>
            <div style={{display:"inline-block",width:"800px",marginLeft:"55px"}}> 
            <img class="im" src="w26.jpg" style={{height:"240px",width:"220px",borderRadius:"20px",marginLeft:"-10px"}}></img>
            <button class="b" onClick={this.onClick} style={{paddingLeft:"70px",paddingRight:"100px",backgroundColor:"rgb(170, 221, 255)",backgroundImage:"cart.PNG",backgroundImage:"url(cart.PNG)",backgroundSize:"55px",backgroundRepeat:"no-repeat",height:"50px",width:"40px",marginLeft:"5px",borderRadius:"10px"}}>150.00$</button>
            
            <img class="im" src="w28.jpg" style={{height:"240px",width:"220px",borderRadius:"20px",marginLeft:"10px",marginTop:"10px"}}></img>
            <button class="b" onClick={this.onClick} style={{paddingLeft:"70px",paddingRight:"100px",backgroundColor:"rgb(170, 221, 255)",backgroundImage:"cart.PNG",backgroundImage:"url(cart.PNG)",backgroundSize:"55px",backgroundRepeat:"no-repeat",height:"50px",width:"40px",marginLeft:"5px",borderRadius:"10px"}}>100.99$</button>
            </div>
            <div style={{display:"inline-block",width:"800px",marginLeft:"55px"}}> 
            <img class="im" src="woman.jpg" style={{height:"240px",width:"220px",borderRadius:"20px",marginLeft:"-10px"}}></img>
            <button class="b" onClick={this.onClick} style={{paddingLeft:"70px",paddingRight:"100px",backgroundColor:"rgb(170, 221, 255)",backgroundImage:"cart.PNG",backgroundImage:"url(cart.PNG)",backgroundSize:"55px",backgroundRepeat:"no-repeat",height:"50px",width:"40px",marginLeft:"5px",borderRadius:"10px"}}>90.99$</button>
            
            <img class="im" src="woman2.jpg" style={{height:"240px",width:"220px",borderRadius:"20px",marginLeft:"10px",marginTop:"10px"}}></img>
            <button class="b" onClick={this.onClick} style={{paddingLeft:"70px",paddingRight:"100px",backgroundColor:"rgb(170, 221, 255)",backgroundImage:"cart.PNG",backgroundImage:"url(cart.PNG)",backgroundSize:"55px",backgroundRepeat:"no-repeat",height:"50px",width:"40px",marginLeft:"5px",borderRadius:"10px"}}>70.00$</button>
            </div>
            <div style={{display:"inline-block",width:"800px",marginLeft:"55px"}}> 
            <img class="im" src="woman3.jpg" style={{height:"240px",width:"220px",borderRadius:"20px",marginLeft:"-10px"}}></img>
            <button class="b" onClick={this.onClick} style={{paddingLeft:"70px",paddingRight:"100px",backgroundColor:"rgb(170, 221, 255)",backgroundImage:"cart.PNG",backgroundImage:"url(cart.PNG)",backgroundSize:"55px",backgroundRepeat:"no-repeat",height:"50px",width:"40px",marginLeft:"5px",borderRadius:"10px"}}>90.90$</button>
            
            <img class="im" src="woman4.jpg" style={{height:"240px",width:"220px",borderRadius:"20px",marginLeft:"10px",marginTop:"10px"}}></img>
            <button class="b" onClick={this.onClick} style={{paddingLeft:"70px",paddingRight:"100px",backgroundColor:"rgb(170, 221, 255)",backgroundImage:"cart.PNG",backgroundImage:"url(cart.PNG)",backgroundSize:"55px",backgroundRepeat:"no-repeat",height:"50px",width:"40px",marginLeft:"5px",borderRadius:"10px"}}>70.00$</button>
            </div>
            <div style={{display:"inline-block",width:"800px",marginLeft:"55px"}}> 
            <img class="im" src="woman5.jpg" style={{height:"240px",width:"220px",borderRadius:"20px",marginLeft:"-10px"}}></img>
            <button class="b" onClick={this.onClick} style={{paddingLeft:"70px",paddingRight:"100px",backgroundColor:"rgb(170, 221, 255)",backgroundImage:"cart.PNG",backgroundImage:"url(cart.PNG)",backgroundSize:"55px",backgroundRepeat:"no-repeat",height:"50px",width:"40px",marginLeft:"5px",borderRadius:"10px"}}>100.00$</button>
            
            <img class="im" src="woman6.jpg" style={{height:"240px",width:"220px",borderRadius:"20px",marginLeft:"10px",marginTop:"10px"}}></img>
            <button class="b" onClick={this.onClick} style={{paddingLeft:"70px",paddingRight:"100px",backgroundColor:"rgb(170, 221, 255)",backgroundImage:"cart.PNG",backgroundImage:"url(cart.PNG)",backgroundSize:"55px",backgroundRepeat:"no-repeat",height:"50px",width:"40px",marginLeft:"5px",borderRadius:"10px"}}>170.99$</button>
            </div>
        {/* resources */}
         {/* FOOTER */}
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
         {/* //////////////// */}
         
    </div>
        );
    }
}
export default Woman;
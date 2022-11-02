import React,{ Component } from "react"; 
import {DropdownButton,Dropdown} from 'react-bootstrap';

 

class Mtshirt extends Component
{
    state={
        x:0,
        name:"cart.PNG",
        price:"Your purchase price :",
        p:0
    };
    
    onClick= () =>{
        var m=parseFloat(prompt("enter your price",this.state.p));
       

        console.log(this.state.x++);
        console.log(parseFloat(this.state.p)+parseFloat(m));
       this.setState({x:this.state.x++})
       this.setState({p:parseFloat(this.state.p) + parseFloat(m)})
       
     };
     /////delete
     delete =()=>{

        var del=parseFloat(prompt("Please enter ( **PRODUCT PRICE** ) :",this.state.p));
        console.log(this.state.x--);
        console.log(parseFloat(this.state.p)-parseFloat(del));
        this.setState({x:this.state.x--})
        this.setState({p:parseFloat(this.state.p) - parseFloat(del)})
     }
   
    render(){
        return(
    <div style={{backgroundColor:"black",marginRight:"-100px",marginLeft:"-110px"}}>
        {/* CATEGORY */}
        <div>
        <DropdownButton className="dropdown-basic-button" title="Refine by Category" style={{backgroundColor:"rgb(220, 10, 248)",float:"right",marginRight:"670px",marginTop:"0px",padding:"10px",paddingLeft:"30px",paddingRight:"35px",borderBottomRightRadius:"20%",borderBottomLeftRadius:"20%"}}>
                    
            <Dropdown style={{backgroundColor:"rgba(247, 21, 255, 0.699)",overflow:"auto",height:"100px"}}>
           
 
                <a className="dropdown-item " href="/men's_clothes" style={{color:"rgba(2, 0, 136, 0.699)",fontStyle:"oblique"}}>Men's Tops</a>
                <a className="dropdown-item" href="/men's_tshirt" style={{color:"rgba(2, 0, 136, 0.699)",fontStyle:"oblique"}}>Men's T-Shirts</a>
                <a className="dropdown-item" href="/men'ssweetshirt" style={{color:"rgba(2, 0, 136, 0.699)",fontStyle:"oblique"}}>Men's Sweetshirts</a>
                <a className="dropdown-item " href="/boy's_tshirt" style={{color:"rgba(2, 0, 136, 0.699)",fontStyle:"oblique"}}>Boy's T-Shirts</a>
                
                {/* five LINKS */}

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
            <img class="im" src="mt1.PNG" style={{height:"240px",width:"220px",borderRadius:"20px",marginLeft:"-10px"}}></img>
            <button class="b" onClick={this.onClick} style={{paddingLeft:"70px",paddingRight:"100px",backgroundColor:"rgb(170, 221, 255)",backgroundImage:"cart.PNG",backgroundImage:"url(cart.PNG)",backgroundSize:"55px",backgroundRepeat:"no-repeat",height:"50px",width:"40px",marginLeft:"5px",borderRadius:"10px"}}>21$</button>
            
            <img class="im" src="mt2.PNG" style={{height:"240px",width:"220px",borderRadius:"20px",marginLeft:"10px",marginTop:"10px"}}></img>
            <button class="b" onClick={this.onClick} style={{paddingLeft:"70px",paddingRight:"100px",backgroundColor:"rgb(170, 221, 255)",backgroundImage:"cart.PNG",backgroundImage:"url(cart.PNG)",backgroundSize:"55px",backgroundRepeat:"no-repeat",height:"50px",width:"40px",marginLeft:"5px",borderRadius:"10px"}}>22$</button>
            </div>
            <div style={{display:"inline-block",width:"800px",marginLeft:"55px"}}> 
            <img class="im" src="mt3.PNG" style={{height:"240px",width:"220px",borderRadius:"20px",marginLeft:"-10px"}}></img>
            <button class="b" onClick={this.onClick} style={{paddingLeft:"70px",paddingRight:"100px",backgroundColor:"rgb(170, 221, 255)",backgroundImage:"cart.PNG",backgroundImage:"url(cart.PNG)",backgroundSize:"55px",backgroundRepeat:"no-repeat",height:"50px",width:"40px",marginLeft:"5px",borderRadius:"10px"}}>16.99$</button>
            
            <img class="im" src="mt4.PNG" style={{height:"240px",width:"220px",borderRadius:"20px",marginLeft:"10px",marginTop:"10px"}}></img>
            <button class="b" onClick={this.onClick} style={{paddingLeft:"70px",paddingRight:"100px",backgroundColor:"rgb(170, 221, 255)",backgroundImage:"cart.PNG",backgroundImage:"url(cart.PNG)",backgroundSize:"55px",backgroundRepeat:"no-repeat",height:"50px",width:"40px",marginLeft:"5px",borderRadius:"10px"}}>15.10$</button>
            </div>
            <div style={{display:"inline-block",width:"800px",marginLeft:"55px"}}> 
            <img class="im" src="mt5.PNG" style={{height:"240px",width:"220px",borderRadius:"20px",marginLeft:"-10px"}}></img>
            <button class="b" onClick={this.onClick} style={{paddingLeft:"70px",paddingRight:"100px",backgroundColor:"rgb(170, 221, 255)",backgroundImage:"cart.PNG",backgroundImage:"url(cart.PNG)",backgroundSize:"55px",backgroundRepeat:"no-repeat",height:"50px",width:"40px",marginLeft:"5px",borderRadius:"10px"}}>25.10$</button>
            
            <img class="im" src="mt6.PNG" style={{height:"240px",width:"220px",borderRadius:"20px",marginLeft:"10px",marginTop:"10px"}}></img>
            <button class="b" onClick={this.onClick} style={{paddingLeft:"70px",paddingRight:"100px",backgroundColor:"rgb(170, 221, 255)",backgroundImage:"cart.PNG",backgroundImage:"url(cart.PNG)",backgroundSize:"55px",backgroundRepeat:"no-repeat",height:"50px",width:"40px",marginLeft:"5px",borderRadius:"10px"}}>17.99$</button>
            </div>
            <div style={{display:"inline-block",width:"800px",marginLeft:"55px"}}> 
            <img class="im" src="mt7.PNG" style={{height:"240px",width:"220px",borderRadius:"20px",marginLeft:"-10px"}}></img>
            <button class="b" onClick={this.onClick} style={{paddingLeft:"70px",paddingRight:"100px",backgroundColor:"rgb(170, 221, 255)",backgroundImage:"cart.PNG",backgroundImage:"url(cart.PNG)",backgroundSize:"55px",backgroundRepeat:"no-repeat",height:"50px",width:"40px",marginLeft:"5px",borderRadius:"10px"}}>20.99$</button>
            
            <img class="im" src="mt8.PNG" style={{height:"240px",width:"220px",borderRadius:"20px",marginLeft:"10px",marginTop:"10px"}}></img>
            <button class="b" onClick={this.onClick} style={{paddingLeft:"70px",paddingRight:"100px",backgroundColor:"rgb(170, 221, 255)",backgroundImage:"cart.PNG",backgroundImage:"url(cart.PNG)",backgroundSize:"55px",backgroundRepeat:"no-repeat",height:"50px",width:"40px",marginLeft:"5px",borderRadius:"10px"}}>29.99$</button>
            </div>
            <div style={{display:"inline-block",width:"800px",marginLeft:"55px"}}> 
            <img class="im" src="mt9.PNG" style={{height:"240px",width:"220px",borderRadius:"20px",marginLeft:"-10px"}}></img>
            <button class="b" onClick={this.onClick} style={{paddingLeft:"70px",paddingRight:"100px",backgroundColor:"rgb(170, 221, 255)",backgroundImage:"cart.PNG",backgroundImage:"url(cart.PNG)",backgroundSize:"55px",backgroundRepeat:"no-repeat",height:"50px",width:"40px",marginLeft:"5px",borderRadius:"10px"}}>20$</button>
            
            <img class="im" src="mt10.PNG" style={{height:"240px",width:"220px",borderRadius:"20px",marginLeft:"10px",marginTop:"10px"}}></img>
            <button class="b" onClick={this.onClick} style={{paddingLeft:"70px",paddingRight:"100px",backgroundColor:"rgb(170, 221, 255)",backgroundImage:"cart.PNG",backgroundImage:"url(cart.PNG)",backgroundSize:"55px",backgroundRepeat:"no-repeat",height:"50px",width:"40px",marginLeft:"5px",borderRadius:"10px"}}>15.99$</button>
            </div>
            <div style={{display:"inline-block",width:"800px",marginLeft:"55px"}}> 
            <img class="im" src="mt11.PNG" style={{height:"240px",width:"220px",borderRadius:"20px",marginLeft:"-10px"}}></img>
            <button class="b" onClick={this.onClick} style={{paddingLeft:"70px",paddingRight:"100px",backgroundColor:"rgb(170, 221, 255)",backgroundImage:"cart.PNG",backgroundImage:"url(cart.PNG)",backgroundSize:"55px",backgroundRepeat:"no-repeat",height:"50px",width:"40px",marginLeft:"5px",borderRadius:"10px"}}>26.60$</button>
            
            <img class="im" src="mt12.PNG" style={{height:"240px",width:"220px",borderRadius:"20px",marginLeft:"10px",marginTop:"10px"}}></img>
            <button class="b" onClick={this.onClick} style={{paddingLeft:"70px",paddingRight:"100px",backgroundColor:"rgb(170, 221, 255)",backgroundImage:"cart.PNG",backgroundImage:"url(cart.PNG)",backgroundSize:"55px",backgroundRepeat:"no-repeat",height:"50px",width:"40px",marginLeft:"5px",borderRadius:"10px"}}>10.99$</button>
            </div>
            <div style={{display:"inline-block",width:"800px",marginLeft:"55px"}}> 
            <img class="im" src="mt13.PNG" style={{height:"240px",width:"220px",borderRadius:"20px",marginLeft:"-10px"}}></img>
            <button class="b" onClick={this.onClick} style={{paddingLeft:"70px",paddingRight:"100px",backgroundColor:"rgb(170, 221, 255)",backgroundImage:"cart.PNG",backgroundImage:"url(cart.PNG)",backgroundSize:"55px",backgroundRepeat:"no-repeat",height:"50px",width:"40px",marginLeft:"5px",borderRadius:"10px"}}>11.70$</button>
            
            <img class="im" src="mt14.PNG" style={{height:"240px",width:"220px",borderRadius:"20px",marginLeft:"10px",marginTop:"10px"}}></img>
            <button class="b" onClick={this.onClick} style={{paddingLeft:"70px",paddingRight:"100px",backgroundColor:"rgb(170, 221, 255)",backgroundImage:"cart.PNG",backgroundImage:"url(cart.PNG)",backgroundSize:"55px",backgroundRepeat:"no-repeat",height:"50px",width:"40px",marginLeft:"5px",borderRadius:"10px"}}>15.01$</button>
            </div>
            <div style={{display:"inline-block",width:"800px",marginLeft:"55px"}}> 
            <img class="im" src="mt15.PNG" style={{height:"240px",width:"220px",borderRadius:"20px",marginLeft:"-10px"}}></img>
            <button class="b" onClick={this.onClick} style={{paddingLeft:"70px",paddingRight:"100px",backgroundColor:"rgb(170, 221, 255)",backgroundImage:"cart.PNG",backgroundImage:"url(cart.PNG)",backgroundSize:"55px",backgroundRepeat:"no-repeat",height:"50px",width:"40px",marginLeft:"5px",borderRadius:"10px"}}>15$</button>
            
            <img class="im" src="mt16.PNG" style={{height:"240px",width:"220px",borderRadius:"20px",marginLeft:"10px",marginTop:"10px"}}></img>
            <button class="b" onClick={this.onClick} style={{paddingLeft:"70px",paddingRight:"100px",backgroundColor:"rgb(170, 221, 255)",backgroundImage:"cart.PNG",backgroundImage:"url(cart.PNG)",backgroundSize:"55px",backgroundRepeat:"no-repeat",height:"50px",width:"40px",marginLeft:"5px",borderRadius:"10px"}}>10.11$</button>
            </div>
            <div style={{display:"inline-block",width:"800px",marginLeft:"55px"}}> 
            <img class="im" src="mt17.PNG" style={{height:"240px",width:"220px",borderRadius:"20px",marginLeft:"-10px"}}></img>
            <button class="b" onClick={this.onClick} style={{paddingLeft:"70px",paddingRight:"100px",backgroundColor:"rgb(170, 221, 255)",backgroundImage:"cart.PNG",backgroundImage:"url(cart.PNG)",backgroundSize:"55px",backgroundRepeat:"no-repeat",height:"50px",width:"40px",marginLeft:"5px",borderRadius:"10px"}}>12.11$</button>
            
            <img class="im" src="mt18.PNG" style={{height:"240px",width:"220px",borderRadius:"20px",marginLeft:"10px",marginTop:"10px"}}></img>
            <button class="b" onClick={this.onClick} style={{paddingLeft:"70px",paddingRight:"100px",backgroundColor:"rgb(170, 221, 255)",backgroundImage:"cart.PNG",backgroundImage:"url(cart.PNG)",backgroundSize:"55px",backgroundRepeat:"no-repeat",height:"50px",width:"40px",marginLeft:"5px",borderRadius:"10px"}}>14.13$</button>
            </div>
            <div style={{display:"inline-block",width:"800px",marginLeft:"55px"}}> 
            <img class="im" src="mt19.PNG" style={{height:"240px",width:"220px",borderRadius:"20px",marginLeft:"-10px"}}></img>
            <button class="b" onClick={this.onClick} style={{paddingLeft:"70px",paddingRight:"100px",backgroundColor:"rgb(170, 221, 255)",backgroundImage:"cart.PNG",backgroundImage:"url(cart.PNG)",backgroundSize:"55px",backgroundRepeat:"no-repeat",height:"50px",width:"40px",marginLeft:"5px",borderRadius:"10px"}}>11.10$</button>
            
            <img class="im" src="mt23.PNG" style={{height:"240px",width:"220px",borderRadius:"20px",marginLeft:"10px",marginTop:"10px"}}></img>
            <button class="b" onClick={this.onClick} style={{paddingLeft:"70px",paddingRight:"100px",backgroundColor:"rgb(170, 221, 255)",backgroundImage:"cart.PNG",backgroundImage:"url(cart.PNG)",backgroundSize:"55px",backgroundRepeat:"no-repeat",height:"50px",width:"40px",marginLeft:"5px",borderRadius:"10px"}}>17.10$</button>
            </div>
            <div style={{display:"inline-block",width:"800px",marginLeft:"55px"}}> 
            <img class="im" src="mt21.PNG" style={{height:"240px",width:"220px",borderRadius:"20px",marginLeft:"-10px"}}></img>
            <button class="b" onClick={this.onClick} style={{paddingLeft:"70px",paddingRight:"100px",backgroundColor:"rgb(170, 221, 255)",backgroundImage:"cart.PNG",backgroundImage:"url(cart.PNG)",backgroundSize:"55px",backgroundRepeat:"no-repeat",height:"50px",width:"40px",marginLeft:"5px",borderRadius:"10px"}}>10.10$</button>
            
            <img class="im" src="mt22.PNG" style={{height:"240px",width:"220px",borderRadius:"20px",marginLeft:"10px",marginTop:"10px"}}></img>
            <button class="b" onClick={this.onClick} style={{paddingLeft:"70px",paddingRight:"100px",backgroundColor:"rgb(170, 221, 255)",backgroundImage:"cart.PNG",backgroundImage:"url(cart.PNG)",backgroundSize:"55px",backgroundRepeat:"no-repeat",height:"50px",width:"40px",marginLeft:"5px",borderRadius:"10px"}}>14.01$</button>
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
export default Mtshirt;
import React,{ Component } from "react"; 
class Contact_us extends Component
{
    state={
        message:"your message",
        phone:" +2 01024657933 ",
        your_name:"  ",
        email:" ahmedsayed@gmail.com "
    };
    username=React.createRef();         //creat ref
    tx=React.createRef();
    submit =(e)=>
    {
        e.preventDefault();              //not reloaded
        const user=this.username.current.value;  //access data in input
        console.log(user);
        const user1=this.tx.current.value;  //access data in input
        console.log(user1);                  //access data in input
    }
    render(){
        return(
            <div style={{height:"500px",marginLeft:"-100px",marginRight:"-100px",backgroundRepeat:"no-repeat",backgroundSize:"915px",backgroundImage:"url(contact-us-banner.jpg"}}>
                <h1 style={{color:"rgb(220, 10, 248)"}}>Contact US</h1>
                <br/>
                <h5>( Please send your Message below. We will get back to you at the earliest )</h5>
                <h6>Message: </h6>
                <form onSubmit={this.submit} >
                    <div class="input-group" style={{height:"100px",width:"300px"}}>
                        <textarea id="tx"  aria-describedby="emailHelp" ref={this.tx} required class="form-control" aria-label="With textarea"> 
                         {this.sub}
                        </textarea>
                    </div>
                    <h6>Email: </h6>
                    <div className="mb-3">
                        <input 
                        type="email" 
                        className="form-control"
                        id="username"
                        aria-describedby="emailHelp"
                        ref={this.username}
                        style={{height:"30px",width:"250px"}}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary" style={{backgroundColor:"rgb(220, 10, 248)"}}>
                        Submit
                    </button>
                </form>
              

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
export default Contact_us;
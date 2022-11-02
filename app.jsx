import React,{ Component } from "react";
import Navbar from "./navbar";
import { Route,Routes } from "react-router-dom";
import About from "./about";
import Home from "./home";
import Contact_us from './contact_us';
import axios from 'axios';
import Men from "./men's_clothes";
import Bc from "./baby's_clothes";
import Woman from "./woman's_clothes";
import Mtshirt from "./men's_tshirt";
import Msweet from "./men's_sweetshirt";
import Boyt from "./boy's_tshirt";
import Wtshirt from "./woman's_tshirt";
import Wsweet from "./woman's_sweetshirt";
import Wplus from "./woman's_plus";
import Gtshirt from "./girl's_tshirt";
import Bb from "./baby_boys";
import Bg from './baby_girls';

class App extends Component {
    state = {
        
    };
    // async componentDidMount(){
    //     const {data}=await axios.get(" http://localhost:3000/posts");   //json
    //     console.log(data);
        
        //////////////////////////////////////////////
        //  const promise= fetch("https://jsonplaceholder.typicode.com/posts");
        //  console.log(promise);
        //  const res =promise.then(res=>res.json);
        //  console.log(res);
    // }
    render() {
     return (
        
        <React.Fragment>
            <Navbar/>
                <main className="container">
                    <Routes>
                        <Route path="/" element={<Home/>} />
                        <Route path="/home" element={<Home/>} />
                        <Route path="/about" element={<About/>}/>
                        <Route path="/contact_us" element={<Contact_us/>}/>
                        <Route path="/men's_clothes" element={<Men/>}/>
                        <Route path="/woman's_clothes" element={<Woman/>}/>
                        <Route path="/baby's_clothes" element={<Bc/>}/>
                        {/* /// */}
                        <Route path="/men's_tshirt" element={<Mtshirt/>}/>
                        <Route path="/men'ssweetshirt" element={<Msweet/>}/>
                        <Route path="/boy's_tshirt" element={<Boyt/>}/>
                        {/* Men */}
                        <Route path="/woman's_tshirt" element={<Wtshirt/>}/>
                        <Route path="/woman's_sweetshirt" element={<Wsweet/>}/>
                        <Route path="/woman's_plus" element={<Wplus/>}/>
                        <Route path="/girl's_tshirt" element={<Gtshirt/>}/>
                        {/* Woman */}
                        <Route path="/baby_boys" element={<Bb/>}/>
                        <Route path="/baby_girls" element={<Bg/>}/>
                        
                        {/* Baby */}
                        



                    </Routes>
                </main>
            
        </React.Fragment>
     );
      }
    }
    export default App;
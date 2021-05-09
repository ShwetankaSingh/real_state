import React, { react } from "react";
import Header from "./common/Header";
import Background from "../components/solutions-home-example.svg"


var sectionStyle = {
    width: "100%",
    height: "400px",
  };

class HomePage extends React.Component {



    render() {

        if (localStorage.getItem('UId') != null) {
            return (
                <>
                    <Header />
                    <div>
                    <br>
                    </br>
                   
                   <center><h2>Welcome {localStorage.getItem("Name")}</h2></center> 
                   
                   <center> <p>Find your perfect home here</p></center>
                   <img src={ Background } style={ sectionStyle }/> 
                   </div>
                </>
            )
        }
        return (
            <>
                <Header />
                    <div>
                    <br>
                    </br>
                   
                   <center><h2>Welcome!!</h2></center> 
                   
                   <center> <p>Find your perfect home here</p></center>
                   <img src={ Background } style={ sectionStyle }/> 
                   </div>
            </>
        );
    }
}

export default HomePage;
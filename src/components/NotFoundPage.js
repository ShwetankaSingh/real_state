import React from "react";
import { Link } from "react-router-dom";
import Header from "./common/Header";

function NotFoundPage() {
    return (
    
      
        <div>
            <br></br>
            <br></br>
           <center> <h1>Page Not Found</h1></center>
            <p>
            <center><Link to="/">Back to Home</Link></center>
            </p>
        </div>
        
    );
}
export default NotFoundPage;
import React, { Component } from 'react';
import Header from "./common/Header";
import Images1 from "../components/img.jpg";
import Images2 from "../components/img2.jpg";
import Images3 from "../components/img3.jpg";
import { Link } from "react-router-dom";


function Images() {
    return (
        <>
            <Header />
            <br></br>
            <div class="container">
                <div class="row">
                    <div class="col-sm-4" >
                        <div class="card" >
                            <img src={Images1} style={{height:260}} />
                        </div>
                    </div>
                    <div class="col-sm-4" ><div class="card" >
                        <img src={Images2} />
                    </div></div>
                    <div class="col-sm-4" ><div class="card" >
                        <img src={Images3} />
                    </div></div>
                </div>
            </div>
            <br>
            </br>
            <br></br>
            <center><Link>Download Brochure</Link></center>
        </>
    )
}
export default Images;
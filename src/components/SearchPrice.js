import React,{Component} from 'react';

function SearchPrice(props){
     return(
         <div>
             <input onChange={props.handleInput3} type="text" placeholder="Search Price" />
         </div>
     )
}
export default SearchPrice;
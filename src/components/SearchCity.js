import React,{Component} from 'react';

function SearchCity(props){
     return(
         <div>
             <input onChange={props.handleInput} type="text" placeholder="Search"/>
         </div>
     )
}
export default SearchCity;
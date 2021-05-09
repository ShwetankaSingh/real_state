import React,{Component} from 'react';

function SearchArea(props){
     return(
         <div>
             <input onChange={props.handleInput1} type="text" placeholder="Search Area" />
         </div>
     )
}
export default SearchArea;
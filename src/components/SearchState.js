import React,{Component} from 'react';

function SearchState(props){
     return(
         <div>
             <input onChange={props.handleInput2} type="text" placeholder="Search Type"/>
         </div>
     )
}
export default SearchState;
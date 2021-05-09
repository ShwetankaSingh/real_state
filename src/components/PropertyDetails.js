import React from "react";
import { Link } from "react-router-dom";


//<Link to="/">Back to Home</Link>
class PropertyDetails extends React.Component {
    
    constructor(props) {
        super(props);
        this.getDetails=this.getDetails.bind(this);
        this.state = {
            property: [],
          };
    }
    
    componentDidMount() {
        this.getDetails(this.props.match.params.id);
      }
    
   getDetails(id){
    fetch('https://localhost:44326/api/Properties').then(res => res.json()).then(result => {
        this.setState({ property: result });
      }
      )
      console.log(this.state.property);
}

    render(){
    return (
        <div>
            <h2>Details</h2>
            <p>
                <h4>Property Id :</h4>
            </p>
        </div>
    )
    }
}
export default PropertyDetails;
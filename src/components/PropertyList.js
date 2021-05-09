import React from 'react';
import '../components/PropertyList.css';
import Header from "./common/Header";
import { Link } from "react-router-dom";
import SearchCity from './SearchCity';


class PropertyList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      property: [],
      searchCity: ''
    };
  }

  componentDidMount() {
    fetch("https://localhost:44326/api/Properties").then(res => res.json()).then(result => {
      this.setState({ property: result });
    }
    )
    console.log(this.state.property);
  }

  handleInput = (e) => {
    console.log(e.target.value);
    this.setState({ searchCity: e.target.value })
  }

  render() {
    let filteredCity = this.state.property.filter((p) => {
      return p.City.toLowerCase().includes(this.state.searchCity.toLowerCase()) || p.State.toLowerCase().includes(this.state.searchCity.toLowerCase()) || p.Type.toLowerCase().includes(this.state.searchCity.toLowerCase()) || p.Details.toLowerCase().includes(this.state.searchCity.toLowerCase()) || p.Area.toString().includes(this.state.searchCity) || p.Price.toString().includes(this.state.searchCity)
    })



    return (
      <>
        <Header />
        <div class="cbg">
          <div class="container">
            <center><h2>Property List</h2></center>
            <br></br>
            <center><SearchCity handleInput={this.handleInput} /></center>
            <br></br>

            {filteredCity.map(pro => (
              <div>
                <div class="card" key={pro.PId}>
                  <div class="card-body">
                    <table class="table table-striped">
                      <thead>
                        <tr>
                          <th scope="col">City</th>
                          <th scope="col">State</th>
                          <th scope="col">Price</th>
                          <th scope="col">Area</th>
                          <th scope="col">Type</th>
                          <th scope="col">Details</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">{pro.City}</th>
                          <td>{pro.State}</td>
                          <td>Rs. {pro.Price}</td>
                          <td>{pro.Area}</td>
                          <td>{pro.Type}</td>
                          <td>{pro.Details}</td>
                          <td><Link to="/images">Images</Link></td>
                        </tr>

                      </tbody>
                    </table>
                  </div>
                </div>
                <br></br>
              </div>
            ))
            }
          </div>
        </div>
      </>
    );
  }
}

export default PropertyList;

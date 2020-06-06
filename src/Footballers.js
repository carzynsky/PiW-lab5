import React, { Component } from "react";
import {Table} from 'react-bootstrap';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class Footballers extends Component {
    constructor(props){
        super(props);
        this.state = {
            footballers: [{"id": 1, "firstName": "Robert", "lastName": "Lewandowski", "Club": "Bayern Monachium"},
            {"id": 2, "firstName": "Arkadiusz", "lastName": "Milik", "Club": "Napoli"},
            {"id": 3, "firstName": "Wojciech", "lastName": "Szczęsny", "Club": "Juventus"},
            {"id": 4, "firstName": "Kamil", "lastName": "Glik", "Club": "AS Monaco"}
        ]
        }
    }
  
  render() {
      const footballers = this.state.footballers;
    return (
        <Table striped bordered hover variant="light">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Club</th>
                </tr>
            </thead>
            <tbody>
                {footballers.map((f) => {
                    return(
                        <tr key={f.id}>
                            <td>{f.id}</td>
                            <td>{f.firstName}</td>
                            <td>{f.lastName}</td>
                            <td>{f.Club}</td>
                        </tr>
                    )
                })}
            </tbody>
        </Table>
    );
  }
}
 
export default Footballers;
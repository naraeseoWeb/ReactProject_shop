import './App.css';
import {Button, Navbar, Container, Nav, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import data from './data.js';
import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';


function App() {
  let [shoes] = useState(data);

  return (
    <div>



      <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        </Container>
      </Navbar>


      
      <Routes>
        <Route path="/" element={
          <>
            <div className="main-bg"></div>
            <Container>
              <Row>
                {
                  shoes.map((a, i)=>{
                    return(
                      <Card shoes={shoes[i]} i={i}></Card> 
                    )    
                  })
                }
              </Row>
            </Container>          
          </>
        }/>
        <Route path="/detail" element={<div>상세페이지임</div>}/>
      </Routes>





    </div>
  );
  
  function Card (props) {
    return (
      <div>
        <Col sm>            
          <img src={'https://codingapple1.github.io/shop/shoes'+ (props.i+1)+ '.jpg'} width="60%"/>
          <h4>{props.shoes.title}</h4>
          <p>{props.shoes.content}</p>
        </Col>
      </div>
    )
  }


}

export default App;
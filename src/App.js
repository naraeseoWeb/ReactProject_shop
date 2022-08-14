import { useState } from "react"
import { Navbar, Container, Nav } from "react-bootstrap"
import './App.css'
import data from './data.js'
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
import Detail from './routes/Datail.js'

function App() {

  let [shoes] = useState(data);
  let navigate = useNavigate();

  return (
    <div className='App'>
      <Navbar bg="light" variant="light">
        <Container>
        <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link onClick={()=>{ navigate('/') }}>Home</Nav.Link>
          <Nav.Link onClick={()=>{ navigate('/detail')}}>Detail</Nav.Link>
        </Nav>
        </Container>
      </Navbar>
      
      <Routes>
        <Route path="/" element={
          <>
            <div className="main-bg"></div>
            <div className="conatiner">
              <div className="row">
                {
                  shoes.map((a, i) => {
                    return <Card shoes={shoes[i]} i={i}></Card>
                  })}
              </div>
            </div>         
          </>
        }/>
        <Route path="/detail" element={<Detail shoes={shoes}/>}/>
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
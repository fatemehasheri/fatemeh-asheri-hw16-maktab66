import './App.css';
import { Container, Row, Col, Button } from "react-bootstrap";
import React ,{useState} from 'react';
import Login from './Login';
import Register from './Register';

function App() {
  let [theme1, setTheme1] = useState("dimgray");
  let [theme2,setTheme2] =useState("mediumspringgreen")
  let [form,setform]=useState(<Login />)
  
  const mood = (theme1) => {
    if (theme1 === "dimgray") {
      setform(<Register />)
      setTheme1("mediumspringgreen");
      setTheme2("dimgray")
    }else { 
      setform(<Login />)
      setTheme2("mediumspringgreen");
      setTheme1("dimgray");
    } 
  };

  return (
    <div>
      <Container className='mt-5 styleForm'>
          <Row className="justify-content-md-center">
            <Col md="auto" className=' mt-5'>
              <Button  style={{ backgroundColor: theme1}} onClick={() => mood(theme1)} className='button1'> ثبت نام</Button>
              <Button  style={{ backgroundColor: theme2}} onClick={() => mood(theme1)} className='button1'>ورود </Button>
            </Col>
          </Row>
          <Row className="justify-content-md-center">
            <Col md="auto" className='mt-5 mb-5'>
            {form}
            </Col>
          </Row>
        </Container>
     
    </div>
  );
}

export default App;

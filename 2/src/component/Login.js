import React ,{useState} from 'react';
import { Form, Button, Row, Col ,Container} from "react-bootstrap";
import { AiFillEye } from "react-icons/ai";
import { AiTwotoneEyeInvisible } from "react-icons/ai";


function Login() {
    const [validated, setValidated] = useState(false);
    const [values, setValues] = React.useState({
        password: "",
        showPassword: false,
    });
    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    }; 
    const handlePasswordChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }else{
            alert("کاربر وارد شد")
        }
        setValidated(true);
    };
  
    return (
        <div>
            <Container>
            <Row className="justify-content-md-center">
                <Col md="auto">
                    <h1 style={{color:"#fff"}}> خوش آمدید </h1>
                </Col>
            </Row>
            <Form className='form mt-5' noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group  controlId="formBasicName">
                    <Form.Control className="height" type="email" placeholder="پست الکترونیک" required />
                    <Form.Control.Feedback type="invalid">
                        Please choose a email.
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mt-5" controlId="formBasicEmail">
                    <Form.Control className="height" 
                    type={values.showPassword ? "text" : "password"} 
                    onChange={handlePasswordChange("password")}
                    value={values.password}
                    placeholder="کلمه عبور"  required/>
                    <Button className='c-icon' onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword}>
                        {values.showPassword ? <AiFillEye /> : <AiTwotoneEyeInvisible  /> }
                    </Button>
                     <Form.Control.Feedback type="invalid" className='valid'>
                        Please choose a username.
                    </Form.Control.Feedback>
                </Form.Group>
                <Row>
                    <Form.Text className="text-muted mb-4">فراموش کرده اید؟</Form.Text>
                </Row>
                <Button type="submit" className='button2 button1'>ورود</Button>
            </Form>
            </Container>
        </div>
    );
}

export default Login;

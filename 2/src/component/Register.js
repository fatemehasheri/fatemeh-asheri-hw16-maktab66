import React,{useState ,useEffect} from 'react';
import { Form, Button, Row, Col ,Container} from "react-bootstrap";
import { AiFillEye } from "react-icons/ai";
import { AiTwotoneEyeInvisible } from "react-icons/ai";

const Register = () => {
    const [validated, setValidated] = useState(false);
    const [Education,setEducation] =useState(false)
    const [data,setdata] = useState([])
    const [value, setValue] = useState([]);
    const handleCity = (event) => {
        const indexOfSelect = event.target.value;
        let arr = []
        arr = indexOfSelect.split(',')
        setValue(arr);
    };
    useEffect(()=>{
        fetch("/iranstates.json").then(res => res.json())
        .then(result => setdata(result))
    },[])

    const [values, setValues] = React.useState({
        password: "",
        showPassword: false,
    }); 
    const handleShowEducation = () =>{
        setEducation(true)
    }
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
        }

        setValidated(true);
    };
    return (
        <div>
            <Container>
            <Row className="justify-content-md-center">
                <Col md="auto">
                    <h1 style={{color:"#fff"}}>رایگان ثبت نام کنید </h1>
                </Col>
            </Row>
            <Form className='form mt-5' noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group  controlId="formBasicName">
                    <Row>
                        <Col xs={6}>
                            <Form.Control className='name height' type="text" placeholder="نام" required />
                            <Form.Control.Feedback type="invalid">
                                Please choose a firstName.
                            </Form.Control.Feedback>
                        </Col>
                        <Col xs={6}>
                            <Form.Control className='name height' type="text" placeholder="نام خانوادگی" required/>
                            <Form.Control.Feedback type="invalid">
                                Please choose a lastName.
                            </Form.Control.Feedback>
                        </Col>
                        
                    </Row>
                </Form.Group>
                <Form.Group className="mt-5" controlId="formBasicEmail">
                    <Form.Control className="height"
                        type={values.showPassword ? "text" : "password"} 
                        onChange={handlePasswordChange("password")}
                        value={values.password}
                        placeholder="پست الکترونیک" required />
                    <Button className='c-icon' onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword}>
                        {values.showPassword ? <AiFillEye /> : <AiTwotoneEyeInvisible  /> }
                    </Button>
                    <Form.Control.Feedback type="invalid" className='valid'>
                        Please choose a email.
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group  controlId="formBasicusername">
                    <Form.Control className="height" type="text" placeholder="کلمه عبور" required />
                    <Form.Control.Feedback type="invalid">
                        Please choose a username.
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Select className="mt-5" aria-label="Default select example" onChange={handleShowEducation}>
                    <option value="" disabled selected hidden>تحصیلات</option>
                    <option value="1">دیپلم</option>
                    <option value="2">فوق دیپلم</option>
                    <option value="3">کارشناسی</option>
                    <option value="3"> کارشناسی ارشد</option>
                    <option value="3">دکتری</option>
                </Form.Select>
                {Education?(<Form.Group className="mt-5" controlId="formBasicEmail">
                    <Form.Control className="height" type="text" placeholder="محل تحصیل " required/>
                    <Form.Control.Feedback type="invalid">
                        Please choose a place.
                    </Form.Control.Feedback>
                    </Form.Group>): null
                }
                <Form.Group className="mt-5" controlId="formBasicPlace" >
                    <Row>
                        <Col xs={6}>
                            <Form.Select  aria-label="Default select example" onChange={(e) => handleCity(e)}  required>
                                <option value="" disabled selected hidden>استان</option>
                               {Object.keys(data).map((dataItem)=>{return <option  key={dataItem} value={Object.values(data[dataItem])} >{dataItem}</option>})} 
                                
                            </Form.Select>
                            <Form.Control.Feedback type="invalid">
                                Please choose a state.
                            </Form.Control.Feedback>
                        </Col>
                        <Col xs={6}>
                            <Form.Select aria-label="Default select example" required >
                                <option value="" disabled selected hidden>شهر</option>
                                {value.map((item) => {return <option key={item}>{item}</option>;})}
                            </Form.Select> 
                            <Form.Control.Feedback type="invalid">
                                Please choose a state.
                            </Form.Control.Feedback>
                        </Col>
                    </Row>
                </Form.Group>
                <Button type="submit" className='button2 button1 mt-5'>ثبت نام</Button>
            </Form>
            </Container>
        </div>
    );
}

export default Register;

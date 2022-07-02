import React, { useState, useEffect } from 'react'
import { Button, Form, Container, Row, Col } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux'
import { saveAdminToken, getAdminToken } from '../helpers/useToken'
import { saveName } from '../helpers/useUserName'
import { setAdminToken, setUserName } from './../store/site'
import { useNavigate } from "react-router-dom";


const fakeAuth = () =>
    new Promise((resolve) => {
        setTimeout(() => resolve('2342f2f1d131rf123333'), 100);
    });


const LoginForm = () => {

    const [isLogged, setIsLogged] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [button, setButton] = useState(false);
    const [warning, setWarning] = useState('');

    const { data } = useSelector(state => state.site);
    const dispatch = useDispatch();

    let navigate = useNavigate();

    const Login = (e) => {
        e.preventDefault();

        setButton(true);

        if (!email) {
            alert("E-Mail adresiniz boş olmamalıdır.");
            setButton(false);
            return false;
        }

        if (!password) {
            alert("Şifreniz boş olmamalıdır.");
            setButton(false);
            return false;
        }

        if (data.users[1].email === email && data.users[1].password === password) {
            setIsLogged(true);
            dispatch(setUserName(data.users[0].name + ' ' + data.users[0].lastName));
            saveName(data.users[0].name + ' ' + data.users[0].lastName)
            return;
        } else {
            setWarning('Kullanıcı adı veya şifreniz hatalı!');
            setButton(false);
            return false;
        }

    }

    useEffect(() => {

        const token = getAdminToken();

        if (token) {
            setIsLogged(true);
            navigate("/admin/dashboard", { replace: true });
        }

        const checkLogin = async () => {
            if (isLogged) {
                const token = await fakeAuth();
                saveAdminToken(token);
                dispatch(setAdminToken(token));
                navigate("/admin/dashboard", { replace: true });
            }
        }

        checkLogin();

    }, [isLogged])

    return (

        <Container className="d-flex justify-content-center align-items-center">
            <Row className="mt-5">
                <Col>
                    <h1 className="mb-5 text-danger">Admin Panel Giriş</h1>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email Adresi</Form.Label>
                            <Form.Control type="email" placeholder="" value={email} onChange={(value) => { setEmail(value.target.value) }} />
                            <Form.Text className="text-muted">
                                Kayıtlı olduğunuz e-mail adresinizi yazınız
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Şifreniz</Form.Label>
                            <Form.Control type="password" placeholder="" value={password} onChange={(value) => { setPassword(value.target.value) }} />
                        </Form.Group>

                        <div className="text-warning">{warning}</div>
                        <Button className="mt-4" variant="primary" onClick={Login} disabled={button}>
                            Giriş Yap
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}


export default LoginForm;
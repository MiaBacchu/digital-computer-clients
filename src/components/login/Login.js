import { Button, Form } from 'react-bootstrap';
import useAuth from '../hooks/useAuth';

const Login = () => {
    const {googleSignIn,handleRegister,handleName,handleEmail,handlePassword,toggleLogin,isLogin}=useAuth();
    return (
        <div className="m-5">
          <h1 className="text-primary">{isLogin ? 'Login':'Register'} Here</h1>
            <Form onSubmit={handleRegister}>
            {!isLogin && <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>User Name</Form.Label>
    <Form.Control onBlur={handleName} type="name" placeholder="Your Name" required />
  </Form.Group>}

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control onBlur={handleEmail} type="email" placeholder="Enter email" required/>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control onBlur={handlePassword} type="password" placeholder="Password" required/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check onChange={toggleLogin} type="checkbox" label="Already Registered?" />
  </Form.Group>
  <Button variant="primary" type="submit">
  {isLogin ? 'Login':'Register'}
  </Button>
</Form>
<button onClick={googleSignIn} className='bg-secondary my-4 text-white rounded'>Google Sign In</button>
        </div>
    );
};

export default Login;
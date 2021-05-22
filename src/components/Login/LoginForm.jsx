import React, { useState } from "react"
import { navigate } from "gatsby"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"

const LoginForm = () => {
  const [isAuth, setIsAuth] = useState(false)

  const handleLogin = e => {
    e.preventDefault()
    setIsAuth(true)
    setTimeout(() => {
      navigate("/dashboard")
    }, 3000)
  }

  const loginBtnState = isAuth ? (
    <>
      <span class="spinner-grow spinner-grow-sm"></span> Loading...
    </>
  ) : (
    "Login"
  )

  return (
    <Form>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Button
        variant="dark"
        type="submit"
        onClick={handleLogin}
        disabled={isAuth}
      >
        {loginBtnState}
      </Button>
    </Form>
  )
}

export default LoginForm

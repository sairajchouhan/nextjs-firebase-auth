import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { Alert, Button, Form } from 'react-bootstrap'
import { useAuth } from '../context/AuthContext'

const Login = () => {
  const router = useRouter()
  const { login } = useAuth()
  const [data, setData] = useState({
    email: '',
    password: '',
  })
  const [error, setError] = useState<any>(null)

  const handleLogin = async (e: any) => {
    e.preventDefault()
    if (data.email.trim() === '' || data.password.trim() === '') return

    try {
      await login(data.email, data.password)
      router.push('/dashboard')
    } catch (err: any) {
      setError({
        code: err.code,
        message: err.message,
      })
    }
  }

  return (
    <div
      style={{
        width: '40%',
        margin: 'auto',
      }}
    >
      <h1 className="text-center my-3 ">Login</h1>
      <Form onSubmit={handleLogin}>
        {error ? (
          <Alert variant="danger">
            <Alert.Heading>
              {(error.code as string).split('/').slice(-1)}
            </Alert.Heading>
          </Alert>
        ) : null}

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onChange={(e: any) =>
              setData({
                ...data,
                email: e.target.value,
              })
            }
            value={data.email}
            type="email"
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onChange={(e: any) =>
              setData({
                ...data,
                password: e.target.value,
              })
            }
            value={data.password}
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
    </div>
  )
}

export default Login

import Login from '../pages/login'
import { render, screen } from '@testing-library/react'

describe('Login Page Testing', () => {
  it('should properly render the form', () => {
    render(<Login />)
  })
})

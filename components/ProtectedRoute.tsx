import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { useAuth } from '../context/AuthContext'

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { loading, user } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login')
    }
  }, [router, user])

  return <>{user ? children : null}</>
}

export default ProtectedRoute

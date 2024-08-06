'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import ApiService from '@/utills/ApiService'
import { User } from '@/utills/types'

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)
  const [user, setUser] = useState<User | null>(null)
  const router = useRouter()

  const checkAuth = () => {
    const token = localStorage.getItem('auth-token')
    const user = localStorage.getItem('user')
    if (token && user) {
      setIsAuthenticated(true)
      setUser(JSON.parse(user))
    } else {
      setIsAuthenticated(false)
      setUser(null)
      router.push('/login')
    }
  }

  const login = async (credentials: { email: string; password: string }) => {
    try {
      ApiService.post('/auth/login', credentials)
        .then(({ data }) => {
          localStorage.setItem('auth-token', data.token)
          localStorage.setItem('user', data.user)
          setIsAuthenticated(!!data.token)
          setUser(data.user)
        })
        .catch(err => {
          console.log(err)
        })
    } catch (error) {
      console.error('Login error:', error)
      throw error
    }
  }

  const logout = () => {
    localStorage.removeItem('auth-token')
    localStorage.removeItem('user')
    setIsAuthenticated(false)
    setUser(null)
    router.push('/login')
  }

  return {
    isAuthenticated,
    user,
    login,
    logout,
    checkAuth,
  }
}

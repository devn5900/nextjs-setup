'use client'
import { useAuth } from '@/hooks/useAuth'
import { useEffect } from 'react'
function About() {
  // call this hook it will auto verfiy and redirect to /login if not authenticated
  const { isAuthenticated, user, login, logout, checkAuth } = useAuth()
  useEffect(() => {
    checkAuth()
  }, [isAuthenticated])
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      next setup
    </main>
  )
}

export default About

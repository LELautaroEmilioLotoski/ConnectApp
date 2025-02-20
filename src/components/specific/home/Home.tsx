import Link from 'next/link'
import React from 'react'

const HomeComponent = () => {
  return (
    <>
    <Link href="/Register">Register</Link>
    <Link href="/Login">Login</Link>
    <Link href="/UserDashboard">Dashboard</Link>
    </>
  )
}

export default HomeComponent
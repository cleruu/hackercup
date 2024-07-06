"use client"
import React, { useState } from 'react'
import Layout from './components/Layout'

export default function Home() {
  const [isAdmin, getAdmin] = useState(true);

  const changeCredentials = () => {
    getAdmin(!isAdmin);
  }

  return (
    <div className="text">
      <Layout newTestament={isAdmin}/>
    </div>
  )
}
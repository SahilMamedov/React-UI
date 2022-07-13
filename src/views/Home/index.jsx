import React from 'react'
import styled from 'styled-components'

export default function Home() {

  const Button=styled.button`
  padding: 8px 40px;
  fonsize:16px;
  border-radius:8px;
  color:white;
  background:purple
  `



  return (
    <div>
      <Button>Click me</Button>
      <h1>Home Page</h1>
    </div>
  )
}


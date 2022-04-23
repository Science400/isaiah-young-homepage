// Step 1: Import React
import * as React from 'react'
import { Link } from 'gatsby'
import Button from 'react-bootstrap/Button'
import Layout from '../components/layout'
import { ButtonGroup } from 'react-bootstrap'

// Step 2: Define your component
const IndexPage = () => {
  return (
    <main>
      <title>Home Page</title>
      <Layout>
        <h1>Welcome to my Gatsby site!</h1>
        <p>I'm making this by following the Gatsby Tutorial.</p>
        <Link to='resume'>Resume</Link>
        <Link to='projects'>Projects</Link>
        <Link to='about'>About</Link>
        <Link to='digitalGarden'>Digital Garden</Link>
        <Link to='dashboard'>Dashboard</Link>
        <Button variant="primary">Primary</Button>{' '}
        <Button variant="secondary">Secondary</Button>{' '}
        <Button variant="success">Success</Button>{' '}
        <ButtonGroup aria-label="Basic example">
          <Button variant="secondary">Left</Button>
          <Button variant="secondary">Middle</Button>
          <Button variant="secondary">Right</Button>
        </ButtonGroup>
      </Layout>
    </main>
  )
}

// Step 3: Export your component
export default IndexPage
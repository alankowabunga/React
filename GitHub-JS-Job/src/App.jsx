import { useState } from 'react'
import {useFetchJobs} from  './useFetchJobs'
import { Container } from 'react-bootstrap'
import './App.css'

function App() {
  
  const {jobs,loading,error}=useFetchJobs(params,page)

  return (
    <Container>
      {loading && <h1>Data Loading</h1> }
      {error && <h1>some errors occured</h1> }
      <h1>{jobs.length}</h1>
    </Container>
  )
}

export default App

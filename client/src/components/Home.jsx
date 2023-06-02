import React from 'react'
import {Box, Button} from '@mui/material'
import styled from '@emotion/styled'
import CsvFiles from './CsvFiles'

const Container = styled(Box)`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Upload = styled(Box)`
  width: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Btn = styled(Button)`
    background-color: blue;
    color: white;
`

const Home = () => {
    const csvUpload = (event) => {

    }
  return (
    <Container>
      <Upload>
        <input type='file'/>
        <Btn onChange={csvUpload}>Upload File</Btn>
      </Upload>
      <CsvFiles />
    </Container>
  )
}

export default Home
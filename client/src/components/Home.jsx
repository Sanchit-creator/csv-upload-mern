import React, { useState } from 'react'
import {Box, Button} from '@mui/material'
import styled from '@emotion/styled'
import CsvFiles from './CsvFiles'
import { postFile } from '../service/api'

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
    const [file, setFile] = useState()
    const csvUpload = (e) => {
      setFile(e.target.files[0]);
      console.log(e.target.files[0]);
    }

    const handleSubmit = async (event) => {
      event.preventDefault();
      
      const formData = new FormData();
      formData.append('file', file);
  
      try {
        let res = await postFile(formData);
      } catch (error) {
        console.error('Error uploading file:', error);
      }
    };
  return (
    <Container>
      <Upload component="form" onSubmit={handleSubmit}>
        <input type='file' onChange={(e) => csvUpload(e)}/>
        <Btn type='submit'>Upload File</Btn>
      </Upload>
      <CsvFiles />
    </Container>
  )
}

export default Home
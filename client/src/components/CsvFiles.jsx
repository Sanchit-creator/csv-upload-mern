import styled from '@emotion/styled'
import { Box, Button, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getFile, getFileDetail } from '../service/api'
import { useContext } from 'react';
import { DataContext } from '../DataContext';


const InputBox = styled(Box)`
    width: 100%;
    display: flex;
    justify-content: center;
    height: 100px;
    align-items: center;
    background-color: #fbfbfb;
`

const MainBox = styled(Box)`
    height: 100px;
    display: flex;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    width: 80%;
`

const CsvFiles = () => {

  const [interviewData, setInterviewData] = useState();
  const { data, setData } = useContext(DataContext);
  const navigate = useNavigate();

    useEffect(() => {
        const random = () => getFile().then(function(result) {
            setInterviewData(result.data);
        })

        random();
    },[setInterviewData])

    const handleClick = async(data) =>{
      let response = await getFileDetail(data);
      setData(response.data);
      console.log(response.data);
      navigate('/detail')
    }


  return (
    <>
    {
        interviewData ? interviewData.map((data, key) => (
            <MainBox key={data._id}>
                <InputBox>
                    <Typography>Name: {data.name}</Typography>
                </InputBox>
                <InputBox>
                    <Button
                        onClick={() => handleClick(data._id)}
                        
                    >
                        Open
                    </Button>
                </InputBox>
        </MainBox>
        )) : 'Nothing to show'
    }
    </>
  )
}

export default CsvFiles
import { Grid, GridItem } from '@chakra-ui/react';
import React from 'react'
import { useSelector } from 'react-redux'

const Results = () => {
    const {result} = useSelector(store=> store.result);

  return (
    <div>
        {result.score && <Grid templateColumns={'repeat(2,1fr)'} w='50%' padding={'1rem'} gap='2px' borderRadius='1rem' marginInline={'auto'}>
            <GridItem fontSize={'xl'} fontWeight='medium' fontStyle={'italic'} border='1px solid black' padding={'1rem'} borderRadius='1rem'>Correct Answers</GridItem>
            <GridItem border='1px solid black' padding={'1rem'} borderRadius='1rem' >{result.score}</GridItem>
            <GridItem fontSize={'xl'} fontWeight='medium' fontStyle={'italic'} border='1px solid black' padding={'1rem'} borderRadius='1rem'>Incorrect Answers</GridItem>
            <GridItem border='1px solid black' padding={'1rem'} borderRadius='1rem' >{result.total-result.score}</GridItem>
            <GridItem fontSize={'xl'} fontWeight='medium' fontStyle={'italic'} border='1px solid black' padding={'1rem'} borderRadius='1rem'>Total Score</GridItem>
            <GridItem border='1px solid black' padding={'1rem'} borderRadius='1rem' >{result.score}</GridItem>
            <GridItem fontSize={'xl'} fontWeight='medium' fontStyle={'italic'} border='1px solid black' padding={'1rem'} borderRadius='1rem'>Percentage</GridItem>
            <GridItem border='1px solid black' padding={'1rem'} borderRadius='1rem' >{((result.score/result.total)*100).toFixed()}%</GridItem>
            
            </Grid>}
    </div>
  )
}

export default Results
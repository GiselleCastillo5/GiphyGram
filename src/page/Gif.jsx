import React, { Component } from 'react'
import { useSelector } from 'react-redux'
import { IconButton,InputGroup,Input,InputRightElement,Button,SimpleGrid,Box
    ,Container ,Image,Center, grid } from '@chakra-ui/react'
import { getFCP } from 'web-vitals'




function  Gif() {

    const gif = useSelector((state)=>state.gif.value)



    return (
        <Center py={6}>
        <Box
          maxW={'300px'}
          w={'full'}
          bg={'gray.800'}
          boxShadow={'2xl'}
          rounded={'md'}
          overflow={'hidden'}>
          <Image
            h={'250px'}
            w={'full'}
            objectFit={'cover'}
            src={gif.url} 
            key={gif.id} 
             allowFullScreen
          />

          <Box p={6}> 
            <Button
              w={'full'}
              mt={8}
              bg={'#151f21'}
              color={'white'}
              rounded={'md'}
              _hover={{
                transform: 'translateY(-2px)',
                boxShadow: 'lg',  
              }}>
             {gif.title}
            </Button>
          </Box>
        </Box>
   </Center>
    )
  }

export default Gif;

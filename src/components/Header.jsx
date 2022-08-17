

import { React,Component,ReactNode } from 'react'
import {NavLink} from 'react-router-dom';
import {
    Box,
    Flex,
    Avatar,
    HStack,
    Link,
    IconButton,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useDisclosure,
    useColorModeValue,
    Stack,Heading,
  } from '@chakra-ui/react';
  import { HamburgerIcon, CloseIcon, AddIcon } from '@chakra-ui/icons';

export default class Header extends Component {
  render() {
    return (
      <>
        <Box bg='black' px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          
          <HStack spacing={8} alignItems={'center'}>
            <Box>
              <Heading size='lg' fontSize='50px' color='white'> GIPHY </Heading>
            </Box>
            <HStack
              color='white'
              as={'nav'}
              spacing={10}
              display={{ base: 'none', md: 'flex' }}
              fontFamily='Roboto'
              >
                <NavLink to={'/'} >
                  <Heading as="h5" size="md" borderBottomColor={'red'}
                
                
                >Inicio</Heading></NavLink>
                <NavLink to={'/search'} ><Heading as="h5" size="md">Buscar</Heading></NavLink>           
            </HStack>
          </HStack>
        </Flex>
      </Box>
      </>
    )
  }
}

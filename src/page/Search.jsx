import React, { Component } from 'react'
import axios from 'axios';
import debounce from 'lodash.debounce';
import { IconButton,InputGroup,Input,InputRightElement,Button,SimpleGrid,Box
       ,Container ,Image,Center } from '@chakra-ui/react'
import { SearchIcon,StarIcon } from '@chakra-ui/icons'
import Header from '../components/Header';

class Search extends Component {
  
    constructor(props){
        super(props)
        this.state={           
                term: 'PIZZA',
                offset: 0 ,
                limit:  25,
                isLoading: false,
                api_key:'ffvCZt2xnyzZChCckuB5SKgVyOrnvPDF',
                items:[]
                
        }
   
        	// Binds our scroll event handler
		window.onscroll = debounce(() => {
			const { loadItems, state: { error, isLoading, hasMore } } = this;
			if (error || isLoading || !hasMore) return;
			if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
                const offsetacumulador=25
                const ref_offset=this.state.offset
                const newstate=ref_offset+offsetacumulador
                this.setState({offset: newstate})     
                console.log(this.state.offset)
                loadItems(this.state.term,this.state.offset)
                
                
                ;
			}
		}, 100);
   
        console.log(this.state.items)
    }


    componentWillMount() {
		this.loadItems(this.state.term,this.state.offset);
  
	}
  
    loadItems = (term,offset)=>{
        if(offset === 0) {
			offset = 0
		}else {
			this.setState({offset :this.state.offset + this.state.limit})
		}
        this.setState({isLoading:true},()=>{
            axios.get()
            axios({     method:'GET',
                        url:'https://api.giphy.com/v1/gifs/search',
                        params:{
                                api_key:'ffvCZt2xnyzZChCckuB5SKgVyOrnvPDF',
                                limit:1000,
                                offset:offset,
                                q:term
                            }
                    })
                    .then((res)=>{

                           
                            const nextItems= res.data.data.map(item=>({
                                id: item.id,
                                embed_url: item.embed_url,
                                url: item.url,
                                title:item.title,
                                images:item.images
                            }
                            ))
                       
                            this.setState({
                                hasMore: this.state.items.length < 200,
                                isLoading: false,
                                items: [ ...this.state.items, ...nextItems ]
                            })
                        })
                        .catch((err) => {
                            this.setState({
                                error: err.message,
                                isLoading: false
                            });
                        });  
            
        })


   }
        
   handleChange = (term) => {
    this.setState({term});
    }

    getItems = async () => {
        await this.loadItems(this.state.term,this.state.offset )
	};

    handleKeyDown = (e) => {
		if(e.keyCode==="13"){
			this.getItems();
		}
	}
    
    render() {
    const { error, hasMore, isLoading, items } = this.state;
    return (
        <>
        <Header/> 
        <Container maxW='2000px' bg='black'>
         <InputGroup size='md'>
              <Input
                pr='4.5rem'
                type='text'
                placeholder='Buscar Gifs'
                color='black'
                value={this.state.term}
                onChange={e => this.handleChange(e.target.value)}
                bg='white'
              />
              <InputRightElement width='4.5rem'>
               <br/> 
              <IconButton
                            colorScheme='cyan'
                            aria-label='Search database'
                            onClick={async ()=>{
                                await this.setState({items:[]})
                                await this.getItems() 
                                console.log(items)
                            }}
                            icon={<SearchIcon />}
                    /> 
        
              </InputRightElement>
            </InputGroup>
            
              {/* Si existe un gif que los cargue */}
            {items && 
                    <SimpleGrid columns={[2, null, 3,5]}  spacing='10px'>
						{items.map((item) => (

                            <>
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
                                         src={item.images.fixed_height.url} 
                                         key={item.id} 
                                          allowFullScreen
                                       />

                                       <Box p={6}> 
                                         <Button
                                           w={'full'}
                                           mt={8}
                                           bg={'linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)'}
                                           color={'white'}
                                           rounded={'md'}
                                           icon={<StarIcon />}
                                           _hover={{
                                    transform: 'translateY(-2px)',
                                    boxShadow: 'lg', 
                                    bg:'#33FFE9',
                                    color:'black'
                                    
                                  }}>
                                           Favorito
                                         </Button>
                                       </Box>
                                     </Box>
                                </Center>
                           
                            </>
                              
						))}
					 </SimpleGrid>          
            }                    
            {/* Validacion de Loading */}
            {!items && <div style={{color:"white"}}>Loading...</div>}

     </Container>
    </>
    )
  }
}

export default Search
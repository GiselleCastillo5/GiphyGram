import React,{useEffect,useState} from 'react';
import axios from 'axios';
import Loader from '../components/Loading';

const Giphy = ()=> {


    const [data,setData]=useState([])
    const [isLoading,setIsLoading]=useState(false)
    const [search,setSearch]=useState("")
    const [isError,setIsError]=useState(false)

    /*Giphygram usa async*/ 
    useEffect(()=>{
        
        const fetchData = async ()=>{
            setIsError(false)
            setIsLoading(true)
          
            try {
                const results = await axios("https://api.giphy.com/v1/gifs/trending",
                {
                        params:{
                                api_key:'ffvCZt2xnyzZChCckuB5SKgVyOrnvPDF',
                                limit:1000
                                }
                });
                console.log(results);    
                setData(results.data.data) 
            } catch (err) {
                setIsError(true);
                setTimeout(()=>setIsError(false),4000)

            }
                setIsLoading(false)
            } // fin fetchdata
            
        fetchData()
    },[]);

    const renderGifs =()=>{

        if(isLoading){
            return  <Loader/>
        }
        console.log(isLoading)
        return data.map(el=>{
            return(
                <div key={el.id} className='gif'>
                    <img src={el.images.fixed_height.url} alt="" srcset="" />
                </div>
            )
        })
    }

    const renderError=()=>{
        if(isError){
            return(
              <div className="alert alert-danger alert-dismissible fade show" role="alert">
                    Unable to get Gifs, please try again in a few minutes
              </div>
            );
        }
    }

    /*Funcion txtbox*/
    const handleSearchChange = (e)=>{
        setSearch(e.target.value)
    }

    /*Handle del boton*/ 
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setIsError(false);
        setIsLoading(true);

        try {
            const results = await axios("https://api.giphy.com/v1/gifs/search",{
                params:{
                    api_key:'ffvCZt2xnyzZChCckuB5SKgVyOrnvPDF',
                    q:search,
                    limit:1000
                }
            }); 
            setData(results.data.data) 
        } catch (err) {
            setIsError(true);
            setTimeout(()=>setIsError(false),4000)
        }

      
          
     setIsLoading(false)
    }



    return ( 

        <div className='m-2'>
            {renderError()}
            <form className="form-inline justify-content-center m-2">
                <input placeholder="Search" type="text" 
                       onChange={handleSearchChange} value={search}
                        className="form-control"
                />
                <button type="submit" 
                className='btn btn-primary mx-2'
                onClick={handleSubmit}
                >Go</button>
            </form>
              
            <div className="container gifs">{renderGifs()}</div>
        </div>
     );
}



export default Giphy;
import {React, useState, useEffect} from 'react';
import Counter from './Counter';
import ItemList from './ItemList';
import comicData from './comicData';

const ItemListContainer = () => {
    function onAdd(count){
        console.log(`el carrito tiene ${count} productos`)

    }
    const [comics, setComics]= useState([])
    const[isLoading,setIsLoading]=useState(true)
    useEffect(()=>{

        const getComicData= new Promise((resolve,reject)=>{
            setTimeout(() => {
                resolve(comicData)
            }, 2000);
        })
        getComicData.then(response=> setComics(response))
        .catch((err)=> console.log(err))
        .finally(()=> setIsLoading(false))
    },[])
    
    return ( isLoading ?<h2>Loading...</h2> : 
        <div>
            <Counter stock={5} onAdd={onAdd}/>
         <div  className='ro'><ItemList lista={comics}/></div>   
        </div>
       
    );
}

export default ItemListContainer;




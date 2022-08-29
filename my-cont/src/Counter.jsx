import {React, useState} from 'react';

const Counter = ({stock, onAdd}) => {
    const [count,setCount ] = useState(0)

    function add (){
        if(count< stock){
            setCount(count+1)
        }
        
    }

    function rest() {
        if(count>=1){
            setCount(count-1)
        }
        
        
    }

    function reset() {
        setCount(0)
    }
    return (
     <div>
        <div className='contador'>
            <h1>Counter</h1>
            <p> Stock : {stock} </p>
            <p>Cantidad : {count}</p>

        <div>
            <button className='btn btn-primary' onClick={rest}> - </button>
            <button className='btn btn-light' onClick={reset}> Reset </button>
            <button className='btn btn-secondary' onClick={add}> + </button>
        </div>
        <div>
            <button className='btn btn-dark' onClick={()=> onAdd(count)}>Confirmar</button>
        </div>
        </div>
                
     </div>
    );
}

export default Counter;

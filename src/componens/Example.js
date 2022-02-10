import React,{useState} from 'react';

const Example = () => {
  const [counter,setCounter]= useState(0)
    return (
        <div className="container">
            <button className="btn btn-primary mx-5"
            onClick={()=>setCounter(counter + 1)}
            >Добавить</button>
            {counter}
            <button className="btn btn-secondary mx-5"
            onClick={()=> setCounter(counter-1)}>Отнять</button>
        </div>
    );
};

export default Example;

// hooks
// usaState
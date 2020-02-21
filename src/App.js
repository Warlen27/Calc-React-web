import React, { useState, useEffect } from 'react';

import './App.css';
import Button from './components/Button';
import Display from './components/Display';


function App() {
 const  [operation, setOperation] = useState([]);


 
useEffect(() => {

  
  
 }, [operation])

 function clearAll() {
  setOperation([]);
}

function cancelEntry(){
  setOperation(operation.slice(0, operation.length - 1));
}

function isOperator(value){
  return (['+', '-', '*', '%', '/'].indexOf(value) > -1);
  }


  function calc() {

  if(operation.length > 2) {
  
    setOperation([eval(operation.join(''))]);


  }else {

    return 
  }
  
  }

 function pushOperation(value){
    

    if(operation.length > 2){

    

     let result = eval(operation.join(''));
     
     setOperation([result, value]);
     

    } else if(value === '='){

      calc();

     
     
    }else  {

      setOperation([...operation, value]);

    }
  }

  function addDot(){
    let lastOperation = getLastOperation();
    if(typeof lastOperation === 'string' && lastOperation.split('').indexOf('.') > -1 ) return;
  
    if(isOperator(lastOperation) || !lastOperation){
  
      pushOperation('0.');
  
    } else{
      setLastOperation(lastOperation.toString() + '.');
  
    }
  
  }

function addOperation(value){


  if(isNaN(getLastOperation())){

    if(isOperator(value)){

      setLastOperation(value);

    }else{

      pushOperation(value);
     
    }

  }else{

    if(isOperator(value)){
     
      pushOperation(value);
     

    }else{

     let newValue = getLastOperation() + value;
      setLastOperation(newValue);
    

    }

  } 

}

function getLastOperation(){

 return operation[operation.length - 1];
 
}

function setLastOperation(value){
  
  const newOperation = [...operation]
  
 newOperation[newOperation.length - 1] = value
 
 setOperation(newOperation);
 
}


  return (
    <div className="calculator">
              <Display value={operation}/>
              <Button  label='AC' click={clearAll} spanTwo/>
              <Button  label='%' click={addOperation}  />
              <Button label='DEL' click={cancelEntry} />
              <Button label='7'click={addOperation}  />
              <Button label='8'click={addOperation} />
              <Button label='9'click={addOperation} />
              <Button label='/' click={addOperation}  operator/>
              <Button label='4'click={addOperation} />
              <Button label='5'click={addOperation} />
              <Button label='6'click={addOperation} />
              <Button label='*'click={addOperation}  operator/>
              <Button label='1'click={addOperation} />
              <Button label='2'click={addOperation} />
              <Button label='3'click={addOperation} />
              <Button label='-'click={addOperation}  operator/>
              <Button label='0'click={addOperation} />
              <Button label='.'click={addDot}   />  
              <Button label='='click={calc} equal/>
              <Button label='+'click={addOperation}  operator/>


    </div>
  );
}

export default App;

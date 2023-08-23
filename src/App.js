import './App.css'
import React, { useState } from 'react';
import Input from './Components/input';
import Button from './Components/button';
import Select from './Components/select'
import Card from './Components/card';


function App  () {

  const [text, setText] = useState("")
  const [list, setList] = useState([]);
  const [selectedOption, setSelectedOption] = useState('');

  const optionsList = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
   
  ];


  let add = () => {
    if (!text) {


    } else {

      list.push(text);
      setList([...list]);
    }
  };

  return (
    <>
      <h1 className='main-h1'>Components Assignment</h1>
      <div>
        <Input
          type="text"
          value={text}
          onChange={(e) => {
            setText(e.target.value)

          }}
        />
        
        <Button onClick={add} label="Add" />

        <div className='show'>


          {list.map((x, i) => (
            <>
              <div className='del' >
                <p id='para' key={i}>{x}</p>
              </div>
            </>
          ))}
        </div>

      </div>


      <Select label="Select an option" value="hello" onChange={(e) => {setSelectedOption(e.target.value)}} optionsList={optionsList} />
   
      <Card
        id={1}
        userName="Hammad"
        age={19}
        institute="Sir Adamjee Institute"
        isActive={true}
        category="Professional"
      />
    </>
  );
};

export default App;

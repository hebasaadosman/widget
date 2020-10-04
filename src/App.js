import React,{useState} from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import DropDown from './components/DropDown';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header';
const items=[
  {
    title:'what is React?',
    content :'front end javascript library'
    
  },
  {
    title:'why use React?',
    content :'React is a favorite js library  among engineers'
    
  },
  {
    title:'how we use React?',
    content :'by creating components'
    
  },
]
const options=[
  {
      label:'the color is red',
      value:'red'
  },
  {
      label:'the color is green',
      value:'green'
  },
  {
      label:'the color is blue',
      value:'blue'
  },
]
export default () =>{
 const [selected,setSelected]=useState(options[0]);
  return (
    <div>
      <Header/>
      <Route path='/translate' > <Translate/> </Route>
      <Route path='/' > <Accordion items={items}/> </Route>
      <Route path='/list' > <Search/> </Route>
      <Route path='/dropdown' > <DropDown
      label="Select a color"
      options={options}
      selected={selected}
      onSelectedChange={setSelected}
      /> </Route>
       
    </div>
  );
}


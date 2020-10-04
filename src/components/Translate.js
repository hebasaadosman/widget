import React,{useState,useEffect} from 'react';
import DropDown from './DropDown';
import Converter from './Converter';

const options=[
    {
        label:'Afrikaans',
        value:'af'
    },
    {
        label:'Arabic',
        value:'ar'
    },
    {
        label:'Hindi',
        value:'hi'
    },
    {
        label:'Dutch',
        value:'nl'
    },
]

const  Translate=() =>{
    const [language,setLanguage]=useState(options[0])
    const [text,setText]=useState('')
    const [debounced,setDebounced]=useState(text);
    useEffect(()=>{
       const timeId=setTimeout(() => {
            setDebounced(text)
        }, 1000);
       return()=>clearTimeout(timeId) 
    },[text])
    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label className="label">
                        Enter Text
                    </label>
            <input value={text} onChange={(e)=>setText(e.target.value)}/>
            </div>
            </div>
            <DropDown 
            label="Select Language"
            selected={language}
            onSelectedChange={setLanguage}
             options={options}
            />
            <hr/>
            <h3 className="ui header">OutPut</h3>
            <Converter language={language} text={debounced}/>
        </div>
    )
}

export default Translate

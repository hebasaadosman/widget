import React,{useState,useEffect} from 'react'
import axios from 'axios'
const key="AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM"

const  Converter=({language,text}) =>{
    const[translated,setTranslated]=useState('');
   useEffect(()=>{
       const doTranslated=async()=>{
      const {data}=  await axios.post('https://translation.googleapis.com/language/translate/v2',{},{
            params:{
                q:text,
                target:language.value,
                key:key
            }
        });
        setTranslated(data.data.translations[0].translatedText)
       }
       doTranslated();
     
   },[language,text])
    return (
        <div>
            <h1 className="ui header">{translated}</h1>
        </div>
    )
}

export default Converter

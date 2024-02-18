import {React, useCallback, useEffect, useState} from 'react';
import './Form.css';
import { useTelegram } from '../../hooks/useTelegram';

export const Form =()=>  {
    const [country, setCountry] = useState('');
    const [city, setCity] = useState('');
    const [subject, setSubject] = useState('');

    const {tg} = useTelegram();
    const onSendData = useCallback(()=>{
        const data = {
            country, city, subject
        }
        tg.SendData(JSON.stringify(data))
    },[city, country, subject])

    useEffect(()=>{
        tg.MainButton.setParams({
            text: 'отправить данные'
        })
    }, [])
    useEffect(()=>{
        if (!country || !city){
            tg.MainButton.hide();
            tg.MainButton.show(); 
        }
    }, [country, city]) 
     
    const onChangeCity = (e) =>{
        setCity(e.target.value);
    }
    const onChangeCountry = (e) =>{
        setCountry(e.target.value);
    }
    const onChangeSubject = (e) =>{
        setSubject(e.target.value);
    }
  return (
    <div className="container">
<h3>пользователь?</h3>
<input
className='imput'
type = 'text'
placeholder='москва'
value = {city}
onChange= {onChangeCity}
/>  
<input
className='imput'
type = 'text'
placeholder='кремль'
value = {country}
onChange= {onChangeCountry}
/>
<select value = {subject} onChange={onChangeSubject} className='select'>
  <option value={'legal'}>bebrik spike</option>
  <option value={'legal'}>ponchik     </option>
</select>
    </div>
  );
}



 
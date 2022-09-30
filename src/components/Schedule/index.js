
import { dayOne, dayTwo, dayThree } from './data';

import sch_time from '../../assets/sch_time_black.png';

import { useState, useEffect } from 'react';

import './schedule.css';



function Schedule() {
const [data, setData]=useState();
const [select, setSelect] =useState(1)

const handleSelect = (n)=>{
  if (n === 1){
    setSelect(1)
  }
  else if (n === 2){
    setSelect(2)
  }
  else if (n === 3){
    setSelect(3)
  }
}
useEffect(() => {
  if (select === 1){
    setData(dayOne)
  }
  else if (select === 2){
    setData(dayTwo)
  }
  else if (select === 3){
    setData(dayThree)
  }
}, [select])

  return (
      <section className="schedule" id="schedule-section">
        <section className='tab'>
          <div className={select === 1 ? 'tab-card-active': 'tab-card'} onClick={()=>{handleSelect(1)}}>
            <h2>Day 1</h2>
            <p>2021-12-18</p>
          </div>
          <div className={select === 2 ? 'tab-card-active': 'tab-card'} onClick={()=>{handleSelect(2)}}>
            <h2>Day 2</h2>
            <p>2021-12-18</p>
          </div>
          <div className={select === 3 ? 'tab-card-active': 'tab-card'} onClick={()=>{handleSelect(3)}}>
            <h2>Day 3</h2>
            <p>2021-12-18</p>
          </div>
        </section>
        <section className='tab-result'>
        <div className='result'>
        {data?.map((item)=>{
          return (
            
                <div className='inner-card' key={item?.id}>
                  <div className='left-card'>
                    <img src={sch_time} alt="schtime logo"/>
                    <h2>{item?.from} - {item?.to}</h2>
                    <p>{item?.room}</p>
                  </div>

                  <div className='right-inner'>
                    <h3> <hr></hr>{item?.title}</h3>
                    <p>{item?.message}</p>
                  </div>
                  <img src={item?.imageOne} className="img" alt="schtime logo"/>
                  <img src={item?.imageTwo} className="img" alt="schtime logo"/>
                </div>
                
                
              
          )
          
        })}
          </div>
        </section>
      </section>
  );
}

export default Schedule;

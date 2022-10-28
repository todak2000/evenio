
// import { months, imageDummy } from './data';

import sch_time from '../../assets/sch_time_black.png';

import { useState, useEffect } from 'react';
import axios from 'axios'
import './schedule.css';


function Schedule() {
const [data, setData]=useState();
const [dayOne, setDayOne]=useState([]);
const [dayTwo, setDayTwo]=useState([]);
const [dayThree, setDayThree]=useState([]);
const [select, setSelect] =useState(1);
const [monthsData, setMonthsData]=useState([]);
// 
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
// const url = "http://127.0.0.1:8000/"
const url = "https://vtf-server.onrender.com"

const getEventSchedule = async () => { 
  try {
      const resp = await axios.get(`${url}/isaca-events`);

      let months = resp.data.months
      
      setMonthsData(months)
      // console.log(resp.data, "efefe")
      // month one
      let one = resp.data.events.filter((item)=>item.month === monthsData[0].month).map(filteredItemDayOne=>{
        return filteredItemDayOne
      })
      setDayOne(one)
      setData(one)
      // console.log(one, "one")
      // month two
      let two = resp.data.events.filter((item)=>item.month === monthsData[1].month).map(filteredItemDayTwo=>{
        return filteredItemDayTwo
        
      })
      setDayTwo(two)
      // month three
      let three = resp.data.events.filter((item)=>item.month === monthsData[2].month).map(filteredItemDayThree=>{
        return filteredItemDayThree
        
      })
      setDayThree(three)
      console.log(resp.data.events)
      // return resp.data.events
  } catch (err) {
      // Handle Error Here
      console.error(err);
  }
};

useEffect(() => {
  getEventSchedule();
},[])

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
}, [select, dayOne, dayTwo, dayThree])

  return (
      <section className="schedule" >
        <section className='tab'>
        {monthsData?.map((item)=>{
          return(
            <div key={item.id} className={select === item.id ? 'tab-card-active': 'tab-card'} onClick={()=>{handleSelect(item.id)}}>
            <h2>{item.month}</h2>
          </div>
          )
        })}
        </section>
        <section className='tab-result'>
        <div className='result'>
        {data?.map((item)=>{
          return (
            
                <div className='inner-card' key={item?.id}>
                  <div className='left-card'>
                    <img src={sch_time} alt="schtime logo"/>
                    <h2>{item?.day}</h2>
                    <p>{item?.time}</p>
                  </div>

                  <div className='right-inner'>
                    <h3> <hr></hr>{item?.title}</h3>
                    <p>{item?.message}</p>
                  </div>
                  <img src={item?.speaker_imgUrl} className="img" alt="schtime logo"/>
                  {/* <img src={imageDummy[2]?.imageTwo} className="img" alt="schtime logo"/> */}
                </div>
                
                
              
          )
          
        })}
          </div>
        </section>
      </section>
  );
}

export default Schedule;

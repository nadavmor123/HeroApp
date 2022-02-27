import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import useFetch from './Helpers/Hooks/useFetch';
import FlexBox from './UI/Layout/flexBox';
import { Excercise } from './Types/data';
import GridBox from './UI/GridBox/gridBox';
import ExcerciseBox from './components/Excersise';
const apiUrl = `http://dev.takeonestep.com/app/api/interview/exercises/`;

function HerosApp() {

  const {data,error,loading} = useFetch(apiUrl)

  const [list,setlist] = useState<Excercise[]>([]);

  const inputEl = useRef(null);

  const handleSearch = (e:any) => {
    if(e?.target?.value){
      let newList = list.filter(item=>{
        return item.title.includes(e?.target?.value)
      })
      setlist(newList)
    }else{
      setlist(data)
    }
  }
  
  useEffect(()=>{
    if(!error && !loading){
      setlist(data)
    }
  },[data,error,loading])

  return (
    <div className="App">
      <FlexBox marginTop={20} marginBottom={20}>
        <input placeholder='Search' ref={inputEl} type="text" onChange={handleSearch} />
      </FlexBox>
      <FlexBox width={'auto'} paddingLeft={40} paddingRight={40}>
        <GridBox container>
            {
              list.map((excercise:Excercise, index:number) => {
                return (
                  <GridBox xs={12} sm={6} md={3}>
                      <ExcerciseBox excercise={excercise} />
                  </GridBox>
                )
              })
            }
        </GridBox>
      </FlexBox>
       
    </div>
  );
}

export default HerosApp;

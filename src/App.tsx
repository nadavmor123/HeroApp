import React, { useEffect, useState } from 'react';
import './App.css';
//import HeroDetails from './components/Hero/heroDetails';
//import {Hero, HeroResponse} from './Types/data';
import useFetch from './Helpers/Hooks/useFetch';
import FlexBox from './UI/Layout/flexBox';
import Card from './UI/Card/card';
import Button from './UI/Button/button';
import {columns} from './gridConfig';
import { Excercise } from './Types/data';
import { excersises } from './Helpers/Mock/Excersises';
//import {dummyHeros} from './Helpers/Mock/Heros';
import GridBox from './UI/GridBox/gridBox';
import ExcerciseBox from './components/Excersise';
const apiUrl = `http://dev.takeonestep.com/app/api/interview/exercises/`;

function HerosApp() {

  const {data,error,loading} = useFetch(apiUrl)

  const [selectedHero, setSelectedHero] = useState<any>();
  const [filteredHeros, setFilteredHeros] = useState<any[]>([]);
  const [search, setSearch] = useState<string>('');

  const onSearchChange = (e:any) => {
      // setSelectedHero(undefined);
      // setSearch(e.target.value)
      // if(e.target.value === ''){
      //   setFilteredHeros([])
      // }
  }

  const onSearchClick = () => {
    // let filteredHeros = heros.filter(hero=>{
    //   return hero.name.includes(search)
    // });
    // setFilteredHeros(filteredHeros);
  }



  const initilizeData = () => {
    
  }
  
  useEffect(()=>{
    console.log('data',data);
  },[data])

  return (
    <div className="App">
      <FlexBox width={'auto'} paddingLeft={40} paddingRight={40}>
        <GridBox container>
            {
              data.map((excercise:Excercise, index:number) => {
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

import React, { useEffect, useState } from 'react';
import './App.css';
import HeroDetails from './components/Hero/heroDetails';
import { DataGrid } from '@mui/x-data-grid';
import {Hero, HeroResponse} from './Types/data';
import useFetch from './AppLogic/Hooks/useFetch';
import FlexBox from './UI/Layout/flexBox';
import Card from './UI/Card/card';
import Button from './UI/Button/button';
import Image from './UI/Image/image';
import {columns} from './gridConfig';

const apiUrl = `https://gateway.marvel.com:443/v1/public/characters?apikey=2ed8da3716ca94726cdfb4cf564ffe5c`;
function HerosApp() {

  const {data,error,loading} = useFetch<HeroResponse>(apiUrl,{
    count: 0,
    limit: 0,
    offset: 0,
    results:[],
    total: 0
  })

  const [heros, setHeros] = useState<Hero[]>([]);
  const [selectedHero, setSelectedHero] = useState<Hero>();
  const [filteredHeros, setFilteredHeros] = useState<Hero[]>([]);
  const [search, setSearch] = useState<string>('');

  const onSearch = (e:any) => {
      setSelectedHero(undefined);
      setSearch(e.target.value)
      if(e.target.value === ''){
        setFilteredHeros([])
      }
  }

  const onSearchClick = () => {
    let filteredHeros = heros.filter(hero=>{
      return hero.name.includes(search)
    });
    setFilteredHeros(filteredHeros);
  }

  const renderHeroList = () => {
    if(loading) return <>laoding...</>
    if(error) return <>error...</>
    return (
      <DataGrid
        rows={filteredHeros.length > 0 ? filteredHeros : heros}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection={false}
        onRowClick={(params,e)=>{
            setSelectedHero(params.row as Hero)
        }}
     />
    )
  }

  const initilizeData = () => {
    if(data && data.results.length > 0){
      setHeros(data.results.map((item:any) =>  {
        return {
          id: item.id,
          name: item.name,
          modified: item.modified,     
          thumbnail: `${item.thumbnail.path}.${item.thumbnail.extension}`,
          appearence: item.stories.items.map((story:any)=>{
              return story.name;
          })[0],
          publisher:'Marvel'
        } as Hero
      }))
    }
  }
  
  useEffect(()=>{
    initilizeData();
  },[data])

  return (
    <div className="App">
      <FlexBox justifyContent='center' background='#E5E5E5' height={window.innerHeight}>
        <FlexBox width={1000} height={460}>
          <Card header={
            <FlexBox alignItems='center' justifyContent='center' background={'#EFEFF4'} height={100}>
              <FlexBox width={480} direction='row' height={45}>
                <FlexBox stratch>
                  <input style={{width:'100%'}} value={search} onChange={onSearch}/>
                </FlexBox>
                <FlexBox width={50}>
                  <Button label='GO!' background={'#4310AE'} onClick={onSearchClick}/>
                </FlexBox>
              </FlexBox>
            </FlexBox>
          } body={
            selectedHero ?
            <FlexBox direction={'row'} 
            paddingTop={40} 
            paddingRight={40} 
            paddingBottom={40} 
            paddingLeft={40} 
            background={'white'}>
               <FlexBox width={400}>
                 <Image src={selectedHero.thumbnail}/>
              </FlexBox>
              <FlexBox stratch>
                 <HeroDetails hero={selectedHero}></HeroDetails>
              </FlexBox>
            </FlexBox> :
              renderHeroList() 
          } />
        </FlexBox>
      </FlexBox>
    </div>
  );
}

export default HerosApp;

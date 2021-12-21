import React, { useEffect, useState } from 'react';
import './App.css';
import HeroDetails from './components/Hero/heroDetails';
import { DataGrid } from '@mui/x-data-grid';
import {Hero} from './Data/data';
import useFetch from './AppLogic/Hooks/useFetch';
import FlexBox from './UI/Layout/flexBox';
import Card from './UI/Card/card';
import Button from './UI/Button/button';


function HerosApp() {

  const {data,error,loading} = useFetch(`https://gateway.marvel.com:443/v1/public/characters?apikey=2ed8da3716ca94726cdfb4cf564ffe5c`)

  const [heros, setHeros] = useState<Hero[]>([]);
  const [selectedHero, setSelectedHero] = useState<Hero>();
  const [filteredHeros, setFilteredHeros] = useState<Hero[]>([]);
  const [search, setSearch] = useState<string>('');

  const onSearch = (e:any) => {
      setSearch(e.target.value)
      let newHerose = heros.filter(hero=>{
        return hero.name.includes(e.target.value)
      });
      setFilteredHeros(newHerose);
  }

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'name',
      headerName: 'Hero name',
      width: 150,
      editable: true,
    },
    {
      field: 'modified',
      headerName: 'Last Updated',
      width: 150,
      editable: true,
    },
    {
      field: 'appearence',
      headerName: 'First appearance',
      width: 110,
      editable: true,
    },
    {
      field: 'publisher',
      headerName: 'Publisher',
      sortable: false,
      width: 160,
    },
  ];

  const renderHeroList = () => {
    if(loading) return <>laoding...</>
    if(error) return <>error...</>
    return (
      <DataGrid
        rows={filteredHeros.length > 0 ? filteredHeros : heros}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection={false}
        onRowClick={(params,e)=>{
            console.log(params)
            setSelectedHero(params.row as Hero)
        }}
     />
    )
  }
  
  useEffect(()=>{
    if(data.results.length > 0){
      setHeros(data.results.map( (item:any) =>  {
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
  },[data])

  return (
    <div className="App" >
    
      
      <FlexBox justifyContent='center' alignItems='center'>
        <FlexBox width={1000} height={400}>
          <Card header={
            <FlexBox alignItems='center' justifyContent='center'>
              <FlexBox height={46} width={480} direction='row'>
                <FlexBox stratch>
                  <input style={{width:'100%'}} value={search} onChange={onSearch}/>
                </FlexBox>
                <FlexBox width={50}>
                  <Button label='GO!' background={'#4310AE'} onClick={()=>console.log('search')}/>
                </FlexBox>
              </FlexBox>
            </FlexBox>
          }>
              {selectedHero ?
               <HeroDetails hero={selectedHero}></HeroDetails>:
               renderHeroList()}
          </Card>    
        </FlexBox>
      </FlexBox>
    </div>
  );
}

export default HerosApp;

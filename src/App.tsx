import React, { useEffect, useState } from 'react';
import './App.css';
import FlexBox from './UI/Layout/flexBox'
import axios from 'axios';
import HeroCard from './components/HeroCard/heroCard';
import {Hero} from './data/data';

function HerosApp() {

  const [heros, setHeros] = useState<Hero[]>([]);
  const [search, setSearch] = useState<string>('');

  const onSearch = (e:any) => {
      setSearch(e.target.value)
  }

  const fetch = async () => {
    let response = await axios.get(`https://gateway.marvel.com:443/v1/public/characters?apikey=2ed8da3716ca94726cdfb4cf564ffe5c`)
    if(response?.data?.data?.results){
      setHeros(response.data.data.results.map( (item:any) =>  {
        return {
          id: item.id,
          modified: item.modified,
          name: item.name,
          thumbnail: `${item.thumbnail.path}.${item.thumbnail.extension}`,
          appearences: item.stories.items.map((story:any)=>{
              return story.name;
          })
        } as Hero
      }))
    }
  }

  useEffect(()=>{
    fetch()
  },[])

  return (
    <div className="App">
      <input value={search} onChange={onSearch}/>
      search for: {search}
        {heros.length > 0 &&  <HeroCard hero={heros[0]}/> }
    
    </div>
  );
}

export default HerosApp;

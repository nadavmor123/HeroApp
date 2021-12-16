import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import HeroCard from './components/HeroCard/heroCard';
import { DataGrid } from '@mui/x-data-grid';
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
  
  useEffect(()=>{
    fetch()
  },[])

  return (
    <div className="App" style={{ height: 400, width: 800 }} >
     <DataGrid
        rows={heros}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection={false}
        disableSelectionOnClick
      />
    </div>
  );
}

export default HerosApp;

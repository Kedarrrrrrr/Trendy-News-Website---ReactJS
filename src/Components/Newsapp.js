import React, { useEffect, useState } from 'react'
import Cards from './Cards'

const Newsapp = () => {
        const[search,setSearch]=useState();
        const[newsData,setNewsData]=useState([]);
        const API_KEY = "cc75d36fcba84ddf93e4137073157115"


        const getData = async()=>{
        const response = await fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`);
        const jsonData= await response.json();
        console.log(jsonData.articles);
        setNewsData(jsonData.articles)
        }


        useEffect(()=>{
            getData()
        },[])


         const handleInput=(e) =>{
            setSearch(e.target.value)

         } 

         const handleCategoryClick=(e)=>{
            const category = e.target.value;
            setSearch(category);
            getData();
         }

  return (
    <div>
      <nav>
         <div>
            <h1>Trendy News</h1>
         </div>
         <ul>
            <a>All News</a>
            <a>Trending</a>
         </ul>
         <div className='searchBar'>
            <input type='text' placeholder='Search News' value={search} onChange={handleInput}/>
            <button onClick={getData}>Search</button>
         </div>
      </nav>

      <div>
        <p className='head'>Stay Update with Trendy News </p>
      </div>

      <div className='categoryBtn'>
        <button onClick={handleCategoryClick} value="sports">Sports</button>
        <button onClick={handleCategoryClick} value="politics">Politics</button>
        <button onClick={handleCategoryClick} value="entertainment">Entertainment</button>
        <button onClick={handleCategoryClick} value="health">Health</button>
        <button onClick={handleCategoryClick} value="education">Education</button>
    </div>

    <div>
        <Cards data={newsData}/>
    </div>

    </div>
  )
}

export default Newsapp

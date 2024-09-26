import React from 'react'

const Cards = ({data}) => {
    //console.log(props.data);
    console.log(data);
    
    const readMore =(url) =>{
    window.open(url)
    }
    
  return (
    <div className='cardContainer'>
      {data.map((curItem,index)=>{

        if(!curItem.urlToImage){
            return null
        }else{
            return(
                <div className='card'>
                    <img src={curItem.urlToImage}/>
                    <div className='content'>
                        <a className='title' onClick={()=>readMore(curItem.url)}>{curItem.title}</a>
                        <p>{curItem.description}</p>
                        <button onClick={()=>readMore(curItem.url)}>Read more</button>
    
                    </div>
                </div>
            )

        }

       
      })}
    </div>
  )
}

export default Cards

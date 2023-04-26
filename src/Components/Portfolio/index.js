import React ,{useState,useEffect} from 'react';
import  './style.css';
import axios from 'axios';

const  Portfolio =()=> {
  const [images,setImages]=useState([]);

  useEffect(()=>{
    axios.get('js/data.json')
    .then(res=>{setImages(res.data.portfolio)})
  }, [])

  const portfolioImages=images.map( (m)=>{
      return(
        <div key={m.id}>
        <img src={m.image} alt=""/>
        <p class="overlay">
            <span>
                Show Image
            </span>
        </p>
    </div>

      )
  })
  return (
      <div class="portfolio">
    <h2 class="portfolio-title"><span>My</span> Portfolio</h2>
      <ul class="portfolio-list">
        <li class="portfolio-item active">All</li>
        <li class="portfolio-item">HTML</li>
        <li class="portfolio-item">Photoshop</li>
        <li class="portfolio-item">Wordpress</li>
        <li class="portfolio-item">Mobile</li>
    </ul>
    
    <div class="box">
    {portfolioImages}
    </div>
  </div>
  );
}

export default Portfolio;

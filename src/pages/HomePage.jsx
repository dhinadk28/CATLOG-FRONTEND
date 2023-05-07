import React from 'react'
import Header from "../components/Layout/Header";

import BestDeals from "../components/Route/BestDeals/BestDeals";
import FeaturedProduct from "../components/Route/FeaturedProduct/FeaturedProduct";
import Events from "../components/Events/Events";


const HomePage = () => {
  return (
    <div>
        <Header activeHeading={1} />
       

        <BestDeals />
        <Events />
        <FeaturedProduct />
    
        
    </div>
  )
}

export default HomePage
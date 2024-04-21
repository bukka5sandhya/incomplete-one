

import './index.css'


import { Component } from 'react';



class Header extends Component{
  
  
   render(){
   
      
        return(
                <>
                <header>
                <div className="logo-container">
                   <img src="https://i.ibb.co/F6J9gMM/Logo.png" alt="Logo" border="0" className="logo-image" />
                   <h1 className="logo-heading">LOGO</h1>
                   <div className="icons">
                   <img src="https://i.ibb.co/k6RNf5S/search-normal.png" className="logo-image" alt="search nomral"/>
                   <img src="https://i.ibb.co/72fdzwf/heart.png" alt="heart" border="0"className="logo-image"/>
                   <img src="https://i.ibb.co/XbhbbZm/shopping-bag.png" alt="shopping-bag" border="0" className="logo-image"/>
                   <img src="https://i.ibb.co/MG1vW76/profile.png" alt="profile" border="0" className="logo-image"/>
                   <img src="https://i.ibb.co/r5ngwd0/Language.png" alt="Language" border="0" className="logo-image"/>
                   </div>
                </div>
                
                <div className="tabs-container">
                  <p className="tabs-heading">SHOP</p>
                 <p className="tabs-heading">SKILLS</p>
                 <p className="tabs-heading">STORIES</p>
                  <p className="tabs-heading">ABOUT</p>
                  <p className="tabs-heading">CONTACT US</p>
                </div>
                <hr />
                <div className="discover-container">
                <h1 className="discover-heading">Discover your Products</h1>
                <p className="discover-para">Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus <br />scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.</p>
               </div>
               <hr />
               
               <div className="filter-container">
              <p className="items-number">3456 ITEMS</p>
              <div className="hide-container">
            <a href="/hide"><img src="https://i.ibb.co/dpDkX4P/arrow-left.png" alt="arrow-left"  className="left-arrow"/></a>
            <p className="hide-filter-para">HIDE FILTER</p>
          </div>
          
           
            <div className="recommend-container">
           
            

            
            <select>
              <option> <a href="#recommendedProducts">RECOMMENDED</a></option>
              <option>NEWEST FIRST</option>
              <option>POPULAR</option>
              <option>PRICE: HIGH TO LOW</option>
              <option>PRICE: LOW TO HIGH</option>
              
              
              </select>  
            

                    </div>
                    </div>
                    <hr />
                </header>

            </>

      )
    }
}
export default Header;
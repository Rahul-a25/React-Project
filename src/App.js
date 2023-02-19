import React from 'react'
import "./App.css"
import Navbar from './component/Navbar'
import Main from "./component/Main"
import MainContent from './component/MainContent'
import Footer from './component/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
       <Main/>
       <div className='mainbody'>
       <MainContent
       img="https://affordablehousingaction.org/wp-content/uploads/2022/01/Green-Bank-324x216.jpg" 
       name="DTDC"
       
       />
       <MainContent
       img="https://images.livemint.com/img/2022/09/10/1600x900/Delhi_Metro_1662827325293_1662827325484_1662827325484.jpg" 
       name="Dxb Airport Concorde D"
       
       />
       <MainContent
       img="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&w=1000&q=80" 
       name="Maui-Restaurant"
       
       />
       </div>

       <div className='mainbody'>
       <MainContent
       img="https://static.wixstatic.com/media/e369d9_8cb775c19d0c4d4cbbb0cf8a673ce710~mv2_d_3600_2439_s_4_2.jpg/v1/fill/w_640,h_448,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/e369d9_8cb775c19d0c4d4cbbb0cf8a673ce710~mv2_d_3600_2439_s_4_2.jpg" 
       name="Nail-paint bar"
       
       />
       <MainContent
       img="https://www1.lovethatdesign.com//wp-content/uploads/2021/10/Love-That-Design-Private-Office-Business-Bay-06-1725x1152.jpg" 
       name="Office in Business Bay
       "
       
       />
       <MainContent
       img="https://media-cdn.tripadvisor.com/media/photo-s/27/f0/88/1a/exterior.jpg" 
       name="Atlantis, The Palm"
       
       />
       </div>


       <div className='mainbody'>
       <MainContent
       img="https://thumbs.dreamstime.com/b/modern-office-interior-13654524.jpg" 
       name="Office"
       
       />
       <MainContent
       img="https://images.adsttc.com/media/images/5b7e/c5d5/f197/cc0e/7200/00dd/newsletter/One_Dalton_Dusk_Hero_Rendering_Photo_Credit_Four_Seasons_One_Dalton.jpg?1535034827" 
       name="Residential Tower"
       
       
       />
       <MainContent
       img="https://d2e5ushqwiltxm.cloudfront.net/wp-content/uploads/sites/87/2017/12/04001549/Infinity-Pool.jpg" 
       name="Sofitel"
       
       />
       </div>

       <div className='mainbody'>
       <MainContent
       img="https://whatson.ae/wp-content/uploads/2021/01/els-club-gym-article-.jpg" 
       name="The Gym Dubai"
       

       />
       <MainContent
       img="https://img.vistarooms.com/gallery/vista-sadh-villa-c227d4.jpg" 
       name="villa"
       
       
       />
       <MainContent
       img="http://www.navata.com/cms/wp-content/uploads/2021/08/5-Common-Warehouse-Hindrances-How-To-Eliminate-Them-Blog-1080x675-1-1024x640.png" 
       name="Warehouse"
       
       />
       </div>

       <div className='footerwala'>
       <Footer/>
       </div>
    </div>
  )
}

export default App

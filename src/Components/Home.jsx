import React from "react"
import Vajno from './Block/Vajno'
import Priglashaem from './Block/Priglashaem'
import ONas from "./Block/ONas"
import VedickHram from "./Block/VedickHram"
import GostevoiDom from "./Block/GostevoiDom";
import Obuchenie from "./Block/Obuchenie";
import Territoriya from "./Block/Territoriya";
import DopServis from "./Block/DopServis";
import Btn from "./Btn"
import Map2 from '../map2'
import Slider from './slider';


const Home =(props)=>{
    return(
        <>
        <div className='bannerSection'>               
        <img src={'/img10.jpg'} alt="img" className='imgBanner' width="100%"/> 
      </div>
        <h3 className='ZagolovokGrey'>Проведи свой незабываемый отпуск в Ашраме Сочи!</h3>

<Btn/>        
<Vajno/>

<center>
		<iframe className='video' src="https://www.youtube.com/embed/V2YEKpL_plI" 
    title="YouTube video player" frameborder="0" allow="accelerometer; 
    autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</center>

<Priglashaem/>
<Btn/>
<ONas/>
<VedickHram/>
<GostevoiDom/>
<Obuchenie/>
<Territoriya/>
<Btn/>
<DopServis/>
<Slider/>
<Map2/>

<br/>
</>
    )
}
export default Home
const Obuchenie =()=>{
    return(
        <div>
            <h3 className='Zagolovok'>Ресурсы для обучения и мероприятий</h3> 
 
 <div className="liSection">
 <div className='center-div'>
 <img src="/img210.jpg" className="imgLi" alt="img"></img>
 </div>
 <div>
 <table className="table" cellSpacing="20">
   <tbody>
     <tr>
       <th scope="row" valign="top">
       <img src="/logo.png" className="imgLogo" alt="img"></img>
       </th>
       <td className='Candara2'> Конференц-зал (60 м2)
       <details>
         <summary className='Podrobnee'>подробнее</summary>
         <p>Зал вместимостью более 50 человек</p>
         <p>Светлое просторное помещение, отдельный вход, высокие потолки и окна</p>
         <p>2 мощных кондиционера</p>
         <p>Телевизор для презентаций/трансляций</p>
         <p>Проектор с экраном</p>
         <p>Звуковое оборудование, микрофоны</p>
         <p>Доска маркерная и доска с блокнотом</p>
         <div>
         </div>
       </details>
       </td>
     </tr>
     <tr>
     <th scope="row" valign="top"><img src="/logo.png" className="imgLogo" alt="img"></img></th>
       <td className='Candara2'>Коворкинг зона * 
       <details>
         <summary className='Podrobnee'>подробнее</summary>
         <p>Просторная комната для индивидуальных и групповых занятий/встреч (до 10 человек)</p>
         <p>Удобные рабочие места</p>
         <p>Офисное оборудование: ноутбуки, принтер</p>
         <p>Мультимедия телевизор для презентаций</p>
         <p className='Candara4'>* Дополнительные сервисы не входят в стоимость проживания, организуются по запросу и предварительной договоренности</p>
       </details></td>
     </tr>
     <tr>
       <th scope="row" valign="top"><img src="/logo.png" className="imgLogo" alt="img"></img></th>
       <td className='Candara2'>Wi-Fi , выделенный скоростной интернет (100Mб)</td>
     </tr>
     </tbody>
   </table>
 </div>
 </div>
 <br/>
        </div>
    )
}
export default Obuchenie
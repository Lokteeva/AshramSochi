const GostevoiDom =()=>{
    return(
        <div>
     <h3 className='Zagolovok'>Гостевой дом</h3> 
   
   <div className="liSection">
   <div>
     <table className="table" cellSpacing="20">
     <tbody>
       <tr>
         <th scope="row" valign="top">
         <img src="/logo.png" className="imgLogo" alt="img"></img>
         </th>
         <td className='Candara2'>Гостевые номера
         <details>
           <summary className='Podrobnee'>подробнее</summary>
           <p>2х, 3х, 4х, 6ти –местные</p>
         </details>
         </td>
       </tr>
       <tr>
       <th scope="row" valign="top"><img src="/logo.png" className="imgLogo" alt="img"></img></th>
       <td className='Candara2'>
       Вегетарианское питание  
         <details>
           <summary className='Podrobnee'>подробнее</summary>
           <p>2х разовое вегетарианское (прасад)</p>
         </details>
         </td>
       </tr>
       <tr>
       <th scope="row"><img src="/logo.png" className="imgLogo" alt="img"></img></th>
       <td className='Candara2'>
         Ресурсы для обучения и мероприятий</td>
       </tr>
       <tr>
         <th scope="row">
         <img src="/logo.png" className="imgLogo" alt="img"></img>
         </th>
         <td className='Candara2'>
           Собственная зеленая территория</td>
       </tr>        
     </tbody>
     </table>
     </div>
   
     <div>
     <table className="table" cellSpacing="20">
     <tbody>
     <tr>
       <th scope="row"><img src="/logo.png" className="imgLogo" alt="img"></img></th>
       <td className='Candara2'>
         Удобное расположение и уникальное окружение</td>
       </tr>
       <tr>
         <th scope="row" valign="top"><img src="/logo.png" className="imgLogo" alt="img"></img></th>
         <td className='Candara2'>Вегетарианское кафе 
         <details>
           <summary className='Podrobnee'>подробнее</summary>
           <p>вегетарианское меню (прасад, возможен заказ и кэйтеринг)</p>
         </details>
          </td>
       </tr>
       <tr>
         <th scope="row">
         <img src="/logo.png" className="imgLogo" alt="img"></img>
         </th>
         <td className='Candara2'>Индийский магазин</td>
       </tr>      
       <tr>
       <th scope="row" valign="top"><img src="/logo.png" className="imgLogo" alt="img"></img></th>
       <td className='Candara2'>
         Дополнительные сервисы и возможности*<br/> 
         <details>
           <summary className='Podrobnee'>подробнее</summary>
           <p>Детский досуг, оздоровительные программы и увлекательные
    путешествия, спорт, активный отдых</p>
    <p className='Candara4'>
     * Дополнительные сервисы не входят в стоимость проживания, 
     организуются по запросу и предварительной договоренности</p>
         </details>  
         </td>
       </tr>
     </tbody>
     </table>
     </div>
   </div>
   <br/>
   
   <div >
   <div className='center-div'>
   <img src="/img9.jpg" className="imgLi" alt="img"></img>
   </div>
   </div>
   <br/>
        </div>
    )
}
export default GostevoiDom
import { Link } from 'react-router-dom'
import Modal from './Modal/Modal'


const Btn = ()=>{
    return(
        <div>
            <div className='nav2'>
        <div></div>            
        <div className='center-div'>
          
            <Link exact to={'/form'}>
              <button className='btn1'>Оставить заявку</button> 
            </Link> 

            <Modal/>


            
            
        </div>
        </div> 
        </div>
    )
}
export default Btn
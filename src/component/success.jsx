import {login} from '../image/image'
import {NavLink} from 'react-router-dom'
function Success(){
    return(
        <div className="Home " style={{height:"90vh"}}>
        <div className="home-header">
           <img src={login.logotip} alt={'logo'}/>
        </div>
        <div className="home-body h-50 mb-5 ">
           <div className='w-100 h-20 text-center '>
              <img className='mt-5' src={login.success} alt={"success"}/>
           </div>
           <div className="homet-body-title-2 mt-2">
           Ma’lumotlar qabul qilindi.
           </div>
           <div className="homes-body-title-2 mt-2">
           Tez orada sizni online platformaga qo’shamiz
           </div>
        </div>
        <div className="home-footer text-center mt-2">
            <NavLink to={'/'} 
             className="btn btn-primary link w-50 py-2">Bosh sahifa  </NavLink>
        </div>
    </div>
    )
}
export default Success
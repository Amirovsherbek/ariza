import { NavLink } from "react-router-dom"
import { login } from "../image/image"
import './Login.css'
function Message(){
    return(
        <div className="Login dc-t">
              <div className="Login-header">
                 <img src={login.logotip} alt={'logotip'}/>
              </div>
              <div className="Login-body ">
                 <div className="Login-number-sms ">
                       <div className="w-100 mb-4 ">SMS kodni kiriting</div>
                       <div>
                          <input className="form-control w-100 text-center"
                          type={'text'} placeholder={' 0-0-0-0-0 '}/>
                       </div>
                 </div>
              </div>
              <div className="Login-footer dc-t">
                 <button style={{width:'150px'}}  className="btn btn-primary py-2" 
                 ><NavLink to={'/'} className={'link'}>
                     Keyingisi
                 </NavLink></button>
              </div>
        </div>
    )
}
export default Message
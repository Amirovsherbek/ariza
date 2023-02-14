import { useState } from "react"
import { NavLink } from "react-router-dom"
import { login } from "../image/image"
import './Login.css'
function Login(){
    const [phoneNumber,setPhoneNumber]=useState(0)
    console.log(phoneNumber)
   // const baseurl='http://185.217.131.88:8080'
   // function checkedPhonenumber(){
   //       try{
   //          fetch(baseurl+'/newCom/checkPhone',{
   //             method:'POSt',
   //             headers:{
   //                'Content-Type':'application/json; charset=UTF-8',
   //               'Accept':'application/json',
   //               'X-Requested-With':'XMLHttpRequest',
   //               "Access-Control-Allow-Origin": "*",
   //             },
   //             body:JSON.stringify({
   //                phoneNumber: phoneNumber
   //                })
   //            }).then(res=>res.json())
   //            .then(res=>console.log(res))
   //       }
   //      catch (err){
   //          console.log(err + '   -->>>> xatolik')
   //      }
   // }
    return(
        <div className="Login dc-t">
              <div className="Login-header">
                 <img src={login.logotip} alt={'logotip'}/>
              </div>
              <div className="Login-body ">
                 <div className="login-title">
                    <div>Kirish</div>
                 </div>
                 <div className="Login-number">
                    <div className="dc-t">
                      <img src={login.uzbekistan} alt={'uzbekistan'}/>
                      <span> +998 </span>
                    </div>
                   
                    <div><input className="form-control w-100 h-100 "
                     onChange={(e)=>setPhoneNumber(parseInt(e.tar
                     .value))}
                    type={'text'} placeholder={' (90) 123 45 67 '}/></div>
                 </div>
              </div>
              <div className="Login-footer dc-t">
              <button 
            //   onClick={checkedPhonenumber} 
              style={{width:'150px'}} className="btn btn-primary py-2" 
                 ><NavLink  to={'/auth/sms'} className={'link'}
                 //onClick={checkedPhonenumber} 
                 >
                     Keyingisi
                 </NavLink></button>
              </div>
        </div>
    )
}
export default Login
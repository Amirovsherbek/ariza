import { useState } from "react"
import { NavLink } from "react-router-dom"
import { login } from "../image/image"
import './Login.css'
import { regionData } from '../region/regiondata';
function Login(){
    const [phoneNumber,setPhoneNumber]=useState(0)
    const [region,setRegion]=useState("Toshkent")
    console.log(phoneNumber)
   const baseurl='http://185.217.131.88:8080'
   function checkedPhonenumber(){
         try{
            fetch(baseurl+'/newCom/checkPhone',{
               method:'POSt',
               headers:{
                  'Content-Type':'application/json; charset=UTF-8',
                 'Accept':'application/json',
                 'X-Requested-With':'XMLHttpRequest',
                 "Access-Control-Allow-Origin": "*",
               },
               body:JSON.stringify({
                  phoneNumber: phoneNumber
                  })
              }).then(res=>res.json())
              .then(res=>console.log(res))
         }
        catch (err){
            console.log(err + '   -->>>> xatolik')
        }
   }
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
                    <div className=" bb">
                    <div className="dc-t">
                      <img src={login.uzbekistan} alt={'uzbekistan'}/>
                      <span> +998 </span>
                    </div>
                    <div><input className="form-control w-100 h-100 "
                     onChange={(e)=>setPhoneNumber(parseInt(e.tar
                     .value))}
                    type={'text'} placeholder={' (90) 123 45 67 '}/>
                    </div>
                    </div>
                     
                   <div className="region ">
                    <div>
                   <select name="viloyat" id="viloyat" required  onChange={(e)=>setRegion(e.target.value)}>
                      <option value="Toshkent">Toshkent shahri</option>
                      <option value="Toshkentviloyat">Toshkent viloyat</option>
                      <option value="Qashqadaryo">Qashqadaryo viloyat</option>
                      <option value="Sirdaryo">Sirdaryo viloyat</option>
                      <option value="Jizzax">Jizzax viloyat</option>
                      <option value="Samarqand">Samarqand viloyat</option>
                      <option value="Surxondaryo">Surxondaryo viloyat</option>
                      <option value="Navoiy">Navoiy viloyat</option>
                      <option value="Buxoro">Buxoro viloyat</option>
                      <option value="Xorazm">Xorazm viloyat</option>
                      <option value="qoraqalpoqiston">Qoraqalpog'iston Respublikasi</option>
                      <option value="Namangan">Namangan viloyat</option>
                      <option value="fagona">Farg'ona viloyat</option>
                      <option value="Andijon">Andijon viloyat</option>
                   </select>
                    </div>
                    <div  className="text-right">
                   <select name="tuman" id="tuman"  required>
                     {
                        regionData.map(item=>item.typeID===region ? <option key={item.id} value={item.value}>
                            {item.value}
                        </option>:"")
                     }
                   </select>
                    </div>
                    </div>
                </div>
              </div>
              <div className="Login-footer dc-t">
              <button 
              onClick={checkedPhonenumber} 
              style={{width:'150px'}} className="btn btn-primary py-2" 
                 ><NavLink  to={'/auth/sms'} className={'link'}
                 onClick={checkedPhonenumber} 
                 >
                     Keyingisi
                 </NavLink></button>
              </div>
        </div>
    )
}
export default Login
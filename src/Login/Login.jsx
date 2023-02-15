import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import { login } from "../image/image"
import Loading from "../Components/loading"
import './Login.css'
function Login(){
   const [auth,setAuth]=useState({
      token:'',
      generateNumber:0
   })
    const [phoneNumber,setPhoneNumber]=useState('')
    const [success,setSuccess]=useState(false)
    const [loading,setLoading]=useState(true)
    console.log(phoneNumber)
   const baseurl='http://185.217.131.88:8080'
   function checkedPhonenumber(){
         try{
            fetch(baseurl+'/newCom/checkPhone',{
               method:'POST',
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
              .then(res=>{
               if(res.success){
                  NumberChecked()
                  setSuccess(res.success)
               }
               NumberChecked()
               setSuccess(res.success)
               console.log(res.success)
              })
         }
        catch (err){
            console.log(err + '   -->>>> xatolik')
        }
   }
   function NumberChecked(){
      try{
         fetch(baseurl+'/sms/4343245366788986756/1')
          .then(res=>res.json())
          .then(res=>{
            if(res.success){
              localStorage.setItem('acces_token',res.object)
             auth.generateNumber=res.number
             setAuth({...auth})
              SMSpost()
            }
            console.log(res)
          })
      }
      catch(error){
         console.log(error + "xatolik")
      }
   }
   function SMSpost(){
      try{
         fetch('http://notify.eskiz.uz/api/message/sms/send',{
            method:"POST",
            headers:{
               'Content-Type':'application/json; charset=UTF-8',
                 'Accept':'application/json',
                 'X-Requested-With':'XMLHttpRequest',
                 "Access-Control-Allow-Origin": "*",
                 'Authorization': 'Bearer '+localStorage.token
            },
            body:{
               "generateNumber": auth.generateNumber
            }
         })
      }
      catch(err){
         console.log(err)
      }
   }
   useEffect(()=>{
      localStorage.setItem('token',false)
   },[])
    return(
        loading ? <div className="Login dc-t">
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
              type={'number'} placeholder={' (90) 123 45 67 '} value={phoneNumber}/>
              </div>
              </div>
               
          </div>
        </div>
        <div className="Login-footer dc-t">
        <NavLink to={success ? '/auth/sms':'/SiginUp'}
        onClick={checkedPhonenumber} 
        style={{width:'150px'}} className="btn link btn-primary py-2" 
           >
               Keyingisi
         </NavLink>
        </div>
  </div>:<Loading/>
    )
}
export default Login
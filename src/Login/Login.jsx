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
    const [phoneNumber,setPhoneNumber]=useState('+998934414556')
    const [success,setSuccess]=useState('')
    const [loading,setLoading]=useState(true)
   const baseurl='http://185.217.131.88:8080'

   async function checkedPhoneNumber() {
      try {
        const response = await fetch("http://185.217.131.88:8080/newCom/checkPhone", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json; charset=UTF-8',
            'Accept': 'application/json',
            'X-Requested-With': 'XMLHttpRequest',
          },
          body: JSON.stringify({
            phoneNumber:'+998934111205'
          }),
          
        });
    
        if (response.status<500) {
          const data = await response.json();
          if (data.success) {
            console.log('wokred')
            NumberChecked();
            setSuccess(data.massage);
          }
          else {
             console.log(data);
             setSuccess(data.massage);
          }
        } else {
          const errorText = await response.text();
          console.error(`HTTP error! Status: ${response.status}, Error: ${errorText}`);
        }
      } catch (error) {
        console.error(`Error: ${error}`);
      }
    }
    
    
   async function NumberChecked(){
      try{
        const res=await fetch(baseurl+'/sms/4343245366788986756/1')
          if(res.status<500){
            const data=res.json()
              if(data.success){
               localStorage.setItem('acces_token',res.object)
                  auth.generateNumber=res.number
                  setAuth({...auth})
                  SMSpost()
                console.log(res)
              }
          }
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
      localStorage.setItem('checkout','')
      setTimeout(()=>{
         localStorage.setItem('checkout','true')
       },10000)
      setTimeout(()=>{
         localStorage.setItem('checkout','')
      },30000)
   },[])
      console.log(success)
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
               onChange={(e)=>setPhoneNumber(parseInt(e.target.value))}
              type={'number'} placeholder={' (90) 123 45 67 '} />
              </div>
              </div>
               
          </div>
        </div>
        <div className="Login-footer dc-t">
        <NavLink tabIndex={-1} aria-disabled='true'  to={localStorage.getItem('registir')==="Register" ? '/SiginUp':'/auth/sms'}
        onClick={checkedPhoneNumber} 
        style={{width:'100%',height:"100%"}} className="btn px-5 link btn-primary py-2" 
           >
               Keyingisi
         </NavLink>
        </div>
  </div>:<Loading/>
    )
}
export default Login
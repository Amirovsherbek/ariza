import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import { login } from "../image/image"
import Loading from "../Components/loading"
import './Login.css'
import { regionData } from '../region/regiondata';
function SiginUp(){
    const [auth,setAuth]=useState({
        token:'',
        generateNumber:0
     })
    const [phoneNumber,setPhoneNumber]=useState("+998934111205")
    const [loading,setLoading]=useState(true)
    const [region,setRegion]=useState("Toshkent")
    const [data,setData]=useState({
      ownerName: '',
      ownerPhone: '',
      city: '',
      region:'',
      category1Oq: '',
      category1Zal: '',
      category1Mokko: '',
      category1Mokry: '',
  
      category3Oq: '',
      category3Zal: '',
      category3Mokko: '',
      category3Mokry: '',
      
      category2Oq: '',
      category2Zal: '',
      category2Mokko: '',
      category2Mokry: '',
      
      category5Oq: '',
      category5Zal: '',
      category5Mokko: '',
      category5Mokry: '',
      
      category4Oq: '',
      category4Zal: '',
      category4Mokko: '',
      category4Mokry: '',
      
      shelf15Oq: '',
      shelf20Oq: '',
      shelf25Oq: '',
      shelf30Oq: '',
      shelf35Oq: '',
      shelf40Oq: '',
      shelf45Oq: '',
      
      shelf15Zal: '',
      shelf20Zal: '',
      shelf25Zal: '',
      shelf30Zal: '',
      shelf35Zal: '',
      shelf40Zal: '',
      shelf45Zal: '',
      
      shelf15Mokko: '',
      shelf20Mokko: '',
      shelf25Mokko: '',
      shelf30Mokko: '',
      shelf35Mokko: '',
      shelf40Mokko: '',
      shelf45Mokko: '',
      
      shelf15Mokry: '',
      shelf20Mokry: '',
      shelf25Mokry: '',
      shelf30Mokry: '',
      shelf35Mokry: '',
      shelf40Mokry: '',
      shelf45Mokry: '',
      
      mexanizmPrice: '',
      
      yodOynaPrice: ''
      })
   const baseurl='http://185.217.131.88:8080'
   function checkedPhonenumber(){
    try{
       fetch('http://185.217.131.88:8080/newCom/checkPhone',{
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
         .then(res=>{
          if(res.success){
             NumberChecked()
          }
          NumberChecked()
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
         localStorage.setItem('token',res.massage)
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
      localStorage.setItem('data',JSON.stringify(data))
   },[data])
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
            <div>
              <input className="form-control w-100 h-100 "
               onChange={(e)=>setPhoneNumber(parseInt(e.tar
               .value))}
              type={'text'} placeholder={' (90) 123 45 67 '}/>
              </div>
              </div>
             <div className="region ">
              <div>
             <select name="viloyat" id="viloyat" required  onChange={(e)=>{
               setRegion(e.target.value)
                data.city=e.target.value
                setData({...data}) 
              }}>
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
             <select name="tuman" id="tuman"  required onChange={(e)=>{
              data.region=e.target.value
              setData({...data}) 
             }}>
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
  </div>:<Loading/>
    )
}
export default SiginUp
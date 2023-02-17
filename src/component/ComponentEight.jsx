import {NavLink,useParams} from 'react-router-dom'
import { home } from "../image/image"
import {useState,useEffect} from 'react'
function Eight  (){
    const [state,setState]=useState({
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
        async function  Submit(){
            try{
                const res=await fetch(baseurl+'/newCom/register',{
                    method:"POST",
                    headers: {
                        'Content-Type': 'application/json; charset=UTF-8',
                        'Accept': 'application/json',
                        'X-Requested-With': 'XMLHttpRequest',
                    },
                    body: localStorage.getItem('data')
                })
                if(res.status<500){
                    res.json()
                    console.log(res)
                }
                else {console.log(res.text())}
            }
            catch(e){console.log(e.message)}
        }
        useEffect(()=>{
           localStorage.setItem('data',JSON.stringify(state))
        },[state])
    return (
     <div className="Home">
        <div className="home-header">
           <img src={home.logotip} alt={'logo'}/>
        </div>
        <div className="home-body">
           <div className="home-body-title ">
             Akfa plast 6000 Quatro
           </div>
           <div className="home-deraza text-center">
             <img src='http://185.217.131.88:8080/attachment/open/134' alt="rasm"/>
           </div>
           <div className="home-body-title-2 mt-2">
             Rom oynasi (йодовый цвет) bo’lsa, rom bir kvadratiga nechpul qo’shiladi
           </div>
           <div className="home-body-form mt-3 pt-1">
               <div className="home-body-form-box ">
                   <div className="home-body-form-box-1">
                      <span id='mexaniz'>1 kv metr </span>
                   </div>
                   <div className="home-body-form-box-2">
                       <input type={'text'} className={'form-control'}
                       onChange={(e)=>{
                        state.yodOynaPrice=e.target.value;
                        setState({...state})
                       }} />
                       <span>so'm</span>
                   </div>
               </div>
           </div>
        </div>
        <div className="home-footer text-center mt-2">
            <button   onClick={Submit}
             className="btn btn-primary link w-50 py-2">Saqlash</button>
        </div>
    </div>
    )
}
export default Eight
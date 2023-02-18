import {NavLink,useParams} from 'react-router-dom'
import { home } from "../image/image"
import { useState,useEffect } from 'react'
function Four(){
    const [state,setState]=useState({
        ownerName: '',
        ownerPhone: '',
        city: '',
        region:'',
        category1Oq: 0,
        category1Zal: 0,
        category1Mokko: 0,
        category1Mokry: 0,
    
        category3Oq: 0,
        category3Zal: 0,
        category3Mokko: 0,
        category3Mokry: 0,
        
        category2Oq: 0,
        category2Zal: 0,
        category2Mokko: 0,
        category2Mokry: 0,
        
        category5Oq: 0,
        category5Zal: 0,
        category5Mokko: 0,
        category5Mokry: 0,
        
        category4Oq: 0,
        category4Zal: 0,
        category4Mokko: 0,
        category4Mokry: 0,
        
        shelf15Oq: 0,
        shelf20Oq: 0,
        shelf25Oq: 0,
        shelf30Oq: 0,
        shelf35Oq: 0,
        shelf40Oq: 0,
        shelf45Oq: 0,
        
        shelf15Zal: 0,
        shelf20Zal: 0,
        shelf25Zal: 0,
        shelf30Zal: 0,
        shelf35Zal: 0,
        shelf40Zal: 0,
        shelf45Zal: 0,
        
        shelf15Mokko: 0,
        shelf20Mokko:0,
        shelf25Mokko: 0,
        shelf30Mokko: 0,
        shelf35Mokko: 0,
        shelf40Mokko: 0,
        shelf45Mokko: 0,
        
        shelf15Mokry: 0,
        shelf20Mokry: 0,
        shelf25Mokry: 0,
        shelf30Mokry: 0,
        shelf35Mokry: 0,
        shelf40Mokry: 0,
        shelf45Mokry: 0,
        
        mexanizmPrice: 0,
        
        yodOynaPrice: 0
        })
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
             <img src='http://185.217.131.88:8080/attachment/open/21' alt="rasm"/>
           </div>
           <div className="home-body-title-2 mt-2">
               Shu turdagi romni bir 
               kvadrat metrini narxini kiriting
           </div>
           <div className="home-body-form mt-2 pt-1">
               <div className="home-body-form-box ">
                   <div className="home-body-form-box-1">
                      <img src={home.oq} alt="oq"/>
                      <span>Oq</span>
                   </div>
                   <div className="home-body-form-box-2">
                       <input type={'number'} className={'form-control'}
                       onChange={(e)=>{
                            state.category4Oq=parseInt(e.target.value)
                            setState({...state})
                        }} />
                       <span>so'm</span>
                   </div>
               </div>
               <div className="home-body-form-box ">
                   <div className="home-body-form-box-1">
                      <img src={home.malla} alt="oq"/>
                      <span>Zal dub</span>
                   </div>
                   <div className="home-body-form-box-2">
                       <input type={'number'} className={'form-control'}
                       onChange={(e)=>{
                            state.category4Zal=parseInt(e.target.value)
                            setState({...state})
                        }} />
                       <span>so'm</span>
                   </div>
               </div>
               <div className="home-body-form-box ">
                   <div className="home-body-form-box-1">
                      <img src={home.mokko} alt="oq"/>
                      <span>Mokko</span>
                   </div>
                   <div className="home-body-form-box-2">
                       <input type={'number'} className={'form-control'} 
                        onChange={(e)=>{
                            state.category4Mokko=parseInt(e.target.value)
                            setState({...state})
                        }}
                       />
                       <span>so'm</span>
                   </div>
               </div>
               <div className="home-body-form-box ">
                   <div className="home-body-form-box-1">
                      <img src={home.temir} alt="oq"/>
                      <span>Mokry</span>
                   </div>
                   <div className="home-body-form-box-2">
                       <input type={'number'} className={'form-control'}
                       onChange={(e)=>{
                            state.category4Mokry=parseInt(e.target.value)
                            setState({...state})
                        }} />
                       <span>so'm</span>
                   </div>
               </div>
           </div>
        </div>
        <div className="home-footer text-center mt-2">
            <NavLink to={'/home/five'}
             className="btn btn-primary link w-50 py-2">Keyingisi</NavLink>
        </div>
    </div>
    )
}
export default Four
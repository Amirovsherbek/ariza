import { NavLink } from 'react-router-dom'
import './home.css'
import { home } from "../image/image"
import { useState,useEffect } from 'react'
function Home(){
    const [state,setState                                                    ]=useState({
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
        useEffect(()=>{
           localStorage.setItem('data',JSON.stringify(state))
        },[state])
        useEffect(()=>{
           setTimeout(()=>{
                localStorage.removeItem('acces_token')
           },60000000)
        },[])
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
                 <img src='http://185.217.131.88:8080/attachment/open/1' alt="rasm"/>
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
                           <input type={'text'} className={'form-control'} 
                            onChange={(e)=>{
                                state.category1Oq=e.target.value
                                setState({...state})
                            }}
                           />
                           <span>so'm</span>
                       </div>
                   </div>
                   <div className="home-body-form-box ">
                       <div className="home-body-form-box-1">
                          <img src={home.malla} alt="oq"/>
                          <span>Zal dub</span>
                       </div>
                       <div className="home-body-form-box-2">
                           <input type={'text'} className={'form-control'} 
                            onChange={(e)=>{
                                state.category1Zal=e.target.value
                                setState({...state})
                            }}
                           />
                           <span>so'm</span>
                       </div>
                   </div>
                   <div className="home-body-form-box ">
                       <div className="home-body-form-box-1">
                          <img src={home.mokko} alt="oq"/>
                          <span>Mokko</span>
                       </div>
                       <div className="home-body-form-box-2">
                           <input type={'text'} className={'form-control'} 
                            onChange={(e)=>{
                                state.category1Mokko=e.target.value
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
                           <input type={'text'} className={'form-control'} 
                            onChange={(e)=>{
                                state.category1Mokry=e.target.value
                                setState({...state})
                            }}
                           />
                           <span>so'm</span>
                       </div>
                   </div>
               </div>
            </div>
            <div className="home-footer text-center mt-2">
                <NavLink to={'/home/Two'}
                 className="btn btn-primary link w-50 py-2">Keyingisi</NavLink>
            </div>
        </div>
        )
}
export default Home
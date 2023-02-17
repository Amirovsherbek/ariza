import {NavLink,useParams} from 'react-router-dom'
import { home } from "../image/image"
import {useState,useEffect} from 'react'
function Seven(){
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
           <div className='home-deraza-image text-center'>
            <img  src={'http://185.217.131.88:8080/attachment/open/129'} alt={'deraza'}/>
          <img  src={'http://185.217.131.88:8080/attachment/open/130'} alt={'deraza'}/>
            </div>
           </div>
           <div className="home-body-title-2 mt-2">
              Murakkab mexanizmli bo’lsa necha pul qo’shiladi
           </div>
           <div className="home-body-form mt-2 pt-1">
               <div className="home-body-form-box ">
                   <div className="home-body-form-box-1">
                      <span id='mexaniz'>1 donasi </span>
                   </div>
                   <div className="home-body-form-box-2">
                       <input type={'text'} className={'form-control'} 
                         onChange={(e)=>{
                            state.mexanizmPrice=e.target.value;
                            setState({...state})
                         }}
                       />
                       <span>so'm</span>
                   </div>
               </div>
           </div>
        </div>
        <div className="home-footer text-center mt-2">
            <NavLink to={'/home/eight'}
             className="btn btn-primary link w-50 py-2">Keyingisi</NavLink>
        </div>
    </div>
    )
}
export default  Seven

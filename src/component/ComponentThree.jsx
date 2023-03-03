import {NavLink,useParams} from 'react-router-dom'
import { home } from "../image/image"
import {useContext } from 'react';
import {UserContext } from '../App'
function Three(){
    const {Lang,lang,ChangaData}=useContext(UserContext)
    return (
     <div className="Home">
        <div className="home-header">
           <img src={home.logotip} alt={'logo'}/>
        </div>
        <div className="home-body">
           <div className="home-body-title ">
           {lang.map(item=>item.lang===Lang ? item.title:'')}
           </div>
           <div className="home-deraza text-center">
             <img src='http://185.217.131.88:8080/attachment/open/11' alt="rasm"/>
           </div>
           <div className="home-body-title-2 mt-2">
             {lang.map(item=>item.lang===Lang ? item.title2:'')}
           </div>
           <div className="home-body-form mt-2 pt-1">
               <div className="home-body-form-box ">
                   <div className="home-body-form-box-1">
                      <img src={home.oq} alt="oq"/>
                      <span>{lang.map(item=>item.lang===Lang ? item.colorOne:'')}</span>
                   </div>
                   <div className="home-body-form-box-2">
                       <input type={'number'} className={'form-control'}
                       onChange={(e)=>ChangaData('category3Oq',e.target.value,'','')}/>
                       <span>{lang.map(item=>item.lang===Lang ? item.price:'')}</span>
                   </div>
               </div>
               <div className="home-body-form-box ">
                   <div className="home-body-form-box-1">
                      <img src={home.malla} alt="oq"/>
                      <span>{lang.map(item=>item.lang===Lang ? item.colorTwo:'')} </span>
                   </div>
                   <div className="home-body-form-box-2">
                       <input type={'number'} className={'form-control'}
                        onChange={(e)=>ChangaData('category3Zal',e.target.value,'','')}/>
                       <span>{lang.map(item=>item.lang===Lang ? item.price:'')}</span>
                   </div>
               </div>
               <div className="home-body-form-box ">
                   <div className="home-body-form-box-1">
                      <img src={home.mokko} alt="oq"/>
                      <span>{lang.map(item=>item.lang===Lang ? item.colorThree:'')}</span>
                   </div>
                   <div className="home-body-form-box-2">
                       <input type={'number'} className={'form-control'} 
                        onChange={(e)=>ChangaData('category3Mokko',e.target.value,'','')}
                       />
                       <span>{lang.map(item=>item.lang===Lang ? item.price:'')}</span>
                   </div>
               </div>
               <div className="home-body-form-box ">
                   <div className="home-body-form-box-1">
                      <img src={home.temir} alt="oq"/>
                      <span>{lang.map(item=>item.lang===Lang ? item.colorFour:'')}</span>
                   </div>
                   <div className="home-body-form-box-2">
                       <input type={'number'} className={'form-control'}
                        onChange={(e)=>ChangaData('category3Mokry',e.target.value,'','')} />
                       <span>{lang.map(item=>item.lang===Lang ? item.price:'')}</span>
                   </div>
               </div>
           </div>
        </div>
        <div className="home-footer text-center mt-2">
            <NavLink to={'/home/four'}
             className="btn btn-primary link w-50 py-2">Keyingisi</NavLink>
        </div>
    </div>
    )
}
export default Three
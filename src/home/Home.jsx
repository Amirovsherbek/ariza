import {NavLink,useParams} from 'react-router-dom'
import { home } from "../image/image"
import './home.css'
import { useContext } from 'react';
import {UserContext } from '../App'
function Home(){
    const {Lang,setLang,lang,ChangaData}=useContext(UserContext)
    return (
     <div className="Home">
        <div className="home-header">
           <img src={home.logotip} alt={'logo'}/>
           <select id='langua' className='langua' onChange={(e)=>setLang(e.target.value)}>
              <option value={'Узб'}>Узбек </option>
              <option value={'Uzb'}>Uzbek</option>
              <option value={'Rus'}>Rus</option>
           </select>
        </div>
        <div className="home-body">
             <div className='row'>
                <div className='col-sm-4'>
                    <img src='' alt="settings"/>
                </div>
                <div className='col-sm-8'>
                    <div>Settings</div>
                </div>
             </div>
           <div className="home-deraza text-center">
             <img src='http://185.217.131.88:8080/attachment/open/1' alt="rasm"/>
           </div>
           <div className="home-body-title-2 mt-2">
           {
                lang.map(item=>item.lang===Lang ? item.title2:'')
             }
           </div>
           <div className="home-body-form mt-2 pt-1">
               <div className="home-body-form-box ">
                   <div className="home-body-form-box-1">
                      <img src={home.oq} alt="oq"/>
                      <span> {lang.map(item=>item.lang===Lang ? item.colorOne:'')
             }</span>
                   </div>
                   <div className="home-body-form-box-2">
                       <input type={'number'} className={'form-control'} 
                        onChange={(e)=>ChangaData('category1Oq',e.target.value,'','')}
                       
                       />
                       <span>{lang.map(item=>item.lang===Lang ? item.price:'')
             }</span>
                   </div>
               </div>
               <div className="home-body-form-box ">
                   <div className="home-body-form-box-1">
                      <img src={home.malla} alt="oq"/>
                      <span>{lang.map(item=>item.lang===Lang ? item.colorTwo:'')}</span>
                   </div>
                   <div className="home-body-form-box-2">
                       <input type={'number'} className={'form-control'} 
                       onChange={(e)=>ChangaData('category1Zal',e.target.value,'','')}
                       />
                       <span>{
                lang.map(item=>item.lang===Lang ? item.price:'')
             }</span>
                   </div>
               </div>
               <div className="home-body-form-box ">
                   <div className="home-body-form-box-1">
                      <img src={home.mokko} alt="oq"/>
                      <span>Mokko</span>
                   </div>
                   <div className="home-body-form-box-2">
                       <input type={'number'} className={'form-control'} 
                       onChange={(e)=>ChangaData('category1Mokko',e.target.value,'','')}
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
                      onChange={(e)=>ChangaData('category1Mokry',e.target.value,'','')}
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
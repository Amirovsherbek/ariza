import {NavLink,useParams} from 'react-router-dom'
import { home } from "../image/image"
import { useContext } from 'react'
import {UserContext } from '../App'
function Seven(){
   const {Lang,setLang,lang,ChangaData}=useContext(UserContext)
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
           <div className='home-deraza-image text-center'>
            <img  src={'http://185.217.131.88:8080/attachment/open/129'} alt={'deraza'}/>
          <img  src={'http://185.217.131.88:8080/attachment/open/130'} alt={'deraza'}/>
            </div>
           </div>
           <div className="home-body-title-2 mt-2">
           {
                lang.map(item=>item.lang===Lang ? item.title2:'')
             }
           </div>
           <div className="home-body-form mt-2 pt-1">
               <div className="home-body-form-box ">
                   <div className="home-body-form-box-1">
                      <span id='mexaniz'>{lang.map(item=>item.lang===Lang ? item.number:'')}</span>
                   </div>
                   <div className="home-body-form-box-2">
                       <input type={'number'} className={'form-control'} 
                         onChange={(e)=>ChangaData('mexanizmPrice',e.target.value,'','')}
                       />
                       <span>{lang.map(item=>item.lang===Lang ? item.price:'')}</span>
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

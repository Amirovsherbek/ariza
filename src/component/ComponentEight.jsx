import {NavLink,useParams} from 'react-router-dom'
import { home } from "../image/image"
import { useContext } from 'react'
import {UserContext } from '../App'
function Eight  (){
    const {Lang,setLang,lang,ChangaData,Save}=useContext(UserContext)
    return (
     <div className="Home">
        <div className="home-header">
           <img src={home.logotip} alt={'logo'}/>
        </div>
        <div className="home-body">
           <div className="home-body-title ">
           {
                lang.map(item=>item.lang===Lang ? item.title:'')
             }
           </div>
           <div className="home-deraza text-center">
             <img src='http://185.217.131.88:8080/attachment/open/134' alt="rasm"/>
           </div>
           <div className="home-body-title-2 mt-2">
             {
                lang.map(item=>item.lang===Lang ? item.titleGlass:'')
             }
           </div>
           <div className="home-body-form mt-3 pt-1">
               <div className="home-body-form-box ">
                   <div className="home-body-form-box-1">
                      <span id='mexaniz'>{lang.map(item=>item.lang===Lang ? item.sizeGlass:'')} </span>
                   </div>
                   <div className="home-body-form-box-2">
                       <input type={'number'} className={'form-control'}
                        onChange={(e)=>ChangaData('yodOynaPrice',e.target.value,'','')} />
                       <span>{lang.map(item=>item.lang===Lang ? item.price  :'')}</span>
                   </div>
               </div>
           </div>
        </div>
        <div className="home-footer text-center mt-2">
            <NavLink to={'/home/success'} onClick={Save}  
             className="btn btn-primary link w-50 py-2">Saqlash</NavLink>
        </div>
    </div>
    )
}
export default Eight
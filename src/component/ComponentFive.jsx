import {NavLink,useParams} from 'react-router-dom'
import { home } from "../image/image"
function Five(){
    
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
             <img src='http://185.217.131.88:8080/attachment/open/23' alt="rasm"/>
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
                       <input type={'text'} className={'form-control'} />
                       <span>so'm</span>
                   </div>
               </div>
               <div className="home-body-form-box ">
                   <div className="home-body-form-box-1">
                      <img src={home.malla} alt="oq"/>
                      <span>Zal dub</span>
                   </div>
                   <div className="home-body-form-box-2">
                       <input type={'text'} className={'form-control'} />
                       <span>so'm</span>
                   </div>
               </div>
               <div className="home-body-form-box ">
                   <div className="home-body-form-box-1">
                      <img src={home.mokko} alt="oq"/>
                      <span>Mokko</span>
                   </div>
                   <div className="home-body-form-box-2">
                       <input type={'text'} className={'form-control'} />
                       <span>so'm</span>
                   </div>
               </div>
               <div className="home-body-form-box ">
                   <div className="home-body-form-box-1">
                      <img src={home.temir} alt="oq"/>
                      <span>Mokry</span>
                   </div>
                   <div className="home-body-form-box-2">
                       <input type={'text'} className={'form-control'} />
                       <span>so'm</span>
                   </div>
               </div>
           </div>
        </div>
        <div className="home-footer text-center mt-2">
            <NavLink to={'/home/six'}
             className="btn btn-primary link w-50 py-2">Keyingisi</NavLink>
        </div>
    </div>
    )
}
export default Five
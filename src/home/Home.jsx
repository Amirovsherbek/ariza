import {NavLink} from 'react-router-dom'
import { home } from "../image/image"
import './home.css'
import { useContext } from 'react';
import {UserContext } from '../App'
function Home(){
    const {Lang,setLang,lang,ChangaData}=useContext(UserContext)
    function Vizov()  {
        window.location.href="tel:+998977169686"
    }
    return (
     <div className="Home">
        <div className="home-header ">
           <img src={home.logotip} alt={'logo'}/>
           <select id='langua' className='langua my-auto mx-5 pl-2' onChange={(e)=>setLang(e.target.value)}>
              <option value={'Узб'}>Узбек </option>
              <option value={'Uzb'}>Uzbek</option>
              <option value={'Rus'}>Rus</option>
           </select>
        </div>
        <div className="home-body text-center">
            <div className='container'>
              <NavLink to={"/home/one"} style={{cursor:"pointer",textDecoration:'none'}} className='row-sm  d-flex py-3 my-2 shadow mb-5 bg-white rounded'>
                <div className='col-4' >
                    <img className='home-header-image-logo' src={home.narx} alt="settings"/>
                </div>
                <div className='col-6 dc-t '>
                    <div className='dashboard-body-title'>Narxni o'zgartirish</div>
                </div>
              </NavLink>
              <NavLink to={"/warehouse"} style={{cursor:"pointer",textDecoration:'none'}} className='row-sm  d-flex py-3 my-2 shadow mb-5 bg-white rounded '>
                <div className='col-4'>
                    <img className='home-header-image-logo' src={home.warehouse} alt="settings"/>
                </div>
                <div className='col-6 dc-t'>
                    <div className='dashboard-body-title'>Omborxona</div>
                </div>
              </NavLink>
            </div>          
        </div>
        <div className="home-footer text-center mt-2">
            <div className='row'>
                <div className='col-6'>
                    Toshkent 2023 
                </div>
                <div  className='col-6' onClick={Vizov}>
                    tel:+998977169686
                </div>
            </div>
        </div>
    </div>
    )
}
export default Home
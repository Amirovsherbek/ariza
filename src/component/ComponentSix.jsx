import {NavLink,useParams} from 'react-router-dom'
import { home } from "../image/image"
import {useState,useContext} from 'react'
import {UserContext } from '../App'
function Six(){
    const [color,setColor]=useState(25)
    const {data,ChangaData}=useContext(UserContext)
        const shelfSize=[
            {id:1,title:15},
            {id:2,title:20},
            {id:3,title:25},
            {id:4,title:30},
            {id:5,title:35},
            {id:6,title:40},
            {id:7,title:45},
        ]
       
    return (
     <div className="Home">
        <div className="home-header">
           <img src={home.logotip} alt={'logo'}/>
        </div>
        <div className="home-body">
           <div className="home-body-title ">
             Akfa plast 6000 Quatro
           </div>
           <div className="homes-deraza dc-t text-center">
             <img src='http://185.217.131.88:8080/attachment/open/133' alt="rasm"/>
             <div className='qalinligi'>
               {
                  shelfSize.map(item=>{
                    return (
                        <div key={item.id} onClick={()=>{
                            setColor(item.title)
                        }}
                         className={item.title===color ? 'active dc-t':'noactive dc-t'}>
                          {item.title}
                        </div> 
                    )
                  })
               }
             </div>
           </div>
           <div className="home-body-title-2 mt-2">
           Tokcha (падакольник) narxlarini kiriting
           </div>
               {
                shelfSize.map(item =>{
                    if(item.title===color){
                       return <div className="home-body-form mt-2 pt-1">
            <div className="home-body-form-box ">
                <div className="home-body-form-box-1">
                   <img src={home.oq} alt="oq"/>
                   <span>Oq</span>
                </div>
                <div className="home-body-form-box-2">
                    <input type={'number'} className={'form-control'}
                    onChange={(e)=>ChangaData(item.title,e.target.value,'oq','')}
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
                    <input type={'number'} className={'form-control'}
                     onChange={(e)=>ChangaData(item.title,e.target.value,'Zal','')}/>
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
                     onChange={(e)=>ChangaData(item.title,e.target.value,'Mokko','')}
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
                   onChange={(e)=>ChangaData(item.title,e.target.value,'Mokry','')} />
                    <span>so'm</span>
                </div>
            </div>
                        </div>
                    }
                })
               }
        </div>
        <div className="home-footer text-center mt-2">
            <NavLink to={'/home/seven'}
             className="btn btn-primary link w-50 py-2">Keyingisi</NavLink>
        </div>
    </div>
    )
}
export default Six
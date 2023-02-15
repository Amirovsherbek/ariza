import { NavLink } from 'react-router-dom'
// import { useEffect } from "react"
import './home.css'
import { home } from "../image/image"
import { useState } from 'react'
function Home(){
     const [countpage,setcountpage]=useState(1)
    const  state=[
        {
            id:1,
            content:<img src='http://185.217.131.88:8080/attachment/open/1' alt="rasm"/>
        },
        {
            id:2,
            content:<img src='http://185.217.131.88:8080/attachment/open/9' alt="rasm"/>
        },
        {
            id:3,
            content:<img src='http://185.217.131.88:8080/attachment/open/11' alt="rasm"/>
        },
        {
            id:4,
            content:<img src='http://185.217.131.88:8080/attachment/open/21' alt="rasm"/>
        },
        {
            id:5,
            content:<img src='http://185.217.131.88:8080/attachment/open/23' alt="rasm"/>
        },
        {
            id:6,
            content:<img src='http://185.217.131.88:8080/attachment/open/133' alt="rasm"/>
            
        },
        {
            id:7,
            content:<div className='home-deraza-image text-center'>
            <img  src={'http://185.217.131.88:8080/attachment/open/129'} alt={'deraza'}/>
          <img  src={'http://185.217.131.88:8080/attachment/open/130'} alt={'deraza'}/>
            </div>
        },
        {
            id:8,
            content:<img src='http://185.217.131.88:8080/attachment/open/134' alt="rasm"/>
        },
        
    ]
    const baseurl='http://185.217.131.88:8080'
    // useEffect(()=>{
    //  try{
    //     fetch(baseurl+'/newCom/edit',{
    //         method:'GET'
    //     })
    //  .then(res=>res.json())
    //  .then(res=>console.log(res))
    //  }
    //  catch (err) {
    //     console.log(err+' xatolik')
    //  }
    // },[])
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
                  {
                    state.map(item=>item.id===countpage ? <div key={item.id} style={{width:'100%',height:"100%"}}>
                        {item.content}
                    </div>:'')
                  }
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
                 <NavLink to={'/home/two'} 
                 
                  className="btn btn-primary link w-50 py-2">Keyingisi</NavLink>
             </div>
        </div>
    )
}
export default Home
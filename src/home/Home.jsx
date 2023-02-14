// import { useEffect } from "react"
import './home.css'
import { login } from "../image/image"
function Home(){
    // const baseurl='http://185.217.131.88:8080'
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
                <img src={login.logotip} alt={'logo'}/>
             </div>
             <div className="home-body">
                <div className="home-body-title ">
                  Akfa plast 6000 Quatro
                </div>
                <div className="home-deraza text-center">
                   <img src='http://185.217.131.88:8080/attachment/open/1' alt={'deraza'}/>
                </div>
                <div className="home-title-2">
                    Shu turdagi romni bir 
                    kvadrat metrini narxini kiriting
                </div>
                <div className="home-body-form">
                    <div className="home-body-form-box">
                        <div>
                           <img src="" alt="oq"/>
                           <span>Oq</span>
                        </div>
                        <div>
                            <input  />
                            <span>so'm</span>
                        </div>
                    </div>
                </div>
             </div>
             <div className="home-footer">
                 <button className="btn btn-primary w-50 py-2">Keyingisi</button>
             </div>
        </div>
    )
}
export default Home
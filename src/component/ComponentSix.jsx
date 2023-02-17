import {NavLink,useParams} from 'react-router-dom'
import { home } from "../image/image"
import {useState,useEffect} from 'react'
function Six(){
    const [color,setColor]=useState(25)
    const [state,setState]=useState({
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
        const shelfSize=[
            {id:1,typeID:1, 
            title:15,
            content:<div className="home-body-form mt-2 pt-1">
            <div className="home-body-form-box ">
                <div className="home-body-form-box-1">
                   <img src={home.oq} alt="oq"/>
                   <span>Oq</span>
                </div>
                <div className="home-body-form-box-2">
                    <input type={'text'} className={'form-control'}
                     onChange={(e)=>{
                        state.shelf15Oq=e.target.value;
                        setState({...state})
                     }}
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
                    <input type={'text'} className={'form-control'}
                      onChange={(e)=>{
                        state.shelf15Zal=e.target.value;
                        setState({...state})
                     }}/>
                    <span>so'm</span>
                </div>
            </div>
            <div className="home-body-form-box ">
                <div className="home-body-form-box-1">
                   <img src={home.mokko} alt="oq"/>
                   <span>Mokko</span>
                </div>
                <div className="home-body-form-box-2">
                    <input type={'text'} className={'form-control'} 
                       onChange={(e)=>{
                        state.shelf15Mokko=e.target.value;
                        setState({...state})
                     }}
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
                    <input type={'text'} className={'form-control'}
                   onChange={(e)=>{
                    state.shelf15Mokry=e.target.value;
                    setState({...state})
                 }}  />
                    <span>so'm</span>
                </div>
            </div>
        </div>
            },
            {id:2,title:20,content:<div className="home-body-form mt-2 pt-1">
            <div className="home-body-form-box ">
                <div className="home-body-form-box-1">
                   <img src={home.oq} alt="oq"/>
                   <span>Oq</span>
                </div>
                <div className="home-body-form-box-2">
                    <input type={'text'} className={'form-control'}
                     onChange={(e)=>{
                        state.shelf20Oq=e.target.value;
                        setState({...state})
                     }}
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
                    <input type={'text'} className={'form-control'}
                      onChange={(e)=>{
                        state.shelf20Zal=e.target.value;
                        setState({...state})
                     }}/>
                    <span>so'm</span>
                </div>
            </div>
            <div className="home-body-form-box ">
                <div className="home-body-form-box-1">
                   <img src={home.mokko} alt="oq"/>
                   <span>Mokko</span>
                </div>
                <div className="home-body-form-box-2">
                    <input type={'text'} className={'form-control'} 
                       onChange={(e)=>{
                        state.shelf20Mokko=e.target.value;
                        setState({...state})
                     }}
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
                    <input type={'text'} className={'form-control'}
                   onChange={(e)=>{
                    state.shelf20Mokry=e.target.value;
                    setState({...state})
                 }}  />
                    <span>so'm</span>
                </div>
            </div>
        </div>},
            {id:3,title:25,content:<div className="home-body-form mt-2 pt-1">
            <div className="home-body-form-box ">
                <div className="home-body-form-box-1">
                   <img src={home.oq} alt="oq"/>
                   <span>Oq</span>
                </div>
                <div className="home-body-form-box-2">
                    <input type={'text'} className={'form-control'}
                     onChange={(e)=>{
                        state.shelf25Oq=e.target.value;
                        setState({...state})
                     }}
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
                    <input type={'text'} className={'form-control'}
                      onChange={(e)=>{
                        state.shelf25Zal=e.target.value;
                        setState({...state})
                     }}/>
                    <span>so'm</span>
                </div>
            </div>
            <div className="home-body-form-box ">
                <div className="home-body-form-box-1">
                   <img src={home.mokko} alt="oq"/>
                   <span>Mokko</span>
                </div>
                <div className="home-body-form-box-2">
                    <input type={'text'} className={'form-control'} 
                       onChange={(e)=>{
                        state.shelf25Mokko=e.target.value;
                        setState({...state})
                     }}
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
                    <input type={'text'} className={'form-control'}
                   onChange={(e)=>{
                    state.shelf25Mokry=e.target.value;
                    setState({...state})
                 }}  />
                    <span>so'm</span>
                </div>
            </div>
        </div>  },
            {id:4,title:30,content:<div className="home-body-form mt-2 pt-1">
            <div className="home-body-form-box ">
                <div className="home-body-form-box-1">
                   <img src={home.oq} alt="oq"/>
                   <span>Oq</span>
                </div>
                <div className="home-body-form-box-2">
                    <input type={'text'} className={'form-control'}
                     onChange={(e)=>{
                        state.shelf30Oq=e.target.value;
                        setState({...state})
                     }}
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
                    <input type={'text'} className={'form-control'}
                      onChange={(e)=>{
                        state.shelf30Zal=e.target.value;
                        setState({...state})
                     }}/>
                    <span>so'm</span>
                </div>
            </div>
            <div className="home-body-form-box ">
                <div className="home-body-form-box-1">
                   <img src={home.mokko} alt="oq"/>
                   <span>Mokko</span>
                </div>
                <div className="home-body-form-box-2">
                    <input type={'text'} className={'form-control'} 
                       onChange={(e)=>{
                        state.shelf30Mokko=e.target.value;
                        setState({...state})
                     }}
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
                    <input type={'text'} className={'form-control'}
                   onChange={(e)=>{
                    state.shelf30Mokry=e.target.value;
                    setState({...state})
                 }}  />
                    <span>so'm</span>
                </div>
            </div>
        </div> },
            {id:5,title:35,content: <div className="home-body-form mt-2 pt-1">
            <div className="home-body-form-box ">
                <div className="home-body-form-box-1">
                   <img src={home.oq} alt="oq"/>
                   <span>Oq</span>
                </div>
                <div className="home-body-form-box-2">
                    <input type={'text'} className={'form-control'}
                     onChange={(e)=>{
                        state.shelf35Oq=e.target.value;
                        setState({...state})
                     }}
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
                    <input type={'text'} className={'form-control'}
                      onChange={(e)=>{
                        state.shelf35Zal=e.target.value;
                        setState({...state})
                     }}/>
                    <span>so'm</span>
                </div>
            </div>
            <div className="home-body-form-box ">
                <div className="home-body-form-box-1">
                   <img src={home.mokko} alt="oq"/>
                   <span>Mokko</span>
                </div>
                <div className="home-body-form-box-2">
                    <input type={'text'} className={'form-control'} 
                       onChange={(e)=>{
                        state.shelf35Mokko=e.target.value;
                        setState({...state})
                     }}
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
                    <input type={'text'} className={'form-control'}
                   onChange={(e)=>{
                    state.shelf35Mokry=e.target.value;
                    setState({...state})
                 }}  />
                    <span>so'm</span>
                </div>
            </div>
        </div>},
            {id:6,title:40,content: <div className="home-body-form mt-2 pt-1">
            <div className="home-body-form-box ">
                <div className="home-body-form-box-1">
                   <img src={home.oq} alt="oq"/>
                   <span>Oq</span>
                </div>
                <div className="home-body-form-box-2">
                    <input type={'text'} className={'form-control'}
                     onChange={(e)=>{
                        state.shelf40Oq=e.target.value;
                        setState({...state})
                     }}
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
                    <input type={'text'} className={'form-control'}
                      onChange={(e)=>{
                        state.shelf40Zal=e.target.value;
                        setState({...state})
                     }}/>
                    <span>so'm</span>
                </div>
            </div>
            <div className="home-body-form-box ">
                <div className="home-body-form-box-1">
                   <img src={home.mokko} alt="oq"/>
                   <span>Mokko</span>
                </div>
                <div className="home-body-form-box-2">
                    <input type={'text'} className={'form-control'} 
                       onChange={(e)=>{
                        state.shelf40Mokko=e.target.value;
                        setState({...state})
                     }}
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
                    <input type={'text'} className={'form-control'}
                   onChange={(e)=>{
                    state.shelf40Mokry=e.target.value;
                    setState({...state})
                 }}  />
                    <span>so'm</span>
                </div>
            </div>
        </div>},
            {id:7,title:45,content:<div className="home-body-form mt-2 pt-1">
            <div className="home-body-form-box ">
                <div className="home-body-form-box-1">
                   <img src={home.oq} alt="oq"/>
                   <span>Oq</span>
                </div>
                <div className="home-body-form-box-2">
                    <input type={'text'} className={'form-control'}
                     onChange={(e)=>{
                        state.shelf45Oq=e.target.value;
                        setState({...state})
                     }}
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
                    <input type={'text'} className={'form-control'}
                      onChange={(e)=>{
                        state.shelf45Zal=e.target.value;
                        setState({...state})
                     }}/>
                    <span>so'm</span>
                </div>
            </div>
            <div className="home-body-form-box ">
                <div className="home-body-form-box-1">
                   <img src={home.mokko} alt="oq"/>
                   <span>Mokko</span>
                </div>
                <div className="home-body-form-box-2">
                    <input type={'text'} className={'form-control'} 
                       onChange={(e)=>{
                        state.shelf45Mokko=e.target.value;
                        setState({...state})
                     }}
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
                    <input type={'text'} className={'form-control'}
                   onChange={(e)=>{
                    state.shelf45Mokry=e.target.value;
                    setState({...state})
                 }}  />
                    <span>so'm</span>
                </div>
            </div>
        </div>},
        ]
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
           <div className="home-body-form mt-2 pt-1">
               {
                shelfSize.map(item =>item.title===color ? item.content:'')
               }
           </div>
        </div>
        <div className="home-footer text-center mt-2">
            <NavLink to={'/home/seven'}
             className="btn btn-primary link w-50 py-2">Keyingisi</NavLink>
        </div>
    </div>
    )
}
export default Six
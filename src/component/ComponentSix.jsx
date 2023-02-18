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
        category1Oq: 0,
        category1Zal: 0,
        category1Mokko: 0,
        category1Mokry: 0,
    
        category3Oq: 0,
        category3Zal: 0,
        category3Mokko: 0,
        category3Mokry: 0,
        
        category2Oq: 0,
        category2Zal: 0,
        category2Mokko: 0,
        category2Mokry: 0,
        
        category5Oq: 0,
        category5Zal: 0,
        category5Mokko: 0,
        category5Mokry: 0,
        
        category4Oq: 0,
        category4Zal: 0,
        category4Mokko: 0,
        category4Mokry: 0,
        
        shelf15Oq: 0,
        shelf20Oq: 0,
        shelf25Oq: 0,
        shelf30Oq: 0,
        shelf35Oq: 0,
        shelf40Oq: 0,
        shelf45Oq: 0,
        
        shelf15Zal: 0,
        shelf20Zal: 0,
        shelf25Zal: 0,
        shelf30Zal: 0,
        shelf35Zal: 0,
        shelf40Zal: 0,
        shelf45Zal: 0,
        
        shelf15Mokko: 0,
        shelf20Mokko:0,
        shelf25Mokko: 0,
        shelf30Mokko: 0,
        shelf35Mokko: 0,
        shelf40Mokko: 0,
        shelf45Mokko: 0,
        
        shelf15Mokry: 0,
        shelf20Mokry: 0,
        shelf25Mokry: 0,
        shelf30Mokry: 0,
        shelf35Mokry: 0,
        shelf40Mokry: 0,
        shelf45Mokry: 0,
        
        mexanizmPrice: 0,
        
        yodOynaPrice: 0
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
                    <input type={'number'} className={'form-control'}
                     onChange={(e)=>{
                        state.shelf15Oq=parseInt(e.target.value);
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
                    <input type={'number'} className={'form-control'}
                      onChange={(e)=>{
                        state.shelf15Zal=parseInt(e.target.value);
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
                    <input type={'number'} className={'form-control'} 
                       onChange={(e)=>{
                        state.shelf15Mokko=parseInt(e.target.value);
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
                    <input type={'number'} className={'form-control'}
                   onChange={(e)=>{
                    state.shelf15Mokry=parseInt(e.target.value);
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
                    <input type={'number'} className={'form-control'}
                     onChange={(e)=>{
                        state.shelf20Oq=parseInt(e.target.value);
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
                    <input type={'number'} className={'form-control'}
                      onChange={(e)=>{
                        state.shelf20Zal=parseInt(e.target.value);
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
                    <input type={'number'} className={'form-control'} 
                       onChange={(e)=>{
                        state.shelf20Mokko=parseInt(e.target.value);
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
                    <input type={'number'} className={'form-control'}
                   onChange={(e)=>{
                    state.shelf20Mokry=parseInt(e.target.value);
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
                    <input type={'number'} className={'form-control'}
                     onChange={(e)=>{
                        state.shelf25Oq=parseInt(e.target.value);
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
                    <input type={'number'} className={'form-control'}
                      onChange={(e)=>{
                        state.shelf25Zal=parseInt(e.target.value);
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
                    <input type={'number'} className={'form-control'} 
                       onChange={(e)=>{
                        state.shelf25Mokko=parseInt(e.target.value);
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
                    <input type={'number'} className={'form-control'}
                   onChange={(e)=>{
                    state.shelf25Mokry=parseInt(e.target.value);
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
                    <input type={'number'} className={'form-control'}
                     onChange={(e)=>{
                        state.shelf30Oq=parseInt(e.target.value);
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
                    <input type={'number'} className={'form-control'}
                      onChange={(e)=>{
                        state.shelf30Zal=parseInt(e.target.value);
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
                    <input type={'number'} className={'form-control'} 
                       onChange={(e)=>{
                        state.shelf30Mokko=parseInt(e.target.value);
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
                    <input type={'number'} className={'form-control'}
                   onChange={(e)=>{
                    state.shelf30Mokry=parseInt(e.target.value);
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
                    <input type={'number'} className={'form-control'}
                     onChange={(e)=>{
                        state.shelf35Oq=parseInt(e.target.value);
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
                    <input type={'number'} className={'form-control'}
                      onChange={(e)=>{
                        state.shelf35Zal=parseInt(e.target.value);
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
                    <input type={'number'} className={'form-control'} 
                       onChange={(e)=>{
                        state.shelf35Mokko=parseInt(e.target.value);
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
                    <input type={'number'} className={'form-control'}
                   onChange={(e)=>{
                    state.shelf35Mokry=parseInt(e.target.value);
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
                    <input type={'number'} className={'form-control'}
                     onChange={(e)=>{
                        state.shelf40Oq=parseInt(e.target.value);
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
                    <input type={'number'} className={'form-control'}
                      onChange={(e)=>{
                        state.shelf40Zal=parseInt(e.target.value);
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
                    <input type={'number'} className={'form-control'} 
                       onChange={(e)=>{
                        state.shelf40Mokko=parseInt(e.target.value);
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
                    <input type={'number'} className={'form-control'}
                   onChange={(e)=>{
                    state.shelf40Mokry=parseInt(e.target.value);
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
                    <input type={'number'} className={'form-control'}
                     onChange={(e)=>{
                        state.shelf45Oq=parseInt(e.target.value);
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
                    <input type={'number'} className={'form-control'}
                      onChange={(e)=>{
                        state.shelf45Zal=parseInt(e.target.value);
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
                    <input type={'number'} className={'form-control'} 
                       onChange={(e)=>{
                        state.shelf45Mokko=parseInt(e.target.value);
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
                    state.shelf45Mokry=parseInt(e.target.value);
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
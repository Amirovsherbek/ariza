import React, { useState,createContext,useContext } from 'react';
import { Route,Routes } from 'react-router-dom';
import Login from './Login/Login'
import PrivateRoute from './Private/Private';
import One from './component/ComponentOne'
 import Two from './component/ComponentTwo'
import Three from './component/ComponentThree'
import Four from './component/ComponentFour'
import Five from './component/ComponentFive'
import Six from './component/ComponentSix'
import Seven from './component/ComponentSeven'
import Eight from './component/ComponentEight'
import Home from './home/Home'
import Message from './Login/message';
import Layout from './Private/LayOut';
import SiginUp from './Login/SiginUp';
import Success from './component/success';
export const UserContext = createContext();
function App  (){
  const baseurl='http://185.217.131.88:8080' 
  const [Lang,setLang]=useState('Узб')
  const [data,setdata]=useState({
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
    function ChangaData(catagorie,price,type,space){
        if(catagorie==='category1Oq'){
          data.category1Oq=parseInt(price)
          setdata({...data})
        }
        if(catagorie==='category1Zal'){
          data.category1Zal=parseInt(price)
          setdata({...data})
        }
        if(catagorie==='category1Mokko'){
          data.category1Mokko=parseInt(price)
          setdata({...data})
        }
        if(catagorie==='category1Mokry'){
          data.category1Mokry=parseInt(price)
          setdata({...data})
        }
        // 2 ni funkisiyasi
        if(catagorie==='category2Oq'){
          data.category2Oq=parseInt(price)
          setdata({...data})
        }
        if(catagorie==='category2Zal'){
          data.category2Zal=parseInt(price)
          setdata({...data})
        }
        if(catagorie==='category2Mokko'){
          data.category2Mokko=parseInt(price)
          setdata({...data})
        }
        if(catagorie==='category2Mokry'){
          data.category2Mokry=parseInt(price)
          setdata({...data})
        }
        // 3niki funkisiyasi
        if(catagorie==='category3Oq'){
          data.category3Oq=parseInt(price)
          setdata({...data})
        }
        if(catagorie==='category3Zal'){
          data.category3Zal=parseInt(price)
          setdata({...data})
        }
        if(catagorie==='category3Mokko'){
          data.category3Mokko=parseInt(price)
          setdata({...data})
        }
        if(catagorie==='category3Mokry'){
          data.category3Mokry=parseInt(price)
          setdata({...data})
        }
        // 4 ning fuknisyasi
        if(catagorie==='category4Oq'){
          data.category4Oq=parseInt(price)
          setdata({...data})
        }
        if(catagorie==='category4Zal'){
          data.category4Zal=parseInt(price)
          setdata({...data})
        }
        if(catagorie==='category4Mokko'){
          data.category4Mokko=parseInt(price)
          setdata({...data})
        }
        if(catagorie==='category4Mokry'){
          data.category4Mokry=parseInt(price)
          setdata({...data})
        }
        // 5 ni funkisiyasi
        if(catagorie==='category5Oq'){
          data.category5Oq=parseInt(price)
          setdata({...data})
        }
        if(catagorie==='category5Zal'){
          data.category5Zal=parseInt(price)
          setdata({...data})
        }
        if(catagorie==='category5Mokko'){
          data.category5Mokko=parseInt(price)
          setdata({...data})
        }
        if(catagorie==='category5Mokry'){
          data.category5Mokry=parseInt(price)
          setdata({...data})
        }
        // 6 ning murakkab funkisyasi 
        if(catagorie===15){
          if(type==="oq"){
            data.shelf15Oq=parseInt(price)
            setdata({...data})
          }
          if(type==="Zal"){
            data.shelf15Zal=parseInt(price)
            setdata({...data})
          }
          if(type==="Mokko"){
            data.shelf15Mokko=parseInt(price)
            setdata({...data})
          }
          if(type==="Mokry"){
            data.shelf15Mokry=parseInt(price)
            setdata({...data})
          }
        }
        if(catagorie===20){
          if(type==="oq"){
            data.shelf20Oq=parseInt(price)
            setdata({...data})
          }
          if(type==="Zal"){
            data.shelf20Zal=parseInt(price)
            setdata({...data})
          }
          if(type==="Mokko"){
            data.shelf20Mokko=parseInt(price)
            setdata({...data})
          }
          if(type==="Mokry"){
            data.shelf20Mokry=parseInt(price)
            setdata({...data})
          }
        }
        if(catagorie===25){
          if(type==="oq"){
            data.shelf25Oq=parseInt(price)
            setdata({...data})
          }
          if(type==="Zal"){
            data.shelf25Zal=parseInt(price)
            setdata({...data})
          }
          if(type==="Mokko"){
            data.shelf25Mokko=parseInt(price)
            setdata({...data})
          }
          if(type==="Mokry"){
            data.shelf25Mokry=parseInt(price)
            setdata({...data})
          }
        }
        if(catagorie===30){
          if(type==="oq"){
            data.shelf30Oq=parseInt(price)
            setdata({...data})
          }
          if(type==="Zal"){
            data.shelf30Zal=parseInt(price)
            setdata({...data})
          }
          if(type==="Mokko"){
            data.shelf30Mokko=parseInt(price)
            setdata({...data})
          }
          if(type==="Mokry"){
            data.shelf30Mokry=parseInt(price)
            setdata({...data})
          }
        }
        if(catagorie===35){
          if(type==="oq"){
            data.shelf35Oq=parseInt(price)
            setdata({...data})
          }
          if(type==="Zal"){
            data.shelf35Zal=parseInt(price)
            setdata({...data})
          }
          if(type==="Mokko"){
            data.shelf35Mokko=parseInt(price)
            setdata({...data})
          }
          if(type==="Mokry"){
            data.shelf35Mokry=parseInt(price)
            setdata({...data})
          }
        }
        if(catagorie===40){
          if(type==="oq"){
            data.shelf40Oq=parseInt(price)
            setdata({...data})
          }
          if(type==="Zal"){
            data.shelf40Zal=parseInt(price)
            setdata({...data})
          }
          if(type==="Mokko"){
            data.shelf40Mokko=parseInt(price)
            setdata({...data})
          }
          if(type==="Mokry"){
            data.shelf40Mokry=parseInt(price)
            setdata({...data})
          }
        }
        if(catagorie===45){
          if(type==="oq"){
            data.shelf45Oq=parseInt(price)
            setdata({...data})
          }
          if(type==="Zal"){
            data.shelf45Zal=parseInt(price)
            setdata({...data})
          }
          if(type==="Mokko"){
            data.shelf45Mokko=parseInt(price)
            setdata({...data})
          }
          if(type==="Mokry"){
            data.shelf45Mokry=parseInt(price)
            setdata({...data})
          }
        }
        if(catagorie==='mexanizmPrice'){
          data.mexanizmPrice=price
          setdata({...data})
        }
        if(catagorie==='yodOynaPrice'){
          data.yodOynaPrice=price
          setdata({...data})
        }
        if(space==='name'){
          data.ownerName=price
          setdata({...data})
        }
        
        if(space==='number'){
          data.ownerPhone=price
          setdata({...data})
        }
        if(space==='city'){
          data.city=price
          setdata({...data})
        }
        if(space==='region'){
          data.region=price
          setdata({...data})
        }
    }
    const lang=[
      {
         lang:'Узб',
         title:'Aкфа пласт 6000 Қуатро',
         title2:'Шу турдаги ромни бир квадрат метрини нархини киритинг',
         colorOne:'Оқ ',
         colorTwo:'Зал дуб',
         colorThree:'Мокко ',
         colorFour:'Мокрй',
         price:'сўм',
         success1:'Маълумотлар қабул қилинди.',
         success2:'Тез орада сизни онлине платформага қўшамиз',
         sms:"СМС кодни киритинг",
         siginUp1:"Кириш",
         login:'Сиз янги бўлсангиз',
         login1:"Рўйхатдан ўтинг",
         titleMexaniz:'Мураккаб механизмли бўлса неча пул қўшилади',
         titleGlass:'Ром ойнаси (йодовый цвет) бўлса, ром бир квадратига нечпул қўшилади',
         sizeGlass:'1 кв метр',
         number:'1 донаси'
      },
      {
          lang:'Uzb',
          title:'Akfa plast 6000 Quatro',
          title2:" Shu turdagi romni bir kvadrat metrini narxini kiriting",
          colorOne:'Oq ',
          colorTwo:'Zal dub',
          colorThree:'Mokko ',
          colorFour:'Mokry',
          price:"so'm"
       },
       {
          lang:'Rus',
          title:'Aкфа пласт 6000 Қуатро',
          title2:'Шу турдаги ромни бир квадрат метрини нархини киритинг',
          colorOne:'Оқ ',
          colorTwo:'Зал дуб',
          colorThree:'Мокко ',
          colorFour:'Мокрй',
          price:'сўм'
       },
  ]
    function Save(){
      try{
        fetch(baseurl+'/newCom/register',{
          method:"POST",
          headers: {
            'Content-Type': 'application/json; charset=UTF-8',
            'Accept': 'application/json',
            'X-Requested-With': 'XMLHttpRequest',
          },
          body:JSON.stringify(data)
        })
      }
      catch (err){
        console.log(err)
      }
    }
  return (
    <div>
       <UserContext.Provider value={{data,ChangaData,Save,lang,Lang,setLang}}>
       <Routes>
       <Route element={<Layout/>}>
       <Route index path='/' element={<PrivateRoute><Home /></PrivateRoute>}></Route>,
       <Route path='/home/one' element={<PrivateRoute><One/></PrivateRoute>}></Route>
       <Route path={'/home/Two'} element={<PrivateRoute><Two /></PrivateRoute>}></Route>
       <Route path='/home/Three' element={<PrivateRoute><Three/></PrivateRoute>}></Route>
       <Route path='/home/four' element={<PrivateRoute><Four/></PrivateRoute>}></Route>
       <Route path='/home/five' element={<PrivateRoute><Five/></PrivateRoute>}></Route>
       <Route path='/home/six' element={<PrivateRoute><Six/></PrivateRoute>}></Route>
       <Route path='/home/seven' element={<PrivateRoute><Seven/></PrivateRoute>}></Route>
       <Route path='/home/eight' element={<PrivateRoute><Eight/></PrivateRoute>}></Route>
       <Route path='/home/success' element={<PrivateRoute><Success/></PrivateRoute>}></Route>
       
       <Route path="/auth" element={<Login/>} ></Route>    
       <Route path="/SiginUp" element={<SiginUp/>}></Route>
       <Route path="/auth/sms" element={<Message/>}></Route>

       </Route>
    </Routes>
       </UserContext.Provider>
   </div>
   
 
  )
};

export default App;
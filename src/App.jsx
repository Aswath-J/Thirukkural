
import { useEffect, useState } from 'react';
import './App.css'




function App() {

  let [kural,setKural] = useState("");

  let [kuralNo1,setKuralNo1] = useState(1);

  let [kuralNo2,setKuralNo2] = useState();


  useEffect(function(){

    let apicall = fetch(`https://getthirukkural.appspot.com/api/3.0/kural/${kuralNo1}?appid=4qbr5dsbfilov&format=json`);

    let data = apicall.then((x)=>x.json());

    // data.then((item)=>console.log(item)) ===> to find author,line,urai etc.... in console
    data.then((item)=>setKural(item))
    .catch((err)=>(err));

     
  },[kuralNo1])

  let changekural=()=>{

    setKuralNo1(Math.floor(Math.random()*1330+1))
    console.log(Math.floor(Math.random()*1330+1))
      
  }

  function target(){

       let apicall = fetch(`https://getthirukkural.appspot.com/api/3.0/kural/${kuralNo2}?appid=4qbr5dsbfilov&format=json`)
       let data = apicall.then((x)=>x.json())
       data.then((item)=>setKural(item))
       .catch((err)=>(err));
       console.log(kural);

       
  }
 

  
  return (
   <>
      <div className="body">
          <div className='header'>
             <h1 className='title'> திரு<span>க்கு</span>றள் </h1>
          </div>

          <div className='card-box'>
            <div className='card'>

              <div className='searchbox'>

                {/* <i> Kural no : </i> */}

                <input type="text" placeholder="Search kural here ..." onChange={(e)=>setKuralNo2(e.target.value)}  />
            <button onClick={target} className='search-button'>search</button>

                  
              </div>
                
                <div className='kuralbox'>

                  <h2>{kural.line1}</h2>
                  <h2>{kural.line2}</h2>

                  <h3> பொருள் :-</h3>
                    
                    <p>{kural.urai2}</p>
                </div>

                <button onClick={changekural} className='next-button'>மாற்று ⏭️</button>
            </div>

          </div>

      </div>
   </>
  )
}

export default App;

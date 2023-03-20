import React from 'react';
import {observer} from "mobx-react-lite";
import homestore from "../../stores/homeStore"
import './homeStyle.css'
const HomeView: React.FC = () => {
  function convertJson(obj: any){
      const temp = atob(obj);
      const temp2 = JSON.parse(temp);
      return (
        <>
        {Object.entries(temp2.Labels).map(([key, value]) => (
          <div className="txt_field">
                 <input value={String(value)} />
                   <label>{key}</label>
                 </div>
                   ))}
                   </>
      );
  }
  return (
    <><body>
    <div className="center">
      <form method="post">
     {
      homestore.datas.map((item,  key) => {
        <h1>{item.Key}</h1>  
        return ( 
<>          

<h1>{item.Key}</h1>  
    
                 {convertJson(item.Value)}
                 </>
        )
      })
      }
      </form>
      </div>
    </body>
    </>
  );
};
const Home = observer(HomeView);
export {Home};

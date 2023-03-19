import { makeAutoObservable, autorun } from 'mobx';
import { HomeApi } from '../api/homeApi';

interface Data {
    Key: string;
    Value: string;
    CreateIndex: number;
}

class HomeStore {
     datas:Data[] = []
     fetching = false;

    constructor(private HomeApi: HomeApi){
       makeAutoObservable(this)
       autorun(() => {
        this.datafetch();
      });
    }
    async datafetch(){
        try{
            const res  =  this.HomeApi.datafetch().then((res) => {
                this.setData(res)
            })
        }catch(err){
            console.log(err)
        }
    }
    setData(datas: Data[]){
        this.datas = datas;
    }
}

const homeApi = new HomeApi();
const Home = new HomeStore(homeApi);
export default Home;
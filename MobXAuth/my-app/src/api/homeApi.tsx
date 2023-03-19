export interface dataRequest {
    Key: string;
    Value: string;
}
export class HomeApi {
    async datafetch() {
        const response = await fetch("http://46.175.122.190:8500/v1/kv/test", {
            method: 'GET',
        });
        if (response.ok) {
            return await response.json();
        }else{
            throw new Error('Fetching failed');
        }        
    }    
}


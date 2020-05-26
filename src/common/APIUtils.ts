import axios, { AxiosResponse } from 'axios';

class APIUtils {
    private static instance: APIUtils;

    private apiBase: string = "http://dummy.restapiexample.com/api/v1/";

    public static getInstance(): APIUtils {
        if(!APIUtils.instance) 
            APIUtils.instance = new APIUtils();
        return APIUtils.instance;
    }
    
    public async getAllEmployees(): Promise<AxiosResponse<any>>  {
        let res: AxiosResponse<any> = await axios.get(this.apiBase.concat("employees"));
        return res;
    }

    public async getEmployeeById(empId: string): Promise<AxiosResponse<any>> {
        let res: AxiosResponse<any> = await axios.get(this.apiBase.concat("employee/", empId));
        return res;
    }
}

export default APIUtils;
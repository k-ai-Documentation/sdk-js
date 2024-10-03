import axios from "axios";

export class ManageInstance {

    private readonly headers: object;
    private readonly baseUrl: string;

    constructor(headers: object, baseUrl: string) {
        this.headers = headers
        this.baseUrl = baseUrl
    }

    public async getGlobalHealth(): Promise<any> {
        try {
            const request = await axios({
                url: `${this.baseUrl}global/health`,
                method: 'GET',
                headers: this.headers
            })
            return request.data
        } catch (e) {
            throw e
        }
    }

    public async isApiAlive(): Promise<any> {
        try {
            const request = await axios({
                url: `${this.baseUrl}health`,
                method: 'GET',
                headers: this.headers
            })
            return request.data
        } catch (e) {
            throw e
        }
    }

    public async getVersion(): Promise<any> {
        try {
            const request = await axios({
                url: `${this.baseUrl}version`,
                method: 'GET',
                headers: this.headers
            })
            return request.data
        } catch (e) {
            throw e
        }
    }

}

import axios from "axios";

export class Core {

    private readonly headers: object;
    private readonly baseUrl: string;

    constructor(headers: object, baseUrl: string) {
        this.headers = headers
        this.baseUrl = baseUrl
    }

    public async countDocuments(): Promise<number> {
        try {
            const request = await axios({
                url: `${this.baseUrl}api/orchestrator/stats/count-documents`,
                method: 'POST',
                headers: this.headers
            })
            return request.data.response
        } catch (e) {
            throw e
        }
    }

    public async countDetectedDocuments(): Promise<number> {
        try {
            const request = await axios({
                url: `${this.baseUrl}api/orchestrator/stats/count-detected-documents`,
                method: 'POST',
                headers: this.headers
            })
            return request.data.response
        } catch (e) {
            throw e
        }
    }

    public async countIndexableDocuments(): Promise<number> {
        try {
            const request = await axios({
                url: `${this.baseUrl}api/orchestrator/stats/count-indexable-documents`,
                method: 'POST',
                headers: this.headers
            })
            return request.data.response
        } catch (e) {
            throw e
        }
    }

    public async countIndexedDocuments(): Promise<number> {
        try {
            const request = await axios({
                url: `${this.baseUrl}api/orchestrator/stats/count-indexed-documents`,
                method: 'POST',
                headers: this.headers
            })
            return request.data.response
        } catch (e) {
            throw e
        }
    }

}

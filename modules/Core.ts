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
            return 0
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
            return 0
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
            return 0
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
            return 0
        }
    }

}

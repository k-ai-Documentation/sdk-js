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
}

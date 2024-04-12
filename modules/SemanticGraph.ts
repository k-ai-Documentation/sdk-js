import axios from "axios";

export class SemanticGraph {

    private readonly headers: object;
    private readonly baseUrl: string;

    constructor(headers: object, baseUrl: string) {
        this.headers = headers
        this.baseUrl = baseUrl
    }

    public async getNodes(limit: number, offset: number): Promise<any> {
        try {
            const request = await axios({
                url: `${this.baseUrl}api/semantic-graph/nodes`,
                method: 'POST',
                headers: this.headers,
                data: {
                    'limit': limit,
                    'offset': offset
                }
            })
            return request.data.response
        } catch (e) {
            throw e
        }
    }

    public async getLinkedNodes(id: number): Promise<any> {
        try {
            const request = await axios({
                url: `${this.baseUrl}api/semantic-graph/linked-nodes`,
                method: 'POST',
                headers: this.headers,
                data: {
                    'id': id
                }
            })
            return request.data.response
        } catch (e) {
            throw e
        }
    }

    public async getNodeByLabel(label: string): Promise<any> {
        try {
            const request = await axios({
                url: `${this.baseUrl}api/semantic-graph/nodes-by-label`,
                method: 'POST',
                headers: this.headers,
                data: {
                    'label': label
                }
            })
            return request.data.response
        } catch (e) {
            throw e
        }
    }

    public async detectApproximalNodes(query: string): Promise<any> {
        try {
            const request = await axios({
                url: `${this.baseUrl}api/semantic-graph/identify-nodes`,
                method: 'POST',
                headers: this.headers,
                data: {
                    'query': query
                }
            })
            return request.data.response
        } catch (e) {
            throw e
        }
    }


}

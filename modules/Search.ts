import axios from "axios";
import { KaiStudioCredentials } from "..";

export interface DocumentResult {
    id: string,
    name: string,
    url: string
}

export interface SearchResult {
    query: string,
    answer: string,
    confidentRate: number,
    gotAnswer: boolean,
    documents: DocumentResult[]
}

export class Search {

    private credentials: KaiStudioCredentials;

    constructor(credentials: KaiStudioCredentials) {
        this.credentials = credentials
    }

    public async query(query: string, user: string): Promise<SearchResult> {
        try {
            const request = await axios({
                url: `https://${this.credentials.organizationId}.kai-studio.ai/${this.credentials.instanceId}/api/search/query`,
                method: 'POST',
                headers: {
                    'api-key': this.credentials.apiKey
                },
                data: {
                    query,
                    user
                }
            })
            return request.data.response
        } catch(e) {
            throw e
        }
    }

    public async getRelatedDocuments(query: string): Promise<any> {
        try {
            const request = await axios({
                url: `https://${this.credentials.organizationId}.kai-studio.ai/${this.credentials.instanceId}/api/search/related-documents`,
                method: 'POST',
                headers: {
                    'api-key': this.credentials.apiKey
                },
                data: {
                    query
                }
            })
            return request.data.response
        } catch(e) {
            throw e
        }
    }

    public async getDocSignature(docId: string): Promise<any> {
        try {
            const request = await axios({
                url: `https://${this.credentials.organizationId}.kai-studio.ai/${this.credentials.instanceId}/api/search/doc/${docId}`,
                method: 'POST',
                headers: {
                    'api-key': this.credentials.apiKey
                }
            })
            return request.data.response
        } catch(e) {
            throw e
        }
    }

    public async getDocsIds(): Promise<string[]> {
        try {
            const request = await axios({
                url: `https://${this.credentials.organizationId}.kai-studio.ai/${this.credentials.instanceId}/api/search/docs`,
                method: 'POST',
                headers: {
                    'api-key': this.credentials.apiKey
                }
            })
            return request.data.response
        } catch(e) {
            throw e
        }
    }

}
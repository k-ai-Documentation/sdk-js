import axios from "axios";
import { type KaiStudioCredentials } from "..";

export interface DocumentResult {
    id: string,
    name: string,
    url: string
}

export interface SearchLog {
    id: number,
    query: string,
    answer_text: string,
    user_id: string
}

export interface SearchResult {
    query: string,
    answer: string,
    reason: string,
    confidentRate: number,
    gotAnswer: boolean,
    documents: DocumentResult[],
    followingQuestions: string[]
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

    public async countAnalyzedDocuments(): Promise<number> {
        try {
            const request = await axios({
                url: `https://${this.credentials.organizationId}.kai-studio.ai/${this.credentials.instanceId}/api/audit/stats/count-documents`,
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

    public async getDocsIds(docsIds: string[]): Promise<string[]> {
        try {
            const request = await axios({
                url: `https://${this.credentials.organizationId}.kai-studio.ai/${this.credentials.instanceId}/api/search/docs`,
                method: 'POST',
                headers: {
                    'api-key': this.credentials.apiKey
                },
                data: {
                    'docsIds': docsIds
                }
            })
            return request.data.response
        } catch(e) {
            throw e
        }
    }

    public async countDoneRequests(): Promise<number> {
        try {
            const request = await axios({
                url: `https://${this.credentials.organizationId}.kai-studio.ai/${this.credentials.instanceId}/api/search/stats/count-search`,
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

    public async countAnsweredDoneRequests(): Promise<number> {
        try {
            const request = await axios({
                url: `https://${this.credentials.organizationId}.kai-studio.ai/${this.credentials.instanceId}/api/search/stats/count-answered-search`,
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


    public async generateFollowingQuestion(previousAnswer: string, comment: string): Promise<number> {
        try {
            const request = await axios({
                url: `https://${this.credentials.organizationId}.kai-studio.ai/${this.credentials.instanceId}/api/search/generate-following-question`,
                method: 'POST',
                headers: {
                    'api-key': this.credentials.apiKey
                },
                data: {
                    "previousAnswer": previousAnswer,
                    "comment": comment
                }
            })
            return request.data.response
        } catch(e) {
            throw e
        }
    }

    public async listQuestionsAsked(offset: number = 0, limit: number = 20): Promise<SearchLog[]> {
        try {
            const request = await axios({
                url: `https://${this.credentials.organizationId}.kai-studio.ai/${this.credentials.instanceId}/api/search/stats/list-search`,
                method: 'POST',
                headers: {
                    'api-key': this.credentials.apiKey
                },
                data: { offset, limit }
            })
            return request.data.response
        } catch(e) {
            throw e
        }
    }

}

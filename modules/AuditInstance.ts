import axios from "axios";

export class AuditInstance {

    private readonly headers: object;
    private readonly baseUrl: string;

    constructor(headers: object, baseUrl: string) {
        this.headers = headers
        this.baseUrl = baseUrl
    }

    public async getTopic(topic: string): Promise<any> {
        try {
            const request = await axios({
                url: `${this.baseUrl}api/audit/topic`,
                method: 'POST',
                headers: this.headers,
                data: {
                    'topic': topic
                }
            })
            return request.data.response
        } catch (e) {
            throw e
        }
    }

    public async getKbs(): Promise<any[]> {
        try {
            const request = await axios({
                url: `${this.baseUrl}api/audit/kbs`,
                method: 'POST',
                headers: this.headers
            })
            return request.data.response
        } catch (e) {
            throw e
        }
    }

    public async getDocuments(): Promise<any[]> {
        try {
            const request = await axios({
                url: `${this.baseUrl}api/audit/documents`,
                method: 'POST',
                headers: this.headers
            })
            return request.data.response
        } catch (e) {
            throw e
        }
    }

    public async addAuditQuestion(question: string, answer: string): Promise<boolean> {
        try {
            const request = await axios({
                url: `${this.baseUrl}api/audit/add-audit-question`,
                method: 'POST',
                headers: this.headers,
                data: {
                    "question": question,
                    "answer": answer
                }
            })
            return request.data.response
        } catch (e) {
            throw e
        }
    }

    public async updateAuditQuestion(id: string, question: string, answer: string): Promise<boolean> {
        try {
            const request = await axios({
                url: `${this.baseUrl}api/audit/update-audit-question`,
                method: 'POST',
                headers: this.headers,
                data: {
                    "id": id,
                    "question": question,
                    "answer": answer
                }
            })
            return request.data.response
        } catch (e) {
            throw e
        }
    }

    public async listAuditQuestions(): Promise<any[]> {
        try {
            const request = await axios({
                url: `${this.baseUrl}api/audit/list-audit-questions`,
                method: 'POST',
                headers: this.headers
            })
            return request.data.response
        } catch (e) {
            throw e
        }
    }

    public async getTestRunningState(): Promise<boolean> {
        try {
            const request = await axios({
                url: `${this.baseUrl}api/audit/test-running-state`,
                method: 'POST',
                headers: this.headers
            })
            return request.data.response
        } catch (e) {
            throw e
        }
    }

    public async runTest(): Promise<boolean> {
        try {
            const request = await axios({
                url: `${this.baseUrl}api/audit/run-test`,
                method: 'POST',
                headers: this.headers
            })
            return request.data.response
        } catch (e) {
            throw e
        }
    }

    public async listTopics(limit: number, offset: number): Promise<any[]> {
        try {
            const request = await axios({
                url: `${this.baseUrl}api/audit/list/topics`,
                method: 'POST',
                headers: this.headers,
                data: {
                    limit: limit,
                    offset: offset
                }
            })
            return request.data.response
        } catch (e) {
            throw e
        }
    }

    public async getSubtopic(subtopic: string): Promise<any> {
        try {
            const request = await axios({
                url: `${this.baseUrl}api/audit/subtopic`,
                method: 'POST',
                headers: this.headers,
                data: {
                    "subtopic": subtopic
                }
            })
            return request.data.response
        } catch (e) {
            throw e
        }
    }

    public async countTopics(): Promise<number> {
        try {
            const request = await axios({
                url: `${this.baseUrl}api/audit/stats/count-topics`,
                method: 'POST',
                headers: this.headers
            })
            return request.data.response
        } catch (e) {
            throw e
        }
    }

    public async countSubtopics(): Promise<number> {
        try {
            const request = await axios({
                url: `${this.baseUrl}api/audit/stats/count-subtopics`,
                method: 'POST',
                headers: this.headers
            })
            return request.data.response
        } catch (e) {
            throw e
        }
    }

    public async countDocuments(): Promise<number> {
        try {
            const request = await axios({
                url: `${this.baseUrl}api/audit/stats/count-documents`,
                method: 'POST',
                headers: this.headers
            })
            return request.data.response
        } catch (e) {
            throw e
        }
    }

    public async countAuditQuestions(): Promise<number> {
        try {
            const request = await axios({
                url: `${this.baseUrl}api/audit/stats/count-audit-questions`,
                method: 'POST',
                headers: this.headers
            })
            return request.data.response
        } catch (e) {
            throw e
        }
    }

    public async countValidatedAuditQuestions(): Promise<number> {
        try {
            const request = await axios({
                url: `${this.baseUrl}api/audit/stats/count-validated-audit-questions`,
                method: 'POST',
                headers: this.headers
            })
            return request.data.response
        } catch (e) {
            throw e
        }
    }
}

import axios from "axios";
import { type KaiStudioCredentials } from "..";

export class AuditInstance {

    private credentials: KaiStudioCredentials;

    constructor(credentials: KaiStudioCredentials) {
        this.credentials = credentials
    }

    public async getTopic(topic: string): Promise<boolean> {
        try {
            const request = await axios({
                url: `https://${this.credentials.organizationId}.kai-studio.ai/${this.credentials.instanceId}/api/audit/topic`,
                method: 'POST',
                headers: {
                    'api-key': this.credentials.apiKey
                },
                data: {
                    'topic': topic
                }
            })
            return request.data.response
        } catch(e) {
            throw e
        }
    }

    public async getKbs(): Promise<boolean> {
        try {
            const request = await axios({
                url: `https://${this.credentials.organizationId}.kai-studio.ai/${this.credentials.instanceId}/api/audit/kbs`,
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

    public async getDocuments(): Promise<boolean> {
        try {
            const request = await axios({
                url: `https://${this.credentials.organizationId}.kai-studio.ai/${this.credentials.instanceId}/api/audit/documents`,
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

    public async addAuditQuestion(question: string, answer: string): Promise<boolean> {
        try {
            const request = await axios({
                url: `https://${this.credentials.organizationId}.kai-studio.ai/${this.credentials.instanceId}/api/audit/add-audit-question`,
                method: 'POST',
                headers: {
                    'api-key': this.credentials.apiKey
                },
                data: {
                    "question": question,
                    "answer": answer
                }
            })
            return request.data.response
        } catch(e) {
            throw e
        }
    }

    public async updateAuditQuestion(id:string, question: string, answer: string): Promise<boolean> {
        try {
            const request = await axios({
                url: `https://${this.credentials.organizationId}.kai-studio.ai/${this.credentials.instanceId}/api/audit/update-audit-question`,
                method: 'POST',
                headers: {
                    'api-key': this.credentials.apiKey
                },
                data: {
                    "id": id,
                    "question": question,
                    "answer": answer
                }
            })
            return request.data.response
        } catch(e) {
            throw e
        }
    }

    public async listAuditQuestions(): Promise<boolean> {
        try {
            const request = await axios({
                url: `https://${this.credentials.organizationId}.kai-studio.ai/${this.credentials.instanceId}/api/audit/list-audit-questions`,
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

    public async getTestRunningState(): Promise<boolean> {
        try {
            const request = await axios({
                url: `https://${this.credentials.organizationId}.kai-studio.ai/${this.credentials.instanceId}/api/audit/test-running-state`,
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

    public async runTest(): Promise<boolean> {
        try {
            const request = await axios({
                url: `https://${this.credentials.organizationId}.kai-studio.ai/${this.credentials.instanceId}/api/audit/run-test`,
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

    public async listTopics(): Promise<boolean> {
        try {
            const request = await axios({
                url: `https://${this.credentials.organizationId}.kai-studio.ai/${this.credentials.instanceId}/api/audit/list/topics`,
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

    public async getSubtopic(subtopic: string): Promise<boolean> {
        try {
            const request = await axios({
                url: `https://${this.credentials.organizationId}.kai-studio.ai/${this.credentials.instanceId}/api/audit/subtopic`,
                method: 'POST',
                headers: {
                    'api-key': this.credentials.apiKey
                },
                data: {
                    "subtopic": subtopic
                }
            })
            return request.data.response
        } catch(e) {
            throw e
        }
    }

    public async countTopics(): Promise<boolean> {
        try {
            const request = await axios({
                url: `https://${this.credentials.organizationId}.kai-studio.ai/${this.credentials.instanceId}/api/audit/stats/count-topics`,
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

    public async countSubtopics(): Promise<boolean> {
        try {
            const request = await axios({
                url: `https://${this.credentials.organizationId}.kai-studio.ai/${this.credentials.instanceId}/api/audit/stats/count-subtopics`,
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

    public async countDocuments(): Promise<boolean> {
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

    public async countAuditQuestions(): Promise<boolean> {
        try {
            const request = await axios({
                url: `https://${this.credentials.organizationId}.kai-studio.ai/${this.credentials.instanceId}/api/audit/stats/count-audit-questions`,
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

    public async countValidatedAuditQuestions(): Promise<boolean> {
        try {
            const request = await axios({
                url: `https://${this.credentials.organizationId}.kai-studio.ai/${this.credentials.instanceId}/api/audit/stats/count-validated-audit-questions`,
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

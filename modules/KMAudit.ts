import type {KaiStudioCredentials} from "../index";
import axios from "axios";

export class KMAudit {

    private credentials: KaiStudioCredentials;

    constructor(credentials: KaiStudioCredentials) {
        this.credentials = credentials
    }

    public async getConflictInformation(limit: number, offset: number): Promise<any> {
        try {
            const request = await axios({
                url: `https://${this.credentials.organizationId}.kai-studio.ai/${this.credentials.instanceId}/api/audit/conflict-informations`,
                method: 'POST',
                headers: {
                    'api-key': this.credentials.apiKey
                },
                data: {
                    offset: offset,
                    limit: limit
                }
            })
            return request.data.response
        } catch(e) {
            throw e
        }
    }

    public async getDuplicatedInformation(limit: number, offset: number): Promise<any> {
        try {
            const request = await axios({
                url: `https://${this.credentials.organizationId}.kai-studio.ai/${this.credentials.instanceId}/api/audit/duplicated-informations`,
                method: 'POST',
                headers: {
                    'api-key': this.credentials.apiKey
                },
                data: {
                    offset: offset,
                    limit: limit
                }
            })
            return request.data.response
        } catch(e) {
            throw e
        }
    }

    public async setConflictManaged(id: number): Promise<any> {
        try {
            const request = await axios({
                url: `https://${this.credentials.organizationId}.kai-studio.ai/${this.credentials.instanceId}/api/audit/conflict-information/set-managed`,
                method: 'POST',
                headers: {
                    'api-key': this.credentials.apiKey
                },
                data: {
                    id: id
                }
            })
            return request.data.response
        } catch(e) {
            throw e
        }
    }

    public async setDuplicatedInformationManaged(id: number): Promise<any> {
        try {
            const request = await axios({
                url: `https://${this.credentials.organizationId}.kai-studio.ai/${this.credentials.instanceId}/api/audit/duplicated-information/set-managed`,
                method: 'POST',
                headers: {
                    'api-key': this.credentials.apiKey
                },
                data: {
                    id: id
                }
            })
            return request.data.response
        } catch(e) {
            throw e
        }
    }
}

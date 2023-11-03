import axios from "axios";
import { type KaiStudioCredentials } from "..";




export class ManageInstance {

    private credentials: KaiStudioCredentials

    constructor(credentials: KaiStudioCredentials) {
        this.credentials = credentials
    }

    public async getGlobalHealth(): Promise<any> {
        try {
            const request = await axios({
                url: `https://${this.credentials.organizationId}.kai-studio.ai/${this.credentials.instanceId}/global/health`,
                method: 'GET',
                headers: {
                    'api-key': this.credentials.apiKey
                }
            })
            return request.data
        } catch(e) {
            throw e
        }
    }

    public async isApiAlive(): Promise<any> {
        try {
            const request = await axios({
                url: `https://${this.credentials.organizationId}.kai-studio.ai/${this.credentials.instanceId}/health`,
                method: 'GET',
                headers: {
                    'api-key': this.credentials.apiKey
                }
            })
            return request.data
        } catch(e) {
            throw e
        }
    }
    
    public async generateNewApiKey(): Promise<boolean> {
        try {
            const request = await axios({
                url: 'https://ima.kai-studio.ai/generate-new-apikey',
                method: 'POST',
                headers: {
                    'organization-id': this.credentials.organizationId,
                    'instance-id': this.credentials.instanceId,
                    'api-key': this.credentials.apiKey
                }
            })
            return request.data.response
        } catch(e) {
            throw e
        }
    }

    public async updateName(name: string): Promise<boolean> {
        try {
            const request = await axios({
                url: 'https://ima.kai-studio.ai/update-name',
                method: 'POST',
                headers: {
                    'organization-id': this.credentials.organizationId,
                    'instance-id': this.credentials.instanceId,
                    'api-key': this.credentials.apiKey
                },
                data: {
                    name
                }
            })
            return request.data.response
        } catch(e) {
            throw e
        }
    }

    public async deploy(): Promise<boolean> {
        try {
            const request = await axios({
                url: 'https://ima.kai-studio.ai/deploy',
                method: 'POST',
                headers: {
                    'organization-id': this.credentials.organizationId,
                    'instance-id': this.credentials.instanceId,
                    'api-key': this.credentials.apiKey
                }
            })
            return request.data.response
        } catch(e) {
            throw e
        }
    }

    public async delete(): Promise<boolean> {
        try {
            const request = await axios({
                url: 'https://ima.kai-studio.ai/delete',
                method: 'POST',
                headers: {
                    'organization-id': this.credentials.organizationId,
                    'instance-id': this.credentials.instanceId,
                    'api-key': this.credentials.apiKey
                }
            })
            return request.data.response
        } catch(e) {
            throw e
        }
    }

}
import axios from "axios";
import {type KaiStudioCredentials} from "..";


export class PromptFunction {

    private credentials: KaiStudioCredentials;
    protected baseUrl: string

    constructor(credentials: KaiStudioCredentials) {
        this.credentials = credentials
        this.baseUrl = "http://localhost:3000"
    }

    public async createPromptingFunction(method_id: string, description: string, is_json_output: false): Promise<boolean> {
        try {
            const request = await axios({
                url: `${this.baseUrl}/create-prompting-function`,
                method: 'POST',
                headers: {
                    'organization-id': this.credentials.organizationId,
                    'api-key': this.credentials.apiKey
                },
                data: {
                    method_id: method_id,
                    description: description,
                    is_json_output: is_json_output
                }
            })
            return request.data.response
        } catch (e) {
            throw e
        }
    }

    public async addPromptArguments(args: any, promptFunctionId: string): Promise<boolean> {
        try {
            const request = await axios({
                url: `${this.baseUrl}/add-prompt-arguments`,
                method: 'POST',
                headers: {
                    'organization-id': this.credentials.organizationId,
                    'api-key': this.credentials.apiKey
                },
                data: {
                    args: args,
                    promptFunctionId: promptFunctionId
                }
            })
            return request.data.response
        } catch (e) {
            throw e
        }
    }

    public async addDataset(input: any, output: string, promptFunctionId: string): Promise<boolean> {
        try {
            const request = await axios({
                url: `${this.baseUrl}/dataset/create`,
                method: 'POST',
                headers: {
                    'organization-id': this.credentials.organizationId,
                    'api-key': this.credentials.apiKey
                },
                data: {
                    input: input,
                    output: output,
                    promptFunctionId: promptFunctionId
                }
            })
            return request.data.response
        } catch (e) {
            throw e
        }
    }

    public async runPromptOptimization(promptFunctionId: string): Promise<boolean> {
        try {
            const request = await axios({
                url: `${this.baseUrl}}/run-prompt-optimization`,
                method: 'POST',
                headers: {
                    'organization-id': this.credentials.organizationId,
                    'api-key': this.credentials.apiKey
                },
                data: {
                    promptFunctionId: promptFunctionId
                }
            })
            return request.data.response
        } catch (e) {
            throw e
        }
    }

    public async getPromptFunction(promptFunctionId: string): Promise<boolean> {
        try {
            const request = await axios({
                url: `${this.baseUrl}/prompt-function/` + promptFunctionId,
                method: 'GET',
                headers: {
                    'organization-id': this.credentials.organizationId,
                    'api-key': this.credentials.apiKey
                }
            })
            return request.data.response
        } catch (e) {
            throw e
        }
    }

    public async deletePromptFunction(promptFunctionId: string): Promise<boolean> {
        try {
            const request = await axios({
                url: `${this.baseUrl}/prompt-function/` + promptFunctionId,
                method: 'DELETE',
                headers: {
                    'organization-id': this.credentials.organizationId,
                    'api-key': this.credentials.apiKey
                }
            })
            return request.data.response
        } catch (e) {
            throw e
        }
    }


    public async getPromptFunctions(limit: number, offset: number): Promise<boolean> {
        try {
            let queryLimit = limit ?? 10
            let queryOffset = offset ?? 0
            const request = await axios({
                url: `${this.baseUrl}/prompt-functions?limit=${queryLimit}&offset=${queryOffset}`,
                method: 'GET',
                headers: {
                    'organization-id': this.credentials.organizationId,
                    'api-key': this.credentials.apiKey
                }
            })
            return request.data.response
        } catch (e) {
            throw e
        }
    }

    public async deleteDataset(id: string): Promise<boolean> {
        try {
            const request = await axios({
                url: `${this.baseUrl}/dataset/delete`,
                method: 'GET',
                headers: {
                    'organization-id': this.credentials.organizationId,
                    'api-key': this.credentials.apiKey
                },
                data: {
                    id: id
                }
            })
            return request.data.response
        } catch (e) {
            throw e
        }
    }

    public async updateDataset(id: string, input: any, output: any): Promise<boolean> {
        try {
            const request = await axios({
                url: `${this.baseUrl}/dataset/update`,
                method: 'POST',
                headers: {
                    'organization-id': this.credentials.organizationId,
                    'api-key': this.credentials.apiKey
                },
                data: {
                    id: id,
                    input: input,
                    output: output
                }
            })
            return request.data.response
        } catch (e) {
            throw e
        }
    }

    public async getDataset(id: string): Promise<boolean> {
        try {
            const request = await axios({
                url: `${this.baseUrl}/dataset/` + id,
                method: 'GET',
                headers: {
                    'organization-id': this.credentials.organizationId,
                    'api-key': this.credentials.apiKey
                }
            })
            return request.data.response
        } catch (e) {
            throw e
        }
    }

    public async getDatasetsList(limit: number, offset: number): Promise<boolean> {
        try {
            let queryLimit = limit ?? 10
            let queryOffset = offset ?? 0
            const request = await axios({
                url: `${this.baseUrl}/datasets?limit=${queryLimit}&offset=${queryOffset}`,
                method: 'GET',
                headers: {
                    'organization-id': this.credentials.organizationId,
                    'api-key': this.credentials.apiKey
                }
            })
            return request.data.response
        } catch (e) {
            throw e
        }
    }

    public async generateNewApiKey(limit: number, offset: number): Promise<boolean> {
        try {
            const request = await axios({
                url: `${this.baseUrl}/generate-new-api-key`,
                method: 'GET',
                headers: {
                    'organization-id': this.credentials.organizationId,
                    'api-key': this.credentials.apiKey
                }
            })
            return request.data.response
        } catch (e) {
            throw e
        }
    }
}

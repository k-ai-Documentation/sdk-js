import axios from "axios";
import { type KaiStudioCredentials } from "..";

export interface KaiStudioFileSignature {
    name: string,
    metadata: string
}

export interface KaiStudioFileUploadResponse {
    result: boolean,
    reason: string
}

export class FileInstance {

    private credentials: KaiStudioCredentials;

    constructor(credentials: KaiStudioCredentials) {
        this.credentials = credentials
    }

    public async listFiles(): Promise<KaiStudioFileSignature[]> {
        try {
            const request = await axios({
                url: 'https://fma.kai-studio.ai/list-files',
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

    public async uploadFiles(files: File[]): Promise<KaiStudioFileUploadResponse[]> {
        if(files.length == 0) {
            return []
        }
        try {
            const formData = new FormData()
            for(let i = 0; i < files.length; i++) {
                formData.append(`files`, files[i])
            } 
            const request = await axios.post('https://fma.kai-studio.ai/upload-file', formData, {
                headers: {
                    'organization-id': this.credentials.organizationId,
                    'instance-id': this.credentials.instanceId,
                    'api-key': this.credentials.apiKey,
                    "Content-Type": "multipart/form-data",
                }
            })
            return request.data.response
        } catch(e) {
            throw e
        }
    }

    public async removeFile(fileName: string): Promise<boolean> {
        try {
            const request = await axios({
                url: 'https://fma.kai-studio.ai/delete-file',
                method: 'POST',
                headers: {
                    'organization-id': this.credentials.organizationId,
                    'instance-id': this.credentials.instanceId,
                    'api-key': this.credentials.apiKey
                },
                data: {
                    file: fileName
                }
            })
            return request.data.response
        } catch(e) {
            throw e
        }
    }

}
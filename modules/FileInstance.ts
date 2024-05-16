import axios from "axios";

export interface KaiStudioFileSignature {
    name: string,
    metadata: string,
    lastModified: string,
    size: number
}

export interface KaiStudioFileUploadResponse {
    result: boolean,
    reason: string
}

export class FileInstance {

    private readonly headers: object;

    constructor(headers: object) {
        this.headers = headers
    }

    public async listFiles(): Promise<KaiStudioFileSignature[]> {
        try {
            const request = await axios({
                url: 'https://fma.kai-studio.ai/list-files',
                method: 'POST',
                headers: this.headers
            })
            return request.data.response
        } catch (e) {
            throw e
        }
    }

    public async downloadFile(fileName: string): Promise<KaiStudioFileSignature[]> {
        try {
            const request = await axios({
                url: 'https://fma.kai-studio.ai/download-file',
                method: 'POST',
                headers: this.headers,
                data: {
                    fileName: fileName
                }
            })
            return request.data.response
        } catch (e) {
            throw e
        }
    }

    public async uploadFiles(files: File[]): Promise<KaiStudioFileUploadResponse[]> {
        if (files.length == 0) {
            return []
        }
        try {
            const formData = new FormData()
            for (let i = 0; i < files.length; i++) {
                console.log(files[i])
                formData.append(`files`, files[i])
            }
            const request = await axios.post('https://fma.kai-studio.ai/upload-file', formData, {
                headers: {
                    ...this.headers,
                    "Content-Type": "multipart/form-data; charset=utf-8",
                }
            })
            return request.data.response
        } catch (e) {
            throw e
        }
    }

    public async removeFile(fileName: string): Promise<boolean> {
        try {
            const request = await axios({
                url: 'https://fma.kai-studio.ai/delete-file',
                method: 'POST',
                headers: this.headers,
                data: {
                    file: fileName
                }
            })
            return request.data.response
        } catch (e) {
            throw e
        }
    }

}

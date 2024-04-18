import axios from "axios";

export class KMAudit {

    private readonly headers: object;
    private readonly baseUrl: string;

    constructor(headers: object, baseUrl: string) {
        this.headers = headers
        this.baseUrl = baseUrl
    }

    public async getConflictInformation(limit: number, offset: number): Promise<any> {
        try {
            const request = await axios({
                url: `${this.baseUrl}api/audit/conflict-information`,
                method: 'POST',
                headers: this.headers,
                data: {
                    offset: offset,
                    limit: limit
                }
            })
            return request.data.response
        } catch (e) {
            throw e
        }
    }

    public async getDuplicatedInformation(limit: number, offset: number): Promise<any> {
        try {
            const request = await axios({
                url: `${this.baseUrl}api/audit/duplicated-information`,
                method: 'POST',
                headers: this.headers,
                data: {
                    offset: offset,
                    limit: limit
                }
            })
            return request.data.response
        } catch (e) {
            throw e
        }
    }

    public async setConflictManaged(id: number): Promise<any> {
        try {
            const request = await axios({
                url: `${this.baseUrl}api/audit/conflict-information/set-managed`,
                method: 'POST',
                headers: this.headers,
                data: {
                    id: id
                }
            })
            return request.data.response
        } catch (e) {
            throw e
        }
    }

    public async setDuplicatedInformationManaged(id: number): Promise<any> {
        try {
            const request = await axios({
                url: `${this.baseUrl}api/audit/duplicated-information/set-managed`,
                method: 'POST',
                headers: this.headers,
                data: {
                    id: id
                }
            })
            return request.data.response
        } catch (e) {
            throw e
        }
    }

    public async getDocumentsToManageList(limit: number, offset: number): Promise<any> {
        try {
            const request = await axios({
                url: `${this.baseUrl}api/audit/documents-to-manage`,
                method: 'POST',
                headers: this.headers,
                data: {
                    offset: offset,
                    limit: limit
                }
            })
            return request.data.response
        } catch (e) {
            throw e
        }
    }

    public async getMissingSubjectList(limit: number, offset: number): Promise<any> {
        try {
            const request = await axios({
                url: `${this.baseUrl}api/audit/missing-subjects`,
                method: 'POST',
                headers: this.headers,
                data: {
                    offset: offset,
                    limit: limit
                }
            })
            return request.data.response
        } catch (e) {
            throw e
        }
    }
}

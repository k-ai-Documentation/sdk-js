import { FileInstance } from "./modules/FileInstance";
import { ManageInstance } from "./modules/ManageInstance";
import { Search } from "./modules/Search";

export interface KaiStudioCredentials { 
    organizationId: string, 
    instanceId: string, 
    apiKey: string 
}

export class KaiStudio {

    private credentials: KaiStudioCredentials;
    private _search: Search;
    private _fileInstance: FileInstance;
    private _manageInstance: ManageInstance;

    constructor(credentials: KaiStudioCredentials) {
        this.credentials = credentials
        this._search = new Search(this.credentials)
        this._fileInstance = new FileInstance(this.credentials)
        this._manageInstance = new ManageInstance(this.credentials)
    }

    public getCredentials(): KaiStudioCredentials {
        return this.credentials
    }

    public search(): Search {
        return this._search
    }

    public fileInstance(): FileInstance {
        return this._fileInstance
    }

    public manageInstance(): ManageInstance {
        return this._manageInstance
    }

}


import {FileInstance} from "./modules/FileInstance";
import {ManageInstance} from "./modules/ManageInstance";
import {Search} from "./modules/Search";
import {AuditInstance} from "./modules/AuditInstance";
import {PromptFunction} from "./modules/PromptFunction";

export interface KaiStudioCredentials {
    organizationId: string,
    instanceId: string,
    apiKey: string
}

export class KaiStudio {

    private readonly credentials: KaiStudioCredentials;
    private readonly _search: Search;
    private readonly _fileInstance: FileInstance;
    private readonly _manageInstance: ManageInstance;
    private readonly _auditInstance: AuditInstance;
    private readonly _promptFunctionInstance: PromptFunction;

    constructor(credentials: KaiStudioCredentials) {
        this.credentials = credentials
        this._search = new Search(this.credentials)
        this._fileInstance = new FileInstance(this.credentials)
        this._manageInstance = new ManageInstance(this.credentials)
        this._auditInstance = new AuditInstance(this.credentials)
        this._promptFunctionInstance = new PromptFunction(this.credentials)
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

    public auditInstance(): AuditInstance {
        return this._auditInstance
    }

    public promptFunctionInstance(): PromptFunction {
        return this._promptFunctionInstance
    }

}


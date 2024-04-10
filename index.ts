import {FileInstance} from "./modules/FileInstance";
import {ManageInstance} from "./modules/ManageInstance";
import {Search} from "./modules/Search";
import {Thematic} from "./modules/Thematic";
import {KMAudit} from "./modules/KMAudit";

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
    private readonly _thematic: Thematic;
    private readonly _auditInstance: KMAudit;

    constructor(credentials: KaiStudioCredentials) {
        this.credentials = credentials
        this._search = new Search(this.credentials)
        this._fileInstance = new FileInstance(this.credentials)
        this._manageInstance = new ManageInstance(this.credentials)
        this._auditInstance = new KMAudit(this.credentials)
        this._thematic = new Thematic(this.credentials)
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

    public thematic(): Thematic {
        return this._thematic
    }

    public auditInstance(): KMAudit {
        return this._auditInstance
    }
}


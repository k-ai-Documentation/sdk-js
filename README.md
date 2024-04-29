# sdk-js

## Introduction
SDK js/ts enables developers to efficiently manage files, instance, perform searches, handle thematic content, and conduct audits. This toolkit is designed to streamline the integration of complex functionalities into js/ts-based projects.

## Installation
To integrate the SDK into your project, include the SDK files in your project directory. Then, use the following require statements in your project root directory:

```bash
npm install file:path/to/sdk-js --save
```

## Quick start
Here's a simple example to get you started with the SDK. This example demonstrates how to instantiate a new search and perform basic operations:
```js
import { KaiStudio } from "sdk-js"

// for saas user
const kaiSearch = new KaiStudio({ organizationId: process.env.VUE_APP_ORGANIZATION_ID, instanceId: process.env.VUE_APP_INSTANCE_ID, apiKey: process.env.VUE_APP_API_KEY })
// for premise user
const kaiSearch = new KaiStudio({ host: process.env.VUE_APP_HOST , apiKey: process.env.VUE_APP_HOST })

// send your search request
const request = await kaiSearch.search().query("YOUR QUESTION HERE", "");
console.log(request)
```

## Usage Guide
There are two type of versions: SaaS version and Premise version.

SaaS version means you are using the service provided by Kai with cloud service. In this case, you will need 3 keys (organizationId, instanceId, apiKey) to initialize kaiStudio. Please refer to the following code in [index.ts](index.ts):
```js
if (this.credentials.organizationId && this.credentials.instanceId && this.credentials.apiKey) {
    headers = {
        'organization-id': this.credentials.organizationId,
        'instance-id': this.credentials.instanceId,
        'api-key': this.credentials.apiKey
    }

    baseUrl = `https://${this.credentials.organizationId}.kai-studio.ai/${this.credentials.instanceId}/`
}
```

Premise version means you are using the service in your local server in your enterprise. In this case, you will need host and api key (optional) to initialize kaiStudio. Please refer to the following code in [index.ts](index.ts):
```js
if (this.credentials.host) {
    baseUrl = this.credentials.host
    if (this.credentials.apiKey) {
        headers = {
            'api-key': this.credentials.apiKey
        }
    }
}
```
---

There are 6 modules in the SDK:

| [File Management](#file-management) | [Audit](#audit) | [ManageInstance](#manageinstance) | [Thematic](#thematic) | [SemanticGraph](#semanticgraph) | [Search](#search) |



### File Management
[FileInstance.ts](modules/FileInstance.ts) provides methods for file management.
- listFiles
- downloadFile
- uploadFiles
- removeFile

For example:
```js
let fileInstance = kaiStudio.fileInstance()
fileInstance.listFiles().then(response => {
    console.log("LIST FILES:")
    console.log(response)
})
```

### Audit
[KMAudit.ts](modules/KMAudit.ts) provides methods for auditing files.
- getConflictInformation
- getDuplicatedInformation
- setConflictManaged
- setDuplicatedInformationManaged

For example:
```js
let auditInstance = kaiStudio.auditInstance()
auditInstance.getConflictInformation(10,0).then(response => {
    console.log("CONFLICT INFORMATION:")
    console.log(response)
})
```
### ManageInstance
[ManageInstance.ts](modules/ManageInstance.ts) provides methods for managing instance.
- getGlobalHealth
- isApiAlive
- generateNewApiKey
- updateName
- deploy
- delete
- addKb
- setPlayground
- updateKb
- removeKb

For example:
```js
let manageInstance = kaiStudio.manageInstance()
manageInstance.getGlobalHealth().then(response => {
    console.log("GET GLOBAL HEALTH:")
    console.log(response)
})
```

### Thematic
[Thematic.ts](modules/Thematic.ts) provides methods for managing thematic content.
- getTopic
- getKbs
- getDocuments
- addAuditQuestion
- updateAuditQuestion
- listAuditQuestions
- getTestRunningState
- runTest
- listTopics
- getSubtopic
- countTopics
- countSubtopics
- countDocuments
- countAuditQuestions
- countValidatedAuditQuestions

For example:
```js
let thematic = kaiStudio.thematic()
thematic.getKbs().then(response => {
    console.log("GET knowledge bases:")
    console.log(response)
})
```

### SemanticGraph
[SemanticGraph.ts](modules/SemanticGraph.ts) provides methods for managing semantic graph.
- getNodes
- getLinkedNodes
- getNodeByLabel
- detectApproximalNodes

For example:
```js
let semantic = kaiStudio.semanticGraph()
semantic.getNodes(10,0).then(response => {
    console.log("GET NODES:")
    console.log(response)
})
```

### Search
[Search.ts](modules/Search.ts) provides methods for searching.
- search
- getRelatedDocuments
- countAnalyzedDocuments
- getDocSignature
- getDocsIds
- countDoneRequests
- countAnsweredDoneRequests
- generateFollowingQuestion
- listQuestionsAsked
```js
let search = kaiStudio.search()
search.query("what is the history of France TV?", "userid").then(response => {
    console.log("SEARCH QUERY:")
    console.log(response)
})
```


<u>**For more examples, you can check the [example.ts](example.ts) file.**</u>

## Contributing
bxu@k-ai.ai

rmei@k-ai.ai

sngo@k-ai.ai


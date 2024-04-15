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
```
import { KaiStudio } from "sdk-js"
const kaiSearch = new KaiStudio({ organizationId: process.env.VUE_APP_ORGANIZATION_ID, instanceId: process.env.VUE_APP_INSTANCE_ID, apiKey: process.env.VUE_APP_API_KEY })
const request = await kaiSearch.search().query("YOUR QUESTION HERE", "");
console.log(request)
```

## Usage Guide
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

### Auditing
[KMAudit.ts](modules/KMAudit.ts) provides methods for auditing.
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


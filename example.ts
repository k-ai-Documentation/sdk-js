import {KaiStudio, KaiStudioCredentials} from "./index";

let fs = require('fs');

export class Credentials implements KaiStudioCredentials {
    public organizationId: string;
    public instanceId: string;
    public apiKey: string;

    constructor(organizationId: string, instanceId: string, apiKey: string) {
        this.organizationId = organizationId
        this.instanceId = instanceId
        this.apiKey = apiKey
    }
}


let credentials = new Credentials("163084b1-5e4c-49c5-b7ec-e41ccca65642",
    "b6b33cc0-8fe4-4829-bf27-2df41d3f74a9",
    "yBHhI6yW9vYG+4bi4VwanQVvyk6UYuDtWcZSn1oHT9Q=")

let kaiStudio = new KaiStudio(credentials)
let fileInstance = kaiStudio.fileInstance()
let manageInstance = kaiStudio.manageInstance()
let search = kaiStudio.search()
let auditInstance = kaiStudio.auditInstance()
fileInstance.listFiles().then(response => {
    console.log("LIST FILES:")
    console.log(response)
})

manageInstance.getGlobalHealth().then(response => {
    console.log("GET GLOBAL HEALTH:")
    console.log(response)
})

manageInstance.isApiAlive().then(response => {
    console.log("IS API ALIVE:")
    console.log(response)
})

search.query("what is the history of France TV?", "userid").then(response => {
    console.log("SEARCH QUERY:")
    console.log(response)
})

search.getRelatedDocuments("TV?").then(response => {
    console.log("GET RELATED DOCUMENTS:")
    console.log(response)
})

search.getDocSignature("Azure Blob Storage::b6b33cc0-8fe4-4829-bf27-2df41d3f74a9::Contacter FranceTV.docx").then(response => {
    console.log("GET DOC SIGNATURE:")
    console.log(response)
})

search.getDocsIds(["Azure Blob Storage::b6b33cc0-8fe4-4829-bf27-2df41d3f74a9::Contacter FranceTV.docx",
    "Azure Blob Storage::b6b33cc0-8fe4-4829-bf27-2df41d3f74a9::Histoire FTV.docx"]).then(response => {
    console.log("GET DOCS BY IDS:")
    console.log(response)
})

search.countDoneRequests().then(response => {
    console.log("COUNT DONE REQUESTS:")
    console.log(response)
})

search.countAnsweredDoneRequests().then(response => {
    console.log("COUNT ANSWERED + DONE REQUESTS:")
    console.log(response)
})

auditInstance.getTopic("france.tv application").then(response => {
    console.log("GET TOPIC:")
    console.log(response)
})

auditInstance.getKbs().then(response => {
    console.log("GET KBS:")
    console.log(response)
})

auditInstance.getDocuments().then(response => {
    console.log("GET DOCUMENTS:")
    console.log(response)
})

auditInstance.listAuditQuestions().then(response => {
    console.log("LIST AUDIT QUESTIONS:")
    console.log(response)
})

auditInstance.getTestRunningState().then(response => {
    console.log("GET TEST RUNNING STATE:")
    console.log(response)
})

auditInstance.listTopics().then(response => {
    console.log("LIST TOPICS:")
    console.log(response)
})

auditInstance.getSubtopic("visio-chat").then(response => {
    console.log("GET SUBTOPIC:")
    console.log(response)
})

auditInstance.countTopics().then(response => {
    console.log("COUNT TOPICS:")
    console.log(response)
})

auditInstance.countSubtopics().then(response => {
    console.log("COUNT SUBTOPICS:")
    console.log(response)
})

auditInstance.countDocuments().then(response => {
    console.log("COUNT DOCUMENTS:")
    console.log(response)
})

auditInstance.countAuditQuestions().then(response => {
    console.log("COUNT AUDIT QUESTIONS:")
    console.log(response)
})

auditInstance.countValidatedAuditQuestions().then(response => {
    console.log("COUNT VALIDATED AUDIT QUESTIONS:")
    console.log(response)
})

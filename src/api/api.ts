import {EventData, NewEventType, SurveyResponseData} from "@/types/types.ts";

async function createNewEvent(body:NewEventType){
    await fetch("http://localhost:4000/events/", {
        headers: {
            "Content-type":"application/json"
        },
        method: "POST",
        body: JSON.stringify(body)
    });
}
async function getAllEvents(): Promise<{data: EventData[]}>{
    const response = await fetch("http://localhost:4000/events/", {
        headers: {
            "Content-type":"application/json"
        },
        method: "GET",
    });
    return await response.json();
}
async function getEventById(eventId:string): Promise<{event: EventData}>{
    const response = await fetch(`http://localhost:4000/events/${eventId}`, {
        headers: {
            "Content-type":"application/json"
        },
        method:"GET"
    });
    return await response.json();
}
async function getForm(surveyId:string): Promise<EventData>{
    const response = await fetch("http://localhost:4000/survey/"+surveyId,{
        headers: {
            "Content-type":"application/json"
        },
        method: "GET"
    });
    if(response.status === 404) return Promise.reject("cant find the form");
    return await response.json();
}
async function submitResponse(body: SurveyResponseData, surveyId:string){
    const response = await fetch(`http://localhost:4000/survey/${surveyId}`,{
        headers: {
            "Content-type":"application/json"
        },
        method: "POST",
        body: JSON.stringify(body)
    });
    return await response.json();
}
export {createNewEvent, getEventById, getAllEvents, getForm, submitResponse}
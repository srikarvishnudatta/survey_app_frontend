import { Route, Routes } from "react-router";
import Dashboard from "./pages/Dashboard";
import Layout from "@/components/Layout.tsx";
import AllEvents from "@/pages/AllEvents.tsx";
import Event from "@/pages/Event.tsx";
import NewEvent from "@/pages/NewEvent.tsx";
import NotFound from "@/pages/NotFound.tsx";
import SurveyForm from "./pages/SurveyForm";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout/>}>
          <Route path="/" element={<Dashboard />} />
          <Route path={"/events"} element={<AllEvents/>}/>
          <Route path={"/events/:eventId"} element={<Event/>}/>
          <Route path={"/events/new"} element={<NewEvent/>}/>
      </Route>
      <Route path="/survey/:surveyId" element={<SurveyForm />}/>
      <Route path={"*"} element={<NotFound/>}/>
    </Routes>
  );
}

import { getForm } from "@/api/api";
import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/Input"
import { useMutation, useQuery } from "@tanstack/react-query";
import { useState, FormEvent } from "react";
import { useParams } from "react-router";

function SurveyForm() {
    const [name, setName] = useState('');
    const [feedback, setFeedback] = useState('');
    const [rating, setRating] = useState(5);
    const params = useParams();
    const surveyId = params.surveyId;
    const {data, isFetching, isError, isSuccess} = useQuery({
        queryKey: ["surveyform", surveyId],
        queryFn: () => getForm(surveyId || "")
    });
    useMutation({
        
    });
    function submitHandler(ev: FormEvent<HTMLFormElement>){
        ev.preventDefault();
        console.log(name, feedback, rating);
    }
    if(isError) return <p>Sorry the form no longer exists.</p>
  return isFetching && isSuccess ? <p>Fetching form</p>:<main className="w-3xl mx-auto h-screen flex justify-center items-center">
  <section className="card card-border border-gray-600 bg-base-100 w-96 shadow-sm p-4 space-y-6">
  <h1 className="text-4xl">Welcome to Event. {data?.title}</h1>
  <p className="text-sm text-gray-200">Event address: {data?.location}</p>

  <form className="space-y-4" onSubmit={submitHandler}>
      <h2 className="text-2xl">Fill out the survey details</h2>
      <Input id="name" type="text" className="input" required placeholder="Your name please."
      value={name} onChange={(e) => setName(e.target.value)}
      />
      <h3 className="text-md">Give your rating below please</h3>
      <div className="rating">
          <input type="radio" name="rating-1" className="mask mask-star" aria-label="1 star" onClick={() => setRating(1)}/>
          <input type="radio" name="rating-1" className="mask mask-star" aria-label="2 star"  onClick={() => setRating(2)}/>
          <input type="radio" name="rating-1" className="mask mask-star" aria-label="3 star" onClick={() => setRating(3)}/>
          <input type="radio" name="rating-1" className="mask mask-star" aria-label="4 star" onClick={() => setRating(4)}/>
          <input type="radio" name="rating-1" className="mask mask-star" aria-label="5 star" 
          onClick={() => setRating(5)}
          defaultChecked={rating === 5}/>
      </div>
      <textarea className="textarea" placeholder="Start typing your feedback" value={feedback} onChange={(e) => setFeedback(e.target.value)}>
      </textarea>
      <Button type="submit" className="btn-primary text-white">
          Submit
      </Button>
  </form>
  </section>
</main>
}

export default SurveyForm
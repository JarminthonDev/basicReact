import {  useState } from "react";
    // import eventsJSON from "../data/events.json"

const useEventsData = () => {


    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState()


       const fetchEvents = async (params) =>{
        try {
            const response = await fetch(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=JKKSubod9qAA1BGJXZVGJqU0wZtdRdpt&countryCode=MX${params?.length ? params : ''}`);

            
            const data = await response.json();            
            
            setData(data)
            setLoading(false)
        } catch (error) {
            setError(error)
        }
       }  
  
console.log(data);

    return {
        events: data?._embedded ?.events || [],
        isLoading,
        page: data?.page || {}, 
        error,
        fetchEvents,
    }
};

export default useEventsData;
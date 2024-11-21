import {  useState } from "react";
    // import eventsJSON from "../data/events.json"

    //Hook para hacer una llamada a la Api de manera local

const useEventsData = () => {


    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState()

    // console.log(import.meta.env.VITE_TICKTMASTER_API_KEY);
    
       const fetchEvents = async (params) =>{
        try {
            const response = await fetch(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=${import.meta.env.VITE_TICKTMASTER_API_KEY}&countryCode=US${params?.length ? params : ''}`);

            
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
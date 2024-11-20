import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./Detail.module.css"
import { format } from "date-fns";

const Detail = () => {
    const { eventId } = useParams();
    const [eventData, setEventsData] = useState({})
    const [error, setError] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const fetchEventData = async () => {
            try {
                const response = fetch(`https://app.ticketmaster.com/discovery/v2/events/${eventId}?apikey=JKKSubod9qAA1BGJXZVGJqU0wZtdRdpt`)
                const data = await (await response).json();

                // console.log(data);
                setEventsData(data);
                setIsLoading(false)
                console.log(eventData);
            } catch (error) {
                setEventsData({})
                setError(error);
                setIsLoading(false);
                
            }
        }

        fetchEventData();
    }, [])


    return (
        <div className={styles.container}>
            <div className={styles.mainInfoContainer}>
                <img src={eventData.images?.[0].url} alt={eventData.name} />
                <h4>{eventData.name}</h4>
                <p>{eventData.info}</p>
            </div>
        </div>

    )
}
export default Detail;
import { useNavigate } from "react-router-dom";
import EventItem from "./components/EventItem/index"; 


const Events = ({searchTerm, events}) => {    
    
    
    const navigate = useNavigate();
    const handleEventItemClick = (id) => {
        navigate(`/detail/${id}`);
    }


    const renderEvents = ()=>{
        let eventsFiltered = events;
        if (searchTerm.length > 0) {
            eventsFiltered = events.filter((item)=> item.name.toLocaleLowerCase().includes(searchTerm));
        }
        return eventsFiltered.map((eventItem)=>(
            <EventItem 
            key={`event-item-${eventItem.id}`}
            name={eventItem.name}
            info={eventItem.info}
            image={eventItem.images[1].url}
            onEventClick={handleEventItemClick}            
            id={eventItem.id}
            />
        ))
    };



    return (
        <div>
            Eventos
            <div>
                {renderEvents()}
            </div>
        </div>
        
    );
};

export default Events;

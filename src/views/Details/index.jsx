import { useParams } from "react-router-dom";


const Detail = () =>{

    const myStyle = {
        color: '#fff',
        backgroundColor: 'blue',
        padding: '10px',
        borderRadius: '5px'
    };
    const {eventId} = useParams();
    console.log(eventId);

    return(
    
    <div style={myStyle} >
        Details
    </div>
    )
}
export default Detail;
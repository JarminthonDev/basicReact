const EventItem = ({id,info,name,image, onEventClick})=>{
    
    
    const handleSeeMoreClick = (evt) => {
        evt.stopPropagation();
        onEventClick(id);
    }    
    return(
        

        <div>
            <img src={image} alt={name} />
            <h4>{name}</h4>
            <p>{info}</p>
            <button value={'Boton'}  onClick={handleSeeMoreClick}  >Boton</button>
        </div>
    )
};

export default EventItem;
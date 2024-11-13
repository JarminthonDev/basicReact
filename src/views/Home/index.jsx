import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/index";
import Events from "../../components/Events/index";
import useEventsData from "../../hooks/useEventsData";

// import Events from "../../components/Events/components/EventItem";

const Home = () => {
  const {events, isLoading, error, fetchEvents} = useEventsData();
  const [searchTerm, setSearchTerm] = useState("");
  useEffect( ()=>{
    fetchEvents();
  }, [])
  
  const handleNavBarSearch = (term) => {
    setSearchTerm(term);
    fetchEvents(`&keyword=${term}`);
  };


  return (
    <>
      <Navbar onSearch={handleNavBarSearch} />
      {isLoading ? <div>El contenido se esta cargando...</div> : <Events searchTerm={searchTerm} events={events} />}
      {!!error && <div>Ha ocurrido un errror</div> }
    </>
  );
};
export default Home;

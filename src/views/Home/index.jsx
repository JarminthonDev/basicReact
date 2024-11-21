import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/index";
import Events from "../../components/Events/index";
import useEventsResults from "../../state/events-results";
import ReactPaginate from "react-paginate";
import styles from './Home.module.css';
// import Events from "../../components/Events/components/EventItem";

const Home = () => {
  const {data, isLoading, error, fetchEvents} = useEventsResults()
  const events = data?._embedded ?.events || [];
  const page = data?.page || {};
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(()=>{
    fetchEvents();
  }, [])
  
  const handleNavBarSearch = (term) => {
    setSearchTerm(term);
    fetchEvents(`&keyword=${term}`);
  };

  const handlePageClick = ({selected}) => {
    console.log(selected);    
    fetchEvents(`&keyword=${searchTerm}&page=${selected}`);

  }

  const renderEvents = () =>{
    if(isLoading){
      return <div>El contenido se esta cargando...</div>
    }
    if(error){
      return <div>Ha ocurrido un errror</div>
    }
    return(
      <div>
      <Events searchTerm={searchTerm} events={events} />
      <ReactPaginate
      className={styles.pagination}
      nextClassName={styles.next}
      previousClassName={styles.previus}
      pageClassName={styles.page}
      activeClassName={styles.activePage}
      disabledClassName={styles.disabledPage}
      breakLabel="..."
      nextLabel=">"
      onPageChange={handlePageClick}
      pageRangeDisplayed={5}
      pageCount={page.totalPages}
      previousLabel="<"
      renderOnZeroPageCount={null}
      />
      </div>
    )
  }


  return (
    <>
      <Navbar onSearch={handleNavBarSearch} />
      {renderEvents()}
    </>
  );
};
export default Home;

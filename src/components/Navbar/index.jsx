import { useState, useEffect } from "react";

const Navbar = ({onSearch}) => {
    const [search,setSearch] = useState('');


    useEffect(()=>{
        console.log('Use Efect');
        
      }, [onSearch] );

    const handleInputChange = (event)=>{        
        setSearch(event.target.value);        
    }
    const handleInputKeyDown = (evt)=>{        
        if (evt.key === 'Enter') {
            onSearch(search);
        }       
    };
    return (    
        <div>
            <p>Mi bololetera</p>
            <input placeholder="Busca tu evento favorito" 
            onChange={handleInputChange} 
            onKeyDown={handleInputKeyDown}
            value={search}             
            />
        </div>    
    );
};
export default Navbar
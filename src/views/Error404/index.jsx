import styles from './style.module.css';
import { useRouteError } from 'react-router-dom';

const Error404 = () => {
    const error = useRouteError();
    console.log(error);
    
    return (

        <div className={styles.container} >
            <h3 className={styles.title} >{error.status } Ops!!</h3>
            <p className={styles.description} >{error.data}</p>            
        </div>
    )
};

export default Error404;
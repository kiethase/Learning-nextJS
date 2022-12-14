import styles from './alert.module.css';
import cn from 'classnames';


const AlertComp = ({children, type}) => {
    return(
        <div className={cn({
            [styles.success]: type === 'success',
            [styles.error]: type === 'error',
        })}>
            {children}
        </div>
    );
};

export default AlertComp;

import styles from '../styles/Home.module.css';


export default function Caltabhead(props) {
    const title_array = props.title_array
    return (
        <tr>
            {
                title_array.map(
                    (title) => (<th className={styles.center}>{title}</th>)
                )
            }
        </tr>
    );
}
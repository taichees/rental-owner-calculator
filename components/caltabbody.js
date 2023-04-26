
import styles from '../styles/Home.module.css';
import { useState } from "react";

export default function Caltabbody(props) {
    const setItems = props.setItems
    const [block, setBlock] = useState(
        {
            check: true,
            amount: 0
        }
    );
    const handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.type === 'number' ? Number(target.value) : target.value;
        const name = target.name;

        setBlock({
            [name]: value
        });
        if (target.type !== 'checkbox') {
            setItems(items => ({ ...items, [target.id]: value }))
        }
        target.value = value
    }
    const body = props.body
    return (
        <tr>
            <td className={styles.center}>
                <input
                    className={body.computable ? "" : styles.readOnly}
                    type="checkbox"
                    name='check'
                    checked={block.check}
                    onChange={handleInputChange}
                    readOnly={!body.computable}
                />
            </td>
            <td className={styles.center}>
                <label>{body.item}</label>
            </td>
            <td className={styles.center}>
                <input
                    type={body.input_type}
                    name='amount'
                    value={block.amount}
                    onChange={handleInputChange}
                    id={body.item_name}
                />{body.unit}
            </td>
        </tr>
    );
}
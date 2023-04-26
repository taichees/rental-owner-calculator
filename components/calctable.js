
import styles from '../styles/Home.module.css';
import Caltabhead from './caltabhead';
import Caltabbody from './caltabbody';


export default function Calctable(props) {
    const setItems = props.setItems
    const bodys = [{
        computable: false,
        item: "物件価格",
        input_type: "number",
        unit: "円",
        item_name: "real_estate_price"
    }, {
        computable: false,
        item: "手出し金額",
        input_type: "number",
        unit: "円",
        item_name: "handover_amount"
    }, {
        computable: false,
        item: "賃貸月額",
        input_type: "number",
        unit: "円",
        item_name: "rent_price"
    }, {
        computable: false,
        item: "管理費月額",
        input_type: "number",
        unit: "円",
        item_name: "management_fee"
    }, {
        computable: false,
        item: "修繕積立費月額",
        input_type: "number",
        unit: "円",
        item_name: "repair_reserve"
    }, {
        computable: false,
        item: "管理委託月額",
        input_type: "number",
        unit: "円",
        item_name: "management_consignment_fee"
    }, {
        computable: true,
        item: "ローン返済月額",
        input_type: "number",
        unit: "円",
        item_name: "loan_repayment"
    }, {
        computable: true,
        item: "（別途）\n修繕積立金月額",
        input_type: "number",
        unit: "円",
        item_name: "repair_reserve_fund"
    }, {
        computable: false,
        item: "固定資産税",
        input_type: "number",
        unit: "円",
        item_name: "property_tax"
    }, {
        computable: true,
        item: "不動産取得税",
        input_type: "number",
        unit: "円",
        item_name: "real_estate_acquisition_tax"
    }]
    return (
        <table>
            <tbody>
                <Caltabhead title_array={["計算可否", "項目", "金額"]}></Caltabhead>
                {
                    bodys.map((body) => (
                        <Caltabbody body={body} setItems={setItems}></Caltabbody>)
                    )
                }
            </tbody>
        </table>
    );
}
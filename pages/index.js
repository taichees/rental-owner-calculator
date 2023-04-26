import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Calctable from '../components/calctable';
import { useState } from "react";

export default function Home() {
  const [items, setItems] = useState(
    {
      real_estate_price: 0,
      handover_amount: 0,
      rent_price: 0,
      management_fee: 0,
      repair_reserve: 0,
      management_consignment_fee: 0,
      loan_repayment: 0,
      repair_reserve_fund: 0,
      property_tax: 0,
      real_estate_acquisition_tax: 0,
      result: [
        {
          income: 0,
          spend: 0,
          profit: 0,
          yields: 0,
        }
      ]
    }
  )
  const handlerButton = () => {
    setItems(items => ({
      ...items,
      result: [{
        income: getIncome(items),
        spend: getSpend(items),
        profit: getProfit(items),
        yields: getYields(items),
      }]
    }))
  }
  const getIncome = (items) => Math.round(items.rent_price * 12 * 0.8, 0)
  const getSpend = (items) => {
    let spend =
      (
        items.management_fee
        + items.repair_reserve
        + items.management_consignment_fee
        + items.loan_repayment
        + items.repair_reserve_fund
      ) * 12
      + items.property_tax
    if (true) {
      spend += items.real_estate_acquisition_tax
    }
    return Math.round(spend, 0)
  }
  const getYields = (items) => Math.round(((getIncome(items) - getSpend(items)) / items.real_estate_price * 100), 2)
  const getProfit = (items) => Math.round((getIncome(items) - getSpend(items)), 0)
  return (
    <div className={styles.container}>
      <Head>
        <title>不動産賃貸オーナー向け物件購入シミュレーター</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title}>
          不動産賃貸オーナー向け
        </h1>
        <h1 className={styles.title}>
          物件購入シミュレーター
        </h1>

        <p className={styles.description}>
          賃貸オーナーさまが　物件購入の際に　検討すべき　実質利回りを　ざっくり計算します。
        </p>

        <div className={styles.grid}>
          <form>
            <Calctable setItems={setItems}></Calctable>
          </form>
        </div>
        <div className={styles.grid}>
          <button onClick={handlerButton} >計算</button>
        </div>
        <div className={styles.grid}>
          <table>
            <tbody>
              <tr>
                <th></th>
                <th>収入</th>
                <th>支出</th>
                <th>利益</th>
                <th>利回り</th>
              </tr>
              <tr>
                <td>1年目</td>
                <td>{items.result[0].income}円</td>
                <td>{items.result[0].spend}円</td>
                <td>{items.result[0].profit}円</td>
                <td>{items.result[0].yields}％</td>
              </tr>
            </tbody>
          </table>


        </div>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel" className={styles.logo} />
        </a>
      </footer>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}

import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
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
          <table>
            <thead>
            </thead>
            <tr>
              <th>計算可否</th>
              <th>項目</th>
              <th>金額</th>
            </tr>
            <tr>
              <td></td>
              <td><label>物件価格</label></td>
              <td><input type="number" name='' />円</td>
            </tr>
            <tr>
              <td></td>
              <td>
                <label>手出し金額</label></td>
              <td><input type="number" name='' />円</td>
            </tr>
            <tr>
              <td></td>
              <td>
                <label>賃貸月額</label></td>
              <td><input type="number" name='' />円</td>
            </tr>
            <tr>
              <td></td>
              <td>
                <label>管理費月額</label></td>
              <td><input type="number" name='' />円</td>
            </tr>
            <tr>
              <td></td>
              <td>
                <label>修繕積立費月額</label></td>
              <td><input type="number" name='' />円</td>
            </tr>
            <tr>
              <td><input type="checkbox" name='' /></td>
              <td><label>管理委託月額</label></td>
              <td><input type="number" name='' />円</td>
            </tr>
            <tr>
              <td></td>
              <td>
                <label>（別途）修繕積立金月額</label></td>
              <td><input type="number" name='' />円</td>
            </tr>
            <tr>
              <td></td>
              <td>
                <label>固定資産税</label></td>
              <td><input type="number" name='' />円</td>
            </tr>
            <tr>
              <td><input type="checkbox" name='' /></td>
              <td><label>不動産取得税</label></td>
              <td><input type="number" name='' />円</td>
            </tr>
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

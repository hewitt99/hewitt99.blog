import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Hewitt's blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title}>Hewitt's blog</h1>

        <p className={styles.description}>
          This is a place where Hewitt embarks on a journey of learning and
          recording.
        </p>

        <div className={styles.grid}>
          <Link href={"/posts/first-post"} className={styles.card}>
            <h3>First Page &rarr;</h3>
            <p>A playGround for Hewitt to meet somethine fun.</p>
          </Link>

          <Link href={"/posts/markdown"} className={styles.card}>
            <h3>MarkDown &rarr;</h3>
            <p>A playGround for Hewitt to meet somethine fun.</p>
          </Link>

          <Link href={"/posts/regexp"} className={styles.card}>
            <h3>Regexp &rarr;</h3>
            <p>A playGround for Hewitt to meet somethine fun.</p>
          </Link>

          <Link href={"/posts/javaScript"} className={styles.card}>
            <h3>JavaScript &rarr;</h3>
            <p>A playGround for Hewitt to meet somethine fun.</p>
          </Link>

          {/* 拖拽库 */}
          <Link href={"/posts/reactBeautifulDnD"} className={styles.card}>
            <h3>React-Beautiful-DnD &rarr;</h3>
            <p>A playGround for Hewitt to meet somethine fun.</p>
          </Link>

          <Link href={"/posts/javaScript"} className={styles.card}>
            <h3>JavaScript &rarr;</h3>
            <p>A playGround for Hewitt to meet somethine fun.</p>
          </Link>
        </div>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Written by Hewitt
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
  );
}

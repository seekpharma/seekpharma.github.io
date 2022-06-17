import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Index.module.css";

const Index: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Seekpharma</title>
        <meta name="description" content="Seekpharma" />
      </Head>

      <main className="container">
        <h1 className="text-3xl">Coming soon...</h1>
      </main>
    </div>
  );
};

export default Index;

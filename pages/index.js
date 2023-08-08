import Head from 'next/head';
import Layout, { siteTitle } from './components/layout';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

import { getSortedPostsData } from '../lib/posts';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello there, I'm your friendly neighborhood learner and builder. Now, I won't lie, I've got a bit of a lazy streak, Welcome to my world! 🚀</p>
        <p>Find me on <Link href={"https://www.linkedin.com/in/irfan-khan-3343b0216/"}>Linkedin, </Link><Link href={"https://twitter.com/Jarvismsi"}>Twitter</Link> or <Link href={"https://github.com/jarvismsk"}>Github</Link></p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
              {"Augest 8, 2022"}
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

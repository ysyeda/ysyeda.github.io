import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hi! I’m Moaaz, a software engineer & designer who enjoys building
          products that solve meaningful problems for people. I live in Toronto,
          🇨🇦
        </p>
        <p>
          I currently work as a software engineer at Dialogue, where I mostly
          focus on distributed systems to scale virtual healthcare.
        </p>
        <p>
          I'm also building Tutr, creating tools for students & teachers making
          the shift to online live classes.
        </p>
        <p>
          I studied computer science at the University of Waterloo with a focus
          towards machine intelligence & human computer interaction, and a
          specialization in digital design.{' '}
        </p>
        <p>
          My past work includes engineering at Coursera, Hack the North,
          FreshBooks and Hootsuite, and design at Mappedin.{' '}
        </p>
        <p>
          I spend some of my time learning something new. These days I’m
          learning more about deep learning. I also enjoy cooking, photography,
          and occasionally explore hand-lettering & illustrations.
        </p>
        <p> Feel free to reach out to say hi! 👋</p>
      </section>
      {/* <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section> */}
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

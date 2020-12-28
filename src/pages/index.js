import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import pagesStyles from '../styles/pages.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className={pagesStyles.logo}>
        <a href="/">
          <img src="/images/logo.svg" alt="Moaaz Sidat Logo"></img>
        </a>
      </div>
      <div className={`${pagesStyles.photo} ${pagesStyles.animated}`}>
        <img src="/images/me.jpg" alt="Moaaz Sidat Photo"></img>
      </div>
      <section className={`${utilStyles.paragraph} ${pagesStyles.animated}`}>
        <p>
          Hi! I’m Moaaz, a software engineer & designer who enjoys building
          products that solve meaningful problems for people. I live in Toronto,
          🇨🇦
        </p>

        <p>
          I currently work as a software engineer at{' '}
          <a
            className={pagesStyles.link}
            href="https://dialogue.co"
            target="_blank"
            rel="noopener"
          >
            Dialogue
          </a>
          , where I mostly focus on distributed systems to scale virtual
          healthcare.
        </p>

        <p>
          I'm also building{' '}
          <a
            className={pagesStyles.link}
            href="https://gettutr.com"
            target="_blank"
            rel="noopener"
          >
            Tutr
          </a>
          , creating tools for students & teachers making the shift to online
          live classes.
        </p>

        <p>
          I studied computer science at the{' '}
          <a
            className={pagesStyles.link}
            href="https://uwaterloo.com"
            target="_blank"
            rel="noopener"
          >
            University of Waterloo
          </a>{' '}
          with a focus towards machine intelligence & human computer
          interaction, and a specialization in digital design.
        </p>

        <p>
          My past work includes engineering at{' '}
          <a
            className={pagesStyles.link}
            href="https://coursera.org"
            target="_blank"
            rel="noopener"
          >
            Coursera
          </a>
          ,{' '}
          <a
            className={pagesStyles.link}
            href="https://hackthenorth.com"
            target="_blank"
            rel="noopener"
          >
            Hack the North
          </a>
          ,{' '}
          <a
            className={pagesStyles.link}
            href="https://freshbooks.com"
            target="_blank"
            rel="noopener"
          >
            FreshBooks
          </a>{' '}
          and{' '}
          <a
            href="https://hootsuite.com"
            target="_blank"
            rel="noopener"
            className={pagesStyles.link}
          >
            Hootsuite
          </a>
          , and design at{' '}
          <a
            href="https://mappedin.com"
            target="_blank"
            rel="noopener"
            className={pagesStyles.link}
          >
            Mappedin
          </a>
          .
        </p>

        <p>
          I spend some of my time learning something new. These days I’m
          learning more about{' '}
          <a
            className={pagesStyles.link}
            href="http://course.fast.ai/"
            target="_blank"
            rel="noopener"
          >
            deep learning
          </a>
          . I also enjoy cooking,{' '}
          <a
            href="https://instagram.com/moaazsidat"
            className={pagesStyles.link}
            target="_blank"
            rel="noopener"
          >
            photography
          </a>
          , and occasionally explore hand-lettering & illustrations.
        </p>

        <p>
          Feel free to{' '}
          <a
            className={pagesStyles.link}
            href="mailto:moaazsidat@gmail..com?Subject=Hello!"
          >
            reach out
          </a>{' '}
          to say hi! 👋
        </p>
      </section>
      <section className={`${utilStyles.paragraph} ${pagesStyles.animated}`}>
        <h4>Projects</h4>
        <div className={pagesStyles.separator}></div>
        <ul className={pagesStyles.list}>
          <li>
            <a
              className={pagesStyles.link}
              href="https://github.com/moaazsidat/react-native-qrcode-scanner"
              target="_blank"
              rel="noopener"
            >
              React Native QR Code Scanner
            </a>{' '}
            – Open-sourced library for scanning QR codes
          </li>
          <li>
            <a
              className={pagesStyles.link}
              href="https://github.com/moaazsidat/clearskies-server"
              target="_blank"
              rel="noopener"
            >
              ClearSkies
            </a>{' '}
            – API for an app that tells you if it's safe to fly your drone
          </li>
          <li>
            <a
              className={pagesStyles.link}
              href="https://moaazsidat.com/gips"
              target="_blank"
              rel="noopener"
            >
              Gips
            </a>{' '}
            – Mac app for simple image processing tasks (in beta)
          </li>
          <li>
            <a
              className={pagesStyles.link}
              href="https://devpost.com/software/rememberalll"
              target="_blank"
              rel="noopener"
            >
              RememberAll
            </a>{' '}
            – Video journaling with search based on audible & visual content
          </li>
        </ul>
      </section>

      <section className={`${utilStyles.paragraph} ${pagesStyles.animated}`}>
        <h4>Social</h4>
        <div className={pagesStyles.separator}></div>
        <ul className={pagesStyles.list}>
          <li>
            <a
              className={pagesStyles.link}
              href="https://twitter.com/moaazsidat"
              target="_blank"
              rel="noopener"
            >
              Twitter
            </a>
          </li>
          <li>
            <a
              className={pagesStyles.link}
              href="https://github.com/moaazsidat"
              target="_blank"
              rel="noopener"
            >
              Github
            </a>
          </li>
          <li>
            <a
              className={pagesStyles.link}
              href="https://instagram.com/moaazsidat"
              target="_blank"
              rel="noopener"
            >
              Instagram
            </a>
          </li>
          <li>
            <a
              className={pagesStyles.link}
              href="https://medium.com/@moaazsidat"
              target="_blank"
              rel="noopener"
            >
              Medium
            </a>
          </li>
          <li>
            <a
              className={pagesStyles.link}
              href="https://linkedin.com/in/moaazsidat"
              target="_blank"
              rel="noopener"
            >
              Linkedin
            </a>
          </li>
        </ul>
      </section>
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

import Link from 'next/link'
import Head from 'next/head'
import Date from '../components/date'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'

export default function Home({allPostsData}) {
  return (
    <Layout home>

      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>something</section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 onClick={(e)=>{navigator.clipboard.writeText(e.currentTarget.innerText);console.table([{'a':1,'B':2}])}} className={utilStyles.headingLg}>lucid</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
              {title}
              </Link>
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}
export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
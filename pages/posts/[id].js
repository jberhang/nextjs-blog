import { useState, useEffect } from 'react';
import utilStyles from '../../styles/utils.module.css'
import Head from 'next/head'
import Layout from '../../components/layout'
import Date from '../../components/date'
import fire from '../../config/fire-config';

const Post = (props) => {

  return (
    props &&
    (<Layout>
      <Head>
        <title>{props.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{props.title}</h1>
        <div className={utilStyles.lightText}>                
          <Date dateString={props.date}/>
        </div>
        <div dangerouslySetInnerHTML={{ __html: props.contentHtml }} />
      </article>
    </Layout>)
  )
}

export const getServerSideProps = async ({ query }) => {
  let content = {}

  await fire.firestore()
    .collection('blog')
    .doc(query.id)
    .get()
    .then(result => {
      content = {...result.data(), date: result.data().date.toDate().toJSON()}
    });

return {
    props: {
      ...content
    }
  }
}

export default Post
import Head from 'next/head'
import Layout from '../../components/layout'
import CreatePost from '../../components/CreatePost'

export default function NewPost() {
  return (
    <Layout>
      <Head>
        <title>New Post</title>
      </Head>
      <CreatePost/>
    </Layout>
  )
}
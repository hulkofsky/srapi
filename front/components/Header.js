import Head from 'next/head'
import { connect } from 'react-redux'

export default connect(state => state)(({ title }) => {
  return (
    <div>
      <Head>
        <title>{title}</title> 
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
      </Head>
    </div>
  )
})
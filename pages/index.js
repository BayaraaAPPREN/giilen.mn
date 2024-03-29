import Head from 'next/head'
import Section from '../components/Section'
import Main from '../components/Main'
import Navbar from '../components/Navbar/index'
import Tech from '../components/Tech/index'
import Design from '../components/Design'
import What from '../components/What'
// import Sum from '../components/Sum/index'
// import Comment from '../components/Comment'
import { ToastContainer } from 'react-toastify';

export default function Home() {
  return (
    <div>
      <Head>
        <title>giilen.mn</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/giilen.png" />
      </Head>
      <ToastContainer />
      <Navbar/>
      <Section/>
      {/* <Sum/> */}
      <Main/>
      <Tech/>
      <Design/>
      {/* <Comment/> */}
      <What/>
    </div>
  )
}
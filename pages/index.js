import Head from 'next/head'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Features from '../components/Features'
import NavBar from '../components/NavBar'
import ThreeSteps from '../components/Threesteps'
import CallToAction from '../components/CallToAction'
import Signup from '../components/Signup'
import Reasons from '../components/Reasons'
import About from '../components/About'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Reasons />
      <main className="flex flex-col items-center justify-center w-full flex-1  text-center ">
      <About />
      <ThreeSteps />
       {/* <Features /> */}
       <CallToAction />
       <Signup />
      </main>

      
    </div>
  )
}

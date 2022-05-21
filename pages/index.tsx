import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Posts from '../components/Posts'


const Home: NextPage = () => {
	return (
		<div className="m-auto max-w-7xl">
			<Head>
				<title>Medium Blog</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header />
			<Hero />
			<Posts/>
		</div>
	)
}

export default Home

import { GetStaticProps } from 'next'
import React from 'react'
import Header from '../../components/Header'
import { Post } from '../../typings'
import { posts } from '../../utils/posts'
import Comments from '../../components/Comments'

interface Props {
	post: Post
}


function Post({ post }: Props) {
	const lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Natoque penatibus et magnis dis. Vestibulum sed arcu non odio euismod lacinia at quis risus. Tellus cras adipiscing enim eu turpis egestas pretium aenean. Magna etiam tempor orci eu lobortis elementum nibh tellus. Commodo ullamcorper a lacus vestibulum sed arcu non. Lectus vestibulum mattis ullamcorper velit sed ullamcorper. Diam maecenas sed enim ut sem viverra aliquet. Sit amet commodo nulla facilisi nullam vehicula ipsum a. Nibh mauris cursus mattis molestie a iaculis at erat. Morbi tristique senectus et netus et malesuada. Eu augue ut lectus arcu bibendum. `

	return (
		<main>
			<Header />

			<img src={post.mainImage} alt="" className="object-cover w-full h-40" />

			<article className="max-w-3xl p-5 mx-auto">
				<h1 className="mt-10 mb-3 text-3xl">{post.title}</h1>

				<h2 className="mb-2 text-xl font-light text-gray-500">
					{post.description}
				</h2>

				<div className="flex items-center space-x-2">
					<img
						className="w-10 h-10 rounded-full"
						src={post.author.image}
						alt="Picture of the author"
					/>
					<p className="text-sm font-extralight">
						Blog post by{' '}
						<span className="text-green-600">{post.author.name}</span> -
						Published at {new Date(post.createdAt).toLocaleDateString()}
					</p>
				</div>

				<div className="mt-10 space-y-5">
					<p>{lorem}</p>
					<p>{lorem}</p>
					<figure>
						<img
							className="object-cover w-full h-80"
							src="https://picsum.photos/902"
							alt=""
						/>
						<figcaption className="mt-2 text-sm font-light text-center text-gray-500">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						</figcaption>
					</figure>
					<p>{lorem}</p>
					<p>{lorem}</p>
					<p>{lorem}</p>
				</div>
			</article>

			<Comments post={ post}/>
		</main>
	)
}

export const getStaticPaths = () => {
	const paths = posts.map((post) => ({
		params: {
			slug: post.slug,
		},
	}))

	return { paths, fallback: 'blocking' }
}

export const getStaticProps: GetStaticProps = ({ params }) => {
	const post = posts.find((post) => post.slug === params?.slug)

	if (!post) {
		return {
			notFound: true,
		}
	}

	return {
		props: {
			post,
		},
	}
}
export default Post

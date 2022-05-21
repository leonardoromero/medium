import React from 'react'
import PostCard from './PostCard'
import { posts } from '../utils/posts'

const Posts = () => {
	return (
		<div className="grid grid-cols-1 gap-3 p-2 sm:grid-cols-2 md:gap-6 md:p-6 lg:grid-cols-3">
			{posts.map((post) => (
				<PostCard post={post} />
			))}
		</div>
	)
}

export default Posts

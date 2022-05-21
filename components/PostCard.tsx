import React from 'react'
import Link from 'next/link'

const PostCard = (props: any) => {
	const { post } = props
	return (
		<Link key={post.id} href={`/post/${post.slug}`}>
			<div className="overflow-hidden border rounded-lg cursor-pointer group">
				<img
					className="object-cover w-full transition-transform duration-200 ease-in-out h-60 group-hover:scale-105"
					src={post.mainImage}
					alt={`Cover picture for ${post.title}`}
				/>
				<div className="flex justify-between p-5 bg-white">
					<div>
						<p className="text-lg font-bold">{post.title}</p>
						<p className="text-xs">
							{post.description} by {post.author.name}
						</p>
					</div>
					<img
						className="w-12 h-12 rounded-full"
						src={post.author.image}
						alt="Picture of the author"
					/>
				</div>
			</div>
		</Link>
	)
}

export default PostCard

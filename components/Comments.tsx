import React, { useEffect, useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'

interface IFormInput {
	id: string
	name: string
	email: string
	comment: string
}

const Comments = (props:any) => {
	const { post } = props;
	const arr: any[] = []
	const [comments, setComments] = useState(arr)
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm()

	const onSubmit = (data: {}, e: any) => {
		const date = new Date().toLocaleDateString()
		const time = new Date().toLocaleTimeString().slice(0, 5)
		const dataWithDate = { ...data, date, time }
		setComments([...comments, dataWithDate])
		if (e) e.target.reset()
	}

	useEffect(() => {
		console.log(comments)
	}, [comments])
	return (
		<>
			<hr className="max-w-lg mx-auto my-5 border border-yellow-500" />

			{/* ---------- Comment Form ---------- */}

			<form
				className="flex flex-col max-w-2xl p-5 mx-auto form"
				onSubmit={handleSubmit(onSubmit)}
			>
				<h3 className="text-sm text-yellow-500">Enjoyed this article?</h3>
				<h4 className="text-3xl font-bold">Leave a comment below</h4>
				<hr className="py-3 mt-2" />
				<input {...register('id')} type="hidden" name="id" value={post.id} />
				<label htmlFor="name" className="block mb-5">
					<span className="text-gray-700">Name</span>
					<input
						{...register('name', { required: true })}
						className="block w-full px-3 py-2 mt-1 border rounded shadow outline-none form-input ring-yellow-500 focus:ring"
						id="name"
						name="name"
						placeholder="John Doe"
						type="text"
						minLength={3}
					/>
				</label>
				<label htmlFor="email" className="block mb-5">
					<span className="text-gray-700">Email</span>
					<input
						{...register('email', { required: true })}
						className="block w-full px-3 py-2 mt-1 border rounded shadow outline-none form-input ring-yellow-500 focus:ring"
						id="email"
						name="email"
						placeholder="john@doe.com"
						type="email"
					/>
				</label>
				<label htmlFor="comment" className="block mb-5">
					<span className="text-gray-700">Comment</span>
					<textarea
						{...register('comment', { required: true })}
						className="block w-full px-3 py-2 mt-1 border rounded shadow outline-none form-textarea ring-yellow-500 focus:ring"
						id="comment"
						name="comment"
						placeholder="Leave a comment"
						rows={8}
						minLength={6}
					/>
				</label>
				{/* Errors that will return if the field validation fails */}
				<div className="flex flex-col p-5">
					{errors.name && (
						<span className="text-red-500">The name field is required</span>
					)}
					{errors.email && (
						<span className="text-red-500">The email field is required</span>
					)}
					{errors.comment && (
						<span className="text-red-500">The comment field is required</span>
					)}
				</div>

				<input
					type="submit"
					className="py-2 font-bold text-white bg-yellow-500 rounded shadow cursor-pointer focus:shadow-outline hover:bg-yellow-400 focus:outline-none"
				/>
			</form>

			<hr className="max-w-lg mx-auto my-5 border border-yellow-500" />

			{/* ---------- Comments section ---------- */}

			<section className="max-w-2xl p-5 mx-auto">
				<div className="p-10 border border-yellow-500 rounded shadow-lg">
					<h3 className="text-3xl">Comments</h3>
					<hr className="w-full mx-auto my-3" />
					<div className="flex flex-col mt-5 space-y-5">
						{comments.length > 0 ? (
							comments.map((comment) => {
								return (
									<article key={comment.id}>
										<p>
											<span className="text-xs text-gray-400">{`${comment.date} ${comment.time}`}</span>
											<span className="px-5 text-yellow-500">
												{comment.name}
											</span>
											{comment.comment}
										</p>
									</article>
								)
							})
						) : (
							<p className="mt-5 text-gray-400">
								No comments yet. Be the first!
							</p>
						)}
					</div>
				</div>
			</section>
		</>
	)
}

export default Comments

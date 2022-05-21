import React from 'react'

const Hero = () => {
	return (
		<div className="flex items-center justify-between p-10 bg-yellow-500 lg:p-0">
			<div className="px-10 space-y-5">
				<h1 className="max-w-xl font-serif text-6xl">
					<span className="underline decoration-black decoration-4">
						Medium
					</span>{' '}
					is a place to write, read and connect
				</h1>
				<h2>
					It&apos;s easy and free to post your thinking on any topic and connect
					with millions of readers.{' '}
				</h2>
			</div>
			<img
				src="https://accountabilitylab.org/wp-content/uploads/2020/03/Medium-logo.png"
				alt=""
				className="hidden h-32 md:inline-flex lg:h-full"
			/>
		</div>
	)
}

export default Hero

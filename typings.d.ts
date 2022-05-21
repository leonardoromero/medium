export interface Post {
	id: string
	createdAt: string
	title: string
	author: {
		name: string
		image: string
	}
	description: string
	mainImage: string
	slug: string
	body: [object]
}

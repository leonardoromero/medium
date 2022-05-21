import uniqid from 'uniqid'

const lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Suscipit adipiscing bibendum est ultricies integer quis. Lobortis elementum nibh tellus molestie nunc non blandit massa. Tortor at auctor urna nunc id cursus. Aliquam id diam maecenas ultricies mi eget mauris pharetra et. Elementum eu facilisis sed odio. Urna porttitor rhoncus dolor purus non enim praesent elementum facilisis. Vel quam elementum pulvinar etiam non quam. Cursus turpis massa tincidunt dui ut ornare lectus. Mauris nunc congue nisi vitae suscipit tellus. Fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate sapien. Rutrum tellus pellentesque eu tincidunt tortor aliquam nulla. Mauris pharetra et ultrices neque. Euismod quis viverra nibh cras pulvinar mattis nunc sed blandit. Diam sit amet nisl suscipit adipiscing bibendum est. Imperdiet proin fermentum leo vel orci porta. Id venenatis a condimentum vitae sapien pellentesque. Integer enim neque volutpat ac tincidunt vitae semper quis lectus. Sodales neque sodales ut etiam. Eleifend donec pretium vulputate sapien nec.

Augue ut lectus arcu bibendum. Tincidunt lobortis feugiat vivamus at augue eget arcu. Gravida quis blandit turpis cursus in hac habitasse. Sed blandit libero volutpat sed cras ornare arcu dui. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Consequat semper viverra nam libero justo laoreet. Bibendum enim facilisis gravida neque. Dui accumsan sit amet nulla facilisi. Pellentesque pulvinar pellentesque habitant morbi. Non pulvinar neque laoreet suspendisse interdum consectetur libero id faucibus. In hac habitasse platea dictumst quisque sagittis purus. Leo integer malesuada nunc vel risus commodo. Et magnis dis parturient montes nascetur. Rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque. Blandit libero volutpat sed cras ornare arcu dui. Euismod lacinia at quis risus. Quam viverra orci sagittis eu volutpat.

At consectetur lorem donec massa sapien faucibus et. Nulla aliquet porttitor lacus luctus accumsan tortor posuere ac ut. Ac turpis egestas maecenas pharetra. Quis imperdiet massa tincidunt nunc pulvinar sapien et ligula. Parturient montes nascetur ridiculus mus mauris vitae ultricies leo integer. A condimentum vitae sapien pellentesque habitant morbi tristique senectus et. Quam nulla porttitor massa id. Eu ultrices vitae auctor eu augue ut. Feugiat scelerisque varius morbi enim. Sed viverra ipsum nunc aliquet. Eget felis eget nunc lobortis mattis. Ipsum consequat nisl vel pretium lectus. Arcu dui vivamus arcu felis bibendum.

Vulputate sapien nec sagittis aliquam malesuada bibendum. Tristique magna sit amet purus. Faucibus nisl tincidunt eget nullam non. Pharetra pharetra massa massa ultricies mi quis hendrerit. Ut enim blandit volutpat maecenas volutpat blandit aliquam etiam. Vitae auctor eu augue ut lectus. Id aliquet risus feugiat in ante. Fames ac turpis egestas maecenas pharetra convallis posuere morbi leo. Quis commodo odio aenean sed adipiscing diam donec adipiscing. Sit amet consectetur adipiscing elit duis. Congue quisque egestas diam in arcu.

Ultrices vitae auctor eu augue ut lectus arcu bibendum at. Vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique. Morbi enim nunc faucibus a. Varius quam quisque id diam vel quam elementum. Porttitor rhoncus dolor purus non enim praesent elementum. Ridiculus mus mauris vitae ultricies leo integer malesuada nunc. Nam libero justo laoreet sit. Nec ultrices dui sapien eget mi proin sed libero. Posuere ac ut consequat semper viverra. Morbi tristique senectus et netus et malesuada. Ornare lectus sit amet est.`

export const posts = [
	{
		id: uniqid(),
		createdAt: '2022-05-18',
		title: 'First Post',
		author: {
			name: 'Leonardo Romero',
			image: 'https://picsum.photos/100',
		},
		description: 'First post ever',
		mainImage: 'https://picsum.photos/900/200',
        slug: 'first-post',
		body: lorem,
	},
	{
		id: uniqid(),
		createdAt: '2022-05-18',
		title: 'Second Post',
		author: {
			name: 'Leonardo Romero',
			image: 'https://picsum.photos/101',
		},
		description: 'My second post',
		mainImage: 'https://picsum.photos/901/200',
        slug: 'second-post',
        body:lorem,
	},
	{
		id: uniqid(),
		createdAt: '2022-05-18',
		title: 'Last Post!',
		author: {
			name: 'Leonardo Romero',
			image: 'https://picsum.photos/102',
		},
		description: 'My last post',
		mainImage: 'https://picsum.photos/902/200',
        slug: 'last-post',
        body:lorem,
	},
]

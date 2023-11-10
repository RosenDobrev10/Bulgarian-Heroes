export const host = 'http://localhost:3030/';

export const endpoints = {
	register: 'users/register',
	login: 'users/login',
	logout: 'users/logout',
	catalog: 'data/heroes?distinct=name&sortBy=age',
	createHero: 'data/heroes',
	likeHero: 'data/likes',
	details: (heroId) => `data/heroes/${heroId}`,
	edit: (heroId) => `data/heroes/${heroId}`,
	delete: (heroId) => `data/heroes/${heroId}`,
	canLike: (heroId, userId) =>
		`data/likes?where=heroId%3D%22${heroId}%22%20and%20_ownerId%3D%22${userId}%22&count`,
	likesForPlayer: (heroId) =>
		`data/likes?where=heroId%3D%22${heroId}%22&distinct=_ownerId&count`,
	search: (query) =>
		`data/heroes?where=name%20LIKE%20%22${query}%22&sortBy=age`,
	getMyHeroes: (userId) =>
		`data/heroes?where=_ownerId%3D%22${userId}%22&sortBy=age`
};

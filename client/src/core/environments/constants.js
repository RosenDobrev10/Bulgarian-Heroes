export const host = 'http://localhost:3030/';

export const endpoints = {
	register: 'users/register',
	login: 'users/login',
	logout: 'users/logout',
	getAllHeroes: 'data/heroes?distinct=name&sortBy=_createdOn%20desc',
	createHero: 'data/heroes',
	likeHero: 'data/likes',
	getHeroById: (heroId) => `data/heroes/${heroId}`,
	editHero: (heroId) => `data/heroes/${heroId}`,
	deleteHero: (heroId) => `data/heroes/${heroId}`,
	canLike: (heroId, userId) => `data/likes?where=heroId%3D%22${heroId}%22%20and%20_ownerId%3D%22${userId}%22&count`,
	likesForHero: (heroId) => `data/likes?where=heroId%3D%22${heroId}%22&distinct=_ownerId&count`,
	search: (query) => `data/heroes?where=name%20LIKE%20%22${query}%22&sortBy=_createdOn%20desc`,
	getMyHeroes: (userId) => `data/heroes?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`
};

export const tokenName = '719c660ebedf977ef42a8b11181c52688a3c163d823dceae56e027ef79902615'

export const loginFormKeys = {
	email: 'email',
	password: 'password'
}

export const registerFormKeys = {
	email: 'email',
	password: 'password',
	repass: 'repass'
}

export const addFormKeys = {
	name: 'name',
	imageUrl: 'imageUrl',
	occupation: 'occupation',
	birthplace: 'birthplace',
	born: 'born',
	description: 'description',
}
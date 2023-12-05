export const host = 'http://localhost:3030/';
// export const host = 'https://bulgarian-heroes-ex79.vercel.app/';
// export const host = 'https://bulgarian-heroes-rd-10.onrender.com/';

export const tokenName = 'userToken';

export const emailPattern = /^[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]{2,3}$/;

export const endpoints = {
	register: 'users/register',
	login: 'users/login',
	logout: 'users/logout',
	getAllHeroes: 'data/heroes?distinct=name&sortBy=_createdOn%20desc',
	createHero: 'data/heroes',
	getHeroById: (heroId) => `data/heroes/${heroId}`,
	editHero: (heroId) => `data/heroes/${heroId}`,
	deleteHero: (heroId) => `data/heroes/${heroId}`,
	likeHero: 'data/likes',
	canLike: (heroId, userId) => `data/likes?where=heroId%3D%22${heroId}%22%20and%20_ownerId%3D%22${userId}%22&count`,
	likesForHero: (heroId) => `data/likes?where=heroId%3D%22${heroId}%22&distinct=_ownerId&count`,
	search: (search) => `data/heroes?where=name%20LIKE%20%22${search}%22&sortBy=_createdOn%20desc`,
	getMyHeroes: (userId) => `data/heroes?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`,
	getCommentsForHero: 'data/comments?sortBy=_createdOn%20desc&',
	createComment: 'data/comments',
	editComment: (commentId) => `data/comments/${commentId}`,
	deleteComment: (commentId) => `data/comments/${commentId}`,
};

export const loginFormKeys = {
	email: 'email',
	password: 'password'
};

export const registerFormKeys = {
	email: 'email',
	password: 'password',
	repass: 'repass'
};

export const addFormKeys = {
	name: 'name',
	imageUrl: 'imageUrl',
	occupation: 'occupation',
	birthplace: 'birthplace',
	born: 'born',
	description: 'description',
};

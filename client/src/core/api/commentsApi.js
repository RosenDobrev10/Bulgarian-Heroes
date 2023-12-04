import * as api from './api.js';
import { endpoints } from '../environments/constants.js';

export async function getAllCommentsForHero(heroId) {
	const query = new URLSearchParams({
		where: `heroId="${heroId}"`,
		load: `owner=_ownerId:users`,
	});

	return api.get(`${endpoints.getCommentsForHero}?${query}`);
}

export async function createComment(heroId, comment) {
	return api.post(endpoints.createComment, { heroId, comment });
}
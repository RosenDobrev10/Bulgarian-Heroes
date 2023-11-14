import * as api from './api.js';
import { endpoints } from '../environments/constants.js';

export async function getAllHeroes() {
	return api.get(endpoints.getAllHeroes);
}

export async function createHero(heroData) {
	return api.post(endpoints.createHero, heroData);
}

export async function getHeroById(heroId) {
	return api.get(endpoints.details(heroId));
}

export async function deleteHeroById(heroId) {
	return api.del(endpoints.deleteHero(heroId));
}

export async function editHeroById(heroId, heroData) {
	return api.put(endpoints.editHero(heroId), heroData);
}

export async function likeHero(heroId) {
	return api.post(endpoints.likeHero(heroId));
}

export async function likesForHero(heroId) {
	return api.get(endpoints.likesForHero(heroId));
}

export async function canLike(heroId, userId) {
	return api.get(endpoints.canLike(heroId, userId));
}
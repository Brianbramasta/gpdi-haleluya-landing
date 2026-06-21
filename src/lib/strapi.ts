// Strapi API Helper Functions
// Fungsi ini akan return dummy data jika STRAPI_URL tidak di-set
// dan akan fetch dari Strapi API jika STRAPI_URL di-set

import {
	dummyHero
} from '../data/dummy-hero';
import {
	dummyJadwalIbadah
} from '../data/dummy-jadwal-ibadah';
import {
	dummyPengumuman
} from '../data/dummy-pengumuman';
import {
	dummyRayon
} from '../data/dummy-rayon';
import {
	dummyEvents
} from '../data/dummy-events';
import {
	dummyTentang
} from '../data/dummy-tentang';
import {
	dummyPelayanan
} from '../data/dummy-pelayanan';
import {
	dummyGaleri
} from '../data/dummy-galeri';
import {
	dummyGlobal
} from '../data/dummy-global';

const STRAPI_URL = import.meta.env.STRAPI_URL || '';
const STRAPI_API_TOKEN = import.meta.env.STRAPI_API_TOKEN || '';

// Cek apakah menggunakan Strapi atau dummy data
const useStrapi = STRAPI_URL.length > 0;

// Helper untuk fetch dari Strapi
async function fetchFromStrapi(endpoint: string, params: Record<string, string> = {}) {
	if (!useStrapi) {
		return null;
	}

	const queryString = new URLSearchParams(params).toString();
	const url = `${STRAPI_URL}/api/${endpoint}${queryString ? `?${queryString}` : ''}`;

	const headers: Record<string, string> = {
		'Content-Type': 'application/json'
	};

	if (STRAPI_API_TOKEN) {
		headers['Authorization'] = `Bearer ${STRAPI_API_TOKEN}`;
	}

	try {
		const response = await fetch(url, { headers });
		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}
		return await response.json();
	} catch (error) {
		console.error(`Error fetching from Strapi (${endpoint}):`, error);
		return null;
	}
}

// Helper functions untuk setiap content type
export async function getHero() {
	if (!useStrapi) {
		return dummyHero;
	}
	return await fetchFromStrapi('hero', { populate: '*' }) || dummyHero;
}

export async function getJadwalIbadah() {
	if (!useStrapi) {
		return dummyJadwalIbadah;
	}
	return await fetchFromStrapi('jadwal-ibadah', { sort: 'hari:asc', populate: '*' }) || dummyJadwalIbadah;
}

export async function getPengumuman() {
	if (!useStrapi) {
		return dummyPengumuman;
	}
	return await fetchFromStrapi('pengumuman', { sort: 'tanggal:desc', populate: '*' }) || dummyPengumuman;
}

export async function getRayon() {
	if (!useStrapi) {
		return dummyRayon;
	}
	return await fetchFromStrapi('rayon', { sort: 'tanggal:asc', populate: '*' }) || dummyRayon;
}

export async function getEvents() {
	if (!useStrapi) {
		return dummyEvents;
	}
	return await fetchFromStrapi('event', { sort: 'tanggal:asc', populate: '*' }) || dummyEvents;
}

export async function getTentang() {
	if (!useStrapi) {
		return dummyTentang;
	}
	return await fetchFromStrapi('tentang', { populate: '*' }) || dummyTentang;
}

export async function getPelayanan() {
	if (!useStrapi) {
		return dummyPelayanan;
	}
	return await fetchFromStrapi('pelayanan', { populate: '*' }) || dummyPelayanan;
}

export async function getGaleri() {
	if (!useStrapi) {
		return dummyGaleri;
	}
	return await fetchFromStrapi('galeri', { sort: 'createdAt:desc', populate: '*' }) || dummyGaleri;
}

export async function getGlobal() {
	if (!useStrapi) {
		return dummyGlobal;
	}
	return await fetchFromStrapi('global', { populate: '*' }) || dummyGlobal;
}

// Helper untuk format URL gambar dari Strapi
export function getImageUrl(image: any) {
	if (!image) return null;
	if (image.url?.startsWith('http')) return image.url;
	if (image.url?.startsWith('/')) return `${STRAPI_URL}${image.url}`;
	return image.url;
}

// Helper untuk format tanggal
export function formatDate(dateString: string) {
	const date = new Date(dateString);
	return date.toLocaleDateString('id-ID', {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	});
}

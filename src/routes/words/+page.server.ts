import { error } from '@sveltejs/kit';
import { client } from '../../libs/client';
import type { MicroCMSListResponse } from 'microcms-js-sdk';
type Post = {
	id: string;
	createdAt: string;
	updatedAt: string;
	publishedAt: string;
	revisedAt: string;
	title: string;
	thumbnail: string;
	content: string;
};
/** @type {import('@sveltejs/kit').RequestHandler} */
export async function load() {
	const res = await client.get<MicroCMSListResponse<Post>>({
		endpoint: 'words'
	});
	if (res) {
		return { ...res };
	}
	throw error(404, 'Not found');
}

import { error } from '@sveltejs/kit';
import { client } from '../libs/client';
import type { MicroCMSListResponse } from 'microcms-js-sdk';

type Post = {
	id: string;
	createdAt: string;
	updatedAt: string;
	publishedAt: string;
	revisedAt: string;
	description: string;
	thumbnail: string;
	date: string;
	url: string;
	content: string;
	title: string;
	//title: InnerHTML;
	//String.replace(/\n/g, '<br />');
};

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function load() {
	const res = await Promise.all([
		client.get<MicroCMSListResponse<Post>>({
			endpoint: 'archives',
			queries: { limit: 7 },
		}),
		client.get<MicroCMSListResponse<Post>>({
			endpoint: 'words',
			queries: { limit: 5 }, 
		}),
		client.get<MicroCMSListResponse<Post>>({
			endpoint: 'archives',
			queries: { limit: 4, filters: 'category[contains]Works' },
		}),
	])

	if (res) {
		return { ...res };
	}
	
	throw error(404, 'Not found');
}


	/*const res = await client.get<MicroCMSListResponse<Post>>({
		endpoint: 'archives',
		queries: { limit: 4 }
	});
	
	if (res) {
		
		brands: res[0],
		words: res[1]
	}

	*/

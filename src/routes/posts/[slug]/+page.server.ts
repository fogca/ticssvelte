import { error } from '@sveltejs/kit';
import { client } from '../../../libs/client';
import type { MicroCMSObjectContent } from 'microcms-js-sdk';

type Post = {
	id: string;
	title: string;
	content: string;

	description: string;
	thumbnail: string;
	work: string;
	client: string;
	link: string;
	body: HTMLElement;
	html: HTMLElement;
	
};
type Props = {
	params: {
		slug: string;
	};
};
/** @type {import('@sveltejs/kit').RequestHandler} */
export async function load({ params }: Props) {
	const res = await client.get<MicroCMSObjectContent & Post>({
		endpoint: 'works',
		contentId: params.slug
	});
	if (res) {
		return { ...res };
	}
	throw error(404, 'Not found');
}

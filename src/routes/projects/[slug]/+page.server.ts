import { error } from '@sveltejs/kit';
import { client } from '../../../libs/client';
import type { MicroCMSObjectContent } from 'microcms-js-sdk';

type Post = {
	id: string;
	title: string;
	description: string;
	introduction: HTMLElement;
	thumbnail: string;
	body: HTMLElement;
	credit: HTMLElement;
	direction: string;
	work: string;
};
type Props = {
	params: {
		slug: string;
	};
};
/** @type {import('@sveltejs/kit').RequestHandler} */
export async function load({ params }: Props) {
	const res = await client.get<MicroCMSObjectContent & Post>({
		endpoint: 'archives',
		contentId: params.slug
	});
	if (res) {
		return { ...res };
	}
	throw error(404, 'Not found');
}

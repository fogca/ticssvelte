/** @type {import('./$types').LayoutLoad} */
export const load = async ({ url: { pathname } }) => {
	return { pathname };
};
export const prerender = false;
export const csr = true;
export const ssr = true;

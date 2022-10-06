<script>
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<svelte:head>
	<title>{data.title}</title>
    <link rel="stylesheet" href="../css/main.css">
    <link rel="stylesheet" href="../css/base.css">
	<script src="https://webfont.fontplus.jp/accessor/script/fontplus.js?kqbwQX--jVA%3D&box=6UDKdE7o7aE%3D&aa=1&ab=2"></script>
</svelte:head>
<article>
	<img src={data.thumbnail.url} class="thumbnail" alt="{data.title}">
	<h1>{data.title}</h1>
	<h2>{data.description}</h2>
	<h2>{data.work}</h2>
	<h2>{data.client}</h2>
	<h2>{data.link}</h2>

	{@html data.body}

	<time datetime={data.publishedAt}>{data.publishedAt}</time>
	
	<p><a href="/posts" data-sveltekit-prefetch>Back To Posts</a></p>
</article>
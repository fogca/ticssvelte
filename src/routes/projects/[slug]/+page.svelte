<script>
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<svelte:head>
	<title>{data.title}</title>
</svelte:head>
<main>
<article class="slug">
	<section>
		<h1 class="title" lang="en">{data.title}</h1>
		<h2 class="h5 description">{data.description}</h2>
		<p class="h3">
			{@html data.introduction}
		</p>
	</section>
	
	<section class="slug-second">
		<img src={data.thumbnail.url} class="thumbnail" alt="{data.title}">
		<p class="h3 body">
			{@html data.body}
		</p>
		<div class="container">
			<h2 class="h2" lang="en">Credit</h2>
			<h3 class="h4 credit" lang="en">{@html data.credit}</h3>
		</div>
		<div class="container">
			<h2 lang="en">{data.direction}</h2>
			<h3 class="h4 work" lang="en">{data.work}</h3>
		</div>
		<p><a href="/" data-sveltekit-prefetch class="h1" lang="en">Back To Page</a></p>
	</section>
</article>
</main>


<style>
	article.slug {
		background-color: var(--darkColor);
		padding-top: 12.5rem;
		padding-bottom: 8rem;
	}
	article.slug * {color: var(--backgroundColor);}
	article.slug .thumbnail {
		width: 100vw;
		margin: 7rem 0 3.5rem;
		margin-left: -5vw;
	}
	
	article.slug .credit, 
	article.slug .work, 
	article.slug .description {opacity: .5;}

	article.slug h1.title {font-size: 2.8rem;}
	article.slug h2.description {margin: .5rem 0 4rem;}
	article.slug p {
		width: 92.5%;
    	text-align: justify;
	}

	article.slug .body {margin-bottom: 4rem;}
	article.slug .slug-second .container {margin-bottom: 4rem;}
	article.slug .slug-second .container h2 {margin-bottom: .8rem;}
</style>


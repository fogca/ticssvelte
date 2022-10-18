<script>
	import Saos from "saos";
	
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<svelte:head>
	<title>{data.title}</title>
</svelte:head>
<main class="dark-mode">


<article class="word-slug">
	<section>
		<h1 class="title" lang="en">{data.title}</h1>
		<h2 class="h5 description">{data.date}</h2>
		<p class="h3 body">
			{@html data.content}
		</p>

		<p><a href="/words" data-sveltekit-prefetch class="h1" lang="en">All Words</a></p>
	</section>
	

</article>
</main>


<style>
	@keyframes -global-scroll-animation {0% {transform: translateY(1.5rem);opacity: 0;}100% {transform: translateX(0);opacity: 1;}}

	.word-slug {
		padding-top: 12.5rem;
		padding-bottom: 8rem;
	}

	.word-slug h1 {
		margin-left: -1.5px;
		letter-spacing: .05em;
    	font-size: 2.2rem;
	}

	.word-slug .body {margin: 3rem 0 6rem;}

</style>


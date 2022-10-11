<script>
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<svelte:head>
	<title>Projects | TICS: Takumi Isobe Creative Studio</title>
</svelte:head>

<main class="dark-mode">
<section class="projects-index">
<h1 class="h0 title" lang="en">Projects</h1>
{#if data.contents}
	<div class="l-cards wrapper">
		{#each data.contents as content}
			<a href="/projects/{content.id}/" data-sveltekit-prefetch class="l-card">
                <img src={content.thumbnail.url} class="thumbnail" alt="{content.title}">
				<h2 class="title h2" lang="en">{content.title}</h2>
				<h3 class="h5" style="opacity: .5;">{content.description}</h3>
			</a>
		{/each}
	</div>
{/if}
</section>
</main>


<style>
	.projects-index {
		margin-top: 10rem;
		padding-top: 5rem;
	}

	.projects-index .wrapper {margin-top: 4rem;}
	.projects-index .l-cards .l-card {margin-bottom: 6rem;}
	.projects-index .l-cards .l-card img {
		width: 100vw;
		margin-left: -5vw;
		aspect-ratio: 7/4;
	}
</style>
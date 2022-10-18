<script>
	import Saos from "saos";

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
		<Saos animation={"scroll-animation 1.5s cubic-bezier(0.3, 0, 0.7, 1) both"} once={true}>
			<a href="/projects/{content.id}/" data-sveltekit-prefetch class="l-card">
                <img src={content.thumbnail.url} class="thumbnail" alt="{content.title}">
				<h2 class="title h2" lang="en">{content.title}</h2>
				<h3 class="h5" style="opacity: .5;">{content.description}</h3>
			</a>
		</Saos>
		{/each}
	</div>
{/if}
</section>
</main>


<style>
	@keyframes -global-scroll-animation {0% {transform: translateY(1.5rem);opacity: 0;}100% {transform: translateX(0);opacity: 1;}}
	
	.projects-index {
		padding-top: 15rem;
	}

	.projects-index .wrapper {margin-top: 4rem;}
	.projects-index .l-cards .l-card {margin-bottom: 6rem;}
	.projects-index .l-cards .l-card img {
		width: 100vw;
		margin-left: -5vw;
		aspect-ratio: 7/4;
	}
</style>
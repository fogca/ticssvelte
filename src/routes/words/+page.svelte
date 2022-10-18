<script>
	import Arrow from '../../components/Arrow.svelte';
	import Saos from "saos";
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<svelte:head>
	<title>Words | TICS: Takumi Isobe Creative Studio</title>
</svelte:head>

<main class="dark-mode">
<section class="words-index">
	<h1 class="h0">Words</h1>
	{#if data.contents}
		<div class="wrapper l-words">
			{#each data.contents as content}
			<a href="/words/{content.id}/" data-sveltekit-prefetch class="l-word container">
				<div class="left">
					<div class="l-line"></div>
					<div class="h6 date" lang="en">{ content.date }</div>
					<h1 class="h5">{ content.title }</h1>
				</div>
				<div class="right">
					<Arrow />
				</div>
			</a>
			{/each}
		</div>
		<div class="l-line"></div>
	{/if}
</section>
</main>

<style>
	@keyframes -global-scroll-animation {0% {transform: translateY(1.5rem);opacity: 0;}100% {transform: translateX(0);opacity: 1;}}

	.words-index {
		padding-top: 15rem;
		padding-bottom: 12rem;
	}

	
</style>
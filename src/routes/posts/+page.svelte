<script>
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<svelte:head>
	<title>Posts</title>
    <link rel="stylesheet" href="../css/main.css">
    <link rel="stylesheet" href="../css/base.css">
</svelte:head>
<h1>Posts</h1>
{#if data.contents}
	<ul>
		{#each data.contents as content}
			<li>
				<a href="/posts/{content.id}/" data-sveltekit-prefetch>
                    <img src={content.thumbnail.url} class="thumbnail" alt="{content.title}">
					{content.title}
				</a>
			</li>
		{/each}
	</ul>
{/if}
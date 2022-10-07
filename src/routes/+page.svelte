<script>
	import sal from 'sal.js';
	import Arrow from '../components/Arrow.svelte';

	/** @type {import('./$types').PageData} */
	export let data;

	sal();
	
</script>

<svelte:head>
	<title>磯部たくみ | a Brand Director</title>
    <link rel="stylesheet" href="../css/main.css">
    <link rel="stylesheet" href="../css/base.css">
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/sal.js@0.8.5/dist/sal.css">
	<script src="https://webfont.fontplus.jp/accessor/script/fontplus.js?kqbwQX--jVA%3D&box=6UDKdE7o7aE%3D&aa=1&ab=2"></script>
	<script>sal({threshold: .5,});</script>
	
	
</svelte:head>

<main>
	<section id="index-top">
		<img src="../image/kv.webp" alt="" class="kv">
		<div class="info">
			<h1 class="h1 js-reaveler" lang="en">Tokyo based Design and <br>Photography Studio led by <br>Visual Director, Takumi Isobe <br>also runs a non-al brand, Nar.</h1>
			<h2 class="h7"></h2>
		</div>
	</section>
	
	<section id="index-projects">
		<div class="l-section-head">
			<h1 class="h1 js-reaveler" lang="en">Projects I've involved</h1>
			<h2 class="h6">携わらせていただいたお仕事</h2>
		</div>
	{#if data[0].contents}
		<div class="wrapper l-cards">
			{#each data[0].contents as content}
				<a href="/projects/{content.id}/" data-sveltekit-prefetch class="container l-card">
	                <img src={content.thumbnail.url} class="thumbnail" alt="{content.title}">
					<div class="h6 description" lang="en">{content.description}</div>
					<h1 class="h6" lang="en">{@html content.title}</h1>
				</a>
			{/each}
		</div>
	{/if}
	</section>


	<section id="index-words">
		<div class="l-section-head">
			<h1 class="h1" lang="en">Words</h1>
			<h2 class="h6">文章: 学びと考え</h2>
		</div>
		{#if data[1].contents}
		<div class="wrapper l-words">
			{#each data[1].contents as content}
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
		<a href="/words" class="h2 all" lang="en">All articles</a>
	</section>
	
</main>

<style>

#index-top {
	width: 100vw;
	padding: 0;
	min-height: calc(var(--vh, 1vh) * 100);
	position: relative;
}
#index-top * {color: white;}
#index-top .kv {
	width: 100%;
	height: 100vh;
	height: 100svh;
	filter: brightness(.9) contrast(1.1);
}
#index-top .info {
	position: absolute;
	top: 10vh;
	left: 5vw;
}

#index-top .info .main-tag {
	font-size: 1.65rem;
	letter-spacing: .05em;
	line-height: 2.2;
}
#index-top .info p {
	width: 65%;
	margin-top: calc(32.5vh - 125px);
	line-height: 2.2;
	text-align: justify;
}


#index-projects {margin-top: 10rem;}
#index-projects .l-cards {
	width: 100vw;
	margin-left: -5vw;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
}
#index-projects .l-card {margin-bottom: 5px;}


.l-card img {height: 100%;}
#index-projects .l-card:nth-of-type(2),
#index-projects .l-card:nth-of-type(3) {height: 40vw;}
#index-projects .l-card:nth-of-type(5),
#index-projects .l-card:nth-of-type(6) {height: 55vw;}

#index-projects .l-card:nth-of-type(2),
#index-projects .l-card:nth-of-type(6) {width: calc(40% - 2.5px);}

#index-projects .l-card:nth-of-type(3),
#index-projects .l-card:nth-of-type(5) {width: calc(60% - 2.5px);}

#index-projects .l-card:nth-of-type(7) {aspect-ratio: 5/3;}



#index-projects .wrapper img {margin-bottom: 0;}
#index-projects .wrapper .description, #index-projects .wrapper h1 {
	display: none;
}
.l-section-head h1 {margin-bottom: .5rem;}
.l-cards {margin-top: 4rem;}
.l-cards .l-card {
	display: block;
	margin-bottom: 6rem;
}


.l-cards .l-card .description {opacity: .5;}
.l-cards .l-card h1 {font-size: 1.35rem;}



#index-words {
	margin-top: 12rem;
	padding-top: 8rem;
	padding-bottom: 12rem;
	background-color: var(--darkColor);
}
#index-words * {color: white;}
#index-words .wrapper {margin-top: 5rem;}
#index-words .all {
	margin-top: 3rem;
    margin-left: 1rem;
    text-decoration: underline;
	display: flex;
    align-items: center;
}





	@media screen and (min-width: 720px) {

		#index-top {}
		#index-top * {color: black;}

		#index-top .info {position: initial;}
		#index-top .info .main-tag {
			font-size: 2rem;
			margin-left: -2.5px;
		}
		#index-top .info p {
			font-size: 1.4rem;
			margin-top: 2rem;
			margin-left: -.75px;
			width: 57.5%;
			text-align: justify;
		}
		#index-top .banner {
			font-size: 2.8rem;
    		top: 14rem;
			left: 88.5vw;
			line-height: 1.35;
		}



		#index-brands {
			padding-left: 10vw;
			padding-right: 10vw;
		}

		.l-cards {
			display: flex;
			flex-wrap: wrap;
    		justify-content: space-between;
    		align-items: flex-start;
		}
		.l-cards .l-card {margin-top: 8rem;}
		.l-cards .l-card:nth-of-type(1),
		.l-cards .l-card:nth-of-type(4) {width: 35%;}
		.l-cards .l-card:nth-of-type(2),
		.l-cards .l-card:nth-of-type(3) {width: 60%;}
		.l-cards .l-card:nth-of-type(2) img,
		.l-cards .l-card:nth-of-type(3) img {aspect-ratio: 2/1;}
	}

	
</style>
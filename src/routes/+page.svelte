<script>
	import Arrow from '../components/Arrow.svelte';
	import Saos from "saos";

	/** @type {import('./$types').PageData} */
	export let data;
	
</script>

<svelte:head>
	<title>磯部たくみ | a Brand Director</title>
</svelte:head>

<main>
	<section id="index-top">
		<img src="../image/kv.webp" alt="" class="kv" style="display:none;">
		<img src="../image/bg.webp" alt="" class="kv" style="display:none;">
		<Saos animation={"opening-img 1.5s cubic-bezier(0.3, 0, 0.7, 1) both"} once={true}>
			<img src="../image/about.webp" alt="" class="kv sp">
		</Saos>
		<Saos animation={"opening-img 1.5s cubic-bezier(0.3, 0, 0.7, 1) both"} once={true}>
			<img src="../image/about-pc.webp" alt="" class="kv pc">
		</Saos>
		<div class="info">
			<Saos animation={"opening 2.2s cubic-bezier(0.4, 0, 0.6, 1) both"} once={true}>
				<h1 class="h1" lang="en">Tokyo based Design and <br>Photography Studio led by <br>Visual Director, Takumi Isobe <br>also runs a non-al brand, Nar.</h1>
			</Saos>
			<Saos animation={"opening 2.2s cubic-bezier(0.4, 0, 0.6, 1) both"} once={true}>
				<h2 class="h6">デザインや写真といった視覚領域においてディレクションや<br>構築をさせていただいています。 よろしくお願いいたします！</h2>
			</Saos>
		</div>
	</section>
	
	<section id="index-projects">
		<Saos animation={"scroll-animation 1.5s cubic-bezier(0.3, 0, 0.7, 1) both"} once={true}>
		<div class="l-section-head">
			<h1 class="h1 js-reaveler" lang="en">Projects I've involved</h1>
			<h2 class="h6">携わらせていただいたお仕事</h2>
		</div>
		</Saos>
	{#if data[0].contents}
		<div class="wrapper l-cards">
			{#each data[0].contents as content}
				<a href="/projects/{content.id}/" data-sveltekit-prefetch class="container l-card">	
					<Saos animation={"scroll-animation 1.5s cubic-bezier(0.3, 0, 0.7, 1) both"} once={true}>
	                	<img src={content.thumbnail.url} class="thumbnail" alt="{content.title}">
					</Saos>
					<div class="h6 description" lang="en">{content.description}</div>
					<h1 class="h6" lang="en">{@html content.title}</h1>	
				</a>
			{/each}
		</div>
	{/if}
	</section>


	<section id="index-words">
		<div class="l-section-head">
			<Saos animation={"scroll-animation 1.5s cubic-bezier(0.3, 0, 0.7, 1) both"} once={true}>
			<h1 class="h1" lang="en">Words</h1>
			<h2 class="h6">文章: 学びと考え</h2>
			</Saos>
		</div>
		{#if data[1].contents}
		<div class="wrapper l-words">
			{#each data[1].contents as content}
				<Saos animation={"scroll-animation 1.5s cubic-bezier(0.3, 0, 0.7, 1) both"} once={true}>
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
				</Saos>
			{/each}
		</div>
		<div class="l-line"></div>
		{/if}
		<a href="/words" class="h2 all" lang="en">All articles</a>
	</section>
	
</main>

<style>

@keyframes -global-scroll-animation {
	0% {transform: translateY(1.5rem);opacity: 0;}
	100% {transform: translateX(0);opacity: 1;}
}
@keyframes -global-opening {
	0% {transform: translateY(.5rem);opacity: 0;filter: blur(10px);}
	100% {transform: translateX(0);opacity: 1;filter: blur(0);}
}
@keyframes -global-opening-img {
	0% {filter: saturate(0);}
	100% {filter: saturate(1);}
}

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
/*
#index-projects .l-card:nth-of-type(2),
#index-projects .l-card:nth-of-type(3) {height: 40vw;}
#index-projects .l-card:nth-of-type(5),
#index-projects .l-card:nth-of-type(6) {height: 55vw;}
#index-projects .l-card:nth-of-type(2),
#index-projects .l-card:nth-of-type(6) {width: calc(40% - 2.5px);}
#index-projects .l-card:nth-of-type(3),
#index-projects .l-card:nth-of-type(5) {width: calc(60% - 2.5px);}
#index-projects .l-card:nth-of-type(7) {aspect-ratio: 5/3;}
*/

#index-projects .l-cards .l-card:nth-of-type(1) {order: 1;width: 100%;height: 55vw;}
#index-projects .l-cards .l-card:nth-of-type(2) {order: 2;width: calc(40% - 2.5px);height: 45vw;}
#index-projects .l-cards .l-card:nth-of-type(4) {order: 3;width: calc(60% - 2.5px);height: 45vw;}
#index-projects .l-cards .l-card:nth-of-type(6) {order: 4;width: 100%;height: 60vw;}
#index-projects .l-cards .l-card:nth-of-type(3) {order: 5;width: calc(60% - 2.5px);height: 50vw;}
#index-projects .l-cards .l-card:nth-of-type(5) {order: 6;width: calc(40% - 2.5px);height: 50vw;}
#index-projects .l-cards .l-card:nth-of-type(7) {order: 7;width: 100%;height: 50vw;}






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

		#index-top .info {
			top: 15vh;
			left: 10vw;
		}
		#index-top h2 {
			font-size: 1.6rem;
    		margin-top: 1rem;
		}

		#index-projects {margin-top: 18rem;}
		#index-projects .l-cards {
			width: 100%;
			margin-left: 0;
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;
		}
		#index-projects .l-card {margin-bottom: 1rem;}

		#index-projects .l-cards .l-card:nth-of-type(1) {
			width: calc(65% - .5rem);
			height: 32vw;
		}
		#index-projects .l-cards .l-card:nth-of-type(2) {
			width: calc(35% - .5rem);
			height: 20vw;
		}
		#index-projects .l-cards .l-card:nth-of-type(3) {
			width: calc(28% - .66666666666rem);
			height: 23vw;
		}
		#index-projects .l-cards .l-card:nth-of-type(4) {
			width: calc(37% - .66666666666rem);
			height: 23vw;
		}
		#index-projects .l-cards .l-card:nth-of-type(5) {
			width: calc(35% - .66666666666rem);
			height: 35vw;
			margin-top: -12vw;
		}
		#index-projects .l-cards .l-card:nth-of-type(6) {
			width: calc(60% - .5rem);
			height: 28vw;
		}
		#index-projects .l-cards .l-card:nth-of-type(7) {
			width: calc(40% - .5rem);
			height: 28vw;
		}

		#index-projects .l-cards .l-card {order: 0 !important;}



		#index-words {
			padding-top: 18rem;
			padding-left: 18vw;
			padding-right: 20vw;
		}
		#index-words .l-word {padding-left: 0;}
		#index-words .l-words h1 {font-size: 2rem;}
		#index-words .l-line {width: 62vw;}
		#index-words .all {margin-left: 0;margin-top: 6rem;}

	}

	
</style>
<script>
	import Arrow from '../../components/Arrow.svelte'
</script>

<svelte:head>
	<title>About | TICS: Takumi Isobe Creative Studio</title>
</svelte:head>

<main class="about dark-mode">
	<div class="about-bg"></div>
<section class="about-index">
	<h1 class="h1" lang="en">About</h1>
	<h2 class="h4" lang="en">Visual Direction:
		Digital Design,<br>
		Web Development, Photography
	</h2>
	<a href="" class="h3 email" lang="en">hi@takumiisobe.com</a>
	<h3 class="h1 tagline" lang="en">
		Hi! I’m Takumi Isobe,<br>
		a Visual Director for <br>
		developing brand <br>
		identity through design <br>
		and photography
	</h3>
</section>

<section class="about-content">
	<p>
		私は、アナログ・デジタルといった両者がもつ視覚に重きをおき、当領域における表現や構築を起点にさまざまな視覚物を制作しています。視覚表現を通し、ブランドの本質的な価値を理解し、ブランドアイデンティティをより一層芯のあるものへとアップデートするヴィジュアルディレクターです。
		<br><br>
		また最近では、制作に限らず、企画・運営に携わらせていただき、これまでブランドの価値創出を企画するだけだったのが、実行・運営といった形で、共に歩み、考え、伴走させていただく大変有難い経験を積ませていただいております。デザインやデジタルワークス、写真をしておりますので、是非プロジェクトをご覧ください。
	</p>
	<img src="./image/about_takumiisobe.webp" class="portrait" alt="Portrait of Takumi Isobe"> 
	<h4 class="h1" lang="en">Takumi Isobe</h4>
	<h5 class="h4" lang="en" style="opacity:.5;">A student at the University of Westminster</h5>
	<p>
		英国・ロンドンのUniversity of Westminsterにて経営学を専攻・在学中。海外での生活で、日本との視覚表現の違いや感じ方の相違に興味を抱き、デザインや写真、動画を始める。
		<br><br>
		欧米の異文化に触れることで、日本文化や和が持つ独自の余白の心地良さを実感し、伝統・文化への知見を深める。また大学を休学し、東京のクリエイティブスタジオにて実務経験を積む。現在はデジタルデザイン・グラフィックデザイン・ビジュアルの撮影に加え、Webサイト・アプリの構築・テクニカルディレクションを行う。
		<br><br>
		Web領域においては、モダンウェブアーキテクチャとも呼ばれる、JAMStackでの構築を多く手掛け、従来の一般的なCMSから一線を画す、ユーザー・クライアント・デベロッパーフレンドリーなワークフローに注力している。Web構築においては、ハイパフォーマンスと微細なデザインを意識し、Svelte.jsやVue.jsといったワークフレームを使用することで、さまざまなニーズに対応している。
	</p>
</section>


</main>

<style>

	.about, .about-index, 
	.about-content {position: relative;}

	.about-bg {
		width: 100vw;
		height: 100vh;
		position: fixed;
		top: 0;
		left: 0;
		background-image: url('./image/about.webp');
		background-position: center;
		background-size: 100% 100%;
		z-index: 0;
		filter: brightness(.7) contrast(1.1) saturate(1.1);
	}


	.about-index {
		position: relative;
		min-height: 100vh;
		min-height: 100svh;
		padding-top: 12rem;
		padding-bottom: 12rem;
	}
	.about-index h1 {margin-bottom: .5rem;}
	.about-index .email {
		position: relative;
		margin-top: 1rem;
	}
	.about-index .email::after {
		width: 100%;
		height: .5px;
		background-color: var(--backgroundColor);
		display: block;
		content: '';
		position: absolute;
		top: auto;
		bottom: -.25rem;
	}

	.about-index .tagline {
		position: absolute;
		top: auto;
		bottom: 8rem;
	}
	
	.about-content {padding-bottom: 12rem;}
	.about-content p {width: 90%;}
	.about-content img.portrait {
		width: 95vw;
		margin: 4rem 0 1.5rem;
		aspect-ratio: 1;
		object-position: center 15%;
		filter: contrast(1.05) brightness(1.05);
	}
	.about-content h5 {margin: .5rem 0 1.5rem;}
	
</style>
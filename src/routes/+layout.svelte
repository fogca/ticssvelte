<script>
//import sal from 'sal.js';
import { page } from '$app/stores';
import PageTransition from '../components/PageTransition.svelte';  
import Header from '../components/Header.svelte';
import Footer from '../components/Footer.svelte';

/** @type {import('./$types').LayoutData} */
    export let data;
    $: currentRoute = $page.url.pathname; 
</script>
  
<svelte:head>
  <link rel="stylesheet" href="../css/base.css">
  <link rel="stylesheet" href="../css/main.css">
  <link rel="stylesheet" href="https://use.typekit.net/frp6udl.css">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/sal.js@0.8.5/dist/sal.css">
  <script src="https://webfont.fontplus.jp/accessor/script/fontplus.js?kqbwQX--jVA%3D&box=Bgw26CBfLFk%3D&aa=1&ab=2"></script>
  <script src="https://unpkg.com/colcade@0/colcade.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/sal.js@0.8.5/dist/sal.min.js"></script>
  
  <script>
    sal();
  </script>
</svelte:head>
  
  <div 
    class:Index={currentRoute === "/"} 
    class:Projects={currentRoute === "/projects"}
    class:About={currentRoute === "/about"} 
    class:Contact={currentRoute === "/contact"}
  >
    <Header></Header>
  
    <!-- 2. Pass the `url` prop to the `PageTransition` component, causing it to re-render when the page changes -->
    <PageTransition pathname={data.pathname}>
      <slot />
    </PageTransition>
    
    <Footer></Footer>
  
  </div>
  
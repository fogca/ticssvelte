<script>
    //import { browser } from '$app/environment';
    import { onMount } from 'svelte';
    import Logo from './Logo.svelte';
    import Icons from './Icons.svelte';

    /*
    onMount(() => {
        const headerJS = document.querySelector(".SvelteHeader");
        function scrollCheck() {
        	let rect = headerJS.getBoundingClientRect();
        	let y = rect.top + window.pageYOffset;
        	if (y < 500) {
        	    headerJS.classList.add('top');
        	} else {
        	    headerJS.classList.remove('top');
        	}
        }
    });
    */


    /*
    onMount(() => {
        
        window.addEventListener('scroll', scrollCheck);
        scrollCheck();
        
    });
    */




    /*
    if (browser) {
        window.addEventListener( "scroll", function() {
    	    let header = document.querySelector("header");
    	    let rect = header.getBoundingClientRect();
    	    let y = rect.top + window.pageYOffset;
    	    if (y < 500) {
    	        header.classList.add('top');
    	    } else {
    	        header.classList.remove('top');
    	    }
	    });
    }
    */
	
</script>

<!--<svelte:window on:scroll={scrollCheck} />-->

<div class="SvelteHeader">

    <header class="top">
        <div class="head">
            <div class="logo"><Logo /></div>
            <div class="line"></div>
        </div>
    </header>

    <nav class="fixer">
        <div class="button h6">Menu</div>
        <div class="icons-wrapper">
            <Icons />
        </div>
    </nav>
    
</div>



<style>


    nav.fixer {
        position: fixed;
        z-index: 99;
        top: 0;
        left: auto;
        right: 0;
        width: auto;
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 1.5rem 4.5vw 5rem;
    }


    header {
        width: 100%;
        padding: 2rem 5vw 0;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 99;
        transition: 2.5s ease-in-out;
        mix-blend-mode: difference;
        filter: contrast(2) brightness(1.5);
    }
    header.top {
        transition: 2.5s ease-in-out;
        mix-blend-mode: normal;
    }
    header .logo {display: block;}
    header .line {
        width: 100vw;
        height: .05px;
        background-color: #aaa;
        opacity: .25;
        margin-left: -5vw;
        margin-top: 1.5rem;
    }
    
    header.top .logo path, header.top .logo rect {fill: white;}
</style>

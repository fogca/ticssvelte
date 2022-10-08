<script>
    import { browser } from '$app/environment';
    import { onMount } from 'svelte';
    import { slide } from 'svelte/transition';
    import Logo from './Logo.svelte';
    import Menu from './Menu.svelte';
    import Icons from './Icons.svelte';

	let isExpanded = false
	function clickHandler() {
		isExpanded = !isExpanded  
    }

    /*
    onMount() {

    function handle(event) {
        event.preventDefault();
    };

    if (isExpanded = true) {
        document.addEventListener('touchmove', handle, { passive: false });
        document.addEventListener('mousewheel', handle, { passive: false });
    } else {
        document.removeEventListener('touchmove', handle, { passive: false });
        document.removeEventListener('mousewheel', handle, { passive: false });
    }
    }
    */

    

    



        /*
        if (isExpanded = false) {
            document.addEventListener('touchmove', clickHandler, { passive: false });
            document.addEventListener('mousewheel', clickHandler, { passive: false });
        } else {
            document.removeEventListener('touchmove', clickHandler);
            document.removeEventListener('wheel', clickHandler);
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
        
        <div class="button h6" on:click|preventDefault={clickHandler}>
            Menu
        </div>
        <div class="icons-wrapper">
            <Icons />
        </div>
    </nav>

    {#if isExpanded}
    <Menu />
    {/if}
    
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
        z-index: 96;
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

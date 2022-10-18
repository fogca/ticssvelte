<script>
    import { slide } from 'svelte/transition';
    import Saos from "saos";
    import Logo from './Logo.svelte';
    import Menu from './Menu.svelte';
    import Icons from './Icons.svelte';

    let clicked = false;
	let isExpanded = false
	function clickHandler() {
		isExpanded = !isExpanded  
    }
	
</script>

<!--<svelte:window on:scroll={scrollCheck} />-->

<div class="SvelteHeader">

    <header class="top">
        <div class="head">
            <Saos animation={"header-logo 1.5s cubic-bezier(0.3, 0, 0.7, 1) both"} once={true}>
                <a href="/" class="logo"><Logo /></a>
            </Saos>
            <div class="line"></div>
        </div>
    </header>

    <nav class="fixer">
        <Saos animation={"header-logo 1.5s cubic-bezier(0.3, 0, 0.7, 1) both"} once={true}>
        <div class="button menu-button h6" 
            class:clicked={clicked} 
            on:click="{() => clicked = !clicked}"
            on:click|preventDefault={clickHandler}
        >
            <div>Menu</div>
            <span></span>
            <span></span>
        </div>
        </Saos>

        <div class="icons-wrapper">
            <Saos animation={"header-icon 1.5s cubic-bezier(0.3, 0, 0.7, 1) both"} once={true}>
                <Icons />
            </Saos>
        </div>
    </nav>

    {#if isExpanded}
    <Menu />
    {/if}
    
</div>



<style>

@keyframes -global-header-logo {
	0% {transform: translateY(-.25rem);opacity: 0;}
	100% {transform: translateX(0);opacity: 1;}
}


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

    .fixer .button.menu-button {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .fixer .button.menu-button div {
        margin-bottom: -.1rem;
        color: var(--backgroundColor);
    }
    .fixer .button.menu-button span {
        display: block;
        width: 3rem;
        height: 0.8px;
        background-color: var(--backgroundColor);
        transition: .4s ease-in-out;
    }
    .fixer .button.menu-button span:nth-of-type(2) {margin-top: .4rem;}

    .fixer .button.menu-button.clicked span:nth-of-type(1) {
        margin: 0.3rem 0 0;
        transform: rotate(12deg);
    }
    .fixer .button.menu-button.clicked span:nth-of-type(2) {
        transform: rotate(-12deg);
        margin-top: -0.1rem;
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

    @media screen and (min-width:720px) {
        
        
        header {
            width: 100%;
            padding: 3.5rem 10vw 0;
        }

        header .line {
            margin-left: -10vw;
            margin-top: 2.5rem;
        }

    }
</style>

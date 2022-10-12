<script>
import Logo from './Logo.svelte'
import { fade, slide, fly } from 'svelte/transition';
import { expoInOut, expoOut } from 'svelte/easing';

</script>

<div class="Menu" 
    in:fade={{ delay: 0, duration: 1500, easing: expoInOut }}
    out:fade={{ delay: 0, duration: 1000, easing: expoOut }}
>   
    <a href="/" class="menu-logo"><Logo /></a>
    
    <ul class="links">
        <li in:fly={{ y: 10, delay: 0, duration: 2500, easing: expoInOut }}><a href="/projects">Projects →</a></li>
        <li in:fly={{ y: 10, delay: 50, duration: 2500, easing: expoInOut }}><a href="/about">About →</a></li>
        <li in:fly={{ y: 10, delay: 100, duration: 2500, easing: expoInOut }}><a href="/words">Words →</a></li>
        <li in:fly={{ y: 10, delay: 150, duration: 2500, easing: expoInOut }}><a href="/">Photography →</a></li>

        <li in:fly={{ y: 10, delay: 200, duration: 2500, easing: expoInOut }} class="contact">
            <div class="h6">Contact</div>
            <a href="/">hi@takumiisobe.com</a>
        </li>
        <li in:fly={{ y: 10, delay: 250, duration: 2500, easing: expoInOut }} class="contact">
            <div class="h6">Instagram</div>
            <a href="/">@takumiisobe_</a>
        </li>
    </ul>
    <div class="menu-bg"></div>
</div>

<style>

.Menu {
    width: 100vw;
    height: 100vh;
    padding-top: 2rem;
    padding-left: 5vw;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 98;
}
.menu-bg {
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background-image: url('../image/menu_bg.webp');
    background-size: cover;
    background-position: center;
    filter: brightness(.8) contrast(1.1);
    z-index: 9;
}

.menu-logo, .Menu .links {position: relative;z-index: 10;}

.Menu * {color: var(--backgroundColor);}

ul.links {margin-top: 6rem;}
ul.links li {margin-bottom: .2rem;}
ul.links li:nth-of-type(4) {margin-bottom: 4rem;}
ul.links li.contact {margin-bottom: 2.4rem;}
ul.links li a {font-size: 2.4rem;}
ul.links li.contact a {font-size: 1.8rem;}


@media screen and (min-width: 720px) {

    .Menu {
        padding-top: 3.5rem;
        padding-left: 10vw;
    }
    .menu-bg {background-image: url('../image/bg-pc.webp');}
    
    .Menu ul.links li a {
        font-size: 4.8rem;
        margin-bottom: -1rem;
    }
    .Menu ul.links li.contact a {font-size: 2.8rem;}
}

</style>
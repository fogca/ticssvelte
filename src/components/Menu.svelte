<script>
import Logo from './Logo.svelte'
import { fade, slide, fly } from 'svelte/transition';
import { expoInOut, expoOut } from 'svelte/easing';

</script>

<div class="Menu" 
    in:fade={{ delay: 0, duration: 1500, easing: expoInOut }}
    out:fade={{ delay: 0, duration: 1000, easing: expoOut }}
>   
    <a href="/"><Logo /></a>
    
    <ul class="links">
        <li in:fly={{ y: 10, delay: 0, duration: 2500, easing: expoInOut }}><a href="/#index-projects">Projects →</a></li>
        <li in:fly={{ y: 10, delay: 50, duration: 2500, easing: expoInOut }}><a href="/about">About →</a></li>
        <li in:fly={{ y: 10, delay: 100, duration: 2500, easing: expoInOut }}><a href="/words">Words →</a></li>
        <li in:fly={{ y: 10, delay: 150, duration: 2500, easing: expoInOut }}><a href="/photography">Photography →</a></li>

        <li in:fly={{ y: 10, delay: 200, duration: 2500, easing: expoInOut }} class="contact">
            <div class="h6">Contact</div>
            <a href="/photography">hi@takumiisobe.com</a>
        </li>
        <li in:fly={{ y: 10, delay: 250, duration: 2500, easing: expoInOut }} class="contact">
            <div class="h6">Instagram</div>
            <a href="/photography">@takumiisobe_</a>
        </li>
    </ul>
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
    background-image: url('../image/menu.webp');
    background-size: cover;
    background-position: center;
    z-index: 98;
}

.Menu * {color: var(--backgroundColor);}

ul.links {margin-top: 6rem;}
ul.links li {margin-bottom: .2rem;}
ul.links li:nth-of-type(4) {margin-bottom: 4rem;}
ul.links li.contact {margin-bottom: 2.4rem;}
ul.links li a {font-size: 2.4rem;}
ul.links li.contact a {font-size: 1.8rem;}

</style>
<script>
import Logo from './Logo.svelte'
</script>

<footer>
    <div class="l-line"></div>
    <div class="footer-logo">
        <Logo />
    </div>
    
    <ul class="links">
        <li><a href="/#index-projects">Projects →</a></li>
        <li><a href="/about">About →</a></li>
        <li><a href="/words">Words →</a></li>
        <li><a href="/photography">Photography →</a></li>
    </ul>
</footer>


<style>
    footer {
        width: 100vw;
        padding: 8rem 5vw 4rem;
        background-color: var(--darkColor);
    }
    footer * {
        color: var(--backgroundColor);
        fill: var(--backgroundColor);
    }
    footer .footer-logo {margin-bottom: 8rem;}
    footer ul.links li {margin-bottom: 2rem;}
    footer ul.links li a {font-size: 2.4rem;}
</style>
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

        <li class="contact">
            <div class="h6">Contact</div>
            <a href="/photography">hi@takumiisobe.com</a>
        </li>
        <li class="contact">
            <div class="h6">Instagram</div>
            <a href="/photography">@takumiisobe_</a>
        </li>
    </ul>
    <div class="h6 copyright">©2022 TICS<br> 
        Takumi Isobe Creative Studio</div>
</footer>


<style>
    footer {
        width: 100vw;
        padding: 8rem 5vw 5rem;
        background-color: var(--darkColor);
    }
    footer * {
        color: var(--backgroundColor);
        fill: var(--backgroundColor);
    }
    footer .footer-logo {margin-bottom: 8rem;}
    
    ul {margin-bottom: 12rem;}

    footer ul.links li {margin-bottom: 2rem;}
    footer ul.links li:nth-of-type(4) {margin-bottom: 4rem;}
    footer ul.links li.contact {margin-bottom: 2.4rem;}
    footer ul.links li a {font-size: 2.4rem;}
    footer ul.links li.contact a {font-size: 1.8rem;}
</style>
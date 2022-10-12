<script>
import Logo from './Logo.svelte'
</script>

<footer>
    <div class="l-line"></div>
    <div class="footer-logo">
        <Logo />
    </div>
    
    <ul class="links">
        <li><a href="/projects">Projects →</a></li>
        <li><a href="/about">About →</a></li>
        <li><a href="/words">Words →</a></li>
        <li><a href="/">Photography →</a></li>

        <li class="contact">
            <div class="h6">Contact</div>
            <a href="/">hi@takumiisobe.com</a>
        </li>
        <li class="contact">
            <div class="h6">Instagram</div>
            <a href="/">@takumiisobe_</a>
        </li>
    </ul>
    <div class="h6 copyright">©2022 TICS<br> 
        Takumi Isobe Creative Studio</div>
</footer>


<style>
    footer {
        width: 100vw;
        padding: 0 5vw 5rem;
        background-color: var(--darkColor);
    }
    footer * {
        color: var(--backgroundColor);
        fill: var(--backgroundColor);
    }
    footer .l-line {
        margin-bottom: 6rem;
        margin-left: -5vw;
    }
    footer .footer-logo {margin-bottom: 5rem;}
    
    ul {margin-bottom: 12rem;}

    footer ul.links li {margin-bottom: .2rem;}
    footer ul.links li:nth-of-type(4) {margin-bottom: 4rem;}
    footer ul.links li.contact {margin-bottom: 2.4rem;}
    footer ul.links li a {font-size: 2.4rem;}
    footer ul.links li.contact a {font-size: 1.8rem;}


    @media screen and (min-width: 720px) {


        footer {
            padding: 0 10vw 5rem;
        }

    }

</style>
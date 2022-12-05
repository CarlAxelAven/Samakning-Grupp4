//js kod för att köra headern
class TheHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <header>
            <nav>
            <a class="burger-nav"></a>
            <ul class="navbar">
                <li><a href="konto.html" class="nav-link">Skapa konto</a></li>             
                <li><a href="reg.html" class="nav-link">Registrering av bokbara tider</a></li>    
                <li><a href="bokn.html" class="nav-link">Bokning av resa</a></li>
                <li><a href="#news" class="nav-link">Kontakt</a></li>
            </ul>
            <div class="hamburger">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </div>
            </nav>
        </header> 
        `
    }
}
customElements.define('the-header', TheHeader)
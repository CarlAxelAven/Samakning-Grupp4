//js kod för att köra headern
class TheHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <header>
            <nav>
            <a class="burger-nav"></a>
            <ul class="navbar">
                <li><a href="konto.html">Skapa konto</a></li>             
                <li><a href="reg.html">Registrering av bokbara tider</a></li>    
                <li><a href="bokn.html">Bokning av resa</a></li>
                <li><a href="#news">Kontakt</a></li>
            </ul>
            </nav>
        </header> 
        `
    }
}
customElements.define('the-header', TheHeader)
import Sugestao from "./Sugestao"

export default function SideBar(){
    return(
        <div class="sidebar">
                <div class="usuario">
                    <img src="assets/img/catanacomics.svg" />
                    <div class="texto">
                        <strong>catanacomics</strong>
                        Catana
                    </div>
                </div>

                <div class="sugestoes">
                    <div class="titulo">
                        Sugestões para você
                        <div>Ver tudo</div>
                    </div>
            
                    <Sugestao img="assets/img/bad.vibes.memes.svg" nome="bad.vibes.memes" razao="Segue você"/>
                    <Sugestao img="assets/img/chibirdart.svg" nome="chibirdart" razao="Segue você"/>
                    <Sugestao img="assets/img/razoesparaacreditar.svg" nome="razoesparaacreditar" razao="Novo no Instagram"/>
                    <Sugestao img="assets/img/adorable_animals.svg" nome="adorable_animals" razao="Segue você"/>
                    <Sugestao img="assets/img/smallcutecats.svg" nome="smallcutecats" razao="Segue você"/>
                </div>

                <div class="links">
                    Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
                </div>

                <div class="copyright">
                    © 2021 INSTAGRAM DO FACEBOOK
                </div>
            </div>
    )
}
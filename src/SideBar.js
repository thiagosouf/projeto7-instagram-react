import Sugestao from "./Sugestao"
import Usuario from "./Usuario"

export default function SideBar(){
    return(
        <div class="sidebar">
                <Usuario src="assets/img/catanacomics.svg" nickname="catanacomics" nome="Catana"/>
                <div class="sugestoes">
                    <div class="titulo">
                        Sugestões para você
                        <div>Ver tudo</div>
                    </div>
                    <Sugestao />
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
import Story from "./Story"
import Post from "./Post"

export default function Corpo() {
    return (

        <div class="corpo">
            <div class="esquerda">
                <div class="stories">

                    <Story src="assets/img/9gag.svg" usuario="9gag" />
                    <Story src="assets/img/meowed.svg" usuario="meowed" />
                    <Story src="assets/img/barked.svg" usuario="barked" />
                    <Story src="assets/img/nathanwpylestrangeplanet.svg" usuario="nathanwpylestrangeplanet" />
                    <Story src="assets/img/wawawicomics.svg" usuario="wawawicomics" />
                    <Story src="assets/img/respondeai.svg" usuario="respondeai" />
                    <Story src="assets/img/filomoderna.svg" usuario="filomoderna" />
                    <Story src="assets/img/memeriagourmet.svg" usuario="memeriagourmet" />

                    <div class="setinha">
                        <ion-icon name="chevron-forward-circle"></ion-icon>
                    </div>
                </div>

                <div class="posts">
                    <Post src="assets/img/meowed.svg" usuario="meowed" conteudo="assets/img/gato-telefone.svg" curtidaImg="assets/img/respondeai.svg" curtidaNome="respondeai" curtidaQnt="101.523" />
                    <Post src="assets/img/barked.svg" usuario="barked" conteudo="assets/img/dog.svg" curtidaImg="assets/img/adorable_animals.svg" curtidaNome="adorable_animals" curtidaQnt="99.159" />
                </div>
            </div>

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
                    {/* <Sugestao /> */}
                    <div class="sugestao">
                        <div class="usuario">
                            <img src="assets/img/bad.vibes.memes.svg" />
                            <div class="texto">
                                <div class="nome">bad.vibes.memes</div>
                                <div class="razao">Segue você</div>
                            </div>
                        </div>

                        <div class="seguir">Seguir</div>
                    </div>

                    <div class="sugestao">
                        <div class="usuario">
                            <img src="assets/img/chibirdart.svg" />
                            <div class="texto">
                                <div class="nome">chibirdart</div>
                                <div class="razao">Segue você</div>
                            </div>
                        </div>

                        <div class="seguir">Seguir</div>
                    </div>

                    <div class="sugestao">
                        <div class="usuario">
                            <img src="assets/img/razoesparaacreditar.svg" />
                            <div class="texto">
                                <div class="nome">razoesparaacreditar</div>
                                <div class="razao">Novo no Instagram</div>
                            </div>
                        </div>

                        <div class="seguir">Seguir</div>
                    </div>

                    <div class="sugestao">
                        <div class="usuario">
                            <img src="assets/img/adorable_animals.svg" />
                            <div class="texto">
                                <div class="nome">adorable_animals</div>
                                <div class="razao">Segue você</div>
                            </div>
                        </div>

                        <div class="seguir">Seguir</div>
                    </div>

                    <div class="sugestao">
                        <div class="usuario">
                            <img src="assets/img/smallcutecats.svg" />
                            <div class="texto">
                                <div class="nome">smallcutecats</div>
                                <div class="razao">Segue você</div>
                            </div>
                        </div>

                        <div class="seguir">Seguir</div>
                    </div>
                </div>

                <div class="links">
                    Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
                </div>

                <div class="copyright">
                    © 2021 INSTAGRAM DO FACEBOOK
                </div>
            </div>
        </div>
    )
}
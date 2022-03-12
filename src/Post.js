function Post(props) {
    const { src, usuario, conteudo, curtidaImg, curtidaNome, curtidaQnt } = props
    return (
        <div class="post">
            <div class="topo">
                <div class="usuario">
                    <img src={src} alt={usuario} />

                    {usuario}
                </div>
                <div class="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div class="conteudo">

                <img src={conteudo} alt="postagem" />
            </div>

            <div class="fundo">
                <div class="acoes">
                    <div>
                        <ion-icon name="heart-outline"></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name="bookmark-outline"></ion-icon>
                    </div>
                </div>

                <div class="curtidas">

                    <img src={curtidaImg} />
                    <div class="texto">
                        Curtido por <strong>{curtidaNome}</strong> e <strong>outras {curtidaQnt} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default function Posts() {
    const posts = [
        { src: "assets/img/meowed.svg", usuario: "meowed", conteudo: "assets/img/gato-telefone.svg", curtidaImg: "assets/img/respondeai.svg", curtidaNome: "respondeai", curtidaQnt: "101.523" },
        { src: "assets/img/barked.svg", usuario: "barked", conteudo: "assets/img/dog.svg", curtidaImg: "assets/img/adorable_animals.svg", curtidaNome: "adorable_animals", curtidaQnt: "99.159" }]
        return(
            <>
            {posts.map(dados =>
            <Post src={dados.src} usuario={dados.usuario} conteudo={dados.conteudo} curtidaImg={dados.curtidaImg} curtidaNome={dados.curtidaNome} curtidaQnt={dados.curtidaQnt} />
            )} 
            </>
        )
    }



export default function Post(props) {
    return (
        <div class="post">
            <div class="topo">
                <div class="usuario">
                    <img src={props.src} /> 
                    {/* "assets/img/meowed.svg" */}
                    {/* meowed */}
                    {props.usuario}
                </div>
                <div class="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div class="conteudo">
                {/* <img src="" /> */}
                <img src={props.conteudo} />
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
                    {/* <img src="" /> */}
                    <img src={props.curtidaImg} />
                    <div class="texto">
                        Curtido por <strong>{props.curtidaNome}</strong> e <strong>outras {props.curtidaQnt} pessoas</strong>
                        {/* Curtido por <strong></strong> e <strong>outras 101.523 pessoas</strong> */}
                    </div>
                </div>
            </div>
        </div>
    )
}
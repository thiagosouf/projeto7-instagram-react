export default function Usuario(props){
    return(
        <div class="usuario">
                    <img src={props.src} />
                    <div class="texto">
                        <strong>{props.nickname}</strong>
                        {props.nome}
                    </div>
                </div>
    )
}
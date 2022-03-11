export default function Sugestao(props) {
    const{img, nome, razao} = props
    return (
        <div class="sugestao">
            <div class="usuario">
                <img src={img} />
                <div class="texto">
                    <div class="nome">{nome}</div>
                    <div class="razao">{razao}</div>
                </div>
            </div>

            <div class="seguir">Seguir</div>
        </div>
    )
}
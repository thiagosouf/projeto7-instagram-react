function Sugestao(props) {
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

export default function Sugestoes(){
    const sugestoes = [
    {img:"assets/img/bad.vibes.memes.svg", nome:"bad.vibes.memes", razao:"Segue você"},
    {img:"assets/img/chibirdart.svg", nome:"chibirdart", razao:"Segue você"},
    {img:"assets/img/razoesparaacreditar.svg", nome:"razoesparaacreditar", razao:"Novo no Instagram"},
    {img:"assets/img/adorable_animals.svg", nome:"adorable_animals", razao:"Segue você"},
    {img:"assets/img/smallcutecats.svg", nome:"smallcutecats", razao:"Segue você"}
    ]

    return(
        <>
        {sugestoes.map(dados => <Sugestao img={dados.img} nome={dados.nome} razao={dados.razao}/>)}
        </>
    )
}
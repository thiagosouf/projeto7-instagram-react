function Story(props) {
    const{src,usuario} = props
    return (
        <div class="story">
            <div class="imagem">
                <img src={src} alt={usuario}/>
            </div>
            <div class="usuario">
                {usuario}
            </div>
        </div>
    )
}

export default function Stories(){
    const stories = [{ src: "assets/img/9gag.svg", usuario: "9gag" },
    {src: "assets/img/meowed.svg", usuario: "meowed"},
    {src: "assets/img/barked.svg", usuario: "barked"},
    {src: "assets/img/nathanwpylestrangeplanet.svg", usuario: "nathanwpylestrangeplanet"},
    {src: "assets/img/wawawicomics.svg", usuario: "wawawicomics"},
    {src: "assets/img/respondeai.svg", usuario: "respondeai"},
    {src: "assets/img/filomoderna.svg", usuario: "filomoderna"},
    {src: "assets/img/memeriagourmet.svg", usuario: "memeriagourmet"}]
    
    return (
        <>
        {stories.map(dados => <Story src={dados.src} usuario={dados.usuario} />)}
        </>
    )
    }
    
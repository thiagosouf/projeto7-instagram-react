import Story from "./Story"
import Post from "./Post"

export default function Esquerda() {
    return (
        <div class="esquerda">
            <div class="stories">
                <Story />
                {/* <Story src="assets/img/9gag.svg" usuario="9gag" />
                <Story src="assets/img/meowed.svg" usuario="meowed" />
                <Story src="assets/img/barked.svg" usuario="barked" />
                <Story src="assets/img/nathanwpylestrangeplanet.svg" usuario="nathanwpylestrangeplanet" />
                <Story src="assets/img/wawawicomics.svg" usuario="wawawicomics" />
                <Story src="assets/img/respondeai.svg" usuario="respondeai" />
                <Story src="assets/img/filomoderna.svg" usuario="filomoderna" />
                <Story src="assets/img/memeriagourmet.svg" usuario="memeriagourmet" /> */}

                <div class="setinha">
                    <ion-icon name="chevron-forward-circle"></ion-icon>
                </div>
            </div>

            <div class="posts">
                <Post />
                {/* <Post src="assets/img/meowed.svg" usuario="meowed" conteudo="assets/img/gato-telefone.svg" curtidaImg="assets/img/respondeai.svg" curtidaNome="respondeai" curtidaQnt="101.523" />
                <Post src="assets/img/barked.svg" usuario="barked" conteudo="assets/img/dog.svg" curtidaImg="assets/img/adorable_animals.svg" curtidaNome="adorable_animals" curtidaQnt="99.159" /> */}
            </div>
        </div>
    )
}

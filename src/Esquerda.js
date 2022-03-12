import Story from "./Story"
import Post from "./Post"

export default function Esquerda() {
    return (
        <div class="esquerda">
            <div class="stories">
                <Story />
                <div class="setinha">
                    <ion-icon name="chevron-forward-circle"></ion-icon>
                </div>
            </div>

            <div class="posts">
                <Post />
            </div>
        </div>
    )
}

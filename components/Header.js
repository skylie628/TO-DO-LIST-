
import { connect } from "../store.js";
import html from "../core.js"
let connection = connect()
function Header(pros){
    return html`
    <header class="header">
    <h1>todos</h1>
    <input class="new-todo" placeholder="What needs to be done?" onkeyup= "event.keyCode === 13 && this.value.trim() && dispatch('ADD',this.value.trim())" autofocus>
</header>
    `
}
export default connection(Header)
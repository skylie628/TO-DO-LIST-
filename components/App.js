
import { connect } from "../store.js";
import html from "../core.js"
import Header from "./Header.js"
import Main from "./Main.js"
import Footer from "./Footer.js"
let connection = connect()
function App(pros){
    return html`
    <section class="todoapp">
    ${Header()}
    ${Main()}
    ${Footer()}
    </section>
    `
}
export default connection(App)

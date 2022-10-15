
import { connect } from "../store.js";
import html from "../core.js"
let connection = connect()
function Main(pros){
    return html`
    <section class="main">
    <input id="toggle-all" class="toggle-all" type="checkbox" onclick = dispatch('TOGGLEALL',this.checked) ${pros.work && pros.work.every(pros.filters['Completed'])&&'checked'}>
    <label for="toggle-all">Mark all as complete</label>
    <ul class="todo-list">
    ${
        pros.work && pros.work.map((element,index) => {
            console.log(element.editIndex)
            return html` ${pros.filters[pros.mode](element) && `<li class= ${element.check&&"completed"} ${pros.editIndex == index && 'editing'} >
            <div class="view">
                <input class="toggle" type="checkbox" ${element.check && 'checked'} onclick = "dispatch('TOGGLE',${index})">
                <label ondblclick = dispatch('STARTEDIT',${index})>${element.duty}</label>
                <button class="destroy" onclick = "dispatch('REMOVE',${index})"></button>
            </div>
            <input class="edit" value=${element.duty}>
        </li>`}`
        }).join('') 
    }
    </ul>
</section>
    `
}
export default connection(Main)

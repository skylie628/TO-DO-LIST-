
import { connect } from "../store.js";
import html from "../core.js"
let connection = connect()
function Footer(pros){
    return html`
    <footer class="footer">
				<span class="todo-count"><strong>${pros.work && pros.work.filter(pros.filters['Active']).length}</strong> item left</span>
				<ul class="filters">
					${Object.keys(pros.filters).map((mode)=>{
						return `<li>
						<a class="${pros.mode === mode && 'selected'}" onclick = "dispatch('SWITCHMODE','${mode}')" href="#/">${mode}</a>
					    </li>`
					}).join('')}
				</ul>
				<button class="clear-completed" onclick = dispatch('CLEARCOMPLETED')>Clear completed</button>
			</footer>
    `
}
export default connection(Footer)

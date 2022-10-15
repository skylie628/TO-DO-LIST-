
export default function html([first,...strings],...values){
    return values.reduce(
        (acc,cur)=>acc.concat(cur,strings.shift()),
        [first]
    ).filter(x=> x && x != true || x === 0).join('')
}
export function createStore(reducer){
let roots = new Map()
let state = reducer()
function render(){
    for (var [component,root]  of roots){
        let comp = component(state)
        root.innerHTML = comp
    }
}

return {
    attach(component,root){
        roots.set(component,root)
        render()
    },
    connect(selector = state=> state) { 
        return component => (props,...args) => component(Object.assign({},props,selector(state),...args))
    },
    dispatch(action,...args){
        state = reducer(state,action,args)
        render()
    }

}

}
import storage from "./utils/storage.js"
var init = {
    work: storage.get()||[],
    mode: 'All',
    editIndex: null,
    filters : {
        Active : (item) => !item.check,
        Completed : (item) => item.check,
        All : item => true
    }

}
var actionlist = {
    ADD(state,action,args){
        state.work.push({duty: args[0],check:false})
        storage.set(state.work)
        return state
    },
    REMOVE(state,action,args){
        state.work.splice(args[0],1)
        storage.set(state.work)
        return state
    },
    TOGGLE(state,action,args){
        state.work[args[0]].check = !state.work[args[0]].check 
        storage.set(state.work)
        return state
    },
    SWITCHMODE(state,action,args){
        state.mode = args[0]
        return state
        },
    CLEARCOMPLETED(state,action,args){
        state.work = state.work.filter(state.filters['Active'])
        storage.set(state.work)
        return state
    },
    TOGGLEALL(state,action,args){
        state.work.forEach(element => {
            element.check = args[0]
        });
        storage.set(state.work)
        return state
    },
    STARTEDIT(state,action,args){
        state.editIndex = args[0]
        return state
     }

}
function reducer(state = init,action,args){
    return actionlist[action]&&actionlist[action](state,action,args) ||state

}
export default reducer
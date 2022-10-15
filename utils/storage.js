const STORAGEKEY = 'TODOS'

export default {
    set(todoData){
        localStorage.setItem(STORAGEKEY,JSON.stringify(todoData))
    },
    get(){
        return JSON.parse(localStorage.getItem(STORAGEKEY))
    }
}
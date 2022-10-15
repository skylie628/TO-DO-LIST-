export default function logger(reducer){
    return (prestate,action,args)=>{
        console.log(prestate)
        console.log(action)
        let nextstate = reducer(prestate,action,args)
        console.log(nextstate)
        return nextstate
    }
    }
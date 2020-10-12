export const cartReducer=(state,action)=>{
    const item=action.payload
    const ind = state.indexOf(item)
    const newItem=state[ind]

    switch (action.type) {
        case "Increment":if( state.indexOf(item)==-1){item.count=1; return [...state,item]}
        else {

            newItem.count++;
            state.splice(ind,1,newItem)
            return (state)
        }
        case "Decrement":
            if (state[ind].count==1) {state.splice(ind,1); return state}
            else {            newItem.count--; state.splice(ind,1,newItem)
                return (state);
            }
        case "Remove":state.splice(ind,1); return state;
        default:return state

    }
}
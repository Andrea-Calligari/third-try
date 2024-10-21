// la funzione reduce prende due argomenti lo STATE corrente e ACTION che descrive cosa muta nello stato e restituisce il nuovo stato
const reducer = (state, action) => {
    console.log(state, action);
    
    // primo metodo con switch
    switch (action.type) {
        case 'open':
            return { ...state, isModalOpen: true }

        case 'close':
            return { ...state, isModalOpen: false }

            default: return state
    }
    // metodo con if 

    // if (action.type === 'open') {
    //     return {
    //         ...state,
    //         isModalOpen: true,
    //     }
    // }
    // else if (action.type === 'close') {
    //     return {
    //         ...state,
    //         isModalOpen: false,
    //     }
    // }
    // return state;

}
export default reducer
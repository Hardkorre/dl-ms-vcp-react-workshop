// Function that takes in a state and action and outputs a modified copy of the state
const DEFAULT_STATE = {
    messages: []
};

export default function(state = DEFAULT_STATE, action) {
    
    switch(action.type) {
        case 'ADD_MESSAGE': 
            return {
                ...state, messages: state.messages.concat([{ 
                    author: action.author, 
                    text: action.text, 
                    date: action.date }])
            };   
            default:
                return state;     
    }

    return state;
}
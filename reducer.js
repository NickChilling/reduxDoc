import {VisibilityFilters, SET_VISIBILITY_FILTER, ADD_TODO, TOGGLE_TODO} from './action';

const initialState = {
    visibilityFilter: VisibilityFilters.SHOW_ALL,
    todos:[]
};

function todoApp(state=initialState, action) {
    switch(action.type) {
        case SET_VISIBILITY_FILTER:
            return Object.assign({},state,{
                visibilityFilter:action.filter
            })
        case ADD_TODO:
            return Object.assign({},state,{
                todos:[
                    ...state.todos,
                    {
                        text: action.text,
                        completed: false
                    }
                ]
            })
        case TOGGLE_TODO:
            return Object.assign({},state,{
                todos:
                    state.todos.map((todo,indx)=>{
                        if(indx===action.index){
                            return Object.assign({},todo,{
                                completed:!todo.completed})
                            }
                        return todo;
            })}
            );
        default:
            return state;
    }
}

const {SHOW_ALL} = VisibilityFilters;
function visibilityFilter(state = SHOW_ALL, action){
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return action.filter;
        default:
            return state;
    }
}

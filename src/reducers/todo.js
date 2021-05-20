import {ADDTODO,REMOVETODO,DONETODO} from '../actions'

//デフォルト引数の設定
const initialState = {
  lists: [
    {
      name: "画面設計",
      complete: false,
      flg: false,  
    },
    {
      name: "詳細設計",
      complete: false,
      flg: false,
    },
  ],
};

export default (state = initialState, action) => {
    switch (action.type) {
    case ADDTODO:
      return {
          lists: [...state.lists, action.todo]
      };
        case DONETODO:
            const doneTodos = [...state.lists]
            doneTodos[action.index].complete=true
            return {
                lists: doneTodos,
            };
    case REMOVETODO:
        const removeTodos = [...state.lists]
        removeTodos.splice(action.index, 1)
        return {
            lists: removeTodos,   
        };

    default:
      return state;
  }
}
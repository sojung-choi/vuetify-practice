
// https://vuex.vuejs.org/en/mutations.html
import Constant from './constant'

export default {
    [Constant.ADD_TODO]: (state, payload) => {
        if (payload.title !== "") {
            state.todolist.push({ title: payload.title, subTitle: payload.subTitle, desc: payload.desc, done: false })
        }
    },
    [Constant.DELETE_TODO]: (state, payload) => {
        if (payload.todo !== "") {
            const num =  state.todolist.findIndex(obj => obj.id === payload);
            state.todolist.splice(num, 1)
        }
    }
}

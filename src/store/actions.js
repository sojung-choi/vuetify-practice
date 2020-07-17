// https://vuex.vuejs.org/en/actions.html

// The login action passes vuex commit helper that we will use to trigger mutations.
export default {
    removeItem: (context, payload)=> {
        return context.commit('deleteTodo', payload);
    }
}

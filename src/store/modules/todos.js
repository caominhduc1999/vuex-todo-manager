import axios from 'axios'

const state = {
    todos: []
};

const getters = {
    allTodos: (state) => state.todos
};

const actions = {
    async fetchTodos({commit}) {
        const response = await axios.get('https://622dca7f8d943bae3486f5a5.mockapi.io/api/todos');
        commit('setTodos', response.data);
    },

    async addTodo({commit}, title){
        const response = await axios.post('https://622dca7f8d943bae3486f5a5.mockapi.io/api/todos', {title, completed: false});
        commit('newTodo', response.data);
    },

    async deleteTodo({commit}, id){
        await axios.delete(`https://622dca7f8d943bae3486f5a5.mockapi.io/api/todos/${id}`);
        commit('removeTodo', id)
    },

    async filterTodo({commit}, e){
        console.log(e)
        //Get selected number
        const limit = parseInt(e.target.options[e.target.options.selectedIndex].innerText);

        const response = await axios.get(`https://622dca7f8d943bae3486f5a5.mockapi.io/api/todos?_limit=${limit}`);
        commit('setTodos', response.data)
    },

    async updateTodo({commit}, updTodo){
        const response = await axios.put(`https://622dca7f8d943bae3486f5a5.mockapi.io/api/todos/${updTodo.id}`, updTodo);
        commit('updateTodo', response.data);
    }
};

const mutations = {
    setTodos: (state, todos) => (state.todos = todos),
    newTodo: (state, todo) => state.todos.unshift(todo),
    removeTodo: (state, id) =>state.todos = state.todos.filter(todo => todo.id !== id),
    updateTodo: (state, updTodo) => {
        const index = state.todos.findIndex(todo => todo.id === updTodo.id)
        if (index !== -1){
            state.todos.splice(index, 1, updTodo)
        }
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}

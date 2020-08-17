<template>
    <div>
        <h3>Todos</h3>
        <div class="legend">
            <span>Double click to change status</span>
            <span>
                <span class="incomplete-box"></span> = Incomplete
                <span class="complete-box"></span> = Complete
            </span>
        </div>
        <div class="todos">
            <div
                v-for="todo in allTodos"
                :key="todo.id"
                class="todo"
                @dblclick="onDblClick(todo)"
                v-bind:class="{'is-complete': todo.completed}">
                {{todo.title}}
                <i @click="deleteTodo(todo.id)" class="fas fa-trash"></i>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex';

    export default {
        name: "Todos",
        methods: {
            ...mapActions(['fetchTodos', 'deleteTodo', 'updateTodo']),
            onDblClick(todo){
                const updTodo = {
                    id: todo.id,
                    title: todo.title,
                    completed: !todo.completed
                };

                this.updateTodo(updTodo);
            }
        },
        computed: mapGetters(['allTodos']),
        created(){
            this.fetchTodos();
        }
    }
</script>

<style scoped>
    .todos{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 1rem;
    }

    .todo{
        border: 1px solid #ccc;
        background: aqua;
        padding: 1rem;
        border-radius: 5px;
        text-align: center;
        position: relative;
        cursor: pointer;
    }

    .i{
        position: absolute;
        bottom: 10px;
        right: 10px;
        cursor: pointer;
    }

    .legend{
        display: flex;
        justify-content: space-around;
        margin-bottom: 1rem;
    }

    .complete-box{
        display: inline-block;
        width: 10px;
        height: 10px;
        background: green;
    }

    .incomplete-box{
        display: inline-block;
        width: 10px;
        height: 10px;
        background: red;
    }

    .is-complete{
        background: orange;
    }

    @media (max-width: 500px) {
        .todos{
            grid-template-columns: 1fr;
        }
    }
</style>

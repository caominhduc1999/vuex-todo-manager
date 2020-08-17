<template>
    <div id="app">
        <div class="container">
            <AddTodo/>
            <FilterTodo/>
            <Todos/>
        </div>
    </div>
</template>

<script>
    import Todos from "./components/Todos";
    import AddTodo from "./components/AddTodo";
    import FilterTodo from "./components/FilterTodo";

    export default {
        name: 'App',
        components: {
            FilterTodo,
            AddTodo,
            Todos,
        }
    }
</script>

<style>
    body {
        font-family: sans-serif;
        line-height: 1.6;
        background: white;
    }

    .container {
        max-width: 1100px;
        margin: auto;
        overflow: auto;
        padding: 0 2rem;
    }
</style>

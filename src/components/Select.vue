<template>
    <div>
        <select v-model="startValue">
            <option v-for="option in options" :value="option.value"> {{ option.text }} </option>
        </select>
        <label>Escolha quantas entradas</label>
    </div>
</template>

<script>
    export default {
        name: 'mySelect',
        props: {
            options: {
                type: Array,
                required: true,
            },
            title: {
                type: String,
            },
            startValue: {
                type: String,
            },
            callback: {
                type: Function,
            },
        },
        mounted: function() {
            let vm = this;
            let select = $(this.$el).children()[0];

            $(select).on('change', function() {
                vm.callback(select.value);
            });
            $(select).material_select();
        },
        destroyed: function() {
            let select = $(this.$el).children()[0];
            $(select).material_select('destroy');
        },
    };
</script>

<style lang="sass">
</style>

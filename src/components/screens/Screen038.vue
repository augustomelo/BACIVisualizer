<template>
    <div class="row">
        <div class="row">
            <img class="materialboxed my-align" src="../../assets/images/screens/screen038.png" />
        </div>
        <div class="row">
            <div class="input-field col s12">
                <select disabled>
                    <option value="empty"></option>
                    <option>Iguais</option>
                    <option>Diferentes</option>
                </select>
                <label for="disabled">As figuras são</label>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Screen038',
        mounted: function() {
            $('select').material_select();
        }

    };
</script>

<style lang="sass" scoped>
.my-align
    margin-left: auto
    margin-right: auto
</style>

<template>
    <div class="row">
        <div class="row">
            <img class="materialboxed my-align" src="../../assets/images/screens/screen021.png" />
        </div>
        <div class="row">
            <div class="input-field col s6">
                <select disabled>
                    <option value="empty"></option>
                    <option>Certo - 1 ponto</option>
                    <option>Errado - 0 pontos</option>
                </select>
                <label for="disabled">Pontuação</label>
            </div>
            <div class="input-field col s6">
                <select disabled>
                    <option value="empty"></option>
                    <option>Relógio digital</option>
                    <option>Começou pelo círculo</option>
                    <option>Começou pelo número 12</option>
                    <option>Começou pelo número 1</option>
                    <option>Começou por outra parte</option>
                    <option>Faltam elementos</option>
                    <option>Há elementos que não estavam na imagem</option>
                </select>
                <label for="disabled">Por onde começou</label>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Screen017',
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

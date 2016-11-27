<template>
    <div class="row">
        <div class="row">
            <img class="materialboxed my-align" src="../../assets/images/screens/screen020.png" />
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
                    <option>Tem menos de 5 pontas</option>
                    <option>Tem mais de 5 pontas</option>
                    <option>Feito com triângulos sobrepostos</option>
                    <option>Faltam partes</option>
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

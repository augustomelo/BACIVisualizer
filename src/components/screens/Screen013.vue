<template>
    <div class="row">
        <div class="row">
            <div class="input-field col s12">
                <select disabled>
                    <option value="empty"></option>
                    <option value="nao">0 pontos - se o testando permanecer passivo</option>
                    <option value="simComAjuda">1 ponto - se o comportamento do testando for duvidoso e ajuda ativa</option>
                    <option value="simComAjuda">2 ponto - se o testando copiar ativamente o movimento solicitado</option>
                </select>
                <label for="disabled">Pontuação</label>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Screen013',
        mounted: function() {
            $('select').material_select();
        }
    };
</script>

<style lang="sass" scoped>
</style>

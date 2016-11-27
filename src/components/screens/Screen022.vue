<template>
    <div class="row">
        <div class="row">
            <div class="col s12">
                <h5>Praxia Ideomotora</h5>
            </div>
        </div>
        <div class="row">
            <div class="input-field col s6">
                <select disabled>
                    <option value="empty"></option>
                    <option>Certo - 1 ponto</option>
                    <option>Errado - 0 ponto</option>
                </select>
                <label for="disabled">Mandar um beijo</label>
            </div>
            <div class="input-field col s6">
                <select disabled>
                    <option value="empty"></option>
                    <option>Certo - 1 ponto</option>
                    <option>Errado - 0 ponto</option>
                </select>
                <label for="disabled">Beber um copo de água</label>
            </div>
        </div>
        <div class="row">
            <div class="input-field col s6">
                <select disabled>
                    <option value="empty"></option>
                    <option>Certo - 1 ponto</option>
                    <option>Errado - 0 ponto</option>
                </select>
                <label for="disabled">Varrer o chão com a vassoura</label>
            </div>
            <div class="input-field col s6">
                <select disabled>
                    <option value="empty"></option>
                    <option>Certo - 1 ponto</option>
                    <option>Errado - 0 ponto</option>
                </select>
                <label for="disabled">Folhear um livro</label>
            </div>
        </div>

        <div class="row">
            <div class="col s12">
                <h5>Sensibilidade à Inferências</h5>
            </div>
        </div>
        <div class="row">
            <div class="input-field col s6">
                <select disabled>
                    <option value="empty"></option>
                    <option>3 pontos – o testando acertou toda a sequência</option>
                    <option>2 pontos – o testando apresentou até 2 erros na sequência</option>
                    <option>1 ponto – o testando apresentou 3 erros na sequência</option>
                    <option>0 pontos – o testando apresentou 4 erros ou mais na sequência</option>
                </select>
                <label for="disabled">Varrer o chão com a vassoura</label>
            </div>
            <div class="input-field col s6">
                <select disabled>
                    <option value="empty"></option>
                    <option>Certo - 1 ponto</option>
                    <option>Errado - 0 ponto</option>
                </select>
                <label for="disabled">Folhear um livro</label>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'Screen022',
        mounted: function() {
            $('select').material_select();
        }
    };
</script>

<style lang="sass" scoped>
</style>

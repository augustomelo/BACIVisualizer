<template>
    <div class="row">
        <div class="row">
            <div class="col s12">
                <h5>Preensão</h5>
            </div>
        </div>

        <div class="row">
            <div class="input-field col s12">
                <select disabled>
                    <option value="empty"></option>
                    <option> 3 pontos – o testando não segura a mão do avaliador </option>
                    <option>2 pontos – o testando hesita e pergunta o que deve fazer</option>
                    <option>1 ponto – o testando segura as mãos do examinador sem hesitar, mas solta quando recebe a segunda orientação</option>
                    <option>0 pontos – o testando segura as mãos do examinador, mesmo após o examinador pedir-lhe para não fazê-lo na segunda orientação</option>
                </select>
                <label for="disabled">Pontuação</label>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Screen014',
        mounted() {
            $('select').material_select();
        }
    };
</script>

<style lang="sass" scoped>
</style>

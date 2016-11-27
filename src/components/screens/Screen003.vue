<template>
    <div class="row">
        <div class="row">
            <div class="input-field col s12">
                <select disabled>
                    <option value="empty"></option>
                    <option value="encaminhamento">Encaminhamento/solicitação do médico</option>
                    <option value="queixaEspCog">Queixa espontânea/familiar de sintomas cognitivos</option>
                    <option value="queixaEspEm">Queixa espontânea/familiar de sintomas emocionais</option>
                    <option value="queixaEspComp">Queixa espontânea/familiar por mudança súbita de comportamento</option>
                </select>
                <label for="disabled">Qual o motivo da avaliação?</label>
            </div>
        </div>

        <div class="row">
            <div class="input-field col s12">
                <textarea disabled id="textarea1" class="materialize-textarea"></textarea>
                <label for="disabled">Descrição dos sintomas</label>
            </div>
        </div>

        <div class="row">
            <div class="input-field col s5">
                <select disabled>
                    <option value="empty"></option>
                    <option value="gradual">Gradual, insidioso</option>
                    <option value="abrupto">Abrupto, com episódio inicial distinguível</option>
                </select>
                <label for="disabled">O início dos sitomas foi:</label>
            </div>

            <div class="input-field col s3">
                <select disabled>
                    <option value="empty"></option>
                    <option value="gradual">Estão sempre presentes</option>
                    <option value="abrupto">Aparecem e desaparecem</option>
                </select>
                <label for="disabled">Os sintomas:</label>
            </div>

            <div class="input-field col s4">
                <select disabled>
                    <option value="empty"></option>
                    <option value="gradual">A mesma intensidade</option>
                    <option value="abrupto">São flutuantes (tem melhoras e pioras)</option>
                </select>
                <label for="disabled">Ao longo do tempo os sintomas têm:</label>
            </div>
        </div>

        <div class="row">
            <div class="input-field col s6">
                <select disabled>
                    <option value="empty"></option>
                    <option value="encaminhamento">Sim</option>
                    <option value="queixaEspCog">Não</option>
                </select>
                <label for="disabled">Atualmente usa algum medicamento?</label>
            </div>
            <div class="input-field col s6">
                <select disabled>
                    <option value="empty"></option>
                    <option value="encaminhamento">Sim</option>
                    <option value="queixaEspCog">Não</option>
                </select>
                <label for="disabled">De uso continou?</label>
            </div>
        </div>

        <div class="row">
            <div class="input-field col s12">
                <textarea disabled id="textarea1" class="materialize-textarea"></textarea>
                <label for="disabled">Faz uso de quais medicamentos?</label>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Screen003',
        mounted: function() {
            $('select').material_select();
        }
    };
</script>

<style lang="sass" scoped>
</style>

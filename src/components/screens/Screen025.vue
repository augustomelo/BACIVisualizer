<template>
    <div class="row">
        <div class="row">
            <h5>Pontuação</h5>
        </div>
        <div class="row">
            <div class="input-field col s6">
                <select disabled>
                    <option value="empty"></option>
                    <option>Não</option>
                    <option>Sim</option>
                </select>
                <label for="disabled">Ao ver as fituras o avaliando lembrou da história</label>
            </div>
            <div class="input-field col s6">
                <select disabled>
                    <option value="empty"></option>
                    <option>Não</option>
                    <option>Sim</option>
                    <option>Consegue com ajuda</option>
                </select>
                <label for="disabled">Organizou corretamente as figuras:</label>
            </div>
        </div>
        <div class="row">
            <div class="input-field col s6">
                <select disabled>
                    <option value="empty"></option>
                    <option>Não</option>
                    <option>Sim</option>
                </select>
                <label for="disabled">(Re)Contou a história ordenada e com coerência</label>
            </div>
            <div class="input-field col s6">
                <select disabled>
                    <option value="empty"></option>
                    <option>Não</option>
                    <option>Sim</option>
                    <option>Consegue com ajuda</option>
                </select>
                <label for="disabled">Fez apenas a descrição de cada cena</label>
            </div>
        </div>
        <div class="row">
            <div class="input-field col s6">
                <select disabled>
                    <option value="empty"></option>
                    <option>Não</option>
                    <option>Sim</option>
                </select>
                <label for="disabled">História Contada com Início - Meio - Fim</label>
            </div>
            <div class="input-field col s6">
                <select disabled>
                    <option value="empty"></option>
                    <option>Não</option>
                    <option>Sim</option>
                    <option>Consegue com ajuda</option>
                </select>
                <label for="disabled">Houve presença de intrusões de pensamento</label>
            </div>
        </div>
        <div class="row">
            <div class="input-field col s6">
                <select disabled>
                    <option value="empty"></option>
                    <option>Não</option>
                    <option>Sim</option>
                </select>
                <label for="disabled">Hove presença de confabulação</label>
            </div>
            <div class="input-field col s6">
                <select disabled>
                    <option value="empty"></option>
                    <option>Não</option>
                    <option>Sim</option>
                    <option>Consegue com ajuda</option>
                </select>
                <label for="disabled">A fala foi coerente e fluida</label>
            </div>
        </div>
        <div class="row">
            <div class="input-field col s6">
                <select disabled>
                    <option value="empty"></option>
                    <option>Não</option>
                    <option>Sim</option>
                </select>
                <label for="disabled">Houve presença de longas pausas ou hesitações na fala</label>
            </div>
            <div class="input-field col s6">
                <select disabled>
                    <option value="empty"></option>
                    <option>Não</option>
                    <option>Sim</option>
                    <option>Consegue com ajuda</option>
                </select>
                <label for="disabled">Repetição excessiva de palavras(ecolalia)</label>
            </div>
        </div>
        <div class="row">
            <div class="input-field col s12">
                <textarea disabled id="textarea1" class="materialize-textarea"></textarea>
                <label for="disabled">Observações</label>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Screen025',
        mounted() {
            $('select').material_select();
        }
    };
</script>

<style lang="sass" scoped>
</style>

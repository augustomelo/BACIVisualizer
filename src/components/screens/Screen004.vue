<template>
    <div class="row">
        <div class="row">
            <div class="col s12">
                <h5>Você consegue realizar as seguintes atividades de vida diárias com idependência?</h5>
            </div>
        </div>
        <div class="row">
            <div class="input-field col s4">
                <select disabled>
                    <option value="empty"></option>
                    <option value="nao">Não</option>
                    <option value="simComAjuda">Sim, com ajuda</option>
                    <option value="simComAjuda">Sim</option>
                </select>
                <label for="disabled">Tomar banho?</label>
            </div>
            <div class="input-field col s4">
                <select disabled>
                    <option value="empty"></option>
                    <option value="nao">Não</option>
                    <option value="simComAjuda">Sim, com ajuda</option>
                    <option value="simComAjuda">Sim</option>
                </select>
                <label for="disabled">Verstir-se</label>
            </div>
            <div class="input-field col s4">
                <select disabled>
                    <option value="empty"></option>
                    <option value="nao">Não</option>
                    <option value="simComAjuda">Sim, com ajuda</option>
                    <option value="simComAjuda">Sim</option>
                </select>
                <label for="disabled">Comer</label>
            </div>
        </div>

        <div class="row">
            <div class="input-field col s4">
                <select disabled>
                    <option value="empty"></option>
                    <option value="nao">Não</option>
                    <option value="simComAjuda">Sim, com ajuda</option>
                    <option value="simComAjuda">Sim</option>
                </select>
                <label for="disabled">Tomar medicação</label>
            </div>
            <div class="input-field col s4">
                <select disabled>
                    <option value="empty"></option>
                    <option value="nao">Não</option>
                    <option value="simComAjuda">Sim, com ajuda</option>
                    <option value="simComAjuda">Sim</option>
                </select>
                <label for="disabled">Locomover-se dentro de casa</label>
            </div>
            <div class="input-field col s4">
                <select disabled>
                    <option value="empty"></option>
                    <option value="nao">Não</option>
                    <option value="simComAjuda">Sim, com ajuda</option>
                    <option value="simComAjuda">Sim</option>
                </select>
                <label for="disabled">Ir a algum lugar fora de casa</label>
            </div>
        </div>

        <div class="row">
            <div class="input-field col s4">
                <select disabled>
                    <option value="empty"></option>
                    <option value="nao">Não</option>
                    <option value="simComAjuda">Sim, com ajuda</option>
                    <option value="simComAjuda">Sim</option>
                </select>
                <label for="disabled">Preparar a própia refeição</label>
            </div>
            <div class="input-field col s4">
                <select disabled>
                    <option value="empty"></option>
                    <option value="nao">Não</option>
                    <option value="simComAjuda">Sim, com ajuda</option>
                    <option value="simComAjuda">Sim</option>
                </select>
                <label for="disabled">Fazer compras</label>
            </div>
            <div class="input-field col s4">
                <select disabled>
                    <option value="empty"></option>
                    <option value="nao">Não</option>
                    <option value="simComAjuda">Sim, com ajuda</option>
                    <option value="simComAjuda">Sim</option>
                </select>
                <label for="disabled">Resolver problemas financeiros</label>
            </div>
        </div>

        <div class="row">
            <div class="row">
                <div class="input-field col s12">
                    <select disabled>
                        <option value="empty"></option>
                        <option value="nao">Não</option>
                        <option value="simComAjuda">Sim</option>
                    </select>
                    <label for="disabled">Você tem obrigações diárias na rotina familiar/nas tarefas de casa?</label>
                </div>
            </div>

            <div class="row">
                <div class="input-field col s12">
                    <textarea disabled id="textarea1" class="materialize-textarea"></textarea>
                    <label for="disabled">Descrição</label>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="row">
                <div class="input-field col s12">
                    <select disabled>
                        <option value="empty"></option>
                        <option value="nao">Não</option>
                        <option value="simComAjuda">Sim</option>
                    </select>
                    <label for="disabled">Você tem obrigações diárias fora de casa?</label>
                </div>
            </div>

            <div class="row">
                <div class="input-field col s12">
                    <textarea disabled id="textarea1" class="materialize-textarea"></textarea>
                    <label for="disabled">Descrição</label>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Screen004',
        mounted: function() {
            $('select').material_select();
        }
    };
</script>

<style lang="sass" scoped>
</style>

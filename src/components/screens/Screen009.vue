<template>
    <div class="row">
        <div class="row">
            <div class="col s12">
                <h5>Escala de Depressão Geriátrica de Yesavage em Versão Reduzida (GDS-15)</h5>
            </div>
        </div>

        <div class="row">
            <div class="input-field col s4">
                <select disabled>
                    <option value="empty"></option>
                    <option value="nao">Não</option>
                    <option value="simComAjuda">Sim</option>
                </select>
                <label for="disabled">Você está satisfeito com a sua vida?</label>
            </div>
            <div class="input-field col s4">
                <select disabled>
                    <option value="empty"></option>
                    <option value="nao">Não</option>
                    <option value="simComAjuda">Sim</option>
                </select>
                <label for="disabled">Você deixou muitos de sues interesses e atividades?</label>
            </div>
            <div class="input-field col s4">
                <select disabled>
                    <option value="empty"></option>
                    <option value="nao">Não</option>
                    <option value="simComAjuda">Sim</option>
                </select>
                <label for="disabled">Você sente que sua vida está vazia?</label>
            </div>
        </div>

        <div class="row">
            <div class="input-field col s4">
                <select disabled>
                    <option value="empty"></option>
                    <option value="nao">Não</option>
                    <option value="simComAjuda">Sim</option>
                </select>
                <label for="disabled">Você se aborrece com frequencia?</label>
            </div>
            <div class="input-field col s4">
                <select disabled>
                    <option value="empty"></option>
                    <option value="nao">Não</option>
                    <option value="simComAjuda">Sim</option>
                </select>
                <label for="disabled">Você se sente de bom humor a maior parte do tempo ?</label>
            </div>
            <div class="input-field col s4">
                <select disabled>
                    <option value="empty"></option>
                    <option value="nao">Não</option>
                    <option value="simComAjuda">Sim</option>
                </select>
                <label for="disabled">Você tem medo que algum mal vá le acontecer?</label>
            </div>
        </div>

        <div class="row">
            <div class="input-field col s4">
                <select disabled>
                    <option value="empty"></option>
                    <option value="nao">Não</option>
                    <option value="simComAjuda">Sim</option>
                </select>
                <label for="disabled">Você se sente feliz a maior parte do tempo?</label>
            </div>
            <div class="input-field col s4">
                <select disabled>
                    <option value="empty"></option>
                    <option value="nao">Não</option>
                    <option value="simComAjuda">Sim</option>
                </select>
                <label for="disabled">Você se sente que a sua sitação não tem saída?</label>
            </div>
            <div class="input-field col s4">
                <select disabled>
                    <option value="empty"></option>
                    <option value="nao">Não</option>
                    <option value="simComAjuda">Sim</option>
                </select>
                <label for="disabled">Você prefere fica em casa do que sair e fazer coisas nova?</label>
            </div>
        </div>

        <div class="row">
            <div class="input-field col s4">
                <select disabled>
                    <option value="empty"></option>
                    <option value="nao">Não</option>
                    <option value="simComAjuda">Sim</option>
                </select>
                <label for="disabled">Você se sente com mais problemas de memória do que a maioria?</label>
            </div>
            <div class="input-field col s4">
                <select disabled>
                    <option value="empty"></option>
                    <option value="nao">Não</option>
                    <option value="simComAjuda">Sim</option>
                </select>
                <label for="disabled">Você acha maravilhoso estar vivo?</label>
            </div>
            <div class="input-field col s4">
                <select disabled>
                    <option value="empty"></option>
                    <option value="nao">Não</option>
                    <option value="simComAjuda">Sim</option>
                </select>
                <label for="disabled">Você se sente um inútil nas atuais circustâncias?</label>
            </div>
        </div>

        <div class="row">
            <div class="input-field col s4">
                <select disabled>
                    <option value="empty"></option>
                    <option value="nao">Não</option>
                    <option value="simComAjuda">Sim</option>
                </select>
                <label for="disabled">Você se sente cheio de energia?</label>
            </div>
            <div class="input-field col s4">
                <select disabled>
                    <option value="empty"></option>
                    <option value="nao">Não</option>
                    <option value="simComAjuda">Sim</option>
                </select>
                <label for="disabled">Você acha que sua sitação é sem esperanças?</label>
            </div>
            <div class="input-field col s4">
                <select disabled>
                    <option value="empty"></option>
                    <option value="nao">Não</option>
                    <option value="simComAjuda">Sim</option>
                </select>
                <label for="disabled">Você sente que a maioria das pessoas está melhor que você?</label>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Screen009',
        mounted() {
            $('select').material_select();
        }
    };
</script>

<style lang="sass" scoped>
</style>

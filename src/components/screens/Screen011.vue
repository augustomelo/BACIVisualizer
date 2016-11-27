<template>
    <div class="row">
        <div class="row">
            <div class="col s12">
                <h5>Triagem para queixa de memória</h5>
            </div>
        </div>
        <div class="row">
            <div class="input-field col s6">
                <select disabled>
                    <option value="empty"></option>
                    <option value="nao">Não</option>
                    <option value="simComAjuda">Sim</option>
                </select>
                <label for="disabled">Com frequência você decide fazer alguma coisa em poucos minutos e depois se esquece de faze-la</label>
            </div>
            <div class="input-field col s6">
                <select disabled>
                    <option value="empty"></option>
                    <option value="nao">Não</option>
                    <option value="simComAjuda">Sim</option>
                </select>
                <label for="disabled">Você tem dificuldade para reconhecer um lugar que você já visiou antes?</label>
            </div>
        </div>
        <div class="row">
            <div class="input-field col s6">
                <select disabled>
                    <option value="empty"></option>
                    <option value="nao">Não</option>
                    <option value="simComAjuda">Sim</option>
                </select>
                <label for="disabled">Com frequência você se esquece de uma atividade antes de terminar. Como buscar um remédio e esquecer de tomar, eseuecer panelas no fogo, etc</label>
            </div>
            <div class="input-field col s6">
                <select disabled>
                    <option value="empty"></option>
                    <option value="nao">Não</option>
                    <option value="simComAjuda">Sim</option>
                </select>
                <label for="disabled">Com frequência você se esquece alguma coisa que acabaram de te contar?</label>
            </div>
        </div>
        <div class="row">
            <div class="input-field col s6">
                <select disabled>
                    <option value="empty"></option>
                    <option value="nao">Não</option>
                    <option value="simComAjuda">Sim</option>
                </select>
                <label for="disabled">Com frequência você precisa anotar seus compromissos em agendas ou celular para se lembrar deles?</label>
            </div>
            <div class="input-field col s6">
                <select disabled>
                    <option value="empty"></option>
                    <option value="nao">Não</option>
                    <option value="simComAjuda">Sim</option>
                </select>
                <label for="disabled">Com frequência você se esquece de compromissos se algumém não te lembrar?</label>
            </div>
        </div>
        <div class="row">
            <div class="input-field col s6">
                <select disabled>
                    <option value="empty"></option>
                    <option value="nao">Não</option>
                    <option value="simComAjuda">Sim</option>
                </select>
                <label for="disabled">Com frequência você se esquece de nomes de pessoas conhecidas?</label>
            </div>
            <div class="input-field col s6">
                <select disabled>
                    <option value="empty"></option>
                    <option value="nao">Não</option>
                    <option value="simComAjuda">Sim</option>
                </select>
                <label for="disabled">Com frequência você se esqeuce dos rostos/aparência de pessoas conhecidas?</label>
            </div>
        </div>
        <div class="row">
            <div class="input-field col s6">
                <select disabled>
                    <option value="empty"></option>
                    <option value="nao">Não</option>
                    <option value="simComAjuda">Sim</option>
                </select>
                <label for="disabled">Com frequência você se eseuce de cosias que aconteceteram recentemente(últimos dias)?</label>
            </div>
            <div class="input-field col s6">
                <select disabled>
                    <option value="empty"></option>
                    <option value="nao">Não</option>
                    <option value="simComAjuda">Sim</option>
                </select>
                <label for="disabled">Com frequência você se esquece de coisas que aconteceram há mais tempo(mais de 10 anos)?</label>
            </div>
        </div>
        <div class="row">
            <div class="input-field col s6">
                <select disabled>
                    <option value="empty"></option>
                    <option value="nao">Não</option>
                    <option value="simComAjuda">Sim</option>
                </select>
                <label for="disabled">Com frequência você repete a mesma história para a mesma pessoa, sem perceber que já a contou antes?</label>
            </div>
            <div class="input-field col s6">
                <select disabled>
                    <option value="empty"></option>
                    <option value="nao">Não</option>
                    <option value="simComAjuda">Sim</option>
                </select>
                <label for="disabled">Com frequência você esquece o lugar onde recém coilocou alguma coisa, comouma revista ou óuculos?</label>
            </div>
        </div>
        <div class="row">
            <div class="input-field col s6">
                <select disabled>
                    <option value="empty"></option>
                    <option value="nao">Não</option>
                    <option value="simComAjuda">Sim</option>
                </select>
                <label for="disabled">Com frequência você se esqeuce de dar um recado que le pediram para transmitir?</label>
            </div>
            <div class="input-field col s6">
                <select disabled>
                    <option value="empty"></option>
                    <option value="nao">Não</option>
                    <option value="simComAjuda">Sim</option>
                </select>
                <label for="disabled">Com frequência você acah que a sua memória é ruim?</label>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Screen011',
        mounted: function() {
            $('select').material_select();
        }
    };
</script>

<style lang="sass" scoped>
</style>

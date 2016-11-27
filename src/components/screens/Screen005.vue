<template>
    <div class="row">
        <div class="row">
            <div class="col s12">
                <h5>Mini-exame do Estado Mental (MEEM)</h5>
            </div>
        </div>

        <div class="row">
            <div class="input-field col s12">
                <h6>A - Orientação Espaço e Tempo</h6>
            </div>
        </div>

        <div class="row">
            <div class="input-field col s4">
                <select disabled>
                    <option value="empty"></option>
                    <option value="nao">Resposta errada</option>
                    <option value="simComAjuda">Resposta certa</option>
                </select>
                <label for="disabled">Qual é o dia da semana?</label>
            </div>
            <div class="input-field col s4">
                <select disabled>
                    <option value="empty"></option>
                    <option value="nao">Resposta errada</option>
                    <option value="simComAjuda">Resposta certa</option>
                </select>
                <label for="disabled">Que dia do mês é hoje?</label>
            </div>
            <div class="input-field col s4">
                <select disabled>
                    <option value="empty"></option>
                    <option value="nao">Resposta errada</option>
                    <option value="simComAjuda">Resposta certa</option>
                </select>
                <label for="disabled">Em que anos estamos?</label>
            </div>
        </div>

        <div class="row">
            <div class="input-field col s6">
                <select disabled>
                    <option value="empty"></option>
                    <option value="nao">Resposta errada</option>
                    <option value="simComAjuda">Resposta certa</option>
                </select>
                <label for="disabled">Sem olhar no relógio, você acha que são que horas agora(aproximadamente)?</label>
            </div>
            <div class="input-field col s6">
                <select disabled>
                    <option value="empty"></option>
                    <option value="nao">Resposta errada</option>
                    <option value="simComAjuda">Resposta certa</option>
                </select>
                <label for="disabled">Você sabe onde estamos?</label>
            </div>
        </div>

        <div class="row">
            <div class="input-field col s3">
                <select disabled>
                    <option value="empty"></option>
                    <option value="nao">Resposta errada</option>
                    <option value="simComAjuda">Resposta certa</option>
                </select>
                <label for="disabled">Que local é esse?</label>
            </div>
            <div class="input-field col s3">
                <select disabled>
                    <option value="empty"></option>
                    <option value="nao">Resposta errada</option>
                    <option value="simComAjuda">Resposta certa</option>
                </select>
                <label for="disabled">Instituição (casa, rua)?</label>
            </div>
            <div class="input-field col s2">
                <select disabled>
                    <option value="empty"></option>
                    <option value="nao">Resposta errada</option>
                    <option value="simComAjuda">Resposta certa</option>
                </select>
                <label for="disabled">Em que Bairro?</label>
            </div>
            <div class="input-field col s2">
                <select disabled>
                    <option value="empty"></option>
                    <option value="nao">Resposta errada</option>
                    <option value="simComAjuda">Resposta certa</option>
                </select>
                <label for="disabled">Em que Cidade?</label>
            </div>
            <div class="input-field col s2">
                <select disabled>
                    <option value="empty"></option>
                    <option value="nao">Resposta errada</option>
                    <option value="simComAjuda">Resposta certa</option>
                </select>
                <label for="disabled">Em que Estado</label>
            </div>
        </div>

        <div class="row">
            <div class="input-field col s12">
                <h6>B - Registros</h6>
            </div>
        </div>

        <div class="row">
            <div class="input-field col s12">
                <input disabled value="" type="text" class="validate">
                <label for="disabled">Total acertos</label>
            </div>
        </div>

        <div class="row">
            <div class="input-field col s12">
                <h6>C - Ateção e cálculo</h6>
            </div>
        </div>

        <div class="row">
            <div class="input-field col s3">
                <select disabled>
                    <option value="empty"></option>
                    <option value="nao">Resposta errada</option>
                    <option value="simComAjuda">Resposta certa</option>
                </select>
                <label for="disabled">100 - 7 = 93</label>
            </div>
            <div class="input-field col s3">
                <select disabled>
                    <option value="empty"></option>
                    <option value="nao">Resposta errada</option>
                    <option value="simComAjuda">Resposta certa</option>
                </select>
                <label for="disabled">93 - 7 = 86</label>
            </div>
            <div class="input-field col s2">
                <select disabled>
                    <option value="empty"></option>
                    <option value="nao">Resposta errada</option>
                    <option value="simComAjuda">Resposta certa</option>
                </select>
                <label for="disabled">86 - 7 = 79</label>
            </div>
            <div class="input-field col s2">
                <select disabled>
                    <option value="empty"></option>
                    <option value="nao">Resposta errada</option>
                    <option value="simComAjuda">Resposta certa</option>
                </select>
                <label for="disabled">79 -  7 = 72</label>
            </div>
            <div class="input-field col s2">
                <select disabled>
                    <option value="empty"></option>
                    <option value="nao">Resposta errada</option>
                    <option value="simComAjuda">Resposta certa</option>
                </select>
                <label for="disabled">72 - 7 = 65</label>
            </div>

            <div class="row">
                <div class="input-field col s12">
                    <h6>D - Lembraças (memória de evocação)</h6>
                </div>
            </div>

            <div class="row">
                <div class="input-field col s12">
                    <input disabled value="" type="text" class="validate">
                    <label for="disabled">Total acertos</label>
                </div>
            </div>

            <div class="row">
                <div class="input-field col s12">
                    <h6>E - Linguagem</h6>
                </div>
            </div>

            <div class="row">
                <div class="input-field col s6">
                    <select disabled>
                        <option value="empty"></option>
                        <option value="nao">Resposta errada</option>
                        <option value="simComAjuda">Resposta certa</option>
                    </select>
                    <label for="disabled">Apontando para um lápis, pergunte o que é o objeto</label>
                </div>
                <div class="input-field col s6">
                    <select disabled>
                        <option value="empty"></option>
                        <option value="nao">Resposta errada</option>
                        <option value="simComAjuda">Resposta certa</option>
                    </select>
                    <label for="disabled">Apontando para um relógio, pergunte o que é o objeto</label>
                </div>
            </div>
            <div class="row">
                <div class="input-field col s12">
                    <select disabled>
                        <option value="empty"></option>
                        <option value="nao">Repetiu errado / não repetiu</option>
                        <option value="simComAjuda">Repetiu corretamente</option>
                    </select>
                    <label for="disabled">Peça ao avaliando que repita a frase "nem aqui, nem ali, nem lá"</label>
                </div>
            </div>

            <div class="row">
                <div class="input-field col s12">
                    <input disabled value="" type="text" class="validate">
                    <label for="disabled">Total acertos</label>
                </div>
            </div>

            <div class="row">
                <div class="input-field col s6">
                    <input disabled value="" type="text" class="validate">
                    <label for="disabled">Pontuação total do MEEM</label>
                </div>
                <div class="input-field col s6">
                    <input disabled value="" type="text" class="validate">
                    <label for="disabled">Pontuação na Orientação Espaço e Tempo</label>
                </div>
            </div>
            <div class="row">
                <div class="input-field col s6">
                    <input disabled value="" type="text" class="validate">
                    <label for="disabled">Pontuação nos Registros</label>
                </div>
                <div class="input-field col s6">
                    <input disabled value="" type="text" class="validate">
                    <label for="disabled">Pontuação Atenção e Cálculo</label>
                </div>
            </div>

            <div class="row">
                <div class="input-field col s6">
                    <input disabled value="" type="text" class="validate">
                    <label for="disabled">Pontuação na Lembraças(memória e evocação)</label>
                </div>
                <div class="input-field col s6">
                    <input disabled value="" type="text" class="validate">
                    <label for="disabled">Pontuação na Linguagem</label>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Screen005',
        mounted: function() {
            $('select').material_select();
        }
    };
</script>

<style lang="sass" scoped>
</style>

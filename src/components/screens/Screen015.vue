<template>
    <div class="row">
        <div class="row">
            <div class="col s12">
                <h5>Teste do Relógio - Tarefa de Evovação</h5>
            </div>
        </div>

        <div class="row">
            <div class="input-field col s12">
                <select disabled>
                    <option value="empty"></option>
                    <option>10 pontos – Tudo está correto</option>
                    <option>9 pontos – Leve desordem nos ponteiros (ex.: ponteiro das horas sobre o 3)</option>
                    <option>8 pontos – Desordem acentuada nos ponteiros, mas não passando do limite de 1 hora (ex: 3:20)</option>
                    <option>7 pontos – Horário completamente errado</option>
                    <option>6 pontos – Uso inapropriado de marcação das horas (ex horário em estilo de relógio digital, seja por não ter ponteiros e as horas estarem marcadas por círculos em volta dos números)</option>
                    <option>5 pontos – Números em ordem inversa, ou concentrados em alguma parte do relógio</option>
                    <option>4 pontos – Números faltando ou situados fora dos limites do relógio</option>
                    <option>3 pontos – Números e relógio não conectados ou ausência de ponteiros</option>
                    <option>2 pontos – Alguma evidência de ter entendido as instruções, mas pouca semelhança com o relógio</option>
                    <option>1 ponto – Não tentou ou não conseguiu representar um relógio</option>
                </select>
                <label for="disabled">Pontuação</label>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Screen015',
        mounted: function() {
            $('select').material_select();
        }
    };
</script>

<style lang="sass" scoped>
</style>

<template>
    <div>
        <span class="card-title">Questionarios</span>
        <hr>
        <br />
        <div class="row my-row">
            <div class="input-field col s3">
                <select id="entries" class="vai">
                    <option value="1">10</option>
                    <option selected value="2">50</option>
                    <option value="3">100</option>
                </select>
                <label for="entries">Escolha quantas entradas</label>
            </div>
            <div class="input-field col s9">
                <input id="last_name" type="text" class="validate">
                <label for="last_name">Pesquisar</label>
            </div>
        </div>
        <table class="striped">
            <thead>
                <tr>
                    <th data-field="responsibleName">Responsável</th>
                    <th data-field="patienteName">Paciente</th>
                    <th data-field="dateQuestioanry">Data de Aplicação</th>
                </tr>
            </thead>

            <tbody>
                <tr @dblclick="showFullData(1)">
                    <td>Eu</td>
                    <td>Eu</td>
                    <td>Eu</td>
                </tr>
                <tr @dblclick="showFullData(2)">
                    <td>Vc</td>
                    <td>Vc</td>
                    <td>Vc</td>
                </tr>
                <tr @dblclick="showFullData(3)">
                    <td>Ele</td>
                    <td>Ele</td>
                    <td>Ele</td>
                </tr>
                <tr @dblclick="showFullData(4)">
                    <td>Tu</td>
                    <td>Tu</td>
                    <td>Tu</td>
                <tr @dblclick="showFullData(5)">
                    <td>Eu</td>
                    <td>Eu</td>
                    <td>Eu</td>
                </tr>
                </tr>
            </tbody>
        </table>

        <div class="row">
            <div class="col s7 left-align my-label-info">
                <h6>
                    Mostrando 1 de 10 de 19 entradas
                </h6>
            </div>
            <div class="col s5 right-align">
                <my-pagination :totalPages="5" :callback="update"></my-pagination>
            </div>
        </div>
    </div>
</template>

<script>
    import myPagination from './Pagination.vue';
    export default {
        name: 'myListQuestionnaire',
        components: {
            myPagination,
        },
        mounted: function() {
            $('select').material_select();
        },
        methods: {
            showFullData: function(number) {
                console.log(number);
            },
            update: function(page) {
            },
        },
    };
</script>

<style lang="sass">
.my-row
    margin-bottom: 0

table.striped>tbody>tr:nth-child(odd)
    background-color: #c5e1a5

.input-field input[type=text]:focus + label
     color: #9ccc65;

.input-field input[type=text]:focus
    border-bottom: 1px solid #9ccc65
    box-shadow: 0 1px 0 0 #9ccc65

/* It is not scoped because of this one */
.dropdown-content
    background-color: #f1f8e9

.dropdown-content>li>span
    color: #000

.dropdown-content li:houver
    color: #000
/*End*/

.pagination li.active
    background: #9ccc65

.my-label-info
    padding-top: 15px
</style>

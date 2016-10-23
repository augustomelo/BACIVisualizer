<template>
    <div class="app">
        <header>
            <nav>
                <div class="nav-wrapper my-top-nav light-green lighten-1">
                    <router-link to="/" class="brand-logo app-title" exact>Visualizador de Questinários</router-link>
                    <a href="#" data-activates="slide-out" class="button-collapse"><i class="material-icons">menu</i></a>
                </div>
            </nav>

            <ul id="slide-out" class="side-nav fixed">
                <li class="logo">
                    <router-link to="/" class="my-logo">
                        <img class="background" src="src/assets/images/logo/logo2.png">
                    </router-link>
                </li>
                <li><a href="#"><i class="material-icons">list</i>Visualizar Questionários</a></li>
                <li><router-link to="/upload"><i class="material-icons">file_upload</i>Upload Questionários</router-link></li>
                <li><a href="#"><i class="material-icons">file_download</i>Download Questionários</a></li>
                <li><div class="divider"></div></li>
                <li><a href="#"><i class="material-icons">delete_forever</i>Deletar Questionários</a></li>
            </ul>
        </header>

        <main>
            <div class="row main-card">
                <div class="col s12 m12">
                    <div class="card my-card light-green lighten-5">
                        <div class="card-content black-text">
                            <transition name="fade" mode="out-in" appear>
                                <router-view> </router-view>
                            </transition>
                        </div>
                    </div>
                </div>
            </div>
        </main>

        <footer class="page-footer light-green lighten-1">
            <div class="container">
                <div class="row">
                    <div class="col l6 s12">
                        <h5 class="white-text">UFTM</h5>
                        <p class="grey-text text-lighten-4">Universidade Federal do Triângulo Mineiro</p>
                        <p class="grey-text text-lighten-4">
                            Av.Frei Paulino, 30 - Bairro Abadia <br />
                            CEP: 38025-180 Uberaba/MG <br />
                            Fone: (34) 3700-6000 <br />
                        </p>
                    </div>
                </div>
            </div>
            <div class="footer-copyright">
                <div class="container">
                    © 2016 Todos os direitos Reservados
                </div>
            </div>
        </footer>
    </div>
</template>

<script>
    export default {
        mounted() {
            $(".button-collapse").sideNav();
        }
    };
</script>

<style lang="sass" scoped>
.app
    display: flex
    min-height: 100vh
    flex-direction: column

main
    flex: 1 0 auto

.my-top-nav
    height: 152px
    padding-top: 1%
    padding-left: 5%

.my-card
    padding: 2%


.app-title
    margin-top: 1%

.main-card
    margin-top: 2%

.fade-enter-active, .fade-leave-active
  transition: all .2s ease

.fade-enter, .fade-leave-active 
  opacity: 0

.my-logo
    min-height: 200px

header, main, footer
    padding-left: 300px

@media only screen and (max-width : 992px)
    header, main, footer 
        padding-left: 0
</style>

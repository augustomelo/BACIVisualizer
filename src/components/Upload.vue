<template>
    <div>
        <span class="card-title" >Upload</span>
        <hr>
        <br />
        <div @dragleave="onLeave"
            @dragover="onOver"
            @drop="upload"
            :class="{ 'dragover': isOver }"
            class="drop-zone light-green lighten-4 z-depth-1 valign-wrapper">
            <div class="drop-zone-message valign">
                <transition name="bar" mode="out-in">
                    <div v-if="!startedUpload" key="instruction">
                        <div>
                           <i class="large material-icons">file_upload</i>
                        </div>
                        <input @change="upload" id="file" class="input-file" type="file" name="files[]" multiple />
                        <label for="file">
                            <h5>
                                <b @mouseenter="onOver" @mouseleave="onLeave" class="click">Clique</b>
                                <span v-if="isAdvancedUpload"> ou <b>arraste</b> </span>
                                para iniciar o upload.
                            </h5>
                        </label>
                        <h6 v-if="loadedFile > 0">
                            Foi feito o upload de {{ this.totalFile }} questionário(s).
                        </h6>
                    </div>
                    <div v-else class="row my-row" key="progress-bar">
                        <div class="col s8 offset-s2">
                            <h5>
                                Carregado {{ loadedFile }} de {{ totalFile }}
                            </h5>
                            <div class="progress">
                                <div class="determinate" :style="{ width: loadProgress }"></div>
                            </div>
                        </div>
                    </div>
                </transition>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                isOver: false,
                startedUpload: false,
                loadProgress: "0%",
                totalFile: 0,
                loadedFile: 0
            };
        },
        methods: {
            isAdvancedUpload: function() {
                if (window.File && window.FileReader &&
                    window.FileList && window.Blob) {
                    return true;
                }

                // alert('Por favor utilize um navegador mais recente!');
                return false;
            },
            onOver: function(event) {
                event.preventDefault();
                event.stopPropagation();
                this.isOver = true;
            },
            onLeave: function(event) {
                event.preventDefault();
                event.stopPropagation();
                this.isOver = false;
            },
            upload: function(event) {
                event.preventDefault();
                event.stopPropagation();
                this.startedUpload = true;
                this.isOver = false;

                var files = event.dataTransfer.files;
                var reader = new FileReader();
                reader.onerror = this.errorHandler;
                reader.onload = this.loadFile;

                this.totalFile = files.length;
                this.loadedFile = 0;

                for (var i = 0; i < files.length; i++) {
                    var file = files[i];
                    if (!file.type.match('xml.*'))
                        continue;

                    reader.readAsText(file);
                }

                // Delay the transition.
                var self = this;
                setTimeout(function() {
                    self.startedUpload = false;
                }, 1000);
            },
            loadFile: function(event) {
                // TODO Process the file and the load is finished.
                // var contents = e.target.result;
                // var library = x2js.xml_str2json(contents);
                // library.library.book.forEach(function (element){
                //     var book = new Object();
                //     book.book = new Object();
                //     for (var attr in element) {
                //         book.book[attr] = element[attr];
                //     }
                //     jsonObj.push(book);
                // });

                var prct = Math.round(++this.loadedFile / this.totalFile) * 100;
                this.loadProgress = prct + "%";
            },
            errorHandler: function(evnt) {
                // TODO Handle errors.
            }
        }
    };
</script>

<style lang="sass" scoped>
.input-file
    display: none

.drop-zone
    min-height: 275px
    margin: 0 5%
    text-align: center
    color: #bbb
    -webkit-transition: all .4s
    transition: all .4s

.drop-zone-message
    min-width: 100%

.dragover
    background: #c5e1a5 !important
    box-shadow: 0 12px 15px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19) !important

.click
    cursor: pointer
    -webkit-transition: all .4s
    transition: all .4s

.my-row
    margin-bottom: 0

.bar-enter-active, .bar-leave-active
  transition: opacity .4s

.bar-enter, .bar-leave-active
  opacity: 0

</style>

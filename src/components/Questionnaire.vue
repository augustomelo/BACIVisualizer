<template>
    <div>
        <span class="card-title" >Questionário</span>
        <hr>
        <br />

        <div>
            <transition name="questionnaire" mode="out-in">
                <screen001 v-if="screen==1" key="screen001"></screen001>
                <screen002 v-if="screen==2" key="screen002"></screen002>
                <screen003 v-if="screen==3" key="screen003"></screen003>
                <screen004 v-if="screen==4" key="screen004"></screen004>
                <screen005 v-if="screen==5" key="screen005"></screen005>
                <screen006 v-if="screen==6" key="screen006"></screen006>
                <screen007 v-if="screen==7" key="screen007"></screen007>
                <screen008 v-if="screen==8" key="screen008"></screen008>
                <screen009 v-if="screen==9" key="screen009"></screen009>
                <screen010 v-if="screen==10" key="screen010"></screen010>
                <screen011 v-if="screen==11" key="screen011"></screen011>
                <screen012 v-if="screen==12" key="screen012"></screen012>
                <screen013 v-if="screen==13" key="screen013"></screen013>
                <screen014 v-if="screen==14" key="screen014"></screen014>
                <screen015 v-if="screen==15" key="screen015"></screen015>
                <screen016 v-if="screen==16" key="screen016"></screen016>
                <screen017 v-if="screen==17" key="screen017"></screen017>
                <screen018 v-if="screen==18" key="screen018"></screen018>
                <screen019 v-if="screen==19" key="screen019"></screen019>
                <screen020 v-if="screen==20" key="screen020"></screen020>
                <screen021 v-if="screen==21" key="screen021"></screen021>
                <screen022 v-if="screen==22" key="screen022"></screen022>
                <screen023 v-if="screen==23" key="screen023"></screen023>
                <screen024 v-if="screen==24" key="screen024"></screen024>
                <screen025 v-if="screen==25" key="screen025"></screen025>
                <screen026 v-if="screen==26" key="screen026"></screen026>
                <screen027 v-if="screen==27" key="screen027"></screen027>
                <screen028 v-if="screen==28" key="screen028"></screen028>
                <screen029 v-if="screen==29" key="screen029"></screen029>
                <screen030 v-if="screen==30" key="screen030"></screen030>
                <screen031 v-if="screen==31" key="screen031"></screen031>
                <screen032 v-if="screen==32" key="screen032"></screen032>
                <screen033 v-if="screen==33" key="screen033"></screen033>
                <screen034 v-if="screen==34" key="screen034"></screen034>
                <screen035 v-if="screen==35" key="screen035"></screen035>
                <screen036 v-if="screen==36" key="screen036"></screen036>
                <screen037 v-if="screen==37" key="screen037"></screen037>
                <screen038 v-if="screen==38" key="screen038"></screen038>
                <screen039 v-if="screen==39" key="screen039"></screen039>
                <screen040 v-if="screen==40" key="screen040"></screen040>
                <screen041 v-if="screen==41" key="screen041"></screen041>
                <screen042 v-if="screen==42" key="screen042"></screen042>
                <screen043 v-if="screen==43" key="screen043"></screen043>
                <screen044 v-if="screen==44" key="screen044"></screen044>
                <screen045 v-if="screen==45" key="screen045"></screen045>
                <screen046 v-if="screen==46" key="screen046"></screen046>
                <screen047 v-if="screen==47" key="screen047"></screen047>
                <screen048 v-if="screen==48" key="screen048"></screen048>
                <screen049 v-if="screen==49" key="screen049"></screen049>
                <screen050 v-if="screen==50" key="screen050"></screen050>
                <screen051 v-if="screen==51" key="screen051"></screen051>
                <screen052 v-if="screen==52" key="screen052"></screen052>
                <screen053 v-if="screen==53" key="screen053"></screen053>
                <screen054 v-if="screen==54" key="screen054"></screen054>
                <screen055 v-if="screen==55" key="screen055"></screen055>
                <screen056 v-if="screen==56" key="screen056"></screen056>
                <screen057 v-if="screen==57" key="screen057"></screen057>
                <screen058 v-if="screen==58" key="screen058"></screen058>
                <screen059 v-if="screen==59" key="screen059"></screen059>
                <screen060 v-if="screen==60" key="screen060"></screen060>
                <screen061 v-if="screen==61" key="screen061"></screen061>
                <screen062 v-if="screen==62" key="screen062"></screen062>
                <screen063 v-if="screen==63" key="screen063"></screen063>
                <screen064 v-if="screen==64" key="screen064"></screen064>
                <screen065 v-if="screen==65" key="screen065"></screen065>
                <screen066 v-if="screen==66" key="screen066"></screen066>
                <screen067 v-if="screen==67" key="screen067"></screen067>
                <screen068 v-if="screen==68" key="screen068"></screen068>
                <screen069 v-if="screen==69" key="screen069"></screen069>
                <screen070 v-if="screen==70" key="screen070"></screen070>
                <screen071 v-if="screen==71" key="screen071"></screen071>
                <screen072 v-if="screen==72" key="screen072"></screen072>
                <screen073 v-if="screen==73" key="screen073"></screen073>
                <screen074 v-if="screen==74" key="screen074"></screen074>
                <screen075 v-if="screen==75" key="screen075"></screen075>
                <screen076 v-if="screen==76" key="screen076"></screen076>
                <screen077 v-if="screen==77" key="screen077"></screen077>
                <screen078 v-if="screen==78" key="screen078"></screen078>
                <screen079 v-if="screen==79" key="screen079"></screen079>
                <screen080 v-if="screen==80" key="screen080"></screen080>
                <screen081 v-if="screen==81" key="screen081"></screen081>
                <screen082 v-if="screen==82" key="screen082"></screen082>
                <screen083 v-if="screen==83" key="screen083"></screen083>
                <screen084 v-if="screen==84" key="screen084"></screen084>
                <screen085 v-if="screen==85" key="screen085"></screen085>
                <screen086 v-if="screen==86" key="screen086"></screen086>
                <screen087 v-if="screen==87" key="screen087"></screen087>
                <screen088 v-if="screen==88" key="screen088"></screen088>
                <screen089 v-if="screen==89" key="screen089"></screen089>
                <screen090 v-if="screen==90" key="screen090"></screen090>
                <screen091 v-if="screen==91" key="screen091"></screen091>
                <screen092 v-if="screen==92" key="screen092"></screen092>
                <screen093 v-if="screen==93" key="screen093"></screen093>
                <screen094 v-if="screen==94" key="screen094"></screen094>
                <screen095 v-if="screen==95" key="screen095"></screen095>
                <screen096 v-if="screen==96" key="screen096"></screen096>
                <screen097 v-if="screen==97" key="screen097"></screen097>
                <screen098 v-if="screen==98" key="screen098"></screen098>
                <screen099 v-if="screen==99" key="screen099"></screen099>
                <screen100 v-if="screen==100" key="screen100"></screen100>
                <screen101 v-if="screen==101" key="screen101"></screen101>
                <screen102 v-if="screen==102" key="screen102"></screen102>
                <screen103 v-if="screen==103" key="screen103"></screen103>
                <screen104 v-if="screen==104" key="screen104"></screen104>
                <screen105 v-if="screen==105" key="screen105"></screen105>
                <screen106 v-if="screen==106" key="screen106"></screen106>
                <screen107 v-if="screen==107" key="screen107"></screen107>
                <screen108 v-if="screen==108" key="screen108"></screen108>
                <screen109 v-if="screen==109" key="screen109"></screen109>
                <screen110 v-if="screen==110" key="screen110"></screen110>
                <screen111 v-if="screen==111" key="screen111"></screen111>
                <screen112 v-if="screen==112" key="screen112"></screen112>
                <screen113 v-if="screen==113" key="screen113"></screen113>
                <screen114 v-if="screen==114" key="screen114"></screen114>
            </transition>
        </div>

        <div class="row">
            <div class="col s12 right-align">
                <my-pagination :totalPages="114" :chunkSize="10" :callback="update"></my-pagination>
            </div>
        </div>
    </div>
</template>

<script>
    import myPagination from './Pagination.vue';

    import Screen001 from './screens/Screen001.vue';
    import Screen002 from './screens/Screen002.vue';
    import Screen003 from './screens/Screen003.vue';
    import Screen004 from './screens/Screen004.vue';
    import Screen005 from './screens/Screen005.vue';
    import Screen006 from './screens/Screen006.vue';
    import Screen007 from './screens/Screen007.vue';
    import Screen008 from './screens/Screen008.vue';
    import Screen009 from './screens/Screen009.vue';
    import Screen010 from './screens/Screen010.vue';
    import Screen011 from './screens/Screen011.vue';
    import Screen012 from './screens/Screen012.vue';
    import Screen013 from './screens/Screen013.vue';
    import Screen014 from './screens/Screen014.vue';
    import Screen015 from './screens/Screen015.vue';
    import Screen016 from './screens/Screen016.vue';
    import Screen017 from './screens/Screen017.vue';
    import Screen018 from './screens/Screen018.vue';
    import Screen019 from './screens/Screen019.vue';
    import Screen020 from './screens/Screen020.vue';
    import Screen021 from './screens/Screen021.vue';
    import Screen022 from './screens/Screen022.vue';
    import Screen023 from './screens/Screen023.vue';
    import Screen024 from './screens/Screen024.vue';
    import Screen025 from './screens/Screen025.vue';
    import Screen026 from './screens/Screen026.vue';
    import Screen027 from './screens/Screen027.vue';
    import Screen028 from './screens/Screen028.vue';
    import Screen029 from './screens/Screen029.vue';
    import Screen030 from './screens/Screen030.vue';
    import Screen031 from './screens/Screen031.vue';
    import Screen032 from './screens/Screen032.vue';
    import Screen033 from './screens/Screen033.vue';
    import Screen034 from './screens/Screen034.vue';
    import Screen035 from './screens/Screen035.vue';
    import Screen036 from './screens/Screen036.vue';
    import Screen037 from './screens/Screen037.vue';
    import Screen038 from './screens/Screen038.vue';
    import Screen039 from './screens/Screen039.vue';
    import Screen040 from './screens/Screen040.vue';
    import Screen041 from './screens/Screen041.vue';
    import Screen042 from './screens/Screen042.vue';
    import Screen043 from './screens/Screen043.vue';
    import Screen044 from './screens/Screen044.vue';
    import Screen045 from './screens/Screen045.vue';
    import Screen046 from './screens/Screen046.vue';
    import Screen047 from './screens/Screen047.vue';
    import Screen048 from './screens/Screen048.vue';
    import Screen049 from './screens/Screen049.vue';
    import Screen050 from './screens/Screen050.vue';
    import Screen051 from './screens/Screen051.vue';
    import Screen052 from './screens/Screen052.vue';
    import Screen053 from './screens/Screen053.vue';
    import Screen054 from './screens/Screen054.vue';
    import Screen055 from './screens/Screen055.vue';
    import Screen056 from './screens/Screen056.vue';
    import Screen057 from './screens/Screen057.vue';
    import Screen058 from './screens/Screen058.vue';
    import Screen059 from './screens/Screen059.vue';
    import Screen060 from './screens/Screen060.vue';
    import Screen061 from './screens/Screen061.vue';
    import Screen062 from './screens/Screen062.vue';
    import Screen063 from './screens/Screen063.vue';
    import Screen064 from './screens/Screen064.vue';
    import Screen065 from './screens/Screen065.vue';
    import Screen066 from './screens/Screen066.vue';
    import Screen067 from './screens/Screen067.vue';
    import Screen068 from './screens/Screen068.vue';
    import Screen069 from './screens/Screen069.vue';
    import Screen070 from './screens/Screen070.vue';
    import Screen071 from './screens/Screen071.vue';
    import Screen072 from './screens/Screen072.vue';
    import Screen073 from './screens/Screen073.vue';
    import Screen074 from './screens/Screen074.vue';
    import Screen075 from './screens/Screen075.vue';
    import Screen076 from './screens/Screen076.vue';
    import Screen077 from './screens/Screen077.vue';
    import Screen078 from './screens/Screen078.vue';
    import Screen079 from './screens/Screen079.vue';
    import Screen080 from './screens/Screen080.vue';
    import Screen081 from './screens/Screen081.vue';
    import Screen082 from './screens/Screen082.vue';
    import Screen083 from './screens/Screen083.vue';
    import Screen084 from './screens/Screen084.vue';
    import Screen085 from './screens/Screen085.vue';
    import Screen086 from './screens/Screen086.vue';
    import Screen087 from './screens/Screen087.vue';
    import Screen088 from './screens/Screen088.vue';
    import Screen089 from './screens/Screen089.vue';
    import Screen090 from './screens/Screen090.vue';
    import Screen091 from './screens/Screen091.vue';
    import Screen092 from './screens/Screen092.vue';
    import Screen093 from './screens/Screen093.vue';
    import Screen094 from './screens/Screen094.vue';
    import Screen095 from './screens/Screen095.vue';
    import Screen096 from './screens/Screen096.vue';
    import Screen097 from './screens/Screen097.vue';
    import Screen098 from './screens/Screen098.vue';
    import Screen099 from './screens/Screen099.vue';
    import Screen100 from './screens/Screen100.vue';
    import Screen101 from './screens/Screen101.vue';
    import Screen102 from './screens/Screen102.vue';
    import Screen103 from './screens/Screen103.vue';
    import Screen104 from './screens/Screen104.vue';
    import Screen105 from './screens/Screen105.vue';
    import Screen106 from './screens/Screen106.vue';
    import Screen107 from './screens/Screen107.vue';
    import Screen108 from './screens/Screen108.vue';
    import Screen109 from './screens/Screen109.vue';
    import Screen110 from './screens/Screen110.vue';
    import Screen111 from './screens/Screen111.vue';
    import Screen112 from './screens/Screen112.vue';
    import Screen113 from './screens/Screen113.vue';
    import Screen114 from './screens/Screen114.vue';

    export default {
        name: 'my-questionnaire',
        components: {
            myPagination,

            Screen001,
            Screen002,
            Screen003,
            Screen004,
            Screen005,
            Screen006,
            Screen007,
            Screen008,
            Screen009,
            Screen010,
            Screen011,
            Screen012,
            Screen013,
            Screen014,
            Screen015,
            Screen016,
            Screen017,
            Screen018,
            Screen019,
            Screen020,
            Screen021,
            Screen022,
            Screen023,
            Screen024,
            Screen025,
            Screen026,
            Screen027,
            Screen028,
            Screen029,
            Screen030,
            Screen031,
            Screen032,
            Screen033,
            Screen034,
            Screen035,
            Screen036,
            Screen037,
            Screen038,
            Screen039,
            Screen040,
            Screen041,
            Screen042,
            Screen043,
            Screen044,
            Screen045,
            Screen046,
            Screen047,
            Screen048,
            Screen049,
            Screen050,
            Screen051,
            Screen052,
            Screen053,
            Screen054,
            Screen055,
            Screen056,
            Screen057,
            Screen058,
            Screen059,
            Screen060,
            Screen061,
            Screen062,
            Screen063,
            Screen064,
            Screen065,
            Screen066,
            Screen067,
            Screen068,
            Screen069,
            Screen070,
            Screen071,
            Screen072,
            Screen073,
            Screen074,
            Screen075,
            Screen076,
            Screen077,
            Screen078,
            Screen079,
            Screen080,
            Screen081,
            Screen082,
            Screen083,
            Screen084,
            Screen085,
            Screen086,
            Screen087,
            Screen088,
            Screen089,
            Screen090,
            Screen091,
            Screen092,
            Screen093,
            Screen094,
            Screen095,
            Screen096,
            Screen097,
            Screen098,
            Screen099,
            Screen100,
            Screen101,
            Screen102,
            Screen103,
            Screen104,
            Screen105,
            Screen106,
            Screen107,
            Screen108,
            Screen109,
            Screen110,
            Screen111,
            Screen112,
            Screen113,
            Screen114,
        },
        data: function() {
            return {
                screen: 1,
            };
        },
        methods: {
            update: function(page) {
                this.screen = page;
            },
        },
    };
</script>

<style lang="sass" scoped>
.questionnaire-enter-active, .questionnaire-leave-active
  transition: opacity .2s

.questionnaire-enter, .questionnaire-leave-active
  opacity: 0
</style>

const { findSummoner, findMatch } = require('../lol-services/services');
const localStorage = window.localStorage;
/*
    git add - ADICIONA ARQUIVOS
    git commit - ENVIA P/ REPOSITORIO LOCAL
    git push -m "MENSAGEM DO COMMIT" - ENVIA P/ REPOSITORIO REMOTO
    git pull - RECEBE ATUALIZAÇÃO

    git checkout -b "nome-do-branch"(USAR OS 3 COMANDOS DO COMMIT, PARA ENVIAR. 
                                    E CRIAR UM PULL REQUEST NO GITHUB)
    
*/

const app = new Vue({
    el: '#app',

    data: {
        nomeInvocador: '',
        summoner: '',
        match:'',
        autoFindMatch: true,
        message:'',
    },

    methods: {

        remember: function () {
            let rememberJson  = JSON.parse(localStorage.getItem('summonerName'));
           
            if(rememberJson != null)
                this.nomeInvocador = rememberJson.content;
        },

        forgetSummonerName: function(){
            localStorage.removeItem('summonerName');
        },

        saveSummonerName: function(){
            let rememberJson = { "content": this.nomeInvocador };
            localStorage.setItem('summonerName', JSON.stringify(rememberJson));
        },

        findSummoner: function () {
            findSummoner.get(this.nomeInvocador).then(response => {

                this.summoner = JSON.parse(response.request.response);
                this.findMatch();
                console.log(this.summoner);
            }).catch(response => {
                console.log(response);
            }).catch(err => {
                console.log(err);
            });
        },

        findMatch: function () {
            let idSummoner = this.summoner.id;
            findMatch.get(idSummoner).then(response =>{

                this.match = JSON.parse(response.request.response);
                this.message = 'Partida encontrada!'
                console.log(this.match);
            }).catch(response =>{
                //ERROR CODE 403. SUMMONER NOT IN A GAME
                if(response.response.status == 403 || response.response.status == 404)
                this.message = 'Invocador não está em uma partida!\n Error Message:' + response;
                console.log(response);
            }).catch(err =>{
                console.log(err);
            });
        },
    },

    mounted: function(){//FUNÇÃO MOUNTED SEMPRE NO FINAL DO APP
       this.remember();
    },
});
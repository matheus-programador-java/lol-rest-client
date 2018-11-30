const { findSummoner, findMatch } = require('../lol-services/services');

/*
    git add - ADICIONA ARQUIVOS
    git commit - ENVIA P/ REPOSITORIO LOCAL
    git push - ENVIA P/ REPOSITORIO REMOTO
    git pull - RECEBE ATUALIZAÇÃO

    git checkout -b "nome-do-branch"(USAR OS 3 COMANDOS DO COMMIT, PARA ENVIAR. 
                                    E CRIAR UM PULL REQUEST NO GITHUB)
    
*/

const app = new Vue({
    el: '#app',

    data: {
        nomeInvocador: '',
        summoner: ''
    },

    methods: {
        teste: function () {
            findSummoner.get(this.nomeInvocador).then(response => {

                this.summoner = response.request.responseText;
                console.log(this.summoner);
            }).catch(response => {

                this.summoner = response.request.responseText;
                console.log(response);
            });
        },

        teste2: function () {
            findMatch.get()
        },

        sleep: function (milliseconds) {
            let start = new Date().getTime();
            for (var i = 0; i < 1e7; i++) {
                if ((new Date().getTime() - start) > milliseconds) {
                    break;
                }
            }
        }
    }
});
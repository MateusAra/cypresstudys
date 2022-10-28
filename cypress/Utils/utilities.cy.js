export class Login{
    constructor( login, password){
        this.login = login;
        this.password = password;
    }
    execute(){
        describe('Atividades sigaa', () => {
            it('Login sigaa', () => {
                cy.viewport(1400, 800)
                cy.visit('https://si3.ufc.br/sigaa/verTelaLogin.do')
                cy.get('#conteudo > table > tbody > tr > td > div > form > table > tbody > tr:nth-child(1) > td > input[type=text]')
                    .type(this.login)
                cy.get('#conteudo > table > tbody > tr > td > div > form > table > tbody > tr:nth-child(2) > td > input[type=password]')
                    .type(this.password)
            })
        })
    }
}
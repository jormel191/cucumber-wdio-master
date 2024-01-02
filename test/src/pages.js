class Pages{

    static loginPage;

    static initpageObjetcs(){

        const LoginPage = require ('./pages/loginPage');
        Pages.loginPage= new LoginPage();

}
}

module.exports = Pages;

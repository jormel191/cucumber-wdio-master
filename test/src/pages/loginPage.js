

class LoginPage {

    get inputUser() {return $('#userName') }

    get inputPassword() {return $('#password') }

    get btnSubmit() {return $('#submit') }

    get txtLoginSuccessful() {return $('//h3[normalize-space()="Login Successfully"]') }


    async setUserName() {
        await this.inputUser.setValue('test');
    }

    async setPassword() {
        await this.inputPassword.setValue('test2');
    }

    async clickSubmit() {
        await this.btnSubmit.click();
    }

    async registerUser() {
        await this.setUserName();
        await this.setPassword();
        await this.clickSubmit();
    }

    async validateuserRegistration() {
        await expect(this.txtLoginSuccessful).toBeDisplayed();
    }
}

module.exports= LoginPage;


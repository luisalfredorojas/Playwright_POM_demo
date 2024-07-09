exports.loginPage = class LoginPag{
    constructor(page){
        this.page = page
        this.username = page.getByLabel('username')
        this.password = page.getByLabel('password')
        this.login = page.getByRole('button', {name: 'Login'})
    }

    async login(usernanme, password){
        await this.username.fill(username)
        await this.password.fill(password)
        await this.login.click()
    }
}

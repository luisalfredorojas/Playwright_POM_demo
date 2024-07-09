import {test, expect} from '@playwright/test'
import { loginPage } from '../pages/loginPage'

test('Login test', async ({page}) =>{

    const Login = new loginPage(page)

    await loginPage.login('pedrito','clavePedrito')
})
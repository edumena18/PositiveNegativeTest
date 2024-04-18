//import { expect } from '@wdio/globals'
import login from '../pageobjects/login.js'
import LoginPage from '../pageobjects/login.js'

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.goToUrl()
        await LoginPage.correctUserLogin('standard_user','secret_sauce')
        await LoginPage.logout()
        await LoginPage.correctUserLogin('visual_user','secret_sauce')
        await LoginPage.logout()
        await LoginPage.correctUserLogin('problem_user','secret_sauce')
        await LoginPage.logout()
        await LoginPage.correctUserLogin('performance_glitch_user','secret_sauce')
        await LoginPage.logout()
        await LoginPage.correctUserLogin('error_user','secret_sauce')
        await LoginPage.logout()
        await LoginPage.failCredentialsAlert('locked_out_user','secret_sauce')
        
              
    })
})

describe('My Login application', () => {
    it('should login with invalid credentials', async () => {
        await LoginPage.goToUrl()
        await LoginPage.failCredentialsAlert('standard_user','secret_sauce1')
        await LoginPage.failCredentialsAlert('visual_user1','secret_sauce')
        await LoginPage.failCredentialsAlert('problem_user','secret_sauce1')
        await LoginPage.failCredentialsAlert('performance_glitch_user1','secret_sauce')
        await LoginPage.failCredentialsAlert('error_user','secret_sauce1')
        
               
    })
})


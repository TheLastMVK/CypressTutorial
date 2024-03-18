class loginPage
{
    ingresarUserName()
    {
        return cy.get("input[placeholder='Username']")
    }

    ingresarPassword()
    {
        return cy.get("input[placeholder='Password']")
    }
}
export default loginPage
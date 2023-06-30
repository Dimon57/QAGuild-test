import { TopicsPage, SELECTORS } from "../../modules/pages/topicsPage";

const topics = new TopicsPage

describe('Topics', () => {

    const USER_DATA = {
        textTheme: 'How i spent my summer',
        error: 'Field must be at least 10 characters',
        textDelete: 'Do you confirm the deletion of theme How i spent my summer?',
        textLogin: 'Login'
    }

    beforeEach('',() => { 
        topics.loginByAPI() 
        topics.goto('add-theme')
    })
  
    it('Added theme text', () => {
        topics.getThemeTitle(USER_DATA.textTheme)
        topics.clickAddTopicBTN()

        topics.getElement(SELECTORS.element).eq(0).should('have.text', USER_DATA.textTheme)
    })

    it('Delete theme', () => {
        topics.getDeleteTheme()

        topics.getElement(SELECTORS.textDelete).should('have.text', USER_DATA.textDelete)

        topics.clickYesBtn()

        topics.getElement(SELECTORS.element).should('not.exist')
    })

    it('Press "Add topic" without filling in the fields', () => {
        topics.clickAddTopicBTN()

        topics.getElement(SELECTORS.error).should('have.text', USER_DATA.error)
    })

    it('Logout', () => {
        topics.clickLogoutBTN()

        topics.getElement(SELECTORS.textLogin).should('have.text', USER_DATA.textLogin)
    })
})
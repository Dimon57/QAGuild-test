import { HomePage, SELECTORS } from "../../modules/pages/homePage";

const home = new HomePage

describe('Home', () => {

    const USER_DATA = {
      userName: 'Dimon',
      name:'admin',
      password:'123456',
      theme: 'How are you',
      updateTheme: 'How old are you',
      themeTimeCode: '20.06.23'
  } 

  beforeEach('',() => { 
      home.loginByAPI() 
      home.goto('list')
  })

  it('Add episode', () => {
    home.addedEpisode(USER_DATA.userName)
    home.clickAddEpisodeBTN()

    home.getElement(SELECTORS.page).should('have.text', ' Your record sucesfully added! Thank you! ')
  })

  it('Added theme', () => {
    home.clickEpisode()
    home.getThemeTitle(USER_DATA.theme)

    home.getElement(SELECTORS.title).eq(0).should('have.text', USER_DATA.theme)
  })

  it('Edit theme',()=>{
    home.clickEpisode()
    home.clickEditBTN()
    home.updateThemeTitle(USER_DATA.updateTheme)
    home.updateTimeCode(USER_DATA.themeTimeCode)
    home.clickSaveBTN()

    home.getElement(SELECTORS.title).eq(0).should('have.text', USER_DATA.updateTheme)
    home.getElement(SELECTORS.themeTimeCode).eq(0).should('have.text', USER_DATA.themeTimeCode)
  })

  it('Unlink theme', () => {
    home.clickEpisode()
    home.clickUnlinkBTN()

    home.getElement(SELECTORS.themeList).should('have.text', 'Theme list')
  })

  it('Episode launch', () => {
    home.clickEpisode()
    home.clickStartEpisodeBTN()

    home.getElement(SELECTORS.textEpisode).should('have.text', 'Are you ready to start episode Dimon?')

    home.clickYesBTN()

    home.getElement(SELECTORS.warningDisabled).should('be.visible')
  })

  it('Stop episode', () => {
    home.clickEpisode()
    home.clickStopEpisodeBTN()

    home.getElement(SELECTORS.dangerDisabled).should('be.visible')
  })

  it('Link themes', () => {
    home.clickEpisode()
    home.clickLinkThemeBTN()

    home.getElement(SELECTORS.linkName).eq(0).should('have.text', 'Dimon')

    home.clickBlockPrimaryBTN()

    home.getElement(SELECTORS.themeList).should('have.text', 'Theme list')
  })

  it('Delete an episode', () => {
    home.clickDeleteEpisode()

    home.getElement(SELECTORS.textDeleteEpisode).should('have.text', 'Do you confirm the deletion of episode Dimon?')

    home.clickYesDeleteEpisode()

    home.getElement(USER_DATA.userName).should('not.exist')
  })

  it('Сlick the "Add episode" button without entering a name', () => {
    home.clickAddEpisodeBTN()

    home.getElement(SELECTORS.noEpisodeError).should('have.text', ' TimecoderServiceProxy#createEpisode(EpisodePayload) ')
  })

  it('Enter existing name "Dimon"', () => {
    home.addedEpisode(USER_DATA.userName)
    home.clickAddEpisodeBTN()
    
    home.addedEpisode(USER_DATA.userName)
    home.clickAddEpisodeBTN()
    
    home.getElement(SELECTORS.episodeDuplicationError).should('have.text', ' Episode with name Dimon already exist ')
  })
})  
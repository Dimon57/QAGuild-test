import { BasePage } from "./basePage.page";

export const SELECTORS = {
    homeBTN: '[class="nav-item"]',
    episodeName: '#episodeName',
    addEpisodeBTN: '[class="btn btn-block btn-outline-success"]',
    page: '[class="col-8"]',
    username:'#usernameOrEmail',
    password:'#password',
    loginBTN:'[class="btn btn-primary"]',
    removeBTN: '[class="btn remove-icon ng-star-inserted"]',
    clickEpisode: '[class="episode-name justify-content-between"]',
    themeTitle: '#themeTitle',
    title: '.table tbody tr  :nth-of-type(2) ',
    editBTN: '#editTheme',
    updateTheme: '#updateThemeTitle',
    timeCode: '#updateThemeTimecode',
    themeTimeCode: '.table tbody tr td',
    saveBTN: '[class="btn btn-success btn-block"]',
    unlinkTheme: '#unlinkTheme',
    themeList: '.table caption',
    startEpisodeBTN: '#startEpisode',
    textEpisode: '[class="text-center"]',
    warningDisabled: '.btn-warning:disabled',
    stopEpisodeBTN: '#stopEpisode',
    dangerDisabled: '.btn-danger:disabled',
    linkThemeBTN: '[class="btn btn-block btn-outline-info"]',
    linkName: '[class="col-12 mb-3"] :nth-of-type(1)',
    blockPrimaryBTN: '[class="btn btn-block btn-primary"]',
    deleteEpisodeBTN: '[class="fa fa-remove"]',
    textDeleteEpisode: '[class="mat-dialog-content"]',
    noEpisodeError: '[class="col-8"]',
    episodeDuplicationError: '[class="invalid-feedback"]'
}

export class HomePage extends BasePage{
    clickHome(){
        this.getElement(SELECTORS.homeBTN).first().click()
    }

    addedEpisode(userName){
        this.getElement(SELECTORS.episodeName).type(userName)
    }

    clickAddEpisodeBTN(){
        this.getElement(SELECTORS.addEpisodeBTN).click()
    }

    getRemovedBTN(){
        this.getElement(SELECTORS.removeBTN).click()
    }

    clickEpisode(){
        this.getElement(SELECTORS.clickEpisode).click()
    }

    getThemeTitle(theme){
        this.getElement(SELECTORS.themeTitle).type(`${theme}{enter}`)
    }

    clickEditBTN(){
        this.getElement(SELECTORS.editBTN).click()
    }

    updateThemeTitle(theme){
        this.getElement(SELECTORS.updateTheme).clear().type(theme)
    }

    updateTimeCode(data){
        this.getElement(SELECTORS.timeCode).type(data)
    }

    clickSaveBTN(){
        this.getElement(SELECTORS.saveBTN).click()
    }

    clickUnlinkBTN(){
        this.getElement(SELECTORS.unlinkTheme).click()
    }

    clickStartEpisodeBTN(){
        this.getElement(SELECTORS.startEpisodeBTN).click()
    }

    clickYesBTN(){
        this.getElement('[class="btn btn-warning btn-block mat-button"]').eq(0).click()
    }
    clickStopEpisodeBTN(){
        this.getElement(SELECTORS.stopEpisodeBTN).click()
    }

    clickLinkThemeBTN(){
        this.getElement(SELECTORS.linkThemeBTN).click()
    }

    clickBlockPrimaryBTN(){
        this.getElement(SELECTORS.blockPrimaryBTN).click()
    }
    
    clickDeleteEpisode(){
        this.getElement(SELECTORS.deleteEpisodeBTN).click()
    }

    clickYesDeleteEpisode(){
        this.getElement('[class="mat-button-wrapper"]').click({ multiple: true })
    }
}
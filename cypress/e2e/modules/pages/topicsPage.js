import { BasePage } from "./basePage.page";

export const SELECTORS = {
    themeTitle: '#themeTitle',
    addTopicBTN: '[class="btn btn-outline-success"]',
    deleteBTN: '#deleteFreeTheme',
    yesBTN: '[class="btn btn-warning btn-block mat-button"]',
    tableTheme: '[class="col-8"]',
    textDelete: '[class="mat-dialog-content"]',
    element: 'td',
    error: '[class="invalid-feedback"]',
    textLogin: '[class="text-center"]'
}

export class TopicsPage extends BasePage{
    getThemeTitle(theme){
        this.getElement(SELECTORS.themeTitle).type(theme)
    }

    clickAddTopicBTN(){
        this.getElement(SELECTORS.addTopicBTN).click()
    }

    getDeleteTheme(){
        this.getElement(SELECTORS.deleteBTN).click()
    }

    clickYesBtn(){
        this.getElement(SELECTORS.yesBTN).click()
    }

    clickLogoutBTN(){
    cy.contains('Logout').click({ multiple: true })
    }
}

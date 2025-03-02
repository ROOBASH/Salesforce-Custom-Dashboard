import { LightningElement, wire } from 'lwc';
import getAccounts from '@salesforce/apex/DashboardController.getAccounts';
import getOpportunities from '@salesforce/apex/DashboardController.getOpportunities';

export default class DashboardComponent extends LightningElement {
    accounts;
    opportunities;
    error;

    @wire(getAccounts)
    wiredAccounts({ error, data }) {
        if (data) {
            this.accounts = data;
        } else if (error) {
            this.error = error;
        }
    }

    @wire(getOpportunities)
    wiredOpportunities({ error, data }) {
        if (data) {
            this.opportunities = data;
        } else if (error) {
            this.error = error;
        }
    }
}

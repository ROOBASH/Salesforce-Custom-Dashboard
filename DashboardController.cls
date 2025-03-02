public with sharing class DashboardController {
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccounts() {
        return [SELECT Id, Name, Industry, AnnualRevenue FROM Account LIMIT 10];
    }

    @AuraEnabled(cacheable=true)
    public static List<Opportunity> getOpportunities() {
        return [SELECT Id, Name, StageName, Amount, CloseDate FROM Opportunity LIMIT 10];
    }
}

function myFunction() {
  Logger.log('dfdfdfdf')
}

/*
function doGet() {
  return HtmlService.createHtmlOutputFromFile('Index');
}

function doSomething() {
  Logger.log('I was called!');
}
*/
function doGet() {
  return HtmlService.createHtmlOutputFromFile('Index1');
}

function getUnreadEmails() {
  // 'got' instead of 'get' will throw an error.
  return GmailApp.gotInboxUnreadCount();
}
function getData(){

//open sheet by  url :  
var url = 'https://docs.google.com/spreadsheets/d/1CQBv0c2tS7kwV0Mi7hMymcRkBH1pc6CtRdGaNxzcmEM/edit?pli=1#gid=0';
var ss = SpreadsheetApp.openByUrl(url);
var ws =ss.getSheetByName('Sheet1');
ws.appendRow(['qqq',555555,'999999']); // array of columns 



}
function linkWorkSheet(url,sheetName) {
//send urls and sheet name 
//how to get url open sheet from google drive then copy url
//return worksheet object
return  SpreadsheetApp.openByUrl(url).getSheetByName(sheetName) ; 

}
function testurl(){
//var   ws = linkws(url1,"Sheet1");
linkWorkSheet(url1,'Sheet1').appendRow(['wwww',22222222222])
  //ws.appendRow(['qqq',555555,'999999']); // array of columns  

  
SpreadsheetApp.openByUrl(url2);
}

function modalUrl(){
  SpreadsheetApp.getUi()
   .showModalDialog(
     HtmlService.createHtmlOutputFromFile('Index1').setHeight(50),
     'Opening StackOverflow'

   )
}   




function openDialog() {
  var html = HtmlService.createHtmlOutputFromFile('Index1')
      .setSandboxMode(HtmlService.SandboxMode.IFRAME);
  SpreadsheetApp.getUi() // Or DocumentApp or FormApp.
      .showModalDialog(html, 'Dialog title');
}

/**
 * The event handler triggered when opening the spreadsheet.
 * @param {Event} e The onOpen event.
 * @see https://developers.google.com/apps-script/guides/triggers#onopene
 */
function onOpen(e) {
  // Add a custom menu to the spreadsheet.
/*
  var html = HtmlService.createHtmlOutputFromFile('Index1')
      .setSandboxMode(HtmlService.SandboxMode.IFRAME);
  SpreadsheetApp.getUi() // Or DocumentApp or FormApp.
      .showModalDialog(html, 'Dialog title');
      */
  
  SpreadsheetApp.getUi() // Or DocumentApp, SlidesApp, or FormApp.
      .createMenu('Custom Menu')
      .addItem('First item', 'menuItem1')
      .addToUi();

      
      
}


function menuItem1(){
 var html = HtmlService.createHtmlOutputFromFile('Index1');
     // .setSandboxMode(HtmlService.SandboxMode.IFRAME);
  SpreadsheetApp.getUi() // Or DocumentApp or FormApp.
      .showModalDialog(html, 'Dialog title');


}
// onopn


//  use url and sheet name to return ws
function linkws(url,sheetname){
var ss = SpreadsheetApp.openByUrl(url) ;
var ws = ss.getSheetByName(sheetname);  //use correct getSheetByName()

return ws ;

}

//  urls = appscriptbook sheet on google drive
var url1 = 'https://docs.google.com/spreadsheets/d/1Z5MVdylhzBjvwDizMN56e4ZnO7lWaSFfEBZF7mkcSFQ/edit#gid=0';
var url2 = 'https://docs.google.com/spreadsheets/d/1CQBv0c2tS7kwV0Mi7hMymcRkBH1pc6CtRdGaNxzcmEM/edit?pli=1#gid=0'


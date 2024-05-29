/** main.ts */

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function onOpen(): void {
  SpreadsheetApp.getUi()
    .createMenu('TCDEV TOOLS')
    .addItem('Say Hello', 'sayHello')
    .addToUi();
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function sayHello(): void {
  SpreadsheetApp.getUi().alert(
    'tcdev.alert()',
    'Hello, World!',
    SpreadsheetApp.getUi().ButtonSet.OK
  );
}

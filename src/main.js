/** main.js */

const onOpen = () => {
  SpreadsheetApp.getUi()
    .createMenu('TCDEV TOOLS')
    .addItem('Say Hello', 'sayHello')
    .addToUi();
};

function sayHello() {
  const response = SpreadsheetApp.getUi().alert(
    'tcdev.alert()',
    'Hello, World!',
    SpreadsheetApp.getUi().ButtonSet.OK
  );

  if (response === SpreadsheetApp.getUi().ButtonSet.OK) {
    Logger.log(`response from alert is the UI Button that was clicked`);
    Logger.log(response);
  } else {
    Logger.log(`response was NOT the button that was clicked?`);
    Logger.log(response);
  }
}

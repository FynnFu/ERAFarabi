chrome.runtime.onInstalled.addListener(function() {
  chrome.system.display.getInfo(function (displayInfo) {
    var numberOfMonitors = displayInfo.length;
    console.log('Количество мониторов: ' + numberOfMonitors);
  });
});
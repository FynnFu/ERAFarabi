// popup.js

document.addEventListener('DOMContentLoaded', function () {
  var countMonitorsBtn = document.getElementById('countMonitorsBtn');
  var resultDiv = document.getElementById('result');

  countMonitorsBtn.addEventListener('click', function () {
    chrome.system.display.getInfo(function (displayInfo) {
      var numberOfMonitors = displayInfo.length;
      resultDiv.textContent = 'Количество мониторов: ' + numberOfMonitors;
    });
  });
});

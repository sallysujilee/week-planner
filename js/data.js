/* exported data */

let schedule = [];

const previousSchedule = localStorage.getItem('local-storage');
schedule = JSON.parse(previousSchedule);

window.addEventListener('beforeunload', function (event) {
  const schedulesJSON = JSON.stringify(schedule);
  localStorage.setItem('local-storage', schedulesJSON);
}
);

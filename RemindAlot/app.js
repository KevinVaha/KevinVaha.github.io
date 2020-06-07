var d = new Date();
var t = d.getDate();
var m = d.getMonth();
var y = d.getFullYear();

const calendar = document.getElementById('calendarBody');

var months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

var tasks = [];
var days = [];
showCalendar(m, y);

function nextMonth() {
  y = m === 11 ? y + 1 : y;
  m = (m + 1) % 12;
  showCalendar(m, y);
}

function previousMonth() {
  y = m === 0 ? y - 1 : y;
  m = m === 0 ? 11 : m - 1;
  showCalendar(m, y);
}

function showCalendar(month, year) {
  document.getElementById('currentMonthAndYear').innerHTML =
    months[month] + ' ' + y;

  let firstDay = new Date(year, month).getDay();
  let daysInMonth = 32 - new Date(year, month, 32).getDate();

  calendar.innerHTML = '';

  let date = 1;
  for (let i = 0; i < 6; i++) {
    let row = document.createElement('div');
    row.classList.add('calendar__week');
    days.push(row);

    for (let j = 0; j < 7; j++) {
      if (i === 0 && j < firstDay - 1) {
        let cell = document.createElement('div');
        let cellText = document.createTextNode('');
        cell.appendChild(cellText);
        row.appendChild(cell);
        cell.classList.add('calendar__day');
        cell.classList.add('day');
      } else if (date > daysInMonth) {
        break;
      } else {
        if (date < 10) {
          let cell = document.createElement('div');
          var cellText = document.createTextNode('0' + date);
          cell.classList.add('calendar__day');
          cell.classList.add('day');
          cell.appendChild(cellText);
          row.appendChild(cell);
          if (date === t && year === d.getFullYear() && month == d.getMonth()) {
            cell.classList.add('today');
          }
          date++;
        } else if (date >= 10) {
          let cell = document.createElement('div');
          var cellText = document.createTextNode(date);
          cell.classList.add('calendar__day');
          cell.classList.add('day');
          cell.appendChild(cellText);
          row.appendChild(cell);
          date++;
        }
      }
    }
    calendar.appendChild(row);
  }
}

$(function () {
  $('.calendar__day').click(openModal);
  $('.close').click(function () {
    $('#taskCreate').hide();
  });
  $('#taskSave').click(saveTask);
});

function openModal() {
  $('#taskCreate').show();
  var day = this.innerHTML.toString();
  var year = y.toString();
  var month = (m + 1).toString();
  if (month < 10) {
    var month = ('0' + (m + 1)).toString();
  } else {
    var month = (m + 1).toString();
  }
  var date = (year + '-' + month + '-' + day).toString();
  $('#taskDate').val(date);
  this.innerHTML.classList.add('disabled');
}

function saveTask() {
  $('#taskCreate').hide();
  var task = {};
  task.title = $('#taskTitle').val().toString();
  task.date = $('#taskDate').val().toString();
  task.time = $('#taskTime').val().toString();
  task.description = $('#taskDesc').val().toString();
  tasks.push(task);
  $('#taskTitle').val('');
  $('#taskDate').val('');
  $('#taskTime').val('');
  $('#taskDesc').val('');
  addToCalendar();
}

function addToCalendar() {
  for (let i = 0; i < days.length; i++) {
    for (let j = 0; j < days[i].children.length; j++) {
      let day = days[i].children[j].innerHTML;
      let year = y;
      let month = m + 1;
      if (month < 10) {
        month = '0' + (m + 1);
      } else {
        month = m + 1;
      }
      for (let index = 0; index < tasks.length; index++) {
        let calendarDay = (year + '-' + month + '-' + day).toString();
        let inputDate = tasks[index].date;
        if (calendarDay == inputDate) {
          let taskIcon = document.createElement('div');
          let taskName = document.createTextNode(tasks[index].title);
          taskIcon.append(taskName);
          taskIcon.classList.add('taskIcon');
          days[i].children[j].append(taskIcon);
          days[i].children[j].click(function (event) {
            console.log('test');
          });
        }
      }
    }
  }
}

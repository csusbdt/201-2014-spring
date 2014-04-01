(function() {

  var jan = 0, feb = 1, mar = 3, apr = 4, may = 5, jun = 6, jul = 7;

  schedule = [
    ['L1',  30, new Date('2014-04-07T23:59:59'), '<a href="L1.html">L1: Command Line</a>'],
    ['L2',  80, new Date('2014-04-14T23:59:59'), '<a href="L2.html">L2: Expressions</a>'],
    ['L3',  40, new Date('2014-04-21T23:59:59'), '<a href="L3.html">L3: Algorithms</a>'],
    ['Q1', 200, new Date('2014-04-23T23:59:59'), '<a href="E1.html">E1: Exam 1</a>'],
    ['L4',  40, new Date('2014-04-28T23:59:59'), '<a href="L4.html">L4: Functions</a>'],
    ['L5',  60, new Date('2014-05-05T23:59:59'), '<a href="L5.html">L5: Classes</a>'],
    ['Q2', 200, new Date('2014-05-07T23:59:59'), '<a href="E2.html">E2: Exam 2</a>'],
    ['L6',  50, new Date('2014-05-12T23:59:59'), '<a href="L6.html">L6: Arrays</a>'],
    ['L7',  50, new Date('2014-05-19T23:59:59'), '<a href="L7.html">L7: More Arrays</a>'],
    ['Q3', 200, new Date('2014-05-21T23:59:59'), '<a href="E3.html">E3: Exam 3</a>'],
    ['L8',  60, new Date('2014-06-02T23:59:59'), '<a href="L8.html">L8: Sorting</a>'],
    ['L9',  30, new Date('2014-06-09T23:59:59'), '<a href="L9.html">L9: Application</a>'],
    ['F' , 400, new Date('2014-06-11T12:00:00'), 'Final Exam' ]
  ];

  app.onload = function() {
    app.buildTable();
  };

  app.buildTable = function() {
    var tbody = document.getElementsByTagName('tbody')[0];
    for (var i = 0; i < schedule.length; ++i) {
      var tr = document.createElement('tr');
      var td = document.createElement('td'); // activity column
      td.innerHTML = schedule[i][3];
      td.className = 'activity';
      tr.appendChild(td);
      td = document.createElement('td'); // deadline column
      td.innerHTML = app.extractDate(schedule[i][2]);
      td.className = 'deadline';
      tr.appendChild(td);
      td = document.createElement('td'); // points column
      td.innerHTML = schedule[i][1];
      td.className = 'points';
      tr.appendChild(td);
      tbody.appendChild(tr);
    }
  };

})();


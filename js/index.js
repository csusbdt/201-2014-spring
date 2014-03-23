(function() {

  var jan = 0, feb = 1, mar = 3, apr = 4, may = 5, jun = 6, jul = 7;

  schedule = [
    ['L1',  20, new Date('2014-04-04T23:59:59'), '<a href="L1.html">L1: Command Line</a>'],
    ['L2',  30, new Date('2014-04-11T23:59:59'), '<a href="L2.html">L2: Expressions</a>'],
    ['A1',  50, new Date('2014-04-12T23:59:59'), '<a href="A1.pdf">A1: Analyzing Code</a>'],
    ['Q1', 200, new Date('2014-04-16T23:59:59'), '<a href="Q1.html">Quiz 1</a>'],
    ['L3',  40, new Date('2014-04-18T23:59:59'), '<a href="L3.html">L3: Algorithms</a>'],
    ['L4',  30, new Date('2014-04-25T23:59:59'), '<a href="L4.html">L4: Functions</a>'],
    ['L5',  20, new Date('2014-05-02T23:59:59'), '<a href="L5.html">L5: Classes</a>'],
    ['A2',  55, new Date('2014-05-03T23:59:59'), '<a href="A2.pdf">A2: Classes</a>'],
    ['Q2', 200, new Date('2014-05-07T23:59:59'), '<a href="Q2.html">Quiz 2</a>'],
    ['L6',  30, new Date('2014-05-09T23:59:59'), '<a href="L6.html">L6: Arrays</a>'],
    ['L7',  20, new Date('2014-05-16T23:59:59'), '<a href="L7.html">L7: Binary Search</a>'],
    ['A3',  50, new Date('2014-05-17T23:59:59'), '<a href="A3.pdf">A3: Algorithms 2</a>'],
    ['Q3', 200, new Date('2014-05-21T23:59:59'), '<a href="Q3.html">Quiz 3</a>'],
    ['L8',  30, new Date('2014-05-23T23:59:59'), '<a href="L8.html">L8: Sorting</a>'],
    ['L9',  30, new Date('2014-06-06T23:59:59'), '<a href="L9.html">L9: Application</a>'],
    ['F' , 400, new Date('2014-06-11T12:00:00'), 'Final Exam']
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


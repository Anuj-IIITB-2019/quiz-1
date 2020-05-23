// questionlist.js


var api = "quiz/questionlist";
$.get(api, function (testid, studentid) {
    if (status == "success") {
        var question_data_body = "";
        for (var i = 0; i < questionlist.length; i++) {
            var question = questionlist[i].question + " " + questionlist[i].domain.branch;
            question_data_body += '<tr>'
                + '<td>' + (i + 1) + '</td>'
                + '<td>'
				+ '<td>' + question[i].mcq + '</td>'
				+ '<td>' 
					+ '<tr>'
	                + '<td>' + question[i].option1 + '</td>'
	                + '<td>' + question[i].option2 + '</td>'
	                + '<td>' + question[i].option3 + '</td>'
	                + '<td>' + question[i].option4 + '</td>'
	                +'</tr>'
	            +'</td>'

                +'<td>' + question[i].answer + '</td>'
                +'<td>' + question[i].marks + '</td>'
                +'</tr>';
        }
        $('#question_data tbody').html(question_data_body);
    }
    $('#question_data').DataTable();
});

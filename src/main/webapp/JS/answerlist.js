var api = "quiz/answerlist";
$.get(api, function (testid, testaid) {
    if (status == "success") {
        var answer_data_body = "";
        for (var i = 0; i < answerlist.length; i++) {
            var answer = answerlist[i].question + " ";
            answer_data_body += '<tr>'
                + '<td>' + (i + 1) + '</td>'
                + '<td>'
				+ '<td>' + answer[i].mcq + '</td>'
				+ '<td>' 
					+ '<tr>'
	                + '<td>' + answer[i].option1 + '</td>'
	                + '<td>' + answer[i].option2 + '</td>'
	                + '<td>' + answer[i].option3 + '</td>'
	                + '<td>' + answer[i].option4 + '</td>'
	                +'</tr>'
	            +'</td>'
	            
                +'<td>' + answer[i].answer_actual + '</td>'
                +'<td>' + answer[i].answer_selected + '</td>'
                +'</tr>';
        }
        $('#answer_data tbody').html(answer_data_body);
    }
    $('#answer_data').DataTable();
});

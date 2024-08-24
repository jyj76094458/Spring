$(document).on('click', 'td', function(e){
    $(this).addClass('open');
    let y = $(this).attr('data-y');
    let x = $(this).attr('data-x');
    let el = $(this);
    // alert(y + "," + x);
    $.ajax({
        url: 'http://localhost:8088/game1/check',
        data: {"y": y, "x": x},
        method: "GET",
    }).done(function(result){
        console.log(result);
        	if (result == 'safe') {
        		el.addClass('open');
        	} else if (result == 'bomb') {
        		el.addClass('bomb');
        	}
    });
});

$(function(){
    let tr_elements = $('tr');
    for (let i = 0; i < tr_elements.length; i++) {
        let td_els = tr_elements.eq(i).find('td');
        for (let j = 0; j < td_els.length; j++) {
            td_els.eq(j).attr('data-y', i);
            td_els.eq(j).attr('data-x', j);
        }
    }
});
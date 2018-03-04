$(document).ready(function () {

    $('#bGetResult').bind('click', getChart);
    buildChart([0,0,0,0,0,0,0,0])
});


function getChart () {
    var urlForPOSTRequest = 'http://kurakste.fvds.ru/cap_for_test/cap.php'     // '/getinputdata'
    var dAnswer = $('#fAnswer').serializeArray();
    
    $.ajax({
        type: 'POST',
        url: urlForPOSTRequest,
        data: dAnswer,
        success: updateDone,
        datatype: 'json'
    
    })
}

function updateDone (idd) {
    var id = JSON.parse(idd);
    console.log(id);
    var arrayOfData = [id['achievment'], id['career'], id['content'], id['finance'], id['relationship'], id['responsibility'], id['reward'], id['team']];
        
    console.log(arrayOfData);
    buildChart(arrayOfData);

}


function buildChart (inputArray) {
    
    var ctx = document.getElementById('myChart').getContext('2d');
    
    data = {
        labels: ["Достижения", "Карьера", "Содержание работы", "Финансовые мотивы", "Отношения с руководством", "Ответственность работы", "Признание и вознаграждение", "Сотрудничество в коллективе"],
        datasets:[{
            data: inputArray
                }]
    }
    var myRadarChart = new Chart(ctx, {
        type: 'radar',
        data: data,
        options: {}
    });
    

}

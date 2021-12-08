

function input(){
    var gu= document.getElementById("inputgu").value;
    var dong= document.getElementById("inputdong").value;
    $.ajax({
        type : "GET",
        url : "http://openAPI.seoul.go.kr:8088/6b564d5a526d696e31303972666f7341/json/GeoInfoPublicToilet/1/1000",
        dataType: "json",
        async: false,
        success: function(data){
            let bathroom_data = data['GeoInfoPublicToilet']['row'];
            for(let i=0;i<bathroom_data.length ; i++){
                var temp=bathroom_data[i]['GU_NM'];
                let temp2=bathroom_data[i]['HNR_NAM'];
                if(gu==temp)
                    if(dong==temp2)
                        put_data(i,bathroom_data[i]['GU_NM'],bathroom_data[i]['HNR_NAM'],bathroom_data[i]['MASTERNO'])
            }

        }
    })

}
function put_data(num,gu,hnr,mast){

    let index_html='<tbody>\
        <tr>\
            <td scope="row">'+(num+1)+'</td>\
            <td>'+gu+'</td>\
            <td>'+hnr+'</td>\
            <td>'+mast+'</td>\
        </tr>\
    </tbody>'

    $("#table").append(index_html);


}

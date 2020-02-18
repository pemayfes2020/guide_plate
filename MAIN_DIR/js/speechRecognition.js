//main_page.html用のjavascript

var page_num=0;
function autoLink(){
    switch(page_num){
        case 1:
        location.href="switch.html";
        break;
        case 2:
        location.href="drone.html";
        break;
        default:
        console.log("音声認識に失敗");
        break;
    }
}

function check(result1,result2){
    if(result1 !== -1){
        //alert('精密スイッチと認識できた: '+str);
        page_num=1;
        return true;
    }else if(result2 !== -1){
        //alert("ドローンと認識できた: "+str);
        page_num=2;
        return true;
    }else{
        // alert("失敗: "+str);
        return false;
    }
    
}

var flag_speech = 0;

function vr_function() {
    window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
    var recognition = new webkitSpeechRecognition();
    recognition.lang = 'ja';
    recognition.interimResults = true;//変換途中も認識
    recognition.continuous = true;//音声認識を継続

		/*
    recognition.onsoundstart = function() {
        document.getElementById('status').innerHTML = "認識中";
    };
    recognition.onnomatch = function() {
        document.getElementById('status').innerHTML = "もう一度試してください";
    };*/
    recognition.onerror = function() {
        //document.getElementById('status').innerHTML = "エラー";
        if(flag_speech == 0)
          vr_function();
    };
    recognition.onsoundend = function() {
        //document.getElementById('status').innerHTML = "停止中";
          vr_function();
    };
    

    recognition.onresult = function(event) {
        var results = event.results;
        for (var i = event.resultIndex; i < results.length; i++) {
            if (results[i].isFinal)
            {
                //document.getElementById('result_text').innerHTML = results[i][0].transcript;
                vr_function();
            }
            else
            {
                //document.getElementById('result_text').innerHTML = "[途中経過] " + results[i][0].transcript;

                var str = event.results[i][0].transcript;
                var result1 = str.indexOf('スイッチ');
                var result2 = str.indexOf('ドローン');
                if(check(result1, result2)){
                    autoLink();
                }

                flag_speech = 1;
            }
        }
    }
    flag_speech = 0;
    //document.getElementById('status').innerHTML = "start";
    recognition.start();
}
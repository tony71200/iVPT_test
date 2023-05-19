
// const time_line = document.querySelector("#quiz-box-reading header #timeline");
const time_line = document.getElementById("timeline");
const timeText = document.getElementById("time_left_txt");
const quiz_section = document.getElementById('section');
const timeSec = document.getElementById("sec");
const timer_box = document.getElementById("timer");
const questions_block = document.getElementById("questions_part");
const rules_box = document.getElementById("rules_box");
const quiz_box = document.getElementById("quiz-box-reading");

//Timer
var flag_time = true;
var duration;
function startTimer(duration_time) {
    let timer = duration_time, hours, minutes, seconds;
    var intervalTimer = setInterval(function() {
        // console.log(timer);
        duration = timer;
        hours = parseInt(timer / 3600, 10);
        minutes = parseInt((timer % 3600) / 60, 10);
        seconds = parseInt(timer % 60, 10);

        hours = hours < 10 ? "0" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        timeSec.innerHTML = hours + ":" + minutes +":"+ seconds;
        if (--timer < 0) {
            timeText.innerHTML= "Time out";
            timeText.style.color = "white";
            timer_box.style.background = "tomato";
            clearInterval(intervalTimer);
            flag_time = false;
        }
    }, 1000);
}
// Run time line
function startTimerLine(duration_time){
    counterLine = setInterval(counter, 1000);
    function counter() {
        time_count = parseFloat(duration* 100/duration_time)
        time_line.style.width = time_count + "%";
        // console.log("Thời gian: ", duration, time_count);
        if(time_count < 50.0){
            time_line.style.background = "orange";
        };
        if(duration_time < 25.0){
            time_line.style.background = "orangered";
        };
        if(timer === 0) {
            clearInterval(counterLine);
        };
    }
}
//Show Rule before goto exam
function DisplayRule(questions){
    if (questions && questions.length){
        let txt = '<ol type="a">';
        const title_section = document.getElementById('quiz-list-section');
        for (ques of questions){
            txt += '<li>' + ques.section_title + '</li>'
        }
        txt += "</ol>";
        title_section.innerHTML = txt;
    };
};
DisplayRule(questions_reading);

function spaceText(length_text){
    if (length_text < 20){
        return 3;
    }else if (length_text < 50){
        return 6;
    }else{
        return 12;
    }
}


//Show question function
function displayQues(questions, display){
    if (questions && questions.length){
        let html_txt = "";
        questions.forEach(makeQues);
        function makeQues(value, index, array){
            html_txt += '<div>';
            if (value.section_title){
                id_section = 97 + parseInt(index);
                html_txt += '<div class="section-title"><h5 class="title_center"> &#' + id_section + ". " + value['section_title'] + '</h5></div>';
            }
            html_txt += '<div>';
            for (let ques of value.section_ques){
                var txt;
                switch (ques['question_type']){
                    case TEXT_TYPE:
                        txt = '<p class="question">Câu ' + ques['numb'] + ':  '
                            + ques['question'] +'</p>';
                        break;
                    case PARA_TYPE:
                        txt = '<p class="question">Đoạn văn ' + ques['numb'] + ': '
                            + ques['question'] + '</p>';
                        break;
                    case IMAGE_TYPE:
                        txt = '';
                        break;
                    case AUDIO_TYPE:
                        txt = '';
                        break;
                    default:
                        txt = '';
                        break;
                }
                switch (ques.options_type){
                    case TEXT_TYPE:
                        txt += '<form class="form-inline row">';
                        let length_Text;
                        length_Text = ques.options.map((value) => {
                            return value.length;
                        });
                        length_Text = Math.max.apply(null, length_Text);
                        let space_class = spaceText(length_Text);
                        // console.log(space_class);
                        for (option in ques.options){
                            let id_Upper = 65+parseInt(option);
                            txt += '<span class="option col-sm-' + space_class + '">'
                                    + '<label for="' + (ques.numb+option) + '">' 
                                    + '<input id="' + (ques.numb+option) + '" name="' + ques['numb'] + '" type="radio" value="' + ques.options[option] + '" onclick="selectOption(this.id, this.value)">'
                                    +'(&#' + id_Upper +') ' + ques.options[option] + '</label></span>';
                            
                        };
                        txt += "</form>";
                        break;
                    case IMAGE_TYPE:
                        txt += '<form class="form-inline row">';
                        for (option in ques['options']){
                            let id_Upper = 65+parseInt(option);
                            txt += '<span class="option col-sm-3">'
                                    + '<label for="' + (ques.numb+option) + '">' 
                                    + '<input id="' + (ques.numb+option) + '" name="' + ques['numb'] + '" type="radio" value="' + ques.options[option] + '" onclick="selectOption(this.id, this.value)">'
                                    +'(&#' + id_Upper +') ' + '<img src="' + ques.options[option] + '" width="100px" height="100px"></label></span>';
                        };
                        txt += "</form>";
                        break;
                }              
                html_txt += txt + '<hr class="mt-1 mb-1">';
            };
            html_txt += '</div></div>';
        };
        display.innerHTML = html_txt;
    }else{
        console.log("Khong co gia tri")
    }
}

// Begin button clicked
document.getElementById("begin_button").onclick = ()=>{
    quiz_box.style.display = 'block';
    rules_box.style.display = 'none';
    // quiz_box.classList.add('showQuiz');
    // rules_box.classList.remove('showRule')
    startTimer(2*60);
    startTimerLine(2*60);
    displayQues(questions_reading, questions_block);
}

//get answer
function selectOption(id, value){
    let que_numb = parseInt(id/10);
    let option_id = id% 10;
    // console.log("numb: ", que_numb, ", option: ", option, ", value: ", value, ", name: ", name);
    if (answer_reading){
        // console.log("answer reading not empty");
        let answer = {numb: que_numb,
                    option: option_id,
                    answer: value};
        answer_reading[que_numb] = answer;
    }
    console.clear();
    console.log(answer_reading);
}

document.getElementById("finish").onclick = ()=>{
    console.log("Finish");
    location.href = '../index.html';
}


// const display = document.getElementById("sec");
// const display = document.querySelector("#quiz-box-reading header #timer #sec");
// startTimer(20);
// startTimerLine(0);
// // const questions_block = document.querySelector("#quiz-box-reading section #questions_part");
// displayQues(questions_reading, questions_block);

const time_line = document.getElementById("timeline");
const time_text = document.getElementById("time_left_txt");
const time_sec = document.getElementById("sec");
const timer_box = document.getElementById("timer");
const quiz_section = document.getElementById("section");
const questions_block = document.getElementById("questions_part");
const rules_box = document.getElementById("rules_box");
const quiz_box = document.getElementById("quiz-box-reading");
const alert = document.getElementById("msg");

var duration= 0;
var period= 60;
var current_question_index = 0;
var current_section_index = 0;
var flag_time = true
var interval_timer;
var counter_line;

//Timer
function startTimer(duration_time) {
    let timer = duration_time, hours, minutes, seconds;
    interval_timer = setInterval(function() {
        duration = timer;
        hours = parseInt(timer / 3600, 10);
        minutes = parseInt((timer % 3600) / 60, 10);
        seconds = parseInt(timer % 60, 10);

        hours = hours < 10 ? "0" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        time_sec.innerHTML = hours + ":" + minutes +":"+ seconds;
        // console.log(timer);
        if (--timer < 0) {
            // time_text.innerHTML= "Time out";
            // time_text.style.color = "white";
            // timer_box.style.background = "tomato";
            clearInterval(interval_timer);
            flag_time = false;
            moveQuestion(1);
        }
    }, 1000);
}
function startTimerLine(duration_time){
    counter_line = setInterval(counter, 1000);
    time_line.style.background = "#007bff";
    function counter() {
        time_count = parseFloat((duration-1)* 100/duration_time)
        time_line.style.width = time_count + "%";
        if(time_count < 50.0){
            time_line.style.background = "orange";
        };
        if(time_count < 25.0){
            time_line.style.background = "orangered";
        };
        if( duration == 0) {
            clearInterval(counter_line);
            time_line.style.width = "0%";
        };
    }
}

function spaceText(length_text){
    if (length_text < 20){
        return 3;
    }else if (length_text < 50){
        return 6;
    }else{
        return 12;
    }
}

//Question parts
function displayQues(index, section, question){
    if (question && question.length){
        const ques_title = document.getElementById('ques_section_title');
        const ques_options = document.getElementById('ques_options');
        let html_title = '';
        let html_ques = '';
        html_title += '(&#' + parseInt(97+parseInt(section)) + ") " + question[section].section_title;
        ques_title.innerHTML = html_title;
        let question_list = question[section].section_ques[index];
        for (let ques of question_list){
            let txt  = '';
            switch (ques.question_type){
                case AUDIO_TYPE:
                    txt = '<p class="question">Hội thoại ' + ques.numb + ': ' + ques.question + '</p>';
                    if (ques.question_items){
                        txt += '<audio autoplay width="100%"><source src=' + ques.question_items + '>Your browser does not support the audio tag.</audio>';
                    }
                    break;
                case TEXT_TYPE:
                    txt = '<div class="border-bottom"><p class="question">Câu ' + ques['numb'] + ':  '
                            + ques['question'] +'</p>';
                    break;
                case IMAGE_TYPE:         
                    txt = '<div class="border-bottom"><p class="question">Câu ' + ques['numb'] + ':  '
                            + ques['question'] +'</p>'
                    if (ques.question_items){
                        txt += '<div class="quiz_center"><img src="' + ques.question_items + '" width="50%" height="50%"></div>';
                    }
                    break;
                default:
                    break;
            };
            
            switch (ques.options_type){
                case TEXT_TYPE:
                    txt += '<form class="form-inline row">';
                    let length_Text;
                    length_Text = ques.options.map((value) => {
                        return value.length;
                    });
                    length_Text = Math.max.apply(null, length_Text);
                    let space_class = spaceText(length_Text);
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
                        txt += '<span class="option" style="width:25%;">'
                                + '<label for="' + (ques.numb+option) + '">' 
                                + '<input id="' + (ques.numb+option) + '" name="' + ques['numb'] + '" type="radio" value="' + ques.options[option] + '" onclick="selectOption(this.id, this.value)">'
                                +'(&#' + id_Upper +') ' + '<img src="' + ques.options[option] + '" width="100px" height="100px"></label></span>';
                    };
                    txt += "</form>";
                    break;
            }
            html_ques += txt + '<hr class="mt-1 mb-1">';;
        }; 
        ques_options.innerHTML = html_ques; 
    };
    
};
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
DisplayRule(questions_listening);

function moveQuestion(move){
    current_question_index += move;
    let flag_show = true;
    let section_length = questions_listening.length;
    let question_length = questions_listening[current_section_index].section_ques.length;
    if (current_question_index >= question_length){
        current_section_index++;
        current_question_index = 0;
        if (current_section_index >= section_length){
            current_section_index = section_length -1;
            question_length = questions_listening[current_section_index].section_ques.length;
            current_question_index = question_length -1;
            flag_show = false;
        }
    }else if (current_question_index < 0){
        current_section_index--;
        question_length = questions_listening[current_section_index].section_ques.length;
        current_question_index = question_length -1;
        if (current_section_index <= 0){
            current_section_index = 0;
            current_question_index = 0;
            flag_show = flase;
        }
    }
    clearInterval(interval_timer);
    clearInterval(counter_line);
    if (flag_show){
        startTimer(period);
        startTimerLine(period);
        displayQues(current_question_index, current_section_index, questions_listening);
    };
}

// Begin button clicked
document.getElementById("begin_button").onclick = ()=>{
    quiz_box.classList.add('d-block');
    rules_box.classList.add('d-none')
    startTimer(period);
    startTimerLine(period);
    displayQues(0, 0, questions_listening);
    current_question_index = 0;
    current_section_index = 0;
}

//get answer
function selectOption(id, value){
    let que_numb = parseInt(id/10);
    let option_id = id% 10;
    // console.log("numb: ", que_numb, ", option: ", option, ", value: ", value, ", name: ", name);
    if (answer_listening){
        // console.log("answer reading not empty");
        let answer = {numb: que_numb,
                    option: option_id,
                    answer: value};
        answer_listening[que_numb] = answer;
    }
}



document.getElementById("submit").onclick = ()=>{
    console.clear();
    console.log(answer_listening);
    if (answer_listening){
        alert.classList.add('alert-success');
        alert.style.display = "block"
        alert.innerHTML = "Submit Succesfully";
    }
}

document.getElementById("finish").onclick = ()=>{
    console.log("Finish");
    location.href = 'reading.html';
}

// displayQues(1, 0, questions_listenning);
// document.getElementById("next").onclick = ()=>{
//     moveQuestion(1);
// }

// document.getElementById("prev").onclick = ()=>{
//     moveQuestion(-1);
// }
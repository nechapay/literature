tasks.push({
    task: 'Рассмотрите фото, на которых изображены люди разного возраста. Отнесите каждое из них к соответствующему социальному положению.',
    help: 'Подумайте, люди какого возраста обычно являются школьниками, студентами, пенсионерами. Не забывайте при выполнении задания опираться на личный опыт и собственные наблюдения.'
});

var task1Words = [
    { word: '' }
];

var result = [];
var videos = [];
var noTasks = true;
var poem = [ 'Растет, шумит тот вихрь народной славы, <br>Что славные подъемлет имена,<br>Таким он был в свинцовый час Полтавы<br>И в раскаленный день Бородина.<br><br>',
                     'Все тот же он. Под Тулой и Москвою,<br>Под Ленинградом в сумрачных лесах<br>Бойцы идут. У них над головою<br>Родные звезды в снежных небесах.<br><br>',
                     'Нет, рано враг торжествовал победу!<br>И сквозь пожаров дымные рога<br>Бойцы идут по вражескому следу,<br>Врезая шаг в скрипучие снега.<br><br>',
                     'А враг бежит, смятенный и голодный,<br>Кляня судьбу проклятую свою.<br>Как завершенье веры всенародной,—<br>Слова вождя исполнились в бою.<br><br>',
                     'Бойцы идут среди родимых пашен<br>Победным шагом, грозны и легки,<br>А их народ зовет: гвардейцы наши,<br>Любимые, желанные сынки.<br><br>',
                     'Идут бойцы, их губы крепко сжаты,<br>Лежит на запад огненный поход,<br>Их движет месть, безжалостный вожатый,<br>И вражьих тел великий счет ведет.<br><br>',
                     'Громя врага и мстя, мы твердо знаем,—<br>Она пройдет, смертельная пурга.<br>Последний залп над Рейном и Дунаем<br>Сразит насмерть последнего врага!<br>'
];

var isTask1Ended;
var task1Help = 'Среди крупнейших событий Второй мировой войны битва под Москвой занимает особое место. Московская битва, включавшая в себя сложный комплекс различных' 
                        + ' по характеру боёв и операций, развернулась на огромной территории и продолжалась непрерывно в течение осени  1941 и зимы 1941- 1942 годов. Битва за Москву' 
                        + ' началась в сентябре 1941 года. За три месяца войска гитлеровской Германии успели вплотную подойти к столице. Операция по захвату города имела название «Тайфун».' 
                        + ' 19 октября 1941 года город был переведен в осадное положение. Наступление противника было остановлено 30 октября. Взять столицу Германия планировала к 7-му ноября.' 
                        + ' В этот день, начиная с 1918 года, в СССР отмечали Октябрьскую революцию. 7 ноября на Красной площади прошел парад советских войск, которые сразу после' 
                        + ' торжественного марша уходили на фронт. Стойкость русского человека, его мужество, храбрость, сила и стремление к самопожертвованию на благо Родины не' 
                        + ' позволили немцам захватить столицу. Историческая победа Советской Армии показала всему миру, что существует сила, способная не только остановить,' 
                        + ' но и разгромить фашистского агрессора, избавив человечество от угрозы нацистского порабощения.';
/*var expr = [
    {
        formula: 'Решите уравнение 3х – х<sup>2</sup> = 0, в ответ запишите сумму корней.',
        variants: ['3', '0', '-3', '6'],
        answer: '3'
    },
    {
        formula: 'Квадратный трехчлен разложен на множители х<sup>2</sup> + 3х – 28 = (х + 7)(х – а). <br>Найдите а.',
        variants: ['-4', '4', '-3', '3'],
        answer: '4'
    },
    {
        formula: 'Решите уравнение 5х<sup>2</sup> + 8х + 3 = 0, если уравнение имеет более одного корня, в ответ запишите больший из корней.',
        variants: ['-1', '1', '0,6', '-0,6'],
        answer: '-0,6'
    },
    {
        formula: 'Найдите корень уравнения х + <div class="divide"><p>x</p><p class="sub">5</p></div> = – <div class="divide"><p>12</p><p class="sub">5</p></div>.',
        variants: ['-2', '2', '-12', '12'],
        answer: '-2'
    },
    {
        formula: 'Решите уравнение 2016х<sup>2</sup> – х – 2015 = 0, если уравнение имеет более одного корня, в ответ запишите больший из корней.',
        variants: ['2016', '1', '2015', '-1'],
        answer: '1'
    },
    {
        formula: 'Решите уравнение 2х<sup>2</sup> – 12 = 0, в ответ запишите произведение корней.',
        variants: ['-6', '6', '0', '-1'],
        answer: '-6'
    },
    {
        formula: 'Решите уравнение <div class="divide"><p>1</p><p class="sub">x<sup>2</sup></p></div> + <div class="divide"><p>2</p><p class="sub">x</p></div> – 3 = 0. В ответ запишите произведение корней.',
        variants: ['1', '-1', '3', '- <div class="divide"><p>1</p><p class="sub">3</p></div>'],
        answer: '- 13'
    },
    {
        formula: 'Решите уравнение (х + 2)<sup>2</sup> = (х – 4)<sup>2</sup>.',
        variants: ['-2', '2', '4', '1'],
        answer: '1'
    },
    {
        formula: 'Решите уравнение 9 – 6х + х<sup>2</sup> = 0. Если уравнение имеет более одного корня, в ответ запишите больший из корней.',
        variants: ['-3', '3', '0', '-9'],
        answer: '3'
    },
    {
        formula: 'Решите уравнение х<sup>2</sup> + 9х + 20 = 0. В ответ запишите меньший из корней.',
        variants: ['4', '5', '-5', '-4'],
        answer: '-5'
    },
	{
		formula: 'Все задачи решены!'
	}
];*/
var task2Vars = [
    {
        id: 1,
        text: '8 июля (27 июня по старому стилю) 1709 года произошло генеральное сражение Северной войны 1700‑1721 годов ‑ Полтавская битва.'
    },
    {
        id: 2,
        text: 'Русская армия под командованием Петра I разгромила шведскую армию Карла XII.'
    },
    {
        id: 3,
        text: 'Полтавское сражение привело к перелому в Северной войне в пользу России.'
    },
    {
        id: 4,
        text: 'В честь этой победы установлен День воинской славы России, который отмечается 10 июля.'
    },
    {
        id: 5,
        text: '26 августа (7 сентября) 1812 года у деревни Бородино, в 125 км на запад от Москвы' 
                + ' состоялось крупнейшее сражение Отечественной войны 1812 года, самое кровопролитное в истории среди однодневных сражений.'
    },
    {
        id: 6,
        text: 'Русской армией командовал генерал от инфантерии М. И. Кутузов. Французской армией руководил император Наполеон I Бонапарт.'
    },
    {
        id: 7,
        text: 'В ходе 12-часового сражения французской армии удалось захватить позиции русской армии в центре и на левом крыле, но после' 
                + ' прекращения боевых действий французская армия отошла на исходные позиции.'
    },
    {
        id: 8,
        text: 'В русской историографии считается, что русские войска одержали победу, хотя на следующий день главнокомандующий русской' 
                + ' армии М. И. Кутузов дал приказ отступать в связи с большими потерями и необходимостью сохранить армию.'
    }
];
var taskIndexes = {
    task1ExprIndex: 0,
    task1WordsIndex: 0,
    task2WordsIndex: 0
};
var catchers = [[],[],[]];

var task1answ = 0;
var task2Digit;
var task4Index;
var task4Try = [];
var task4Answer = {
    simple: '',
    arr: []
};

var quest = [
    {
        id: 'q1',
        q: 'Укажите название,  автора и год написания стихотворения.',
        answer: '«Ты помнишь, Алеша, дороги Смоленщины…», Константин Симонов, 1941г.',
        vars: ['«Ты помнишь, Алеша, дороги Смоленщины…», Константин Симонов, 1941г.',
                  '«До свиданья, города и хаты», Михаил Исаковский, 1941г.',
                  '«Казак уходил на войну», Виктор Гусев, 1943г.']
    },
    {
        id: 'q2',
        q: 'Кому поэт посвятил своё стихотворение?',
        answer: 'Другу, военному корреспонденту Алексею Суркову.',
        vars: ['Другу, военному корреспонденту Алексею Суркову.',
                  'Солдату Советской Армии по имени Алексей.',
                  'Алексею Лебедеву,  поэту-маринисту, подводнику.']
    },
    {
        id: 'q3',
        q: 'Выберете верную и наиболее полную формулировку идеи стихотворения.',
        answer: 'Простые русские женщины вселяют в молодых солдат веру в Победу.',
        vars: ['В это непростое для страны время обычные люди вспоминают о Боге, само существование которого советская власть отвергала.',
                  'Война скоро закончится, а все мужчины вернутся домой.',
                  'Простые русские женщины вселяют в молодых солдат веру в Победу.']
    },
    {
        id: 'q4',
        q: 'В какой форме написано стихотворение?',
        answer: 'Стихотворение построено в виде монолога лирического героя, простого русского солдата, в котором он обращается к своему другу, брату, такому же бойцу.',
        vars: ['Стихотворение построено в виде монолога лирического героя, простого русского солдата, в котором он обращается к своему другу, брату, такому же бойцу.',
                  'Стихотворение построено в виде диалога фронтовых товарищей.',
                  'Стихотворение построено в виде полилога (многоголосие) – разговор  солдат, русских женщин и стариков.']
    },
    {
        id: 'q5',
        simq: 'Укажите средства выразительности, используемые автором в данном отрывке...',
        q: 'Укажите средства выразительности, используемые автором в данном отрывке.<br>' 
            + '<div class="poem-container"><div class="fragment b">Ты помнишь, Алёша, дороги Смоленщины,<br>' 
            + 'Как шли <div class="mean display-inline">бесконечные, злые дожди<span class="meaaan">1</span></div>,<br>' 
            + 'Как кринки несли нам усталые женщины,<br>' 
            + '<div class="mean display-inline">Прижав, как детей<span class="meaaan">2</span></div>, от дождя их к груди,<br><br>' 
            + '<div class="panel mean ">Как слёзы они вытирали украдкой,<br>' 
            + 'Как вслед нам шептали: - Господь вас спаси!<span class="meaaan">3</span></div>' 
            + 'И снова себя называли солдатками,<br>' 
            + 'Как встарь повелось на великой Руси.</div>' 
            + '<div class="fragment b"><div class="mean display-inline">Слезами измеренный чаще, чем вёрстами<span class="meaaan">4</span></div>,<br>' 
            + 'Шёл тракт, на пригорках скрываясь из глаз:<br>' 
            + '<div class="mean display-inline">Деревни, деревни, деревни<span class="meaaan">5</span></div> с погостами,<br>' 
            + 'Как будто на них вся Россия сошлась,<br><br>' 
            + 'Как будто за каждою русской околицей,<br>' 
            + 'Крестом своих рук ограждая живых,<br>' 
            + 'Всем миром сойдясь, наши прадеды молятся<br>' 
            + 'За в Бога не верящих внуков своих.</div></div>',
        answer: [{'анафора' : '3'},{'эпитет' : '1'},{'сравнение' : '2'},{'метафора' : '4'},{'лексический повтор' : '5'}],
        vars: ['1','2','3','4','5'],
        keys: ['анафора','эпитет','сравнение','метафора','лексический повтор'],
        type: '2'
    }
];


/*function nextWord(page, arr, start, taskWordIndex){
    if(start !== undefined && start !== null)
        $(page).find('.task-word').text(arr[start].word);
    else {
        taskIndexes[taskWordIndex]++;
        $(page).find('.task-word').text(arr[taskIndexes[taskWordIndex]].word);
    }
}*/

function strofa($page) {
   // var $page = $('#page_1');
    var index = 0;
    $page.find('.poem').empty();
    var interval = setTimeout(function print(){        
        $page.find('.poem').css({display: "inline"});
        $page.find('.poem').append(poem[index]);
        index ++;
        if ( index < poem.length ) setTimeout(print, 100);
    }, 300);
}

function poemToSide(){
    
    var $page = $('#page_1');

	$page.find('.poem').addClass('toside');  
    
    $page.find('.image').fadeIn(3000).css({display: "block"});
    $page.find('.task1').fadeIn(3000).css({display: "inline"});
    $page.find('#anbtn1').fadeIn(3000).css({display: "inline-block"});
}

function checkSize() {
       
    var $page = $('#page_1');
    
    if($page.find('.large').length) return true;
    
    return false;
}

function isZoomed () {
    
    var $page = $('#page_2');
    
    if($page.find('.zoom').length) return true;
    
    return false;
}

function showCorrectAnswer() {
    
    var $page = $('#page_1');
    
    $page.find('.task1label').fadeIn(1000).css({display: 'none'});
    $page.find('#cbtn1').addClass('hide');
    
    if(checkSize()) {$page.find('.large').css({'z-index':1}).removeClass('large');}
    setTimeout(function(){
        
        var $msc = $page.find('.moscow');
             
        $msc.css({'z-index': 4});
        $msc.addClass('large');
    },1000);
    setTimeout(function(){
        var $msc = $('#msc');
        
        isTask1Ended = true;
        $page.find('.task1label').fadeIn(1000).css({display: 'inline'});
        if(task1answ == 2) playAudio('audioSuccess');
        else playAudio('audioFail');
        $('#anbtn1').text('Далее');
    },3000);
}

function task2Finish() {
    
    var $page = $('#page_2');
    
    var taskComplete = function() {            
        playAudio('audioSuccess');
        $page.find('.task2').text('Задание выполнено правильно!').css({color: '#AFA'});
        $('#next1').removeClass('hide');
    }
    var taskIncomplete = function() {
        playAudio('audioFail');
        $page.find('.task2').text('Задание выполнено неправильно!').css({color: '#FAA'});
        $('#next1').removeClass('hide');
    }
    
    if( catchers[0].length > 4 || catchers[1].length > 0 || catchers[2].length > 4 ) {taskIncomplete();} //PROIGRAL
    else {
        var str1 = catchers[0].sort().join('');
        var str2 = catchers[2].sort().join('');
        if( str1 === '1234' && str2 === '5678') {
            taskComplete();
        } //POBEDIL
        else {taskIncomplete();} //PROIGRAL
    }
    $page.find('#next1').css({display: 'inline'});
    $page.find('.label2').fadeIn(1000).css({display: 'inline'});
    $('#im01').off();
    $('#im02').off();
    $('#im03').off();
    task2Vars.forEach(function(item, i, arr) {
        $('#d' + i).off('click').on('click', function() {            
            var $dig =$('#' + item.id);
            var $obj = $dig.next();                        
            if( $obj.hasClass('hide') ) {$page.find('.hText').addClass('hide'); $obj.removeClass('hide');}
            else $obj.addClass('hide');
            if( $(this).hasClass('selected') ) {$(this).removeClass('selected');}
            else {$page.find('.selected').removeClass('selected');$(this).addClass('selected');}
        });
    });
}

function nextDigit(idx) {
    var $page = $('#page_2');
    $page.find('.hText').addClass('hide');
    if( idx < task2Vars.length ) {
        if(idx != 0) $page.find('#' + task2Vars[idx-1].id).addClass('hide');
        $page.find('.vars1').append('<div class="variant"><div id="' + task2Vars[idx].id + '" class="panel digit drag font-default">' + (idx + 1) + '</div><div class="panel hText font-default">' + task2Vars[idx].text + '</div></div>');
    }
    else {
        if( idx = task2Vars.length ) $page.find('#' + task2Vars[idx-1].id).addClass('hide');
    }
}

function highlight(){
    
    var $page = $('#page_2');
    
    $page.find('.catcher').css({'border-color' : '#47036F'});
}

function deHighlight(){
    var $page = $('#page_2');
    
    $page.find('.catcher').css({'border-color' : '#000'});
}

function showAfterTask2() {
    var $page = $('#page_2');
    
    $page.find('.ending2').empty();
    $page.find('.ending2').removeClass('hide');
    $page.find('.image').css({display: 'none'});
    $page.find('.task2').css({display: 'none'});
    $page.find('.catcher').addClass('hide');
    $page.find('.label2').css({display: 'none'});
    $page.find('.variants').addClass('hide');
    $page.find('.ending2').append('<div class="task2-part1"><span class="title-part1">Полтавская Битва.</span><br></div><div class="task2-diveder"></div><div class="task2-part2"><span class="title-part2">Бородинское сражение.</span><br></div>');
    task2Vars.sort(task2Sort);
    task2Vars.forEach(function(item, i, arr) {
        if( i < 4 ) {
            $page.find('.task2-part1').append('<div>' + (i +1) + '. ' + item.text + '</div><br>');
        }
        else {
            $page.find('.task2-part2').append('<div>' + (i - 3) + '. ' + item.text + '</div><br>');
        }
    });
    
}

function task2Sort(a, b) {
    if( a.id > b.id ) return 1;
    if( a.id < b.id ) return -1;
}

function clearPage2() {
    
    var $page = $('#page_2');
    
    $page.find('.image').css({display: 'none'});
    $page.find('.task2').css({display: 'none'});
    $page.find('.vars1').empty();
    $page.find('.task2').text('Соотнесите исторические факты с иллюстрацией.').css({color: '#000'});
    $page.find('.label2').css({display: 'none'});
    $page.find('.catcher').empty();
    $page.find('.catcher').removeClass('hide');
    $page.find('.ending2').addClass('hide');
    $page.find('.variants').removeClass('hide');
    $('#next1').css({display: 'none'});
    catchers = [[],[],[]];
    task2Digit = 0;
    return;
}

function taskOnPage2() {
    
    var $page = $('#page_2');
    var $im01 = $('#im01');
    var $im02 = $('#im02');
    var $im03 = $('#im03');
    var $next = $('#next1');
    
    var index = 0;
    
    clearPage2();
     
    $page.find('.image').fadeIn(200).css({display: 'block'});
    $page.find('.task2').fadeIn(200).css({display: 'inline'});
    
    setBtnAnim($next);
    task2Vars.shuffle();
    nextDigit(task2Digit);
    
    $next.off('click').on('click', function() {
        showAfterTask2();
        $(this).css({display: 'none'});
    });
    $im01.off('click').on('click', function(){
        
        var $map1 = $page.find('.art1');
        
        zoom($map1);      
    });
    
    $im02.off('click').on('click', function(){
        
        var $map2 = $page.find('.art2');
        
        zoom($map2);
    });
    
    $im03.off('click').on('click', function(){
        
        var $map3 = $page.find('.art3');
        
        zoom($map3);
    });
            
    var initDrag = function() {
        $page.find('.drag').draggable({
            revert: true,
            containment: $page,
            start: function(){   
                if( isZoomed() ) zoom($page.find('.zoom'));
                highlight();
            },
            stop: function() {
                deHighlight();
            },
            stack: 
                $page.find('.drag')
        });
    };
    
    var initDrop = function() {
        $page.find('.drop').droppable({
            accept: $page.find('.drag')
        });
    };
    
    var dropdown = function() {
        $page.find('.drop').droppable({
            drop: function(e, ui) {
                if($(this).attr('id') === 'c1') {
                    catchers[0].push(+$(ui.draggable).attr('id'));
                    $('#c1').append('<div id="d' + task2Digit + '" class="panel digit font-default">' + $(ui.draggable).text() + '</div>');
                }
                if($(this).attr('id') === 'c2') {
                    catchers[1].push(+$(ui.draggable).attr('id'));
                    $('#c2').append('<div id="d' + task2Digit + '" class="panel digit font-default">' + $(ui.draggable).text() + '</div>');
                }
                if($(this).attr('id') === 'c3') {
                    catchers[2].push(+$(ui.draggable).attr('id'));
                    $('#c3').append('<div id="d' + task2Digit + '" class="panel digit font-default">' + $(ui.draggable).text() + '</div>');
                }
                $(ui.draggable).removeClass('drag');
                $(ui.draggable).css({'text-decoration' : 'line-through', color: '#CCC'});
                $(ui.draggable).draggable('destroy');
                task2Digit++;
                nextDigit(task2Digit);
                initDrag();
                initDrop();
                deHighlight();
                index++;
                if( index == 8 ) {task2Finish();}
            }
        });
    }
    initDrag();
    initDrop();
    dropdown();
    function zoom($obj) {
        
        if($obj[0] != $page.find('.zoom')[0]){
            if(!isZoomed()){ 
                $obj.css({'z-index': 44});
                $obj.addClass('zoom');
            }
        }else{
            $obj.removeClass('zoom');
            setTimeout(function(){$obj.css({'z-index': 1});},1000);
        }   
    }
}
function showAfterTask1() {
    
    var $page = $('#page_1');
    $page.find('.poem').css({display: "none"});
    $page.find('.image').css({display: "none"});
    $page.find('.task1').css({display: "none"});
    $page.find('.task1label').css({display: 'none'});
    $page.find('#anbtn1').css({display: "none"});
    $page.find('#cbtn1').css({display: "none"});
    $page.find('.ending').fadeIn(500).css({display: 'flex'});
    $page.find('.legend').html(task1Help);
}

function clearPage1() {
    
    var $page = $('#page_1');
    
    task1answ = 0;
    isTask1Ended = false;
    $page.find('.poem').removeClass('toside');
    $page.find('.poem').empty();
    $page.find('.poem').css({display: "none"});
    
    if(checkSize()) $page.find('.large').removeClass('large');
    $page.find('.image').css({display: "none"});
    $page.find('.task1').css({display: "none"});
    $page.find('.task1label').css({display: 'none'});
    $page.find('#anbtn1').addClass('hide').text('Ответ');;
    $page.find('#cbtn1').addClass('hide'); 
    $page.find('.ending').css({display: 'none'});
    $page.find('.poem').removeClass('hide');
    $page.find('.poemviewer').addClass('hide');
    
    return;
}

function taskOnPage1(){
    errCount = 0;
    
    var $page = $('#page_1');
    var i = 0;
    var $klk = $('#klk');
    var $msc = $('#msc');
    var $plt = $('#plt');
    var $brd = $('#brd');
    var $anbtn1 = $('#anbtn1');
    var $cbtn = $('#cbtn1');
    var $poem = $('#poem1');
    
    //if($page.find('.toside').length) 
    clearPage1();
    
    strofa($page);
    
    setTimeout(poemToSide, 3000);
    
    setBtnAnim($anbtn1);
    setBtnAnim($cbtn);
    
    $cbtn.off('click').on('click', function() {
        if($page.find('.poltav.large').length) task1answ = 1;
        if($page.find('.moscow.large').length) task1answ = 2;
        if($page.find('.kulik.large').length) task1answ = 3;
        if($page.find('borod.large').length) task1answ = 4;
        $anbtn1.removeClass('hide');
    });
    
    $anbtn1.off('click').on('click', function() {
        if( $(this).text() == 'Ответ' ) {
            showCorrectAnswer();
          
        }
        else {
            if( $(this).text() == 'Далее' ) {
                $(this).text('Ответ');
                showAfterTask1();
            }
        }
    
    });
            
    $plt.off('click').on('click', function(){
        
        var $poltav = $page.find('.poltav');
        
        enlarge($poltav);      
    }); 
    
    $msc.off('click').on('click', function(){
        
        var $moscow = $page.find('.moscow');
        
        if( isTask1Ended ) showAfterTask1();
        else enlarge($moscow);      
    }); 
    
    $klk.off('click').on('click', function(){
        
        var $kulik = $page.find('.kulik');
        
        enlarge($kulik);
    });
    
    $brd.off('click').on('click', function(){
        
        var $borod = $page.find('.borod');
        
        enlarge($borod);
    });
    
    $poem.off('click').on('click', function(){
        enlarge($poem);
    });
    
    $page.find('.poemviewer').off('click').on('click', function() {
         enlarge($page.find('.poemviewer'));
    });
    function enlarge($obj) {
        if( $obj.hasClass('poem') || $obj.hasClass('poemviewer') ) {
            $page.find('.poemviewer').empty();
            if( $page.find('.poemviewer').hasClass('hide') ) {
                $page.find('.poem').addClass('hide');
                $page.find('.task1').addClass('hide');
                $page.find('.poemviewer').removeClass('hide');
                $page.find('.poemviewer').html('<div class="panel poem-part1"></div><div class="panel poem-part2"></div>');
                poem.forEach(function(item, i, arr) {
                    if( i < 4 ) {                        
                        $page.find('.poem-part1').append(item);
                    }
                    else {
                        $page.find('.poem-part2').append(item);
                    }
                });
            }
            else {
                $page.find('.poem').removeClass('hide');
                $page.find('.task1').removeClass('hide');
                $page.find('.poemviewer').addClass('hide');
            }
        }
        else {
            if( !$obj.hasClass('large') ){
                if(!checkSize()){ 
                    $obj.css({'z-index': 4});
                    $obj.addClass('large');
                    if($obj != $poem) $page.find('#cbtn1').removeClass('hide');
                }
            }else{
                $page.find('#cbtn1').addClass('hide');
                $obj.removeClass('large');
                setTimeout(function(){$obj.css({'z-index': 1});},1000);
            }
        }
    }
}

function clearPage3() {
    
    var $page = $('#page_3');
   
    
    $page.find('.image').css({display: 'none'});
    $page.find('.task3').css({display: 'none'});
    $page.find('.answerbtn').css({display: 'none'});
    $page.find('.video.one').css({display : 'none'});
    $page.find('.video.two').css({display : 'none'});
    $page.find('.video.three').css({display : 'none'});
    $page.find('.task1label').css({display: 'none'});
    videos[0] = videos[1] = videos[2] = false;
}

function showCorrectAnswer3() {
    
    var $page = $('#page_3');
    
    $page.find('.task1label').fadeIn(1000).css({display: 'inline'});
}
function taskOnPage3(){
    
    var $page = $('#page_3');
    var $poet1 = $('#poet1');
    var $poet2 = $('#poet2');
    var $poet3 = $('#poet3');
    var $anbtn = $('#anbtn3');
    var vi1 = document.getElementById('vi1');
    var vi2 = document.getElementById('vi2');
    var vi3 = document.getElementById('vi3');
    
    clearPage3();
    
    $page.find('.image').fadeIn(3000).css({display: 'inline'});
    $page.find('.task3').fadeIn(3000).css({display: 'inline'});
    
    setBtnAnim($anbtn);
    /*setBtnAnim($poet2);
    setBtnAnim($poet3);*/
    $anbtn.off().on('click', function (){
        if(!vi1.paused) {vi1.pause(); $page.find('.video.one').css({display : 'none'});}
        if(!vi2.paused) {vi2.pause(); $page.find('.video.two').css({display : 'none'});}
        if(!vi3.paused) {vi3.pause(); $page.find('.video.three').css({display : 'none'});}
        $poet1.off('click');
        $poet2.off('click');
        $poet3.off('click');
        showCorrectAnswer3();
    });
    
   
    
    vi1.addEventListener("ended", function () {
       $page.find('.video.one').css({display : 'none'}); 
    });
    
     vi2.addEventListener("ended", function () {
       $page.find('.video.two').css({display : 'none'}); 
    });
    
     vi3.addEventListener("ended", function () {
       $page.find('.video.three').css({display : 'none'}); 
    });
    
    $poet1.off().on('click', function () {
        $page.find('.video.one').css({display : 'inline'});
        $page.find('.video.two').css({display : 'none'});
        $page.find('.video.three').css({display : 'none'});
        if(!vi2.ended) {vi2.pause(); vi2.currentTime = 0;}
        if(!vi3.ended) {vi3.pause(); vi3.currentTime = 0;}
        if(vi1.paused) vi1.play();
        else vi1.pause();
        videos[0] = true;
        if(videos[0] && videos[1] && videos[2]) $page.find('.answerbtn').fadeIn(1000).css({display: 'inline'});
    });
    
    $poet2.off().on('click', function () {
        $page.find('.video.one').css({display : 'none'});
        $page.find('.video.two').css({display : 'inline'});
        $page.find('.video.three').css({display : 'none'});
        if(!vi1.ended) {vi1.pause(); vi1.currentTime = 0;}
        if(!vi3.ended) {vi3.pause(); vi3.currentTime = 0;}
        if(vi2.paused) vi2.play();
        else vi2.pause();
        videos[1] = true;
        if(videos[0] && videos[1] && videos[2]) $page.find('.answerbtn').fadeIn(1000).css({display: 'inline'});
    });
    
    $poet3.off().on('click', function () {
        $page.find('.video.one').css({display : 'none'});
        $page.find('.video.two').css({display : 'none'});
        $page.find('.video.three').css({display : 'inline'});
        if(!vi1.ended) {vi1.pause(); vi1.currentTime = 0;}
        if(!vi2.ended) {vi2.pause(); vi2.currentTime = 0;}
        if(vi3.paused) vi3.play();
        else vi3.pause();
        videos[2] = true;
        if(videos[0] && videos[1] && videos[2]) $page.find('.answerbtn').fadeIn(1000).css({display: 'inline'});
    });
}

function clearPage4() {
    
    var $page = $('#page_4');
    
    task4Index = 0;
    task4Answer.simple = '';
    task4Answer.arr = [];
    for(var i = 0; i < quest.length; i++) {task4Try[i] = 1;}
    
    $page.find('.task4-container').addClass('hide');
    $page.find('.result-bar').addClass('hide');
    $page.find('#btn4').removeClass('hide');
    $page.find('#vi4').removeClass('hide');
    $page.find('.task4').removeClass('hide');
    $page.find('.variants-label').removeClass('hide');
    $('#btn5').text('Проверить').addClass('hide');    
     $page.find('.qv-container').removeClass('hide');
    $page.find('.results-container').empty();
    $page.find('.results-container').removeClass('font-2rem');
    $page.find('.results-container').append('<div class="row results-row"><div class="col-sm-4 results-col qst head"><b>Вопрос</b></div><div class="col-sm-4 results-col asw head"><b>Правильный ответ</b></div></div>');
}

function nextQ(index) {
    
    var $page = $('#page_4');
    task4Answer.simple = '';
    task4Answer.arr = [];
    $page.find('.quest-container').empty();
    $page.find('.quest-container').append('<div class="quest-label font-default">Вопрос:</div>');
    $page.find('.quest-container').append('<div class="panel quest font-default"></div>');
    $page.find('.quest').html(quest[index].q);
    $page.find('.vars').empty();
    quest[index].vars.shuffle();
    
    if( quest[index].type ) {
        if( quest[index].type == '2' ) {
            //$page.find('.varq').addClass('drag zzz');
            $page.find('.variants-label').addClass('hide');
            $page.find('.quest-container').append('<div class="quest-table-bar font-default"></div>');       
            //$page.find('.quest-table-bar').append('<div id="quest-row-h" class="row qst"><div class="col-sm-4 qst">Название</div><div class="col-sm-4 qst ctc">Номер</div></div>');
            //$page.find('.quest-table-bar').append('<div class="row"></div>');
            quest[index].keys.forEach(function(item, i, arr) {
               $page.find('.quest-table-bar').append('<div class="row qst"><div class="col-sm-4 qst a">' + item + '</div><div class="col-sm-4 qst drop zzz ctc b"></div></div>')
            });
            $page.find('.quest-container').append('<div class="variants-label font-default">Номера фрагментов:</div>');
            $page.find('.quest-container').append('<div id="quest-vars" class="vars font-default"></div>');
            quest[index].vars.forEach(function(item, i, arr) {
                $page.find('#quest-vars').append('<div id="v4_' + i + '" class="panel varq drag zzz">' + item + '</div>');
            });
        }
    }
    else{
        $page.find('.variants-label').removeClass('hide');
        
        quest[index].vars.forEach(function(item, i, arr) {            
            $page.find('.vars').append('<div id="v4_' + i + '" class="panel varq">' + item + '</div>');
            $('#v4_' + i).off('click').on('click', function() {
                $('#btn5').removeClass('hide');
                if( (typeof quest[index].answer)  == 'object' ) {
                    if( $(this).hasClass('choice') ) {
                        $(this).removeClass('choice');
                        task4Answer.arr.splice(task4Answer.arr.indexOf($(this).text()), 1);
                    }
                    else {
                        $(this).addClass('choice');
                        task4Answer.arr.push($(this).text());
                    }
                }
                else {
                    $page.find('.choice').removeClass('choice');
                    $(this).addClass('choice'); 
                    task4Answer.simple = $(this).text();
                }
            });
        });
    }
}

function isCorrectTask4() {

    var result = false;
    var r1 = [];
    
     if( (typeof quest[task4Index].answer)  == 'object' ) {
         if( quest[task4Index].type ) {
             if( quest[task4Index].type == '2' ) {                 
                 r1 = [];
                 quest[task4Index].answer.forEach(function(item1, i1, arr1) {
                     for(var key1 in item1) {
                        task4Answer.arr.forEach(function(item2, i2, arr2) {
                            for(var key2 in item2) {
                                 if( key1 === key2 ) {
                                     if( item1[key1] === item2[key2] ) r1.push(true);
                                     else r1.push(false);
                                }
                             }    
                         });
                     }
                 });
                 result = true;
                 for(var i = 0; i < r1.length; i++) {
                    if( !r1[i] ) {
                        result = false;
                        break;
                    }
                 }
             }
         }
         else{
             quest[task4Index].answer.sort();
             task4Answer.arr.sort();
             var s1 = task4Answer.arr.join('');
             var s2 = quest[task4Index].answer.join('');
             if( s1 === s2 ) result = true;
         }
     }
    else {
        if( task4Answer.simple == quest[task4Index].answer ) result = true;
    }
    
    return result;
}

function showTask4Result() {
    
    var $page = $('#page_4');
    
    $page.find('.qv-container').addClass('hide');
    $page.find('.results-container').addClass('font-2rem');
    
    /*$page.find('.variants-bar').addClass('hide');
    $page.find('.result-bar').addClass('hide');
    $page.find('.quest').addClass('hide');
    $page.find('.results-bar').removeClass('hide');
    $page.find('.results').append('<div class="row">');
    $page.find('.results').append('<div class="col-sm-4 head">Вопрос</div>');
    $page.find('.results').append('<div class="col-sm-4 head left">Попытки</div>');
    $page.find('.results').append('</div>');
    task4Try.forEach(function(item, i, arr) {
        $page.find('.results').append('<div class="row">');
        $page.find('.results').append('<div class="col-sm-4">' + (i +1) + '</div>');
        $page.find('.results').append('<div class="col-sm-4 left">' + item + '</div>');
        $page.find('.results').append('</div>');
    });*/
}

function addResults(idx) {
    var $page = $('#page_4');
    var qst;
    var answer;
    
    if( $page.find('.results-row') != quest.length ) {
        /*.split('').slice(0,10).join('') + '...'*/;
        if( quest[idx].type ){
            if( quest[idx].type == '2' ) {
                answer = '';
                qst = (idx + 1) + '. ' + quest[idx].simq;
                quest[idx].answer.forEach(function(item, i, arr) {
                    for(var key in item) {
                        answer += key + ': ' + item[key];
                        if( i < arr.length - 1 ) answer += ', '
                        else answer += '.'
                    }
                });
            }
        }
        else {
            answer = quest[idx].answer;
            qst = (idx + 1) + '. ' + quest[idx].q;
        }        
        $page.find('.results-container').append('<div class="row results-row"><div id="qst' + idx + '" class="col-sm-4 results-col qst">' + qst + '</div><div class="col-sm-4 results-col asw">' + answer + '</div></div>');
        if( quest[idx].simq ) {
            $('#qst' + idx).off('click').on('click', function() {
                if( $('#qst-viewer').hasClass('hide') ) $('#qst-viewer').removeClass('hide').html(quest[+$(this).attr('id').split('').splice(3).join('')].q);
                else $('#qst-viewer').addClass('hide');
            });
        }
    }
}

function taskOnPage4() {
    
    var $page = $('#page_4');
    var $btn1 = $('#btn4');
    var $btn2 = $('#btn5');
    var $video = $('#vi4');
    var flag = false, next = false;
    var vi4 = document.getElementById('vi4');
    
    var initDrag = function() {
        $page.find('.drag').draggable({
            revert: true,
            contaiment: $page.find('.qv-container'),
            start: function() {},
            stop: function() {},
            stack: $page.find('.zzz')
        });
    }
    var initDrop = function() {
        $page.find('.drop').droppable({
            accept: $page.find('.drag'),
            drop: function(e, ui) {                
                if( $(this).text() == '' ) {                    
                    $(this).text($(ui.draggable).text());
                    $(this).addClass('drag');
                    initDrag();
                    initDrop();
                    if ($(ui.draggable).hasClass('varq')) $(ui.draggable).addClass('hide');
                } else {
                    var str = $(this).text();
                    $(this).text($(ui.draggable).text());
                    $(ui.draggable).text(str);
                }
                var len = quest[task4Index].answer.length;
                if( $page.find('.varq.hide').length == len ) {
                    $('#btn5').removeClass('hide');
                    var j = 0;
                    task4Answer.arr = [];
                    while( j < len ) {
                        $page.find('.qst.a').each(function(i1, el1) {
                            $page.find('.qst.b').each(function(i2, el2) {
                                if( i1 == i2 ) {
                                    task4Answer.arr.push({});
                                    task4Answer.arr[j][$(el1).text()] = $(el2).text();
                                    j++;
                                    return false;
                                }
                            });
                        });                        
                    }
                }
            }
        });
    }
    clearPage4();
    setBtnAnim($btn1);
    setBtnAnim($btn2);
    
    $video.off('click').on('click', function() {
        if( vi4.paused ) vi4.play(); 
        else vi4.pause();
    });
    $video.dblclick(function() {
        if( vi4.webkitRequestFullscreen() ) vi4.webkitRequestFullscreen();
    });
    $btn1.off('click').on('click', function(){
        $('#vi4').addClass('hide');
        vi4.pause();
        $btn1.addClass('hide');
        $page.find('.task4-container').removeClass('hide');
        $page.find('.result-bar').removeClass('hide');
        //$page.find('.quest').removeClass('hide');
        $page.find('.task4').addClass('hide');
        nextQ(task4Index);
    });
    $('#qst-viewer').off('click').on('click', function() {
        $(this).addClass('hide');
    });
    $btn2.off('click').on('click', function() {
        $page.find('.true').removeClass('true');
        $page.find('.false').removeClass('false');
        if( !flag ) {
            if( !next ) {
                if( isCorrectTask4() ) {
                    $page.find('.result-text').addClass('true').text('ВЕРНО');
                    if( task4Index == quest.length - 1 ) $btn2.text('Результаты');
                    else $btn2.text('Далее');
                    addResults(task4Index);
                    next = true;
                    playAudio('audioSuccess');
                }
                else {                
                    task4Try[task4Index]++;
                    $page.find('.result-text').addClass('false').text('НЕВЕРНО');
                    $btn2.text('Ещё раз');
                    playAudio('audioFail');
                    flag = true;
                }
            }
            else {
                next = false;
                $page.find('.result-text').text('');
                $btn2.text('Проверить').addClass('hide');
                $page.find('.choice').removeClass('choice');
                flag = false;
                if ( task4Index == quest.length - 1 ) {
                   showTask4Result();
                }
                task4Index++;
                
                if( task4Index < quest.length ) {
                    
                    nextQ(task4Index);                    
                }
                else {
                    task4Index = quest.length; 
                }
            }
        }
        else{
            $page.find('.result-text').text('');
            $btn2.text('Проверить').addClass('hide');
            $page.find('.choice').removeClass('choice');
            flag = false;
            nextQ(task4Index);
        }
        if( quest[task4Index].type ) {
            if( quest[task4Index].type == '2' ) {
                initDrag();
                initDrop();
            } 
        }
    });
    /*initDrag();
    initDrop();*/
}
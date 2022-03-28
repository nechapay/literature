
var errCount = 0;
var TASK_COUNT = 2;
var results = [
    false,
    false
];

var tasks = [];

Array.prototype.shuffle = function() {
   for (var i = this.length - 1; i > 0; i--) {
       var num = Math.floor(Math.random() * (i + 1));
       var d = this[num];
       this[num] = this[i];
       this[i] = d;
   }
   return this;
};

$(document).ready(function () {
    initHandlers();
    setTaskBtn();
    onResize();
});

window.addEventListener("resize", function () {
    onResize();
}, true);

function setTaskBtn() {

    var $tsk1 = $('#tsk1');
    var $tsk2 = $('#tsk2');
    var $tsk3 = $('#tsk3');
    var $tsk4 = $('#tsk4');
    var vi1 = document.getElementById('vi1');
    var vi2 = document.getElementById('vi2');
    var vi3 = document.getElementById('vi3');
    var vi4 = document.getElementById('vi4');
    
    var stopVideo = function() {
        if(!vi1.paused){
            vi1.pause(); 
            vi1.currentTime = 0;
        }
        if(!vi2.paused){
            vi2.pause(); 
            vi2.currentTime = 0;
        }
        if(!vi3.paused){
            vi3.pause(); 
            vi3.currentTime = 0;
        }
        if(!vi4.paused){
            vi4.pause(); 
            vi4.currentTime = 0;
        }
    }
    
    $tsk1.on('click', function () {
        stopVideo();
        goToPage('#page_1');
    });
    
     $tsk2.on('click', function () {
         stopVideo();
        goToPage('#page_2');
    });
    
    $tsk3.on('click', function () {
        stopVideo();
        goToPage('#page_3');
    });
    
     $tsk4.on('click', function () {
         stopVideo();
        goToPage('#page_4');
    });
    
    setBtnAnim($tsk1);
    setBtnAnim($tsk2); 
    setBtnAnim($tsk3); 
    setBtnAnim($tsk4);
    
}

function setBtnAnim($obj) {
    
    $obj.mouseup(function(){
        $obj.css({'box-shadow' : '0 1px 2px 0 rgba(0,0,0,.5)'});
    });
    
    $obj.mousedown(function(){
        $obj.css({'box-shadow' : 'none'});
    });
}

function onResize(){
    // var $body = $('body');

    //$('#debug').text('width:' + $body.width() + ', height:' + $body.height() + ', ver ' + $.browser.version);
}

function goToPage(page, speed){
    if(!page)
        return false;
    if(!speed)
        speed = 300;

    var $newPage = $(page);
    var $curPage = $('.page.active');
    if($newPage.attr('id') === $curPage.attr('id')) {
        onPageNavigate(page);
        return false;
    }

    $curPage.fadeOut(speed, function () {
        $curPage.removeClass('active');

        onPageNavigate(page);

        $newPage.fadeIn(speed, function () {
            $newPage.addClass('active');
            onResize();
        });
        setTimeout(function () {
            beforePageNavigate();
            onResize();
        }, 50);
    });
}

function initHandlers() {
    // if(jQBrowser.mac || jQBrowser.ipad || jQBrowser.iphone){
    //     $('body').css('font-size', '11px');
    //     $('.layout-title.group').parent().css('margin-right', '10px');
    //     $('.input-plate').addClass('ios');
    // }

    $('.help-plate').addClass('active');
    setTimeout(function () {
        $('.help-plate').removeClass('active');
    }, 100);

    // $('#startBtn').click(function (e) {
    //     goToPage('#page_1');
    //     // goToPage('#page_2');
    // });
    goToPage('#page_1');

    $(window).trigger('resize');
}

function setTask(page, index){
    var $page = $(page);
    $page.find('.task-text').html(tasks[index].task);
    $page.find('.help-text').html(tasks[index].help);
}

function toggleHelp(page, show){
    var $page = $(page);

    var doShow = function () {
        $page.find('.tb-cont').fadeOut(300, function () {
            $page.find('.help-text').fadeIn(200);
        });
    };
    var doHide = function () {
        $page.find('.help-text').fadeOut(300, function () {
            $page.find('.tb-cont').fadeIn(200);
        });
    };

    if(show !== undefined){
        if(show) doShow();
        else doHide();
    }else{
        if($page.find('.help-text').css('display') !== 'none') doHide();
        else doShow();
    }
}

function toggleTask(page, show){
    var $page = $(page);

    var doShow = function () {
        $page.find('.task-text').slideDown(200);
    };
    var doHide = function () {
        $page.find('.task-text').slideUp(200);
    };

    if(show !== undefined){
        if(show) doShow();
        else doHide();
    }else{
        if($page.find('.task-text').css('display') !== 'none') doHide();
        else doShow();
    }
}

var beforePageNavigate = function (args) {};

function onPageNavigate(page){
    switch (page){
        case '#page_1':{
            //setTask('#page_1', 0);
            taskOnPage1();
        }break;
        case '#page_2':{
            //setTask('#page_2', 1);
            taskOnPage2();
        }break;
        case '#page_3':{
            //setTask('#page_3', 2);
            taskOnPage3();
        }break;
        case '#page_4':{
            taskOnPage4();
        }break;
    }
}

function showTrue(timeout, next){
    $('.pop-mes').fadeIn(50, function (e) {
        $('.pop-mes .pop-mes-true').fadeIn(100, function (e) {
            setTimeout(function () {
                $('.pop-mes .pop-mes-true').fadeOut(100, function () {
                    $('.pop-mes').fadeOut(50, function () {
                        if(next && typeof(next) === 'function')
                            next();
                    });
                });
            }, timeout);
        });
    });
}

function playAudio(audio, options) {
    options = options || {};
    var a = document.getElementById(audio);
    console.log(a);
    //a.playbackRate = options.speed || 1;

    // if(a.currentTime)
    //     a.currentTime = 0;
    $(a).off();

    var onEnded = function (e) {
        
    };
    
    a.play();
    a.addEventListener('ended', onEnded);
}

function playVideo(video, options){
    options = options || {};
    var v = document.getElementById(video);
    v.playbackRate = options.speed || 1;

    if(v.currentTime)
        v.currentTime = 0;
    $(v).off();

    var inside = false;

    if(!options.duration)
        options.duration = 300;
    if(!options.timeBeforeEnd)
        options.timeBeforeEnd = 0.3;

    $('#whiteBack').fadeIn(options.duration, function () {
        $(v).fadeIn(options.duration, function () {
            if(!$.browser.mobile){
                $('video').removeAttr('controls');
                v.play();
            }else{
                $('.pop-mes').fadeIn(50, function (e) {
                    $('.pop-mes img').fadeIn(100, function (e) {
                        var $play = $(this);
                        $play.off('click').click(function (e) {
                            $play.hide();
                            $play.parent().parent().hide();
                            v.play();
                        });
                    });
                });
            }
        });
    });

    var endedWatch = function () {
        if((this.currentTime >= (this.duration - options.timeBeforeEnd) && !this.paused) ||
            (this.currentTime >= this.duration && this.paused) && !inside){
            inside = true;
            this.pause();
            if(!options.notDrop){
                if(options.onbeforeended && typeof(options.onbeforeended) === 'function')
                    options.onbeforeended();

                $(v).fadeOut(options.duration, function () {
                    if(!options.notHideBackground)
                        $('#whiteBack').fadeOut(options.duration);

                    if (options.onended && typeof(options.onended) === 'function')
                        options.onended();
                });
            }
        }
    };
    v.addEventListener('timeupdate', endedWatch);
}

function showPlay(video, next){
    $('.pop-mes').fadeIn(50, function (e) {
        $('.pop-mes img').fadeIn(100, function (e) {
            var $play = $(this);
            $play.off('click').click(function (e) {
                $play.hide();
                $play.parent().parent().hide();
                document.getElementById(video).play();

                if (next && typeof(next) === 'function')
                    next();
            });
        });
    });
}

function showError(timeout, next){
    $('.pop-mes').fadeIn(50, function (e) {
        $('.pop-mes .pop-mes-false').fadeIn(100, function (e) {
            setTimeout(function () {
                $('.pop-mes .pop-mes-false').fadeOut(100, function () {
                    $('.pop-mes').fadeOut(50, function () {
                        if(next && typeof(next) === 'function')
                            next();
                    });
                });
            }, timeout);
        });
    });
}

function showErrorFatal(next){
    $('.pop-mes').fadeIn(50, function (e) {
        $('.pop-mes .pop-mes-fatal').fadeIn(100, function (e) {
        });
    });
}

function showTrueAnswerWords(next){
    $('.pop-mes').fadeIn(50, function (e) {
        $('.pop-mes .pop-mes-true-answer').fadeIn(100, function (e) {
        });
    });
}

function showErrorWithTry(next){
    var $btn = $('.page.active').attr('id');
    $btn = $('#' + $btn).find('.error-btn');
    $btn.off('click');
    $btn.fadeIn(200, function (e) {
        $btn.focus();
        $btn.click(function () {
            $(this).fadeOut(300, function () {
                if(next && typeof(next) === 'function')
                    next();
            });
        });
    });
}

function showHelpBtn($inputElem, onClose){
    var $btn = $('#contentContainer').find('.help-btn');
    $btn.off('click');
    $btn.fadeIn(200, function (e) {
        $btn.click(function () {
            var $closeBtn = $('#helpDialog').find('.close-btn-cross');
            $closeBtn.off('click').click(function () {
                $('#helpDialog').modal('hide');
                if(onClose && typeof(onClose) === 'function'){
                    onClose($inputElem ? $inputElem.prop('disabled') : true);
                }
            });
            $('#helpDialog').modal({backdrop: 'static', keyboard: false});
        });
    });
}

function hideHelpBtn(next){
    $('#contentContainer').find('.help-btn').fadeOut(300, function () {
        if(next && typeof(next) === 'function')
            next();
    });
}

function showContinue(next){
    var $btn = $('#contentContainer').find('.continue-btn');
    $btn.off('click');
    $btn.fadeIn(200, function (e) {
        $btn.click(function () {
            $(this).fadeOut(300, function () {
                if(next && typeof(next) === 'function')
                    next();
            });
        });
    });
}

function hideContinue(next){
    $('#contentContainer').find('.continue-btn').fadeOut(300, function () {
        if(next && typeof(next) === 'function')
            next();
    });
}

function showCheck(next){
    var $btn = $('#contentContainer').find('.check-btn');
    $btn.off('click');
    $btn.fadeIn(200, function (e) {
        $btn.click(function () {
            if(next && typeof(next) === 'function')
                next();
        });
    });
}

function hideCheck(next){
    $('#contentContainer').find('.check-btn').fadeOut(300, function () {
        if(next && typeof(next) === 'function')
            next();
    });
}

function showRepeat(next){
    var $btn = $('#contentContainer').find('.repeat-btn');
    $btn.off('click');
    $btn.fadeIn(200, function (e) {
        $btn.click(function () {
            if(next && typeof(next) === 'function')
                next();
        });
    });
}

function hideRepeat(next){
    $('#contentContainer').find('.repeat-btn').fadeOut(300, function () {
        if(next && typeof(next) === 'function')
            next();
    });
}
function addStep(width, isActivated, step) {
    var li = $("<li></li>")
    var masterDiv = $("<div class=\"step\"></div>").appendTo(li)
    $("<div class=\"step-image\"><span></span></div>").appendTo(masterDiv)
    $("<div class=\"step-current\">" + step.title + "</div>").appendTo(masterDiv)
    $("<div class=\"step-description\">" + step.subTitle + "</div>").appendTo(masterDiv)

    var percent = (width * 100).toFixed(2) + '%'
    console.log("percent: ", percent)
    li.css('width', percent)
    if (isActivated) {
        li.addClass('activated')
    }
    else {
        li.removeClass('activated')
    }
    return li
}

function updateStepper(stepper, options) {
    var _container = stepper.find('.steps-container')
    var _progress = options.progress || 0
    var steps = options.steps
    if (steps && steps.length > 0) {
        if (_progress > steps.length) {
            _progress = steps.length
        }
        _container.empty() // Remove children
        var _step_length = (1 / steps.length)
        for (var i = 0; i < options.steps.length; i++) {
            var _step = steps[i]
            var _isActivated = _progress > i
            addStep(_step_length, _isActivated, _step).appendTo(_container)
        }
    }

    var _current_steps = _container.children()
    if (_progress > _current_steps.length) {
        _progress = _current_steps.length
    }
    for (var i = 0; i < _current_steps.length; i++) {
        var li = $(_current_steps[i])
        if (_progress > i) {
            li.addClass('activated')
        }
        else {
            li.removeClass('activated')
        }
    }

    var _bar_percent = (_progress * (1 / _container.children().length) * 100).toFixed(2) + '%'
    stepper.find(".step-bar").css('width', _bar_percent)
}

# stepProgress
A simple markup component step-by-step for the organization of sequences processes using HTML and CSS3.

![steps](https://cloud.githubusercontent.com/assets/6153386/13013794/36805868-d198-11e5-9b2e-e1e3c4b87825.png)

**Demo**: http://tcavalin.github.io/stepProgress/

## Basic usage ##

The "stepProgress" can be created using the following syntax:

```html
    <div class="steps">
        <ul class="steps-container">
            <li style="width:100%;" class="activated">
                <div class="step">
                    <div class="step-image"><span></span></div>
                    <div class="step-current">Etapa 1</div>
                    <div class="step-description">Contexto</div>
                </div>
            </li>
        </ul>
        <div class="step-bar" style="width: 100%;"></div>
    </div>
```

You can spice up adding other `<li>` tags and adjusting the size of each. Add the class `class="activated"` to mark each completed step.

```html
    <div class="steps">
        <ul class="steps-container">
            <li style="width:33%;" class="activated">
                <div class="step">
                    <div class="step-image"><span></span></div>
                    <div class="step-current">Etapa 1</div>
                    <div class="step-description">Contexto</div>
                </div>
            </li>
            <li style="width:33%;">
                <div class="step">
                    <div class="step-image"><span></span></div>
                    <div class="step-current">Etapa 2</div>
                    <div class="step-description">Selecionar</div>
                </div>
            </li>
            <li style="width:33%;">
                <div class="step">
                    <div class="step-image"><span></span></div>
                    <div class="step-current">Etapa 3</div>
                    <div class="step-description">Finalizar</div>
                </div>
            </li>
        </ul>
        <div class="step-bar" style="width: 33%;"></div>
    </div>
```

## Generate steps with JS ##

Add basic html structure in html:

```html
    <div id="mySteps">
    </div>
```

Add code to generate steps:

```javascript
var stepper = $("#mySteps")
var stepperOptions =
    {
        progress: 2,
        steps: [
            {
                title: 'Title 1',
                subTitle: 'SubTitle 1'
            },
            {
                title: 'Title 2',
                subTitle: 'SubTitle 2'
            },
            {
                title: 'Title 3',
                subTitle: 'SubTitle 3'
            },
            {
                title: 'Title 4',
                subTitle: 'SubTitle 4'
            }
        ]
    }
updateStepper(stepper, stepperOptions)
```

You can update progress by:

```javasctipt
updateStepper(stepper, { progress: 2 })
```

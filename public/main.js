window.addEventListener("load", function() {
    const outputWrapper = document.getElementById("output");

    const olderURL = document.getElementById("olderURL");
    const newURL = document.getElementById("newURL");
    const prefixDB = document.getElementById("prefixDB");

    const outputOlderURL = document.getElementsByClassName("output-older-url");
    const outputNewURL = document.getElementsByClassName("output-new-url");
    const outputPrefixDB = document.getElementsByClassName("output-prefix-db");

    function updateValueOutput(input, output) {
        output.innerText = input;
    }

    olderURL.addEventListener("input", function() {
        [].forEach.call(outputOlderURL, e => {
            updateValueOutput(olderURL.value, e);
        });
    });

    newURL.addEventListener("input", function() {
        [].forEach.call(outputNewURL, e => {
            updateValueOutput(newURL.value, e);
        });
    });

    prefixDB.addEventListener("input", function() {
        [].forEach.call(outputPrefixDB, e => {
            updateValueOutput(prefixDB.value, e);
        });
    });

    const $insertCustomFields = document.getElementById("insertCustomFields");
    const $formField = document.getElementById("formField");
    const $output = document.getElementById("output");

    function updateCustomTable(input, output) {
        input.addEventListener("input", () => {
            updateValueOutput(input.value, output);
        });
    }

    function updateCustomTableArr(input, outputArr) {
        input.addEventListener("input", () => {
            [].forEach.call(outputArr, eachOutput => {
                updateValueOutput(input.value, eachOutput);
            });
        });
    }

    let i = 0;
    $insertCustomFields.addEventListener("click", () => {
        $formField.insertAdjacentHTML(
            "beforeend",
            `<div class="customs-input-wrapper">
                <input class="customs-input" type="text" value="" id="customTable${i}" placeholder="Insira o nome da tabela personalizada" />
                <input class="customs-input" type="text" value="" id="customField${i}" placeholder="Insira o nome da variável personalizada" />
            </div>`
        );
        $output.insertAdjacentHTML(
            "beforeend",
            `<span class="custom-output-wrapper">
                <br />UPDATE <span class="output-prefix-db highlighted-code">${prefixDB.value}</span>_<span id="table${i}"></span> SET <span class="field-0${i}"></span> = replace(<span id="field${i}" class="field-0${i}">@</span>, ${olderURL.value}, ${newURL.value});
            </span>`
        );

        updateCustomTable(
            document.getElementById(`customTable${i}`),
            document.getElementById(`table${i}`)
        );
        updateCustomTableArr(
            document.getElementById(`customField${i}`),
            document.getElementsByClassName(`field-0${i}`)
        );
        i++;

        let getAllInput = document.querySelectorAll("input");

        const alertMessage = document.getElementById("alertMessage");
        const closeMessage = document.getElementById("closeMessage");

        outputWrapper.addEventListener("mouseover", () => {
            [].forEach.call(getAllInput, eachInput => {
                if (!eachInput.value.length) {
                    alertMessage.classList.add("-show");
                }
            });
        });

        closeMessage.addEventListener("click", () => {
            alertMessage.classList.remove("-show");
        });
    });
});

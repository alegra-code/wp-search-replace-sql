window.addEventListener("load", function () {
    let olderURL = document.getElementById("olderURL");
    let newURL = document.getElementById("newURL");
    let prefixDB = document.getElementById("prefixDB");

    let outputOlderURL = document.getElementsByClassName("output-older-url");
    let outputNewURL = document.getElementsByClassName("output-new-url");
    let outputPrefixDB = document.getElementsByClassName("output-prefix-db");

    function updateValueOutput(input, output) {
        output.innerText = input;
    }

    olderURL.addEventListener("input", function () {
        [].forEach.call(outputOlderURL, e => {
            updateValueOutput(olderURL.value, e);
        });
    });

    newURL.addEventListener("input", function () {
        [].forEach.call(outputNewURL, e => {
            updateValueOutput(newURL.value, e);
        });
    });

    prefixDB.addEventListener("input", function () {
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

    let i = 0;
    $insertCustomFields.addEventListener("click", () => {
        $formField.insertAdjacentHTML(
            "beforeend",
            `
            <input class="customs-input" type="text" value="" id="customTable${i}" placeholder="Prefixo do Banco de Dados" />
            <input class="customs-input" type="text" value="" id="customField${i}" placeholder="Insira o nome da tabela" />
        `
        );
        $output.insertAdjacentHTML(
            "beforeend",
            `
            <br />UPDATE <span class="output-prefix-db highlighted-code">wp</span>_<span id="table${i}"></span> SET <span class="field-0${i}"></span> = replace(<span class="field-0${i}"></span>, @lore, @ips);
        `
        );

        updateCustomTable(
            document.getElementById(`customTable${i}`),
            document.getElementById(`table${i}`)
        );
        i++;
    });
});

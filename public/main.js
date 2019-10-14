window.addEventListener('load', function () {
    let olderURL = document.getElementById('olderURL');
    let newURL = document.getElementById('newURL');
    let prefixDB = document.getElementById('prefixDB');

    let outputOlderURL = document.getElementById('outputOlderURL');
    let outputNewURL = document.getElementById('outputNewURL');
    let outputPrefixDB = document.getElementsByClassName('output-prefix-db');

    function updateValueOutput(input, output) {
        output.innerText = input;
    }

    olderURL.addEventListener('input', function () {
        updateValueOutput(olderURL.value, outputOlderURL);
    });

    newURL.addEventListener('input', function () {
        updateValueOutput(newURL.value, outputNewURL);
    });

    prefixDB.addEventListener('input', function () {
        [].forEach.call(outputPrefixDB, (e) => {
            updateValueOutput(prefixDB.value, e);
        })
    });

    const $insertCustomFields = document.getElementById("insertCustomFields");
    const $formField = document.getElementById("formField");
    const $output = document.getElementById("output");

    function updateCustomTable(input, output) {
        output.innerText = input;
    }

    let i = 0;
    $insertCustomFields.addEventListener("click", () => {
        $formField.insertAdjacentHTML("beforeend", `
            <input type="text" value="oi" id="customTable${i}" placeholder="Insira o nome da tabela" />
        `);
        $output.insertAdjacentHTML("beforeend", `
            <br />UPDATE <span class="output-prefix-db highlighted-code">wp</span>_<span id="teste1">${document.getElementById(`customTable${i}`).value}</span> SET guid = replace(guid, @lore, @ips);
        `);

        watchingCustomField(`${document.getElementById(`customTable${i}`).value}`);

        i++;
    });

    function watchingCustomField(elment) {
        [].forEach.call(document.querySelectorAll("input"), (e) => {
            e.addEventListener("input", () => {
                updateCustomTable(elment, document.querySelector("#teste1"));
            });
        });
    }
})

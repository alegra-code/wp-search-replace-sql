window.addEventListener("load", function() {
    let olderURL = document.getElementById("olderURL");
    let newURL = document.getElementById("newURL");
    let prefixDB = document.getElementById("prefixDB");

    let outputOlderURL = document.getElementsByClassName("output-older-url");
    let outputNewURL = document.getElementsByClassName("output-new-url");
    let outputPrefixDB = document.getElementsByClassName("output-prefix-db");

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

    let i = 0;
    $insertCustomFields.addEventListener("click", () => {
        $formField.insertAdjacentHTML(
            "beforeend",
            `
            <input type="text" value="oi" id="customTable${i}" placeholder="Insira o nome da tabela" />
        `
        );
        $output.insertAdjacentHTML(
            "beforeend",
            `
            <br />UPDATE <span class="output-prefix-db highlighted-code">wp</span>_<span id="teste1">oi</span> SET <span class="">guid</span> = replace(<span class="">guid</span>, @lore, @ips);

            // UPDATE
            //     <span class="output-prefix-db highlighted-code">wp</span>_posts
            //     SET guid = replace(guid, '<span class="output-older-url">https://producao.com.br</span>', '<span class="output-new-url">https://localhost.com</span>');
        `
        );

        updateCustomTable(
            document.getElementById(`customTable${i}`),
            document.getElementById("teste1")
        );
        i++;
    });
});

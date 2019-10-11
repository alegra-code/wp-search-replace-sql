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


})
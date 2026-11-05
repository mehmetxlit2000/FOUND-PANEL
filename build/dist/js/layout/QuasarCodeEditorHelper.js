const jsContainer = document.getElementById('quasar-main-js');

const links = [
    "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/highlight.min.js",
    "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/languages/dart.min.js",
    "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/languages/delphi.min.js",
    "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/languages/x86asm.min.js",
    "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/languages/armasm.min.js"
];

links.forEach(l => {
    let scriptLink = document.createElement('script');
    scriptLink.src = l;
    scriptLink.type = 'text/javascript';
    scriptLink.async = true;
    // scriptLink.defer = true;
    jsContainer.insertAdjacentElement('beforebegin', scriptLink);
});
IntervalCount = 0;
const checkInterval = setInterval(() => {

    const isLoaded = typeof window.hljs !== 'undefined' && typeof window.hljs.getLanguage('dart') !== 'undefined';
    if (isLoaded) {
        clearInterval(checkInterval);
        QuasarScriptorium(null,null,null,"build/dist/js/layout/QuasarCodeEditor.js")
    } else if(IntervalCount >= 50) {
        clearInterval(checkInterval);
        console.log('Yüklenemedi');
    }
    else {
        console.log('Yükleniyor...');
        IntervalCount++
    }
}, 100);
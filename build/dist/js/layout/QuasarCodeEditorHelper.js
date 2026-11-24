const jsContainer = document.getElementById('quasar-main-js');

const hljsCore = "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/highlight.min.js";
const hljsLangs = [
    "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/languages/dart.min.js",
    "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/languages/delphi.min.js",
    "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/languages/x86asm.min.js",
    "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/languages/armasm.min.js"
];

function loadScript(src) {
    return new Promise(resolve => {
        const s = document.createElement('script');
        s.src = src;
        s.type = 'text/javascript';
        s.onload = () => resolve(true);
        s.onerror = () => { console.warn('Yüklenemedi:', src); resolve(false); };
        jsContainer.insertAdjacentElement('beforebegin', s);
    });
}

(async () => {
    // 1) Çekirdek önce: dil dosyaları hljs.registerLanguage çağırdığı için hljs hazır olmalı
    const coreOk = await loadScript(hljsCore);
    if (!coreOk || typeof window.hljs === 'undefined') {
        console.log('highlight.js yüklenemedi');
        return;
    }

    // 2) Dil paketleri paralel yüklenebilir (hepsi çekirdeğe bağlı, birbirine değil)
    await Promise.all(hljsLangs.map(loadScript));

    // 3) Dillerin kayıtlı olduğunu doğrula, sonra editörü başlat
    let tries = 0;
    const check = setInterval(() => {
        const ready = typeof window.hljs.getLanguage('dart') !== 'undefined';
        if (ready) {
            clearInterval(check);
            QuasarScriptorium(null, null, null, "build/dist/js/layout/QuasarCodeEditor.js");
        } else if (++tries >= 50) {
            clearInterval(check);
            // Diller gelmese de çekirdekle çalışsın
            QuasarScriptorium(null, null, null, "build/dist/js/layout/QuasarCodeEditor.js");
            console.log('Bazı diller yüklenemedi, çekirdekle devam ediliyor');
        }
    }, 100);
})();
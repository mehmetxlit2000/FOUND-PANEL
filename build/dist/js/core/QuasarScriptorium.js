const QuasarLoadedResources = new Set();
const QuasarLoadedHTML = new Set();
QuasarLoadedHTML.add("quasar-starter");

async function QuasarHtmlDom(whom, where) {
    const GeneralTemplateModule = await import (`../components/general.js`);
    let templateModule = null;
    const QuasarElementControl = document.querySelector(whom)
    try{
        templateModule = await import (`../components/${whom}.js`)
    } catch (e) {
        templateModule = null
    }
    // Race Condition Error Bypass
    const QuasarWaitForElementPromise = (selector, timeout = 10000) => {
        return new Promise((resolve) => {

            const QuasarWaitForElement = document.querySelector(selector);
            if (QuasarWaitForElement) return resolve(QuasarWaitForElement);

            const observer = new MutationObserver(() => {
                const target = document.querySelector(selector);
                if (target) {observer.disconnect();resolve(target);}
            });

            observer.observe(document.documentElement, {childList: true, subtree: true});

            setTimeout(() => {
                observer.disconnect();
                resolve(document.querySelector(selector));
            }, timeout);

        });
    };

    function QuasarRemoveTemplate(){
        QuasarLoadedHTML.forEach(d => {
            let QuasarTarget = document.querySelector(d);
            if (QuasarTarget.parentNode === document.querySelector('#quasar-main') && QuasarTarget.style.display !== "none" && QuasarTarget !== QuasarElementControl) {
                QuasarTarget.style.display = "none";
            }
        })
    }

    function QuasarCreateElement(whom) {
        let template = document.createElement(whom);
        template.innerHTML = templateModule?.template ?? GeneralTemplateModule.QuasarErrorWhom;
        QuasarLoadedHTML.add(whom);
        return template
    }

    async function QuasarInit() {
        const targetElement = (where === "#quasar-main") ? document.querySelector(where) : await QuasarWaitForElementPromise(where);

        if (where === "#quasar-main") {
            QuasarRemoveTemplate()
            if (!QuasarElementControl) {
                targetElement.appendChild(QuasarCreateElement(whom));
            } else {
                QuasarElementControl.style.display = "block";
            }
        } else {
            targetElement.appendChild(QuasarCreateElement(whom));
        }
    }
    // // Hydration Error Bypass
    if (document.readyState === "loading") return new Promise((resolve) => {document.addEventListener("DOMContentLoaded", async () => {await QuasarInit();resolve();}, { once: true });});

    return QuasarInit();
}

async function QuasarScriptorium(whom, where, css, js) {
    if (css && css !== 'null') {
        let QuasarParseCss = css.split('-').map(s => s.trim().replace(/^['"]|['"]$/g, ''))
        QuasarParseCss.forEach(c => {
            if (!QuasarLoadedResources.has(c)){
                let staticStyle = document.createElement('link');
                staticStyle.className = "quasar-static-css";
                staticStyle.rel = "stylesheet";
                staticStyle.as = "style";
                staticStyle.href = c;
                document.head.appendChild(staticStyle);
                QuasarLoadedResources.add(c);
            }

        })
    }

    if (whom && where && whom !== 'null' && where !== 'null') {
        await QuasarHtmlDom(whom, where)
    }

    if (js && js !== 'null') {
        let QuasarParseJs = js.split('-').map(s => s.trim().replace(/^['"]|['"]$/g, ''));
        QuasarParseJs.forEach(j => {
            if (!QuasarLoadedResources.has(j)) {
                let staticJs = document.createElement('script');
                staticJs.className = "quasar-static-js";
                staticJs.src = j;
                QuasarLoadedResources.add(j);
                document.body.appendChild(staticJs);
            }
        })
    }
}

const QuasarElements = document.querySelectorAll('[quasar-observer]');

const QuasarScriptoriumObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const QuasarKetterdam = entry.target.getAttribute('quasar-observer');
            if (QuasarKetterdam) {
                const [whom, where, css, js] = QuasarKetterdam.split(',').map(s => s.trim().replace(/^['"]|['"]$/g, ''));
                QuasarScriptorium(whom, where, css, js);
                entry.target.removeAttribute('quasar-observer');
            }
            observer.unobserve(entry.target);
        }
    });
});

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {QuasarElements.forEach(o => QuasarScriptoriumObserver.observe(o))});
} else {
    QuasarElements.forEach(o => QuasarScriptoriumObserver.observe(o))
}
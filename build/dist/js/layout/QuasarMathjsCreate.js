function loadMathJax() {
    return new Promise((resolve, reject) => {
        if (window.MathJax?.typesetPromise) {
            resolve(window.MathJax);
            return;
        }

        const existingScript = document.getElementById('MathJax-script');
        if (existingScript) {
            existingScript.addEventListener('load', () => resolve(window.MathJax), { once: true });
            existingScript.addEventListener('error', reject, { once: true });
            return;
        }

        window.MathJax = {
            tex: {
                inlineMath: [['$', '$'], ['\\(', '\\)']],
                displayMath: [['$$', '$$'], ['\\[', '\\]']]
            },
            output: {
                font: 'mathjax-fira',
                displayAlign: 'left'
            },
            startup: {
                pageReady: () => {
                    return window.MathJax.startup.defaultPageReady().then(() => {
                        resolve(window.MathJax);
                    });
                }
            }
        };

        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.id = 'MathJax-script';
        script.async = true;
        script.src = 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js';
        script.onerror = (err) => reject(err);
        document.head.appendChild(script);
    });
}

async function renderMathJax(hedefElement = document.body) {
    try {
        const mj = await loadMathJax();
        const targets = Array.isArray(hedefElement) ? hedefElement : [hedefElement];
        const validTargets = targets.filter(Boolean);

        if (mj?.typesetPromise && validTargets.length > 0) {
            mj.typesetClear?.(validTargets);
            await mj.typesetPromise(validTargets);
        }
    } catch (error) {
        console.error('MathJax yükleme veya render hatası:', error);
    }
}

// Kullanım örneği:
const hedefElement = document.getElementById('quasar-main');
renderMathJax(hedefElement);
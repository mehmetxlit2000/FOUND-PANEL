function QuasarInfiniteScroll(QuasarData,QuasarTargetDom, QuasarCreateNode, QuasarPageSize){
    let QuasarIndex = 0;
    const QuasarSentinel = document.createElement('div');
    QuasarSentinel.className = 'quasar-sentinel';
    QuasarTargetDom.appendChild(QuasarSentinel);
    const QuasarLoadDom = function() {
        if(QuasarIndex >= QuasarData.length){
            QuasarSentinel.remove();
            QuasarDomObserve.disconnect();
            return;
        };
        const QuasarSlice = QuasarData.slice(QuasarIndex, QuasarIndex + QuasarPageSize);
        QuasarIndex += QuasarPageSize
        const QuasarFragment = document.createDocumentFragment();
        QuasarSlice.forEach(f => {QuasarFragment.appendChild(QuasarCreateNode(f))})
        QuasarTargetDom.append(QuasarFragment,QuasarSentinel)
    }
    const QuasarDomObserve = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                QuasarLoadDom();
            }
        })
    },{
        root: null,
        rootMargin: '100px',
        threshold: 0.1
    })
    QuasarDomObserve.observe(QuasarSentinel)
    QuasarLoadDom();
    return QuasarLoadDom;
}

// QuasarInfiniteScroll(data, DOMContainer, function, adet);
(function(){
    /* Sayfa geçişlerinde script tekrar çalışırsa: yeniden kurma, sadece tara */
    if(window.__ktInit){ if(window.__ktRun) window.__ktRun(); return; }
    window.__ktInit=1;

    var HLJS_URLS=[
        'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/highlight.min.js',
        'https://cdn.jsdelivr.net/npm/@highlightjs/cdn-assets@11.9.0/highlight.min.js'
    ];

    /*FMT*/
    var IU=4;
    function pad(n){return ' '.repeat(Math.max(0,n)*IU)}
    function cnt(c){return (c.match(/[{(\[]/g)||[]).length-(c.match(/[})\]]/g)||[]).length}
    var VD=/^(br|hr|img|input|meta|link|area|base|col|embed|source|track|wbr|param)$/i;
    function scan(t,st){
        var s=t.replace(/=>/g,'=_').replace(/<!--.*?-->|<![^>]*>/g,'').replace(/"[^"]*"/g,function(x){return x.replace(/[<>]/g,'_')}),run=0,min=0,p=0,m,g;
        while(p<s.length){
            if(st.o){m=/\/?>/.exec(s.slice(p));if(!m){p=s.length;break}p+=m.index+m[0].length;st.o=0;if(m[0]=='>'&&!VD.test(st.n))run++}
            else{m=/<(\/?)([\w:.-]*)/.exec(s.slice(p));if(!m)break;p+=m.index+m[0].length;
                if(m[1]){run--;min=Math.min(min,run);g=s.indexOf('>',p);p=g<0?s.length:g+1}else{st.o=1;st.n=m[2]}}
        }
        return {run:run,min:min};
    }
    function mkB(lang){
        var jsx=/^(javascript|typescript)$/.test(lang),hash=/^(perl|php)$/.test(lang),pp=/^(c|cpp|csharp|objectivec)$/.test(lang),go=lang=='go',
            S={d:0,st:[],one:0,blk:0,jd:0},jx={o:0,n:''};
        return function(t){
            if(S.blk){if(t.indexOf('*/')>-1)S.blk=0;return [S.d+S.jd,(t[0]=='*'?' ':'')+t]}
            if(pp&&t[0]=='#')return [0,t];
            var c=t.replace(/\/\*.*?\*\//g,'').replace(/"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|`(?:\\.|[^`\\])*`/g,'""').replace(/\/\/.*$/,'');
            if(hash)c=c.replace(/#.*$/,'');
            c=c.trim();
            var o0=jx.o,tg=jsx&&(o0||/^<[A-Za-z>\/]/.test(t)),r=tg?scan(t,jx):null;
            if(/^\/\*/.test(t)&&t.indexOf('*/')<0)S.blk=1;
            var top=S.st[S.st.length-1],lab=!!(top&&top.sw&&/^(case\b|default\s*:)/.test(c)),d0=S.d,lead=0,mid=0,started=0,cur=[],i,ch,e,n,ind;
            for(i=0;i<c.length;i++){
                ch=c[i];
                if('{(['.indexOf(ch)>=0){e={inc:0,al:1,cs:0,sw:ch=='{'&&/\b(switch|when)\b/.test(c)};S.st.push(e);cur.push(e);started=1}
                else if('})]'.indexOf(ch)>=0){e=S.st.pop();if(!e)continue;e.al=0;n=e.inc?1:0;if(e.inc&&e.sw&&e.cs&&!go)n=2;if(started)mid+=n;else lead+=n}
                else started=1;
            }
            if(lab){ind=go?d0-1:(top.cs?d0-1:d0);if(!top.cs){top.cs=1;if(!go)S.d++}}
            else ind=d0-lead;
            var prev=S.one,closer=/^[}\])]/.test(c);
            if(!closer&&!lab)ind+=prev;
            if(tg)ind+=S.jd+(o0?(/^\/?>/.test(t)?0:1):r.min);
            else{ind+=S.jd;if(t[0]=='.')ind++}
            S.d=Math.max(0,S.d-lead-mid);
            for(i=cur.length-1;i>=0;i--)if(cur[i].al){cur[i].inc=1;S.d++;break}
            if(tg)S.jd=Math.max(0,S.jd+r.run);
            var open=cur.some(function(x){return x.al});
            S.one=(/^(if|for|while|else\s+if|else|foreach|do)\b/.test(c)&&!/[{;,]$/.test(c)&&!open)?prev+1:0;
            return [Math.max(0,ind),t];
        };
    }
    function py(L){
        var out=[],hs=[],pl=0,po=0,pt=0,blank=0,br=0,doc=0,dl=0,first=1,pend=[],ld=null,lc=null,lds=0,lcs=0,seq=0;
        L.forEach(function(t){
            if(!t){out.push('');blank=1;return}
            if(doc){out.push(pad(dl)+t);if(/"""|'''/.test(t))doc=0;return}
            var c=t.replace(/"""|'''/g,'""').replace(/"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'/g,'""').replace(/#.*$/,'').trim();
            if(!c&&t[0]=='#'){pend.push(out.length);out.push(t);return}
            if(br>0){out.push(pad(pl+(/^[)\]}]/.test(c)?0:1))+t);br+=cnt(c);if(br<=0){br=0;po=/:$/.test(c);pt=0}return}
            var kw=(c.match(/^\w+/)||[''])[0],isDef=/^(async\b|def\b|class\b|@)/.test(c),L0;
            if(first)L0=0;
            else if(blank){
                if(isDef){if(/^class\b/.test(c))L0=0;else if(ld!=null&&(lc==null||lds>lcs))L0=ld;else if(lc!=null)L0=lc+1;else L0=0}
                else if(po)L0=pl+1;
                else if(pt)L0=(ld!=null&&pl==ld+1)?0:Math.max(0,pl-1);
                else L0=pl;
            }else L0=po?pl+1:pt?Math.max(0,pl-1):pl;
            if(/^(elif|else|except|finally)\b/.test(c)){
                for(var i=hs.length-1;i>=0;i--)if(hs[i].l<=pl&&/^(if|elif|for|while|try|except|with)$/.test(hs[i].k)){L0=hs[i].l;break}
            }
            while(hs.length&&hs[hs.length-1].l>=L0)hs.pop();
            if(/^(if|elif|else|for|while|try|except|finally|with|def|class|async)$/.test(kw))hs.push({l:L0,k:kw=='async'?'def':kw});
            if(/^(async\s+)?def\b/.test(c)){ld=L0;lds=++seq}
            if(/^class\b/.test(c)){lc=L0;lcs=++seq}
            pend.forEach(function(ix){out[ix]=pad(L0)+out[ix]});pend=[];
            out.push(pad(L0)+t);
            if((t.match(/"""|'''/g)||[]).length%2==1){doc=1;dl=L0}
            br=Math.max(0,cnt(c));pl=L0;blank=0;first=0;
            po=br==0&&/:$/.test(c);pt=/^(return|raise|break|continue|pass)\b/.test(c);
        });
        pend.forEach(function(ix){out[ix]=pad(pl)+out[ix]});
        return out;
    }
    function xml(L){
        var out=[],d=0,st={o:0,n:''},emb=null;
        L.forEach(function(t){
            if(!t){out.push('');return}
            if(emb&&!/^<\/(script|style)/i.test(t)){var r0=emb(t);out.push(pad(d+r0[0])+r0[1]);return}
            emb=null;
            var o0=st.o,r=scan(t,st),ind=o0?(/^\/?>/.test(t)?d:d+1):d+r.min;
            out.push(pad(ind)+t);d=Math.max(0,d+r.run);
            if(!st.o&&/^<(script|style)\b[^>]*>\s*$/i.test(t))emb=mkB(/^<style/i.test(t)?'css':'javascript');
        });
        return out;
    }
    function pas(L){
        var out=[],d=0,one=0,sec=0;
        L.forEach(function(t){
            if(!t){out.push('');return}
            var c=t.replace(/'[^']*'/g,"''").replace(/\/\/.*$|\{.*?\}|\(\*.*?\*\)/g,'').trim(),lc=c.toLowerCase(),ind,prev=one;
            if(/^(end|until)\b/.test(lc)){d=Math.max(0,d-1);sec=0;ind=d}
            else if(/^(except|finally)\b/.test(lc))ind=Math.max(0,d-1);
            else if(/^(var|const|type|uses|label)\b/.test(lc)){sec=0;ind=d}
            else if(/^(procedure|function|constructor|destructor|begin|implementation|interface|program|unit|initialization|finalization)\b/.test(lc)){sec=0;ind=d}
            else if(/^else\b/.test(lc))ind=d;
            else ind=d+(sec?1:0)+(/^begin\b/.test(lc)?0:prev);
            if(/^(var|const|type|label)\b/.test(lc)&&!/;\s*$/.test(c.replace(/^\w+\s*/,'')===''?'x':c))sec=1;
            if(/^(var|const|type|label)\b/.test(lc)&&c.replace(/^\w+\s*/,'')==='')sec=1;
            if(/^(procedure|function|constructor|destructor|begin)\b/.test(lc)||/\b(begin|try|repeat|record|of)$/.test(lc)||/=\s*(class|record)\b/.test(lc)&&!/\bend;?$/.test(lc)){
                if(/^(procedure|function|constructor|destructor)\b/.test(lc)&&!/\bbegin$/.test(lc)){}else d++;
            }
            if(/^(except|finally)\b/.test(lc)){}
            one=(/\b(then|do|else)$/.test(lc)&&!/\bbegin$/.test(lc))?1:0;
            out.push(pad(ind)+t);
        });
        return out;
    }
    function asm(L){
        var ty=L.map(function(t){
            if(!t)return null;if(/^[;@#]|^\/\//.test(t))return 'c';
            var m=t.replace(/[;@].*$/,'').trim();
            return (/^[A-Za-z_.$?][\w.$@?]*:/.test(m)||/^(section|segment|global|globl|extern|bits|org|align|default)\b/i.test(m)||/^[%.]/.test(m)||/^[\w.$@?]+\s+(db|dw|dd|dq|equ|resb|resw|resd|resq|=)\b/i.test(m))?0:1;
        });
        return L.map(function(t,i){
            if(ty[i]===null)return '';
            var k=ty[i];
            if(k=='c'){k=0;for(var j=i+1;j<L.length;j++)if(ty[j]!==null&&ty[j]!='c'){k=ty[j];break}}
            return pad(k)+t;
        });
    }
    var FAM={javascript:'b',typescript:'b',java:'b',c:'b',cpp:'b',csharp:'b',go:'b',rust:'b',kotlin:'b',swift:'b',dart:'b',php:'b',perl:'b',css:'b',scss:'b',less:'b',json:'b',objectivec:'b',python:'p',xml:'x',delphi:'d',x86asm:'a',armasm:'a'};
    var UN={javascript:2,typescript:2,css:2,scss:2,less:2,json:2,dart:2,xml:2};
    function format(code,lang){
        var f=FAM[lang];if(!f)return code;
        var L=code.split('\n').map(function(s){return s.trim()}),out;IU=UN[lang]||4;
        if(f=='b'){var B=mkB(lang);out=L.map(function(t){if(!t)return '';var r=B(t);return pad(r[0])+r[1]})}
        else out=(f=='p'?py:f=='x'?xml:f=='d'?pas:asm)(L);
        return out.join('\n');
    }
    function isFlat(code){
        var ls=code.split('\n').filter(function(x){return x.trim()});
        return ls.length>=3&&ls.filter(function(x){return /^\s/.test(x)}).length<ls.length*0.1;
    }
    /*END*/

    /* ---------- Yardımcılar ---------- */
    var SUB=null;
    var CSS_ID='kt-style-fallback';
    var CSS_TEXT=
        ':where(:root){--kt-bg:#0f1115;--kt-bar:#171a21;--kt-fg:#d6dbe4;--kt-fn:#61afef;--kt-str:#98c379;--kt-kw:#c678dd;--kt-num:#d19a66;--kt-cm:#6b7280;--kt-ln:#4b5263;--kt-bd:#262a33}'+
        ':where(.kt-kod){display:block;margin:1em 0;border:1px solid var(--kt-bd);border-radius:10px;overflow:hidden;background:var(--kt-bg);color:var(--kt-fg);font:13px/1.6 ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;text-align:left}'+
        ':where(.kt-kod) .kt-bar{display:flex;align-items:center;gap:6px;padding:8px 12px;background:var(--kt-bar);border-bottom:1px solid var(--kt-bd)}'+
        ':where(.kt-kod) .kt-d{display:inline-block;width:10px;height:10px;border-radius:50%}'+
        ':where(.kt-kod) .kt-lang{margin-left:auto;font-size:11px;opacity:.7;text-transform:uppercase;letter-spacing:.05em}'+
        ':where(.kt-kod) .kt-body{overflow-x:auto;padding:10px 0}'+
        ':where(.kt-kod) .kt-row{display:flex;min-width:max-content}'+
        ':where(.kt-kod) .kt-n{flex:0 0 3.2em;padding-right:1em;text-align:right;color:var(--kt-ln);user-select:none}'+
        ':where(.kt-kod) .kt-c{white-space:pre;tab-size:4}'+
        ':where(.kt-kod) .kt-m{color:var(--kt-fn)}'+
        ':where(.kt-kod) .hljs-keyword,:where(.kt-kod) .hljs-built_in,:where(.kt-kod) .hljs-literal,:where(.kt-kod) .hljs-selector-tag{color:var(--kt-kw)}'+
        ':where(.kt-kod) .hljs-string,:where(.kt-kod) .hljs-attr,:where(.kt-kod) .hljs-regexp{color:var(--kt-str)}'+
        ':where(.kt-kod) .hljs-number,:where(.kt-kod) .hljs-symbol{color:var(--kt-num)}'+
        ':where(.kt-kod) .hljs-comment,:where(.kt-kod) .hljs-quote{color:var(--kt-cm);font-style:italic}'+
        ':where(.kt-kod) .hljs-title,:where(.kt-kod) .hljs-function,:where(.kt-kod) .hljs-name,:where(.kt-kod) .hljs-tag{color:var(--kt-fn)}';

    /* Sayfa geçişinde <head> değişse bile stil her taramada yeniden garanti edilir.
       :where() sıfır özgüllüğe sahip olduğu için sitenin kendi CSS'i her zaman önceliklidir. */
    function ensureCSS(){
        if(document.getElementById(CSS_ID))return;
        var st=document.createElement('style');
        st.id=CSS_ID;st.textContent=CSS_TEXT;
        var h=document.head||document.documentElement;
        h.insertBefore(st,h.firstChild);
    }

    function dedent(t){
        t=t.replace(/\t/g,'    ').replace(/^\s*\n/,'').replace(/\s+$/,'');
        var ls=t.split('\n'),m=Math.min.apply(null,ls.filter(function(l){return l.trim()}).map(function(l){return l.match(/^ */)[0].length}));
        return ls.map(function(l){return l.slice(m)}).join('\n');
    }
    function splitLines(html,u){
        var out=[],stack=[],cur='';
        (html.match(/<span[^>]*>|<\/span>|\n|[^<\n]+/g)||[]).forEach(function(tok){
            if(tok[0]==='<'){tok[1]==='/'?stack.pop():stack.push(tok);cur+=tok}
            else if(tok==='\n'){out.push(cur+'</span>'.repeat(stack.length));cur=stack.join('')}
            else cur+=stack.length?tok:tok.replace(/\.([A-Za-z_$][\w$]*)(?=\()/g,'.<span class="kt-m">$1</span>');
        });
        out.push(cur+'</span>'.repeat(stack.length));
        return out;
    }
    function guides(line,u){
        return line;
    }

    function render(el){
        var src=dedent(el.textContent),r=hljs.highlightAuto(src,SUB),lang=r.language||'',fm=el.getAttribute('data-fmt'),u;
        if(fm!='off'&&FAM[lang]&&(fm=='on'||isFlat(src))){src=format(src,lang);u=IU;r=hljs.highlight(src,{language:lang,ignoreIllegals:true})}
        else{var ms=src.match(/^ +/gm);u=ms?Math.min.apply(null,ms.map(function(x){return x.length})):4}
        u=Math.min(8,Math.max(2,u));
        var nm=(hljs.getLanguage(lang)||{}).name||'text';
        el.innerHTML='<div class="kt-bar"><i class="kt-d" style="background:var(--kt-fn)"></i><i class="kt-d" style="background:var(--kt-str)"></i><i class="kt-d" style="background:var(--kt-fg)"></i><span class="kt-lang">'+nm+'</span></div><div class="kt-body">'+
            splitLines(r.value).map(function(l,i){return '<div class="kt-row"><span class="kt-n">'+(i+1)+'</span><span class="kt-c">'+guides(l,u)+'</span></div>'}).join('')+'</div>';
    }

    /* ---------- Tarama (idempotent: işlenmiş blok tekrar işlenmez) ---------- */
    var running=false;
    function run(){
        if(running)return;
        // Boş terminali "işlendi" diye işaretleme: içerik tıklamayla sonradan gelecek
        var nodes=Array.prototype.filter.call(document.querySelectorAll('.kt-kod:not([data-kt-done])'),function(el){return el.textContent.trim()!==''});
        if(!nodes.length){ensureCSS();return}
        ensureCSS();
        if(!window.hljs)return;               // kütüphane gelince tekrar çağrılır
        if(!SUB)SUB=['python','javascript','typescript','xml','css','scss','java','c','cpp','csharp','php','sql','json','bash','go','rust','kotlin','swift','dart','delphi','perl','x86asm','armasm','ruby','lua','yaml','objectivec'].filter(function(n){return hljs.getLanguage(n)});
        running=true;
        try{
            Array.prototype.forEach.call(nodes,function(el){
                el.setAttribute('data-kt-done','1');   // hata olsa bile sonsuz döngüye girmesin
                try{render(el)}catch(e){if(window.console)console.warn('[kt-kod]',e)}
            });
        }finally{running=false}
    }
    window.__ktRun=run;

    /* Dışarıdan çağrılır: terminale yeni kod koy, işaretini sıfırla, yeniden boya.
       hljs henüz gelmediyse işaret kalkık kaldığı için kütüphane gelince otomatik boyanır. */
    window.ktShow=function(el,code){
        el.removeAttribute('data-kt-done');
        el.textContent=code;
        el.classList.add('kt-active');
        run();
    };

    /* ---------- Kütüphane yükleme / bekleme ---------- */
    var loading=false;
    function loadLib(i){
        if(window.hljs||loading&&i===undefined)return;
        i=i||0;
        if(i>=HLJS_URLS.length)return;
        // Sayfada zaten bir highlight.js etiketi varsa onu bekle, ikinci kez ekleme
        var existing=document.querySelector('script[src*="highlight"]');
        if(existing&&i===0){loading=true;return}
        loading=true;
        var s=document.createElement('script');
        s.src=HLJS_URLS[i];s.async=true;
        s.onload=function(){loading=false;run()};
        s.onerror=function(){s.remove();loadLib(i+1)};
        document.head.appendChild(s);
    }

    var tries=0;
    var poll=setInterval(function(){
        tries++;
        if(window.hljs){clearInterval(poll);run();return}
        if(tries===40)loadLib(0);           // ~2 sn içinde gelmediyse kendimiz yükleyelim
        if(tries>400)clearInterval(poll);   // ~20 sn sonra vazgeç
    },50);

    /* ---------- Dinamik içerik ve sayfa geçişleri ---------- */
    var queued=false;
    function schedule(){
        if(queued)return;queued=true;
        (window.requestAnimationFrame||setTimeout)(function(){queued=false;run()});
    }
    function start(){
        run();
        new MutationObserver(function(muts){
            for(var i=0;i<muts.length;i++){
                var m=muts[i];
                if(m.type==='childList'&&(m.addedNodes.length||m.removedNodes.length)){schedule();return}
            }
        }).observe(document.documentElement,{childList:true,subtree:true});
    }
    if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',start);
    else start();

    window.addEventListener('load',schedule);
    window.addEventListener('pageshow',schedule);
    window.addEventListener('popstate',schedule);
    ['turbo:load','turbo:render','htmx:afterSwap','htmx:afterSettle','astro:page-load','pjax:end','page:load','swup:contentReplaced'].forEach(function(ev){
        document.addEventListener(ev,schedule);
    });
})();
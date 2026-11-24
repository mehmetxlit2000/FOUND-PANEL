const codeData = [
    {
        langueName: "JAVASCRİPT",
        notes: [
            {
                title: "Veri Tipleri ve Değişken Tanımlamaları:",
            },
            {
                not: "number:",
                comment: "Tam sayı ve ondalıklı sayıları temsil eder.",
                detail: `
                            const number = 20;
                            const fiyat = 49.99;
                            `
            },
            {
                not: "string:",
                comment: "Metin değerlerini tek tırnak ('...'), çift tırnak (\"...\") veya backtick (`...`) içinde tutar.",
                detail: ``
            },
            {
                not: "boolean (true / false):",
                comment: "Doğru veya yanlış değerlerini tutar; koşul ifadelerinin temelidir.",
                detail: `
                                const aktifMi = true;
                                const tamamlandiMi = false;
                            `
            },
            {
                not: "undefined:",
                comment: "Değeri henüz atanmamış değişkenlerin varsayılan durumudur.",
                detail: `
                                let und;
                                console.log(und); // undefined
                            `
            },
            {
                not: "array: []",
                comment: "Sıralı veri listeleri tutan dizi yapısıdır.",
                detail: `
                                const array = ['elma', 'armut', 'muz'];
                                console.log(array[0]); // 'elma'
                            `
            },
            {
                not: "object: {}",
                comment: "Anahtar–değer (key: value) çiftlerinden oluşan nesne yapısıdır.",
                detail: `
                                const object = { ad: 'Ali', yas: 25 };
                                console.log(object.ad); // 'Ali'
                            `
            },
            {
                not: "BigInt",
                comment: "Standart number sınırını (Number.MAX_SAFE_INTEGER) aşan çok büyük tam sayılar içindir.",
                detail: `
                                const big1 = 900719925474099100000000000000n;
                                const big2 = BigInt('4445454454545454545454548548');
                                console.log(big1 + big2);
                            `
            },
            {
                not: "Symbol",
                comment: "Her çağrıldığında benzersiz (eşsiz) bir kimlik üretir. Nesnelerde çakışmayan özel anahtarlar oluşturmak için kullanılır.",
                detail: `
                                const id1 = Symbol('id1');
                                const id2 = Symbol('id1');
                                console.log(id1 === id2); // false (açıklaması aynı olsa da benzersizdir)
                            `
            },
            {
                not: "=== (Katı Eşitlik):",
                comment: "Hem değer hem de veri tipi aynıysa true döner. En güvenli eşitlik kontrolüdür.",
                detail: `
                                console.log(5 === 5);    // true
                                console.log(5 === '5');  // false (number ve string farklı tip)
                            `
            },
            {
                not: "== (Gevşek Eşitlik):",
                comment: "Tip dönüşümü yaparak yalnızca değere bakar.",
                detail: `
                                console.log(5 == '5');   // true ('5' sayıya çevrilir)
                                console.log(0 == false); // true
                            `
            },
            {
                not: "!= (Eşit Değil - Tip Dönüşümlü):",
                comment: "Değerler eşit değilse true döner.",
                detail: `
                                console.log(5 != '5');   // false
                                console.log(5 != 10);    // true
                            `
            },
            {
                not: "!== (Katı Eşit Değil):",
                comment: "Değer veya tipten en az biri farklıysa true döner.",
                detail: `
                                console.log(5 !== '5');  // true (tip farklı)
                                console.log(5 !== 5);    // false
                            `
            },
            {
                not: "&& (VE):",
                comment: "Tüm koşullar true ise son true değeri;",
                detail: `
                                const girisYapti = true;
                                const adminMi = true;
                                console.log(girisYapti && adminMi); // true
                                
                                console.log(true && 'Aktif'); // 'Aktif'
                                console.log(false && 'Aktif'); // false
                            `
            },
            {
                not: "|| (VEYA):",
                comment: "İlk true (truthy) değeri döndürür; hiçbiri truthy değilse son değeri döner.",
                detail: `
                                const kullaniciAdi = '';
                                const gorunenAd = kullaniciAdi || 'Misafir';
                                console.log(gorunenAd); // 'Misafir' ('' falsy olduğu için sağına geçer)
                            `
            },
            {
                not: "! (DEĞİL / Mantıksal Tersleme):",
                comment: "true değeri false, false değeri true yapar.",
                detail: `
                                const kapali = false;
                                console.log(!kapali); // true
                                console.log(!'metin'); // false ('metin' truthy'dir)
                            `
            },
            {
                not: "?? (Nullish Coalescing):",
                comment: "Yalnızca sol taraf null veya undefined ise sağdaki yedek değeri döndürür. || operatöründen farkı; 0, '' veya false gibi değerleri geçerli kabul etmesidir.",
                detail: `
                                const puan = 0;
                                console.log(puan ?? 10); // 0 (0 null/undefined olmadığı için 0 kalır)
                                console.log(puan || 10); // 10 (0 falsy olduğu için 10 döner)
                                
                                const bosDeger = null;
                                console.log(bosDeger ?? 'Varsayılan'); // 'Varsayılan'
                            `
            },
            {
                not: "?. (Optional Chaining / İsteğe Bağlı Zincirleme):",
                comment: "Ara nesne null veya undefined ise hata (TypeError) fırlatmak yerine undefined döndürerek güvenli erişim sağlar.",
                detail: `
                                const kullanici = { profil: { ad: 'Zeynep' } };
                                console.log(kullanici.profil?.ad);          // 'Zeynep'
                                console.log(kullanici.adres?.sehir);       // undefined (hata vermez)
                                console.log(kullanici.selamVer?.());       // undefined (metot yoksa hata vermez)
                            `
            },
            {
                not: "&&= (Mantıksal VE Atama):",
                comment: "Sol taraftaki değişken truthy ise sağdaki değeri değişkene atar.",
                detail: `
                                let mesaj = 'Merhaba';
                                mesaj &&= 'Güncel Mesaj';
                                console.log(mesaj); // 'Güncel Mesaj'
                                
                                let bos = '';
                                bos &&= 'Yeni Değer';
                                console.log(bos); // '' (değişmedi, çünkü '' falsy)
                            `
            },
            {
                not: "||= (Mantıksal VEYA Atama):",
                comment: "Sol taraftaki değişken falsy (false, 0, \"\", null, undefined, NaN) ise sağdaki değeri değişkene atar.",
                detail: `
                                let tema = '';
                                tema ||= 'dark';
                                console.log(tema); // 'dark'
                            `
            },
            {
                not: "??= (Nullish Atama):",
                comment: "Sol taraftaki değişken sadece null veya undefined ise sağdaki değeri değişkene atar.",
                detail: `
                                let adet = 0;
                                adet ??= 1;
                                console.log(adet); // 0 (0 null/undefined olmadığı için atanmaz)
                                
                                let secim = null;
                                secim ??= 'standart';
                                console.log(secim); // 'standart'
                            `
            },
            {
                not: "Spread Operatörü (...):",
                comment: "Dizi veya nesnelerin elemanlarını/özelliklerini kopyalamak veya birleştirmek için kullanılır.",
                detail: `
                                const dizi1 = [1, 2];
                                const dizi2 = [...dizi1, 3, 4]; // [1, 2, 3, 4]
                                
                                const ayar1 = { tema: 'koyu', dil: 'tr' };
                                const ayar2 = { ...ayar1, dil: 'en' }; // { tema: 'koyu', dil: 'en' }
                            `
            },
            {
                not: "Destructuring (Parçalama Ataması):",
                comment: "Nesne veya dizilerden değerleri doğrudan değişkenlere çekmeyi sağlar.",
                detail: `
                                const kisi = { ad: 'Ece', sehir: 'İzmir' };
                                const { ad, sehir } = kisi;
                                console.log(ad, sehir); // 'Ece' 'İzmir'
                            `
            },
            {
                title: "Sayı ve Number Metotları",
            },
            {
                not: 'parseInt("42.99")',
                comment: "Bir string içindeki tam sayıyı alır. 42",
                detail: `
            const sonuc = parseInt("42.99");
            console.log(sonuc); // 42
        `
            },
            {
                not: 'parseFloat("42.99px")',
                comment: "Bir string içindeki ondalıklı sayıyı alır. 42.99",
                detail: `
            const sonuc = parseFloat("42.99px");
            console.log(sonuc); // 42.99
        `
            },
            {
                not: "Number.isInteger()",
                comment: "Bir değerin tam sayı olup olmadığını kontrol eder (Boolean döner).",
                detail: `
            console.log(Number.isInteger(10));   // true
            console.log(Number.isInteger(10.5)); // false
        `
            },
            {
                not: "isFinite()",
                comment: "Değerin sonlu bir sayı olup olmadığını kontrol eder.",
                detail: `
            console.log(isFinite(100));      // true
            console.log(isFinite(Infinity)); // false
        `
            },
            {
                not: "isNaN()",
                comment: "Değerin NaN olup olmadığını kontrol eder.",
                detail: `
            console.log(isNaN("abc")); // true
            console.log(isNaN(123));   // false
        `
            },
            {
                not: "(3.14159).toFixed(2)",
                comment: '"3.14" Bir sayıyı n basamaklı ondalıklı string olarak döner.',
                detail: `
            const sayi = 3.14159;
            console.log(sayi.toFixed(2)); // "3.14"
        `
            },
            {
                not: "(123456).toExponential()",
                comment: '"1.23456e+5" Sayının bilimsel gösterimini verir.',
                detail: `
            const sayi = 123456;
            console.log(sayi.toExponential()); // "1.23456e+5"
        `
            },
            {
                not: "(123.456).toPrecision()",
                comment: '"123.5" Toplam önemli basamak sayısını belirtir (tüm basamakları kontrol eder).',
                detail: `
            const sayi = 123.456;
            console.log(sayi.toPrecision(4)); // "123.5"
        `
            },
            {
                not: '("ABC").charAt()',
                comment: '"A" Belirtilen indeksteki karakteri döner.',
                detail: `
            const metin = "ABC";
            console.log(metin.charAt(0)); // "A"
        `
            },
            {
                not: '("ABC").charCodeAt()',
                comment: "65 Unicode karakter kodunu (ASCII) döner.",
                detail: `
            const metin = "ABC";
            console.log(metin.charCodeAt(0)); // 65
        `
            },
            {
                not: '(" 💻 ").codePointAt()',
                comment: "128187 Bazı özel Unicode karakterlerde kullanılır. Daha geniş karakter setlerini destekler.",
                detail: `
            const emoji = "💻";
            console.log(emoji.codePointAt(0)); // 128187
        `
            },
            {
                not: '("Merhaba").concat(" ", "Dünya")',
                comment: '"Merhaba Dünya" İki string\'i birleştirir.',
                detail: `
            const selam = "Merhaba".concat(" ", "Dünya");
            console.log(selam); // "Merhaba Dünya"
        `
            },
            {
                not: '("OpenAI").startsWith("Open")',
                comment: "true",
                detail: `
            console.log("OpenAI".startsWith("Open")); // true
        `
            },
            {
                not: '("ChatGPT").endsWith("GPT")',
                comment: "true",
                detail: `
            console.log("ChatGPT".endsWith("GPT")); // true
        `
            },
            {
                not: '("banana").lastIndexOf("a")',
                comment: "5 Son eşleşmenin pozisyonunu verir",
                detail: `
            console.log("banana".lastIndexOf("a")); // 5
        `
            },
            {
                not: '("7").padStart(3, "0")',
                comment: '"007" Başına karakter ekleyerek belirli uzunluğa getirir.',
                detail: `
            console.log("7".padStart(3, "0")); // "007"
        `
            },
            {
                not: '("1").padEnd(4, "*")',
                comment: '"1***" Sonuna karakter ekleyerek belirli uzunluğa getirir.',
                detail: `
            console.log("1".padEnd(4, "*")); // "1***"
        `
            },
            {
                not: '("ha").repeat(3)',
                comment: '"hahaha" Metni tekrar eder.',
                detail: `
            console.log("ha".repeat(3)); // "hahaha"
        `
            },
            {
                not: '("elma elma").replace("elma", "armut")',
                comment: '"armut elma" İlk eşleşeni değiştirir',
                detail: `
            console.log("elma elma".replace("elma", "armut")); // "armut elma"
        `
            },
            {
                not: '("elma elma").replaceAll("elma", "armut")',
                comment: '"armut armut" Tüm eşleşenleri değiştirir.',
                detail: `
            console.log("elma elma".replaceAll("elma", "armut")); // "armut armut"
        `
            },
            {
                not: '("JavaScript").slice(0, 4)',
                comment: '"Java" aşlangıç ve bitiş indeksine göre keser. Negatif indeks destekler.',
                detail: `
            console.log("JavaScript".slice(0, 4)); // "Java"
            console.log("JavaScript".slice(-6));   // "Script"
        `
            },
            {
                not: '("abcdefg").substr(2, 3)',
                comment: '⚠️ "cde" substr(start, length) Başlangıçtan itibaren belli sayıda karakter alır.',
                detail: `
            console.log("abcdefg".substr(2, 3)); // "cde"
        `
            },
            {
                not: '("JavaScript").substring(4, 10)',
                comment: '"Script" substring(start, end) slice gibi ama negatif indeks desteklemez',
                detail: `
            console.log("JavaScript".substring(4, 10)); // "Script"
        `
            },
            {
                not: '("abc").split("")',
                comment: '["a", "b", "c"] Bir string\'i parçalara ayırıp dizi yapar.',
                detail: `
            console.log("abc".split("")); // ["a", "b", "c"]
        `
            },
            {
                not: '("HELLO").toLowerCase()',
                comment: '"hello" Küçük harfe çevirir.',
                detail: `
            console.log("HELLO".toLowerCase()); // "hello"
        `
            },
            {
                not: '("HELLO").toUpperCase()',
                comment: '"HELLO" Büyük harfe çevirir.',
                detail: `
            console.log("hello".toUpperCase()); // "HELLO"
        `
            },
            {
                not: '("HELLO").trim()',
                comment: "Baştaki ve sondaki boşlukları temizler.",
                detail: `
            console.log("  HELLO  ".trim()); // "HELLO"
        `
            },
            {
                not: '("HELLO").trimStart()',
                comment: "Sadece baştaki boşlukları temizler.",
                detail: `
            console.log("  HELLO  ".trimStart()); // "HELLO  "
        `
            },
            {
                not: '("HELLO").trimEnd()',
                comment: "Sadece sondaki boşlukları temizler.",
                detail: `
            console.log("  HELLO  ".trimEnd()); // "  HELLO"
        `
            },
            {
                not: "Math.abs(-10);",
                comment: "10 Mutlak değerini alır (negatifleri pozitife çevirir)",
                detail: `
            const sonuc = Math.abs(-10);
            console.log(sonuc); // 10
        `
            },
            {
                not: "Math.floor(4.9);",
                comment: "4 Aşağıya yuvarlar (ondalık kısmı siler).",
                detail: `
            const sonuc = Math.floor(4.9);
            console.log(sonuc); // 4
        `
            },
            {
                not: "Math.ceil(-4.1);",
                comment: "-4 Yukarıya yuvarlar.",
                detail: `
            const sonuc = Math.ceil(-4.1);
            console.log(sonuc); // -4
        `
            },
            {
                not: "Math.round(4.5);",
                comment: "5 En yakın tam sayıya yuvarlar.",
                detail: `
            const sonuc = Math.round(4.5);
            console.log(sonuc); // 5
        `
            },
            {
                not: "Math.trunc(4.9);",
                comment: "4 Ondalık kısmı siler (sıfıra doğru yuvarlar).",
                detail: `
            const sonuc = Math.trunc(4.9);
            console.log(sonuc); // 4
        `
            },
            {
                not: "Math.pow(2, 3);",
                comment: "8 Math.pow(x, y) x üzeri y (üs alma).",
                detail: `
            const sonuc = Math.pow(2, 3);
            console.log(sonuc); // 8
        `
            },
            {
                not: "Math.sqrt(16);",
                comment: "4 Karekök.",
                detail: `
            const sonuc = Math.sqrt(16);
            console.log(sonuc); // 4
        `
            },
            {
                not: "Math.cbrt(27);",
                comment: "3 Küp kök.",
                detail: `
            const sonuc = Math.cbrt(27);
            console.log(sonuc); // 3
        `
            },
            {
                not: "Math.log(Math.E);",
                comment: "1 Doğal logaritma (ln x).",
                detail: `
            const sonuc = Math.log(Math.E);
            console.log(sonuc); // 1
        `
            },
            {
                not: "Math.log10(1000);",
                comment: "3 1 Doğal logaritma (ln x).",
                detail: `
            const sonuc = Math.log10(1000);
            console.log(sonuc); // 3
        `
            },
            {
                not: "Math.log2(8);",
                comment: "3 2 tabanında log.",
                detail: `
            const sonuc = Math.log2(8);
            console.log(sonuc); // 3
        `
            },
            {
                not: "Math.max(1, 5, 10);",
                comment: "10 En büyük değeri bulur.",
                detail: `
            const sonuc = Math.max(1, 5, 10);
            console.log(sonuc); // 10
        `
            },
            {
                not: "Math.min(1, 5, 10);",
                comment: "1 En küçük değeri bulur.",
                detail: `
            const sonuc = Math.min(1, 5, 10);
            console.log(sonuc); // 1
        `
            },
            {
                not: "Math.random();",
                comment: "0.235234...",
                detail: `
            const rastgele = Math.random();
            console.log(rastgele); // 0 ile 1 arasında rastgele ondalıklı sayı
        `
            },
            {
                not: "Math.sign(-5);",
                comment: "-1 Sayının işaretini verir:",
                detail: `
            console.log(Math.sign(-5)); // -1
            console.log(Math.sign(0));  // 0
            console.log(Math.sign(5));  // 1
        `
            },
            {
                not: "Math.sin(Math.PI / 2);",
                comment: "≈ 1",
                detail: `
            const sonuc = Math.sin(Math.PI / 2);
            console.log(sonuc); // 1
        `
            },
            {
                not: "Math.cos(0);",
                comment: "1",
                detail: `
            const sonuc = Math.cos(0);
            console.log(sonuc); // 1
        `
            },
            {
                not: "Math.tan();",
                comment: "0",
                detail: `
            const sonuc = Math.tan(0);
            console.log(sonuc); // 0
        `
            },
            {
                not: "Math.PI",
                comment: "3.141592653589793 → Pi sayısı",
                detail: `
            const yaricap = 5;
            const alan = Math.PI * yaricap * yaricap;
            console.log(alan); // ~78.5398
        `
            },
            {
                not: "Math.E",
                comment: "2.718281828... → Euler sabiti",
                detail: `
            console.log(Math.E); // 2.718281828459045
        `
            },
            {
                not: "Math.SQRT2",
                comment: "1.414213562... → 2'nin karekökü",
                detail: `
            console.log(Math.SQRT2); // 1.4142135623730951
        `
            },
            {
                not: "Math.LN2",
                comment: "0.693147... → 2'nin doğal logaritması",
                detail: `
            console.log(Math.LN2); // 0.6931471805599453
        `
            },
            {
                not: "Math.LN10",
                comment: "2.302585... → 10'un doğal logaritması",
                detail: `
            console.log(Math.LN10); // 2.302585092994046
        `
            },
            {
                title: "Array Metodlar",
            },
            {
                not: "Array.isArray([1, 2, 3])",
                comment: "true Belirtilen değerin bir dizi (array) olup olmadığını kontrol eder.",
                detail: `
            console.log(Array.isArray([1, 2, 3])); // true
            console.log(Array.isArray("abc"));     // false
        `
            },
            {
                not: "Array.from('abc')",
                comment: "['a', 'b', 'c'] Benzer görünümlü yapıları (örneğin dize, Set, arguments gibi) diziye çevirir.",
                detail: `
            const dizi = Array.from('abc');
            console.log(dizi); // ['a', 'b', 'c']
        `
            },
            {
                not: "Array.of('a')",
                comment: "['a'] Verilen değerleri içeren yeni bir dizi oluşturur.",
                detail: `
            const dizi = Array.of('a');
            console.log(dizi); // ['a']
        `
            },
            {
                not: "[10, 20, 30].at(1)",
                comment: "20 Pozitif ya da negatif index'e göre eleman getirir.",
                detail: `
            const arr = [10, 20, 30];
            console.log(arr.at(1));  // 20
            console.log(arr.at(-1)); // 30
        `
            },
            {
                not: "[1, 2, 3].includes(2)",
                comment: "true Belirli bir değerin dizide olup olmadığını kontrol eder.",
                detail: `
            console.log([1, 2, 3].includes(2)); // true
            console.log([1, 2, 3].includes(5)); // false
        `
            },
            {
                not: "['a', 'b', 'c'].indexOf('b')",
                comment: "1 İlk eşleşen değerin index'ini döner. Bulamazsa -1.",
                detail: `
            console.log(['a', 'b', 'c'].indexOf('b')); // 1
            console.log(['a', 'b', 'c'].indexOf('z')); // -1
        `
            },
            {
                not: "[1, 2, 3, 2].lastIndexOf(2)",
                comment: "3 Son eşleşen değerin index'ini döner.",
                detail: `
            console.log([1, 2, 3, 2].lastIndexOf(2)); // 3
        `
            },
            {
                not: "[5, 10, 15].find(n => n > 9)",
                comment: "10 Koşulu sağlayan ilk elemanı döner. Yoksa undefined.",
                detail: `
            const sonuc = [5, 10, 15].find(n => n > 9);
            console.log(sonuc); // 10
        `
            },
            {
                not: "[5, 10, 15].findIndex(n => n > 9)",
                comment: "1 Koşulu sağlayan ilk elemanın index'ini döner.",
                detail: `
            const index = [5, 10, 15].findIndex(n => n > 9);
            console.log(index); // 1
        `
            },
            {
                not: "[1, 2, 3].map(x => x * 2)",
                comment: "[2, 4, 6] Her elemana fonksiyon uygular, yeni dizi döner.",
                detail: `
            const yeniDizi = [1, 2, 3].map(x => x * 2);
            console.log(yeniDizi); // [2, 4, 6]
        `
            },
            {
                not: "[1, 2, 3, 4].filter(x => x % 2 === 0)",
                comment: "[2, 4] Koşulu sağlayan elemanları filtreler, yeni dizi döner.",
                detail: `
            const ciftler = [1, 2, 3, 4].filter(x => x % 2 === 0);
            console.log(ciftler); // [2, 4]
        `
            },
            {
                not: "[1, 2, 3].reduce((a, b) => a + b, 0)",
                comment: "6 Bir değere indirger (toplama, çarpma vb.)",
                detail: `
            const toplam = [1, 2, 3].reduce((a, b) => a + b, 0);
            console.log(toplam); // 6
        `
            },
            {
                not: "[1, [2, [3]]].flat()",
                comment: "[1, 2, [3]] İç içe dizileri düzleştirir.",
                detail: `
            const duz = [1, [2, [3]]].flat();
            console.log(duz); // [1, 2, [3]]
        `
            },
            {
                not: "[1, 2, 3].flatMap(x => [x, x * 2])",
                comment: "[1, 2, 2, 4, 3, 6] map + flat(1) birleşimidir.",
                detail: `
            const sonuc = [1, 2, 3].flatMap(x => [x, x * 2]);
            console.log(sonuc); // [1, 2, 2, 4, 3, 6]
        `
            },
            {
                not: "[1, 2, 3, 4].slice(1, 3)",
                comment: "[2, 3] Diziden belli parçayı alır (orijinali değişmez).",
                detail: `
            const parca = [1, 2, 3, 4].slice(1, 3);
            console.log(parca); // [2, 3]
        `
            },
            {
                not: "[1, 2, 3].splice(1, 1, 99)",
                comment: "[2] silindi, 99 eklendi → arr: [1, 99, 3] Diziyi değiştirerek eleman siler/ekler.",
                detail: `
            const arr = [1, 2, 3];
            const silinen = arr.splice(1, 1, 99);
            console.log(silinen); // [2]
            console.log(arr);     // [1, 99, 3]
        `
            },
            {
                not: "[1, 2, 3, 4].copyWithin(0, 2)",
                comment: "[3, 4, 3, 4] Dizi içindeki elemanları kendi içinde kopyalar.",
                detail: `
            const arr = [1, 2, 3, 4].copyWithin(0, 2);
            console.log(arr); // [3, 4, 3, 4]
        `
            },
            {
                not: "[1, 2, 3].fill()",
                comment: "[0, 0, 0] Diziyi belirli değerle doldurur.",
                detail: `
            const arr = [1, 2, 3].fill(0);
            console.log(arr); // [0, 0, 0]
        `
            },
            {
                not: "objects.forEach(obejct => {})",
                comment: "Her bir elemanı döngüye alır",
                detail: `
            const objects = [{ ad: "A" }, { ad: "B" }];
            objects.forEach(object => {
                console.log(object.ad);
            });
        `
            },
            {
                not: "[2, 4, 6].every(x => x % 2 === 0)",
                comment: "true Tüm elemanlar koşulu sağlıyorsa true.",
                detail: `
            console.log([2, 4, 6].every(x => x % 2 === 0)); // true
        `
            },
            {
                not: "[1, 3, 5].some(x => x % 2 === 0)",
                comment: "false En az bir eleman koşulu sağlıyorsa true",
                detail: `
            console.log([1, 3, 5].some(x => x % 2 === 0)); // false
        `
            },
            {
                not: "['a', 'b', 'c'].join('-')",
                comment: "'a-b-c' Diziyi belirtilen ayraçla birleştirip string yapar.",
                detail: `
            const metin = ['a', 'b', 'c'].join('-');
            console.log(metin); // "a-b-c"
        `
            },
            {
                not: "[1, 2, 3].toString()",
                comment: "'1,2,3' Diziyi virgülle birleştirip string döner.",
                detail: `
            console.log([1, 2, 3].toString()); // "1,2,3"
        `
            },
            {
                not: "[123456.789].toLocaleString('de-DE')",
                comment: '"123.456,789" Yerel biçimle stringe çevirir.',
                detail: `
            console.log([123456.789].toLocaleString('de-DE')); // "123.456,789"
        `
            },
            {
                not: "[1].push(2)",
                comment: "2 → arr: [1, 2] Dizinin sonuna eleman ekler. Yeni uzunluğu döner.",
                detail: `
            const arr = [1];
            const uzunluk = arr.push(2);
            console.log(uzunluk); // 2
            console.log(arr);     // [1, 2]
        `
            },
            {
                not: "[1].pop()",
                comment: "2 → arr: [1] Son elemanı çıkarır, onu döner.",
                detail: `
            const arr = [1, 2];
            const cikan = arr.pop();
            console.log(cikan); // 2
            console.log(arr);   // [1]
        `
            },
            {
                not: "[1].shift()",
                comment: "1 → arr: [2] İlk elemanı çıkarır, onu döner.",
                detail: `
            const arr = [1, 2];
            const cikan = arr.shift();
            console.log(cikan); // 1
            console.log(arr);   // [2]
        `
            },
            {
                not: "[1].unshift(1)",
                comment: "3 → arr: [1, 2, 3] Başa eleman ekler. Yeni uzunluğu döner.",
                detail: `
            const arr = [2, 3];
            const uzunluk = arr.unshift(1);
            console.log(uzunluk); // 3
            console.log(arr);     // [1, 2, 3]
        `
            },
            {
                not: "[10, 20].keys()",
                comment: "Iterator → [0, 1] Index (anahtar) dizisini verir.",
                detail: `
            console.log([...[10, 20].keys()]); // [0, 1]
        `
            },
            {
                not: "[10, 20].values()",
                comment: "Iterator → [10, 20] Değer dizisini verir.",
                detail: `
            console.log([...[10, 20].values()]); // [10, 20]
        `
            },
            {
                not: "['a', 'b'].entries()",
                comment: "0 'a', 1 'b' [anahtar, değer] çiftleri olarak verir.",
                detail: `
            console.log([...['a', 'b'].entries()]); // [[0, 'a'], [1, 'b']]
        `
            },
            {
                not: "[1, 2, 3].reverse()",
                comment: "[3, 2, 1] Diziyi ters çevirir (orijinali değişir).",
                detail: `
            const arr = [1, 2, 3].reverse();
            console.log(arr); // [3, 2, 1]
        `
            },
            {
                not: "[3, 1, 2].sort()",
                comment: "[1, 2, 3] Diziyi sıralar (orijinal değişir).",
                detail: `
            const arr = [3, 1, 2].sort();
            console.log(arr); // [1, 2, 3]
        `
            },
            {
                not: "[1, 2].concat([3, 4])",
                comment: "[1, 2, 3, 4] Dizileri birleştirip yeni bir dizi döner.",
                detail: `
            const birlesik = [1, 2].concat([3, 4]);
            console.log(birlesik); // [1, 2, 3, 4]
        `
            },
            {
                not: "[10, 20, 30].with(1, 99)",
                comment: "[10, 99, 30] Belirli bir index'teki değeri değiştirir ama orijinal diziyi değiştirmez (immutable).",
                detail: `
            const arr = [10, 20, 30];
            const yeniArr = arr.with(1, 99);
            console.log(yeniArr); // [10, 99, 30]
            console.log(arr);     // [10, 20, 30]
        `
            },
            {
                not: "[1, 3, 5, 8, 10]].findLast(n => n % 2 === 0)",
                comment: "10 Diziyi sondan başa doğru tarar ve koşulu sağlayan ilk elemanı döner.",
                detail: `
            const arr = [1, 3, 5, 8, 10];
            const sonCift = arr.findLast(n => n % 2 === 0);
            console.log(sonCift); // 10
        `
            },
            {
                not: "[1, 3, 5, 8, 10].findLastIndex(n => n % 2 === 0)",
                comment: "4 Diziyi tersten tarar ve koşulu sağlayan ilk elemanın index'ini döner.",
                detail: `
            const arr = [1, 3, 5, 8, 10];
            const sonCiftIndex = arr.findLastIndex(n => n % 2 === 0);
            console.log(sonCiftIndex); // 4
        `
            },
            {
                not: "[1, 2, 3].toReversed()",
                comment: "[3, 2, 1] reverse() gibi davranır, ama orijinal diziyi değiştirmez.",
                detail: `
            const arr = [1, 2, 3];
            const ters = arr.toReversed();
            console.log(ters); // [3, 2, 1]
            console.log(arr);  // [1, 2, 3]
        `
            },
            {
                not: "[3, 1, 2].toSorted()",
                comment: "[1, 2, 3] sort() gibi çalışır ama orijinal diziyi değiştirmez.",
                detail: `
            const arr = [3, 1, 2];
            const sirali = arr.toSorted();
            console.log(sirali); // [1, 2, 3]
            console.log(arr);    // [3, 1, 2]
        `
            },
            {
                not: "[3, 1, 2].toSpliced(1, 2, 99, 100)",
                comment: "splice() fonksiyonunun değişmeyen versiyonudur (immutable).",
                detail: `
            const arr = [3, 1, 2];
            const yeniArr = arr.toSpliced(1, 2, 99, 100);
            console.log(yeniArr); // [3, 99, 100]
            console.log(arr);     // [3, 1, 2]
        `
            },
            {
                not: "peoples.groupBy(callback)",
                comment: "Bu metot, dizideki elemanları gruplamak için kullanılır. Dizi yerine, bir nesne döner.",
                detail: `
            const peoples = [
                { ad: "Ali", rol: "dev" },
                { ad: "Ayşe", rol: "design" },
                { ad: "Mehmet", rol: "dev" }
            ];
            const gruplu = Object.groupBy(peoples, person => person.rol);
            console.log(gruplu.dev); // [{ ad: "Ali", rol: "dev" }, { ad: "Mehmet", rol: "dev" }]
        `
            },
            {
                not: "mySet.has(2)",
                comment: "true → Set içinde 2 var mı kontrol eder",
                detail: `
            const mySet = new Set([1, 2, 3]);
            console.log(mySet.has(2)); // true
            console.log(mySet.has(5)); // false
        `
            },
            {
                title: "Object Metodlar",
            },
            {
                not: "Object.entries(obj)",
                comment: "Nesneyi [key, value] çiftleri içeren diziye dönüştürür.",
                detail: `
            const obj = { a: 1, b: 2 };
            console.log(Object.entries(obj)); // [["a", 1], ["b", 2]]
        `
            },
            {
                not: "Object.keys(obj)",
                comment: "Yalnızca string özellik adlarını (key'leri) verir.",
                detail: `
            const obj = { a: 1, b: 2 };
            console.log(Object.keys(obj)); // ["a", "b"]
        `
            },
            {
                not: "Object.values(obj)",
                comment: "Nesnedeki tüm değerleri (value) döner.",
                detail: `
            const obj = { a: 1, b: 2 };
            console.log(Object.values(obj)); // [1, 2]
        `
            },
            {
                not: "Object.assign(hedef, kaynak)",
                comment: "{a:1, b:2} Bir veya daha fazla nesnenin özelliklerini hedef nesneye kopyalar.",
                detail: `
            const hedef = { a: 1 };
            const sonuc = Object.assign(hedef, { b: 2 });
            console.log(sonuc); // { a: 1, b: 2 }
        `
            },
            {
                not: "Object.structuredClone(obj)",
                comment: "Bir nesneyi derinlemesine kopyalar. JSON.parse/stringify'dan daha güçlüdür.",
                detail: `
            const obj = { a: 1, ic: { b: 2 } };
            const kopya = structuredClone(obj);
            kopya.ic.b = 99;
            console.log(obj.ic.b); // 2
        `
            },
            {
                not: "Object.create(proto, [propertiesObject])",
                comment: "Belirtilen prototipi kullanan yeni bir nesne oluşturur",
                detail: `
            const proto = { selamVer() { return "Merhaba"; } };
            const nesne = Object.create(proto);
            console.log(nesne.selamVer()); // "Merhaba"
        `
            },
            {
                not: "Object.defineProperty(obj, prop, descriptor)",
                comment: "Bir nesneye özellik ekler veya mevcut özelliği yapılandırır.",
                detail: `
            const obj = {};
            Object.defineProperty(obj, "sabit", {
                value: 42,
                writable: false
            });
            console.log(obj.sabit); // 42
        `
            },
            {
                not: "Object.defineProperties()",
                comment: "obj, props",
                detail: `
            const obj = {};
            Object.defineProperties(obj, {
                ad: { value: "Ali", enumerable: true },
                yas: { value: 25, enumerable: true }
            });
            console.log(obj); // { ad: "Ali", yas: 25 }
        `
            },
            {
                not: "Object.freeze(obj)",
                comment: "Nesneyi donmuş (değiştirilemez) hale getirir.",
                detail: `
            const obj = { a: 1 };
            Object.freeze(obj);
            obj.a = 5;
            console.log(obj.a); // 1
        `
            },
            {
                not: "Object.fromEntries(entries)",
                comment: "Bir [key, value] dizisinden nesne oluşturur. Object.entries'in tersidir",
                detail: `
            const entries = [["a", 1], ["b", 2]];
            const obj = Object.fromEntries(entries);
            console.log(obj); // { a: 1, b: 2 }
        `
            },
            {
                not: "Object.getOwnPropertyDescriptor(obj, prop)",
                comment: "Belirli bir özelliğin tanımını (descriptor) döner.",
                detail: `
            const obj = { a: 10 };
            console.log(Object.getOwnPropertyDescriptor(obj, "a"));
            // { value: 10, writable: true, enumerable: true, configurable: true }
        `
            },
            {
                not: "Object.getOwnPropertyDescriptors(obj)",
                comment: "Tüm özelliklerin tanımlarını dön",
                detail: `
            const obj = { a: 10, b: 20 };
            console.log(Object.getOwnPropertyDescriptors(obj));
        `
            },
            {
                not: "Object.getOwnPropertyNames(obj)",
                comment: "Tüm string özellik adlarını döner (symbol'lar hariç).",
                detail: `
            const sym = Symbol("gizli");
            const obj = { ad: "Test", [sym]: 123 };
            console.log(Object.getOwnPropertyNames(obj)); // ["ad"]
        `
            },
            {
                not: "Object.getOwnPropertySymbols(obj)",
                comment: "Tüm symbol özellik adlarını döner.",
                detail: `
            const sym = Symbol("gizli");
            const obj = { ad: "Test", [sym]: 123 };
            console.log(Object.getOwnPropertySymbols(obj)); // [Symbol(gizli)]
        `
            },
            {
                not: "Object.getPrototypeOf(obj)",
                comment: "Bir nesnenin prototipini verir.",
                detail: `
            const obj = {};
            console.log(Object.getPrototypeOf(obj) === Object.prototype); // true
        `
            },
            {
                not: "Object.hasOwn(obj, prop)",
                comment: "Belirtilen özelliğin doğrudan o nesnede olup olmadığını döner (hasOwnProperty yerine modern kullanımdır)",
                detail: `
            const obj = { a: 1 };
            console.log(Object.hasOwn(obj, "a"));        // true
            console.log(Object.hasOwn(obj, "toString")); // false
        `
            },
            {
                not: "Object.isExtensible(obj)",
                comment: "Nesneye yeni özellik eklenip eklenemeyeceğini belirler.",
                detail: `
            const obj = { a: 1 };
            console.log(Object.isExtensible(obj)); // true
        `
            },
            {
                not: "Object.isFrozen(obj)",
                comment: "Nesne donmuş mu diye kontrol eder",
                detail: `
            const obj = { a: 1 };
            Object.freeze(obj);
            console.log(Object.isFrozen(obj)); // true
        `
            },
            {
                not: "Object.seal(obj)",
                comment: "Nesneyi mühürler (özellik silinemez, yeni eklenemez).",
                detail: `
            const obj = { a: 1 };
            Object.seal(obj);
            obj.a = 2; // mevcut değer değişebilir
            delete obj.a; // silinemez
            console.log(obj.a); // 2
        `
            },
            {
                not: "Object.isSealed(obj)",
                comment: "Nesne mühürlü mü diye kontrol eder (özellik eklenemez/silinemez ama değerleri değişebilir olabilir).",
                detail: `
            const obj = { a: 1 };
            Object.seal(obj);
            console.log(Object.isSealed(obj)); // true
        `
            },
            {
                not: "Object.preventExtensions(obj)",
                comment: "Nesneye yeni özellik eklenmesini engeller.",
                detail: `
            const obj = { a: 1 };
            Object.preventExtensions(obj);
            obj.b = 2;
            console.log(obj.b); // undefined
        `
            },
            {
                not: "Object.setPrototypeOf(obj, proto)",
                comment: "Bir nesnenin prototipini değiştirir.",
                detail: `
            const obj = {};
            const yeniProto = { selam: "Hi" };
            Object.setPrototypeOf(obj, yeniProto);
            console.log(obj.selam); // "Hi"
        `
            },
            {
                not: "Object.is(25, 25)",
                comment: "true → Değerler ve tipler aynı",
                detail: `
            console.log(Object.is(25, 25)); // true
            console.log(Object.is(NaN, NaN)); // true
        `
            },
            {
                title: "DOM API",
            },
            {
                not: 'document.getElementById("myId")',
                comment: "Belirtilen id değerine sahip tek bir DOM elementini seçer.",
                detail: `
            const baslik = document.getElementById("myId");
            if (baslik) {
                baslik.textContent = "Yeni Başlık";
            }
        `
            },
            {
                not: 'document.getElementsByClassName("btn")',
                comment: "Belirtilen sınıfa sahip elementleri canlı (live) HTMLCollection olarak döner.",
                detail: `
            const butonlar = document.getElementsByClassName("btn");
            Array.from(butonlar).forEach(btn => {
                btn.style.cursor = "pointer";
            });
        `
            },
            {
                not: "document.getElementsByTagName('div')",
                comment: "Belirtilen etiket adına sahip tüm elementleri HTMLCollection olarak getirir.",
                detail: `
            const divler = document.getElementsByTagName("div");
            console.log("Toplam div sayısı:", divler.length);
        `
            },
            {
                not: 'document.querySelector(".btn.primary")',
                comment: "CSS seçicisine uyan ilk elementi döner.",
                detail: `
            const anaButon = document.querySelector(".btn.primary");
            anaButon?.setAttribute("data-ready", "true");
        `
            },
            {
                not: 'document.querySelectorAll(".btn")',
                comment: "CSS seçicisine uyan tüm elementleri statik bir NodeList olarak döner.",
                detail: `
            const tumButonlar = document.querySelectorAll(".btn");
            tumButonlar.forEach(btn => btn.classList.add("hazir"));
        `
            },
            {
                not: 'element.getAttribute("type")',
                comment: "Elementteki belirtilen özniteliğin (attribute) değerini okur.",
                detail: `
            const input = document.querySelector("input");
            const tip = input?.getAttribute("type");
            console.log(tip); // örn: "text" veya "password"
        `
            },
            {
                not: 'element.setAttribute("data-id", "123")',
                comment: "Elemente yeni öznitelik ekler veya var olanın değerini günceller.",
                detail: `
            const kart = document.querySelector(".kart");
            kart?.setAttribute("data-id", "123");
            kart?.setAttribute("aria-expanded", "true");
        `
            },
            {
                not: 'element.removeAttribute("disabled")',
                comment: "Elementten belirtilen özniteliği kaldırır.",
                detail: `
            const gonderBtn = document.querySelector("#gonder");
            gonderBtn?.removeAttribute("disabled");
        `
            },
            {
                not: 'element.hasAttribute("readonly")',
                comment: "Elementin belirtilen özniteliğe sahip olup olmadığını boolean olarak döner.",
                detail: `
            const alan = document.querySelector("input");
            if (alan?.hasAttribute("readonly")) {
                console.log("Bu alan salt okunur.");
            }
        `
            },
            {
                not: 'element.toggleAttribute("hidden")',
                comment: "Öznitelik varsa kaldırır, yoksa ekler (isteğe bağlı ikinci boolean koşul alır).",
                detail: `
            const panel = document.querySelector("#panel");
            panel?.toggleAttribute("hidden");
            // Koşullu kullanım: panel.toggleAttribute("hidden", !isVisible);
        `
            },
            {
                not: 'element.classList.add("active")',
                comment: "Elemente bir veya birden fazla CSS sınıfı ekler.",
                detail: `
            const sekme = document.querySelector(".tab");
            sekme?.classList.add("active", "selected");
        `
            },
            {
                not: 'element.classList.remove("hidden")',
                comment: "Elementten belirtilen CSS sınıflarını kaldırır.",
                detail: `
            const modal = document.querySelector(".modal");
            modal?.classList.remove("hidden", "fade-out");
        `
            },
            {
                not: 'element.classList.toggle("highlight")',
                comment: "Sınıf varsa siler, yoksa ekler; güncel durumu boolean olarak döner.",
                detail: `
            const satir = document.querySelector("tr");
            const aktifMi = satir?.classList.toggle("highlight");
            console.log("Vurgulandı mı?", aktifMi);
        `
            },
            {
                not: 'element.classList.contains("class")',
                comment: "Elementin ilgili CSS sınıfına sahip olup olmadığını kontrol eder.",
                detail: `
            const menu = document.querySelector(".menu");
            if (menu?.classList.contains("open")) {
                console.log("Menü şu an açık.");
            }
        `
            },
            {
                not: 'element.classList.replace(oldClass, newClass)',
                comment: "Mevcut bir CSS sınıfını başka bir sınıfla değiştirir.",
                detail: `
            const rozet = document.querySelector(".badge");
            rozet?.classList.replace("badge-warning", "badge-success");
        `
            },
            {
                not: "window.getComputedStyle(element)",
                comment: "CSS kuralları ve kalıtım uygulandıktan sonraki nihai hesaplanmış stilleri döner.",
                detail: `
            const kutu = document.querySelector(".kutu");
            const stil = window.getComputedStyle(kutu);
            console.log("Genişlik:", stil.width);
            console.log("Arka plan:", stil.backgroundColor);
        `
            },
            {
                not: 'style.getPropertyValue("--main-color")',
                comment: "CSS değişkeni veya stil özelliğinin değerini okur.",
                detail: `
            const rootStil = getComputedStyle(document.documentElement);
            const anaRenk = rootStil.getPropertyValue("--main-color").trim();
            console.log(anaRenk); // "#3498db"
        `
            },
            {
                not: 'root.style.setProperty("--main-color", "#e74c3c")',
                comment: "CSS değişkeninin veya stil özelliğinin değerini dinamik olarak ayarlar.",
                detail: `
            const root = document.documentElement;
            root.style.setProperty("--main-color", "#e74c3c");
        `
            },
            {
                not: 'element.style.removeProperty("background-color")',
                comment: "Inline stil üzerinden tanımlanmış bir özelliği kaldırır.",
                detail: `
            const kutu = document.querySelector(".kutu");
            kutu?.style.removeProperty("background-color");
        `
            },
            {
                not: "requestAnimationFrame(() => {})",
                comment: "Görsel/DOM güncellemelerini tarayıcının yenileme döngüsüyle senkronize ederek akıcılık sağlar.",
                detail: `
            let pos = 0;
            function adimla() {
                pos += 4;
                kutu.style.transform = \`translateX(\${pos}px)\`;
                if (pos < 200) requestAnimationFrame(adimla);
            }
            requestAnimationFrame(adimla);
        `
            },
            {
                not: "document.createElement()",
                comment: "Belirtilen etiket adıyla yeni bir HTML elementi oluşturur (henüz DOM'a eklenmez).",
                detail: `
            const yeniDiv = document.createElement("div");
            yeniDiv.className = "kart";
            yeniDiv.textContent = "Dinamik kart";
        `
            },
            {
                not: "parent.appendChild(element)",
                comment: "Tek bir Node nesnesini kapsayıcı elementin son çocuğu olarak ekler.",
                detail: `
            const liste = document.querySelector("ul");
            const oge = document.createElement("li");
            oge.textContent = "Yeni madde";
            liste?.appendChild(oge);
        `
            },
            {
                not: "parent.append(element)",
                comment: "Kapsayıcının sonuna bir veya birden fazla Node ya da metin (string) ekler.",
                detail: `
            const kapsayici = document.querySelector(".container");
            const baslik = document.createElement("h2");
            baslik.textContent = "Özet";
            kapsayici?.append(baslik, " — Güncel liste");
        `
            },
            {
                not: "parent.prepend(element)",
                comment: "Kapsayıcının en başına Node veya metin ekler.",
                detail: `
            const liste = document.querySelector("ul");
            const ilkMadde = document.createElement("li");
            ilkMadde.textContent = "En üst madde";
            liste?.prepend(ilkMadde);
        `
            },
            {
                not: "parent.insertBefore(element, parent.firstChild)",
                comment: "Yeni düğümü, belirtilen referans düğümün hemen önüne yerleştirir.",
                detail: `
            const liste = document.querySelector("ul");
            const yeniOge = document.createElement("li");
            yeniOge.textContent = "İlk sıraya eklendi";
            liste?.insertBefore(yeniOge, liste.firstChild);
        `
            },
            {
                not: "parent.replaceChild(newEl, oldEl)",
                comment: "Mevcut bir alt düğümü yeni bir düğümle değiştirir.",
                detail: `
            const kapsayici = document.querySelector(".kapsayici");
            const eski = document.querySelector(".eski-kutu");
            const yeni = document.createElement("div");
            yeni.textContent = "Yeni kutu";
            if (eski) kapsayici?.replaceChild(yeni, eski);
        `
            },
            {
                not: "element.before(...nodes)",
                comment: "Elementin hemen öncesine (kardeş düğüm olarak) eleman veya metin ekler.",
                detail: `
            const hedef = document.querySelector("#hedef");
            const uyari = document.createElement("p");
            uyari.textContent = "Hedefin üstünde";
            hedef?.before(uyari);
        `
            },
            {
                not: "element.after(...nodes)",
                comment: "Elementin hemen sonrasına (kardeş düğüm olarak) eleman veya metin ekler.",
                detail: `
            const hedef = document.querySelector("#hedef");
            hedef?.after(" — satır sonu notu");
        `
            },
            {
                not: "parent.removeChild(child)",
                comment: "Belirtilen doğrudan alt düğümü DOM ağacından kaldırır.",
                detail: `
            const liste = document.querySelector("ul");
            const silinecek = liste?.querySelector("li:last-child");
            if (silinecek) liste.removeChild(silinecek);
        `
            },
            {
                not: "element.remove()",
                comment: "Elementin kendisini doğrudan DOM'dan kaldırır.",
                detail: `
            const geciciBildirim = document.querySelector(".toast");
            geciciBildirim?.remove();
        `
            },
            {
                not: 'element.removeEventListener("click", handler)',
                comment: "Önceden eklenmiş olay dinleyiciyi kaldırarak bellek sızıntılarını önler.",
                detail: `
            function tiklaHandler() {
                console.log("Tıklandı");
            }
            buton.addEventListener("click", tiklaHandler);
            // İş bitince veya element kaldırılırken:
            buton.removeEventListener("click", tiklaHandler);
        `
            },
            {
                not: "element.cloneNode(true)",
                comment: "Elementi kopyalar; true parametresi tüm alt düğümleriyle (deep clone) kopyalamasını sağlar.",
                detail: `
            const sablon = document.querySelector(".kart-sablonu");
            const kopyaKart = sablon?.cloneNode(true);
            kopyaKart?.classList.remove("kart-sablonu");
            document.body.append(kopyaKart);
        `
            },
            {
                not: "document.createDocumentFragment()",
                comment: "Bellekte hafif bir düğüm kapsayıcısı oluşturur; toplu eklemelerde reflow sayısını azaltır.",
                detail: `
            const fragment = document.createDocumentFragment();
            for (let i = 1; i <= 5; i++) {
                const li = document.createElement("li");
                li.textContent = \`Öğe \${i}\`;
                fragment.appendChild(li);
            }
            document.querySelector("ul")?.appendChild(fragment);
        `
            },
            {
                not: 'element.innerHTML = ""',
                comment: "Elementin içindeki tüm HTML içeriğini temizler veya yeni HTML ile değiştirir.",
                detail: `
            const alan = document.querySelector("#icerik");
            if (alan) {
                alan.innerHTML = ""; // İçeriği temizle
            }
        `
            },
            {
                not: 'element.outerHTML = ""',
                comment: "Elementin kendisini de dahil ederek değiştirir veya kaldırır.",
                detail: `
            const eskiEtiket = document.querySelector("#gecici");
            if (eskiEtiket) {
                eskiEtiket.outerHTML = "<section class='yeni-alan'><p>Güncellendi</p></section>";
            }
        `
            },
            {
                not: 'element.insertAdjacentElement("beforebegin", newElem)',
                comment: "Belirtilen konuma ('beforebegin', 'afterbegin', 'beforeend', 'afterend') bir Element ekler.",
                detail: `
            const hedef = document.querySelector("#kart");
            const yeniRozet = document.createElement("span");
            yeniRozet.textContent = "Yeni";
            hedef?.insertAdjacentElement("beforebegin", yeniRozet);
        `
            },
            {
                not: 'element.insertAdjacentHTML("afterbegin", "<div>İçin Başı</div>")',
                comment: "Belirtilen konuma HTML metnini ayrıştırarak doğrudan DOM'a ekler.",
                detail: `
            const kutu = document.querySelector(".kutu");
            kutu?.insertAdjacentHTML("afterbegin", "<div class='ust-bilgi'>İçin Başı</div>");
        `
            },
            {
                not: 'element.insertAdjacentText("afterend", "Dışarı Son")',
                comment: "Belirtilen konuma düz metin düğümü ekler (HTML olarak yorumlanmaz).",
                detail: `
            const etiket = document.querySelector("label");
            etiket?.insertAdjacentText("afterend", "Dışarı Son");
        `
            },
            {
                not: "event.stopPropagation()",
                comment: "Olayın üst (bubbling) veya alt (capturing) elementlere yayılmasını durdurur.",
                detail: `
            icButon.addEventListener("click", (e) => {
                e.stopPropagation();
                console.log("Sadece iç buton tetiklendi, dış kapsayıcı çalışmaz.");
            });
        `
            },
            {
                not: "event.stopImmediatePropagation()",
                comment: "Olayın yayılmasını durdurur ve aynı elementteki diğer dinleyicilerin çalışmasını da engeller.",
                detail: `
            buton.addEventListener("click", (e) => {
                e.stopImmediatePropagation();
                console.log("İlk dinleyici çalıştı, sıradaki iptal edildi.");
            });
            buton.addEventListener("click", () => {
                console.log("Bu satır çalışmayacak.");
            });
        `
            },
            {
                not: 'parent.addEventListener("click", (e) => { if (e.target.matches("button.delete")) {} })',
                comment: "Event delegation yöntemiyle üst element üzerinden dinamik alt elemanların olaylarını yakalar.",
                detail: `
            const liste = document.querySelector("#liste");
            liste?.addEventListener("click", (e) => {
                if (e.target.matches("button.delete")) {
                    const satir = e.target.closest("li");
                    satir?.remove();
                }
            });
        `
            },
            {
                not: "const event = new CustomEvent('xsa', {detail: {mesaj: 'merhaba dünya'}})",
                comment: "İsteğe bağlı veri (detail) taşıyabilen özel (custom) bir olay nesnesi oluşturur.",
                detail: `
            const event = new CustomEvent("xsa", {
                detail: { mesaj: "merhaba dünya" },
                bubbles: true
            });
        `
            },
            {
                not: "element.addEventListener('xsa', function (e) {console.log(e.detail.mesaj);})",
                comment: "Oluşturulan özel olayı dinler ve e.detail içindeki veriye erişir.",
                detail: `
            const hedef = document.querySelector("#uygulama");
            hedef?.addEventListener("xsa", (e) => {
                console.log("Gelen mesaj:", e.detail.mesaj);
            });
        `
            },
            {
                not: "element.dispatchEvent(event)",
                comment: "Hazırlanan Event veya CustomEvent nesnesini belirtilen element üzerinde tetikler.",
                detail: `
            const hedef = document.querySelector("#uygulama");
            const event = new CustomEvent("xsa", { detail: { mesaj: "merhaba dünya" } });
            hedef?.dispatchEvent(event);
        `
            },
            {
                not: "e.target.matches('.element')",
                comment: "Olayın hedef elementinin verilen CSS seçicisiyle eşleşip eşleşmediğini kontrol eder.",
                detail: `
            document.addEventListener("click", (e) => {
                if (e.target.matches(".element")) {
                    console.log("Tıklanan eleman .element sınıfına sahip.");
                }
            });
        `
            },
            {
                not: 'e.target.closest(".btn")',
                comment: "Elementin kendisinden başlayarak yukarı doğru seçiciye uyan en yakın ata elementi bulur.",
                detail: `
            document.addEventListener("click", (e) => {
                const buton = e.target.closest(".btn");
                if (buton) {
                    console.log("Tıklanan buton:", buton);
                }
            });
        `
            },
            {
                not: "const range = document.createRange()",
                comment: "DOM içinde başlangıç ve bitiş sınırları tanımlanabilen programatik bir aralık nesnesi oluşturur.",
                detail: `
            const range = document.createRange();
            const textNode = document.querySelector("#metin")?.firstChild;
            if (textNode) {
                range.setStart(textNode, 0);
                range.setEnd(textNode, 5);
                console.log(range.toString());
            }
        `
            },
            {
                not: "range.setStart(textElement.firstChild, 8)",
                comment: "Aralığın başlangıç düğümünü ve karakter/düğüm ofsetini ayarlar.",
                detail: `
            const textElement = document.querySelector("#paragraf");
            const range = document.createRange();
            range.setStart(textElement.firstChild, 8);
            range.setEnd(textElement.firstChild, 12);
        `
            },
            {
                not: "range.setEnd(textElement.firstChild, 12)",
                comment: "Aralığın bitiş düğümünü ve ofset konumunu belirler.",
                detail: `
            const textElement = document.querySelector("#paragraf");
            const range = document.createRange();
            range.setStart(textElement.firstChild, 8);
            range.setEnd(textElement.firstChild, 12);
            console.log("Seçilen kısım:", range.toString());
        `
            },
            {
                not: "range.toString()",
                comment: "Range aralığı içindeki metin içeriğini düz string olarak döner.",
                detail: `
            const seciliMetin = range.toString();
            console.log(seciliMetin);
        `
            },
            {
                not: "range.cloneContents()",
                comment: "Range içindeki düğümlerin kopyasını bir DocumentFragment olarak döner (orijinal DOM bozulmaz).",
                detail: `
            const kopyaParca = range.cloneContents();
            document.body.appendChild(kopyaParca);
        `
            },
            {
                not: "range.deleteContents()",
                comment: "Range aralığında kalan DOM içeriğini siler.",
                detail: `
            range.deleteContents();
        `
            },
            {
                not: "range.insertNode(node)",
                comment: "Verilen düğümü Range'in başlangıç konumuna ekler.",
                detail: `
            const isaretci = document.createElement("mark");
            isaretci.textContent = "|";
            range.insertNode(isaretci);
        `
            },
            {
                not: "range.surroundContents(node)",
                comment: "Range içeriğini verilen kapsayıcı düğümün içine sarar.",
                detail: `
            const vurgu = document.createElement("span");
            vurgu.style.backgroundColor = "yellow";
            range.surroundContents(vurgu);
        `
            },
            {
                not: "new MutationObserver()",
                comment: "DOM ağacındaki çocuk, öznitelik veya metin değişikliklerini asenkron olarak gözlemler.",
                detail: `
            const observer = new MutationObserver((mutations) => {
                mutations.forEach((m) => console.log("DOM değişti:", m.type));
            });
            observer.observe(document.body, { childList: true, subtree: true });
        `
            },
            {
                not: "new IntersectionObserver()",
                comment: "Hedef elementin viewport veya bir kapsayıcı ile kesişim (görünürlük) durumunu izler.",
                detail: `
            const io = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        console.log("Element görünür alanda:", entry.target);
                    }
                });
            });
            io.observe(document.querySelector(".hedef"));
        `
            },
            {
                not: "new ResizeObserver()",
                comment: "Elementin içerik veya kenarlık boyutlarındaki değişiklikleri takip eder.",
                detail: `
            const ro = new ResizeObserver((entries) => {
                for (const entry of entries) {
                    console.log("Yeni genişlik:", entry.contentRect.width);
                }
            });
            ro.observe(document.querySelector(".esnek-kutu"));
        `
            },
            {
                not: "observer.unobserve(element)",
                comment: "Gözlemcinin yalnızca belirtilen tek bir hedef elementi izlemeyi bırakmasını sağlar.",
                detail: `
            const hedef = document.querySelector(".hedef");
            if (hedef) observer.unobserve(hedef);
        `
            },
            {
                not: "observer.disconnect()",
                comment: "Gözlemcinin tüm hedefleri izlemeyi tamamen durdurmasını sağlar.",
                detail: `
            observer.disconnect();
        `
            },
            {
                not: ".attachShadow({mode: 'open'})",
                comment: "Elemente kapsüllenmiş bir Shadow DOM ağacı bağlar; 'open' modunda dışarıdan shadowRoot erişilebilir.",
                detail: `
            const host = document.querySelector("#bilesen");
            const shadow = host?.attachShadow({ mode: "open" });
            if (shadow) {
                shadow.innerHTML = "<style>p { color: teal; }</style><p>Shadow DOM içi</p>";
            }
        `
            },
            {
                not: "class extends HTMLElement {constructor() {super ();}}",
                comment: "Özel HTML etiketi (Web Component) tanımlamak için temel sınıf yapısıdır.",
                detail: `
            class OzelKart extends HTMLElement {
                constructor() {
                    super();
                    this.attachShadow({ mode: "open" });
                    this.shadowRoot.innerHTML = "<p>Özel Web Component</p>";
                }
            }
            customElements.define("ozel-kart", OzelKart);
        `
            },
            {
                not: "requestIdleCallback(() => {})",
                comment: "Tarayıcı ana iş parçacığı boşta kaldığında düşük öncelikli görevleri çalıştırır.",
                detail: `
            requestIdleCallback((deadline) => {
                while (deadline.timeRemaining() > 0) {
                    // Boş vakitte yapılacak hafif işler
                    break;
                }
            });
        `
            },
            {
                not: "deadline.timeRemaining()",
                comment: "Mevcut boş zaman diliminde kalan yaklaşık süreyi milisaniye cinsinden döner.",
                detail: `
            requestIdleCallback((deadline) => {
                console.log("Kalan boş süre (ms):", deadline.timeRemaining());
            });
        `
            },
            {
                not: "deadline.didTimeout",
                comment: "Callback'in boş zaman dolduğu için değil, timeout süresinin aşılması nedeniyle tetiklenip tetiklenmediğini gösterir.",
                detail: `
            requestIdleCallback((deadline) => {
                if (deadline.didTimeout) {
                    console.log("Zaman aşımı nedeniyle çalıştırıldı.");
                }
            }, { timeout: 1000 });
        `
            },
            {
                not: "element.scrollIntoView(hedef)",
                comment: "Elementin bulunduğu kaydırılabilir alanı, element görünür hale gelecek şekilde kaydırır.",
                detail: `
            const bolum = document.querySelector("#iletisim");
            bolum?.scrollIntoView({ behavior: "smooth", block: "start" });
        `
            },
            {
                not: "const array = new Uint32Array(5)",
                comment: "5 elemanlı, her biri 32 bit işaretsiz tam sayı tutan TypedArray oluşturur.",
                detail: `
            const array = new Uint32Array(5);
            console.log(array.length); // 5
        `
            },
            {
                not: "crypto.getRandomValues(array)",
                comment: "Verilen TypedArray dizisini kriptografik olarak güvenli rastgele sayılarla doldurur.",
                detail: `
            const array = new Uint32Array(5);
            crypto.getRandomValues(array);
            console.log(array);
        `
            },
            {
                not: "crypto.randomUUID()",
                comment: "Kriptografik olarak güvenli, standart v4 UUID metni üretir.",
                detail: `
            const id = crypto.randomUUID();
            console.log(id); // örn: "3b12f1df-5232-4804-897e-17cf1c016064"
        `
            },
            {
                not: "const sel = window.getSelection()",
                comment: "Kullanıcının sayfada yaptığı aktif metin seçimini temsil eden Selection nesnesini alır.",
                detail: `
            const sel = window.getSelection();
            console.log("Seçili metin:", sel.toString());
        `
            },
            {
                not: "sel.toString()",
                comment: "Seçili aralığın düz metin karşılığını string olarak döner.",
                detail: `
            const sel = window.getSelection();
            const seciliMetin = sel.toString().trim();
            if (seciliMetin) {
                console.log("Kopyalanabilir metin:", seciliMetin);
            }
        `
            },
            {
                not: "sel.focusOffset",
                comment: "Seçimin bitiş/odak (focus) noktasının ilgili düğüm içindeki karakter ofsetini verir.",
                detail: `
            const sel = window.getSelection();
            console.log("Odak karakter pozisyonu:", sel.focusOffset);
        `
            },
            {
                not: "sel.anchorOffset",
                comment: "Seçimin başlangıç/çapa (anchor) noktasının ilgili düğüm içindeki karakter ofsetini verir.",
                detail: `
            const sel = window.getSelection();
            console.log("Başlangıç karakter pozisyonu:", sel.anchorOffset);
        `
            },
            {
                not: "sel.isCollapsed",
                comment: "Seçimin boş olup olmadığını (başlangıç ve bitişin aynı noktada/caret halinde olup olmadığını) döner.",
                detail: `
            const sel = window.getSelection();
            if (sel.isCollapsed) {
                console.log("Metin seçili değil, yalnızca imleç (caret) bulunuyor.");
            }
        `
            },
            {
                not: "sel.rangeCount",
                comment: "Mevcut seçimdeki Range nesnesi sayısını döner (genellikle 0 veya 1'dir).",
                detail: `
            const sel = window.getSelection();
            console.log("Aktif aralık sayısı:", sel.rangeCount);
        `
            },
            {
                not: "sel.getRangeAt(0)",
                comment: "Belirtilen indeksteki Range nesnesini döner.",
                detail: `
            const sel = window.getSelection();
            if (sel.rangeCount > 0) {
                const range = sel.getRangeAt(0);
                console.log("İlk aralık metni:", range.toString());
            }
        `
            },
            {
                not: "sel.removeAllRanges()",
                comment: "Seçimdeki tüm Range nesnelerini kaldırarak sayfadaki seçimi temizler.",
                detail: `
            const sel = window.getSelection();
            sel.removeAllRanges();
        `
            },
            {
                not: "sel.addRange(range)",
                comment: "Oluşturulan bir Range nesnesini aktif seçime ekleyerek metni programatik olarak seçtirir.",
                detail: `
            const range = document.createRange();
            const node = document.querySelector("#hedefMetin")?.firstChild;
            if (node) {
                range.setStart(node, 0);
                range.setEnd(node, 5);
                const sel = window.getSelection();
                sel.removeAllRanges();
                sel.addRange(range);
            }
        `
            },
            {
                not: "sel.collapse(node, offset)",
                comment: "Seçimi tek bir noktaya daraltarak imleci (caret) belirtilen düğüm ve ofsete taşır.",
                detail: `
            const sel = window.getSelection();
            const node = document.querySelector("#editor")?.firstChild;
            if (node) {
                sel.collapse(node, 3);
            }
        `
            },
            {
                not: "sel.extend(node, offset)",
                comment: "Mevcut seçimin odak (focus) ucunu belirtilen düğüm ve ofsete doğru genişletir.",
                detail: `
            const sel = window.getSelection();
            const node = document.querySelector("#editor")?.firstChild;
            if (node && sel.rangeCount > 0) {
                sel.extend(node, node.textContent.length);
            }
        `
            },
            {
                not: "encodeURIComponent(str)",
                comment: "URI bileşenindeki özel ve Unicode karakterleri percent-encoding formatına çevirir.",
                detail: `
            const arama = "elma & armut / 2026";
            const url = \`https://ornek.com/ara?q=\${encodeURIComponent(arama)}\`;
            console.log(url);
        `
            },
            {
                not: "decodeURIComponent(str)",
                comment: "encodeURIComponent ile kodlanmış metni tekrar orijinal haline çözer.",
                detail: `
            const kodlu = "elma%20%26%20armut%20%2F%202026";
            console.log(decodeURIComponent(kodlu)); // "elma & armut / 2026"
        `
            },
            {
                not: "unescape(str)",
                comment: "Eski (kullanımdan kaldırılmış/deprecated) bir fonksiyondur; %XX kaçış dizilerini çözer.",
                detail: `
            // Modern projelerde decodeURIComponent tercih edilmelidir
            console.log(unescape("Merhaba%20D%FCnya"));
        `
            },
            {
                not: "escape(str)",
                comment: "Eski (kullanımdan kaldırılmış/deprecated) bir fonksiyondur; bazı karakterleri %XX formatına çevirir.",
                detail: `
            // Modern projelerde encodeURIComponent tercih edilmelidir
            console.log(escape("Merhaba Dünya"));
        `
            },
            {
                not: "new TextEncoder().encode()",
                comment: "String ifadeyi UTF-8 bayt dizisine (Uint8Array) dönüştürür.",
                detail: `
            const encoder = new TextEncoder();
            const baytlar = encoder.encode("Merhaba 🚀");
            console.log(baytlar); // Uint8Array(...)
        `
            },
            {
                not: "new TextDecoder().decode()",
                comment: "UTF-8 veya diğer desteklenen kodlamalardaki bayt dizisini tekrar string'e çevirir.",
                detail: `
            const encoder = new TextEncoder();
            const decoder = new TextDecoder();
            const baytlar = encoder.encode("Merhaba 🚀");
            console.log(decoder.decode(baytlar)); // "Merhaba 🚀"
        `
            },
            {
                not: "btoa(str)",
                comment: "Latin1/ASCII karakter aralığındaki string'i Base64 formatına kodlar.",
                detail: `
            const encoded = btoa("Merhaba");
            console.log(encoded); // "TWVyaGFiYQ=="
        `
            },
            {
                not: "atob(str)",
                comment: "Base64 ile kodlanmış string'i tekrar orijinal haline çözer.",
                detail: `
            const decoded = atob("TWVyaGFiYQ==");
            console.log(decoded); // "Merhaba"
        `
            },
            {
                title: "Fonksiyon & Zaman",
            },
            {
                not: "setTimeout((() => {}, 3000))",
                comment: "Verilen süre (ms) sonunda fonksiyonu bir defa çalıştırır.",
                detail: `
            const timerId = setTimeout(() => {
                console.log("3 saniye sonra bir kez çalıştı.");
            }, 3000);
        `
            },
            {
                not: "setInterval(() => {}, 3000)",
                comment: "Belirli aralıklarla tekrar eden işlemler yapar.",
                detail: `
            const intervalId = setInterval(() => {
                console.log("Her 3 saniyede bir çalışır.");
            }, 3000);
        `
            },
            {
                not: "clearTimeout(ID)",
                comment: "Zamanlayıcıyı iptal eder (not: setInterval'i durdurmak için clearInterval(ID) kullanılır).",
                detail: `
            const id = setTimeout(() => {
                console.log("Bu çalışmayacak.");
            }, 3000);
            clearTimeout(id);

            // Interval durdurmak için:
            // const intId = setInterval(() => {}, 1000);
            // clearInterval(intId);
        `
            },
            {
                not: "call()",
                comment: "Fonksiyonu belirli bir this bağlamıyla çağırır ve argümanları tek tek (virgülle ayrılmış) geçirir.",
                detail: `
            function tanit(sehir, yas) {
                console.log(\`\${this.ad} - \${sehir} - \${yas}\`);
            }
            const kisi = { ad: "Zeynep" };
            tanit.call(kisi, "İstanbul", 28);
        `
            },
            {
                not: "apply()",
                comment: "Fonksiyonu belirli bir this bağlamıyla çağırır ve argümanları tek bir dizi (array) içinde verir.",
                detail: `
            function tanit(sehir, yas) {
                console.log(\`\${this.ad} - \${sehir} - \${yas}\`);
            }
            const kisi = { ad: "Zeynep" };
            tanit.apply(kisi, ["Ankara", 28]);
        `
            },
            {
                not: "bind()",
                comment: "Fonksiyonun this değerini (ve istenirse ön argümanları) bağlayarak yeni bir fonksiyon döndürür.",
                detail: `
            function selamla(selam) {
                console.log(\`\${selam}, \${this.ad}!\`);
            }
            const kisi = { ad: "Deniz" };
            const bagliSelamla = selamla.bind(kisi, "Merhaba");
            bagliSelamla(); // "Merhaba, Deniz!"
        `
            },
            {
                not: "constructor",
                comment: "Bir nesneyi oluşturan yapıcı (constructor) fonksiyona/sınıfa referans verir.",
                detail: `
            function Kullanici(ad) {
                this.ad = ad;
            }
            const u = new Kullanici("Efe");
            console.log(u.constructor === Kullanici); // true
        `
            },
            {
                not: "arguments",
                comment: "Klasik (non-arrow) fonksiyonların içinde iletilen argümanlara erişim sağlayan dizi benzeri nesne.",
                detail: `
            function topla() {
                let toplam = 0;
                for (let i = 0; i < arguments.length; i++) {
                    toplam += arguments[i];
                }
                return toplam;
            }
            console.log(topla(2, 4, 6)); // 12
        `
            },
            {
                not: "new Function()",
                comment: "Parametre adlarını ve fonksiyon gövdesini string olarak alıp dinamik fonksiyon üretir.",
                detail: `
            const carp = new Function("a", "b", "return a * b;");
            console.log(carp(6, 7)); // 42
        `
            },
            {
                not: "eval(code)",
                comment: "Verilen string ifadeyi JavaScript kodu olarak çalıştırır (güvenlik ve performans riskleri nedeniyle dikkatli kullanılmalıdır).",
                detail: `
            const sonuc = eval("2 + 3 * 4");
            console.log(sonuc); // 14
        `
            },
            {
                title: "Symbol & Meta",
            },
            {
                not: "Symbol.for('text')",
                comment: "Aynı Symbol'ü global kayıt defteri (registry) üzerinden paylaşır; aynı anahtarla hep aynı Symbol döner.",
                detail: `
            const s1 = Symbol.for("app.id");
            const s2 = Symbol.for("app.id");
            console.log(s1 === s2); // true
        `
            },
            {
                not: "Symbol.keyFor('key')",
                comment: "Global Symbol kayıt defterindeki bir Symbol'ün string anahtarını döndürür.",
                detail: `
            const sym = Symbol.for("kullanici.rol");
            console.log(Symbol.keyFor(sym)); // "kullanici.rol"
            console.log(Symbol.keyFor(Symbol("yerel"))); // undefined
        `
            },
            {
                not: "Symbol.iterator",
                comment: "Bir nesneyi for...of döngüsü ve spread (...) ile gezilebilir (iterable) yapmak için kullanılır.",
                detail: `
            const aralik = {
                baslangic: 1,
                bitis: 3,
                [Symbol.iterator]() {
                    let guncel = this.baslangic;
                    const son = this.bitis;
                    return {
                        next() {
                            if (guncel <= son) {
                                return { value: guncel++, done: false };
                            }
                            return { value: undefined, done: true };
                        }
                    };
                }
            };
            console.log([...aralik]); // [1, 2, 3]
        `
            },
            {
                not: "Symbol.toStringTag",
                comment: "Object.prototype.toString.call(obj) çıktısındaki varsayılan etiket adını özelleştirir.",
                detail: `
            const ozelNesne = {
                [Symbol.toStringTag]: "OzelKoleksiyon"
            };
            console.log(Object.prototype.toString.call(ozelNesne));
            // "[object OzelKoleksiyon]"
        `
            },
            {
                not: "Symbol.hasInstance",
                comment: "Bir nesnenin 'instanceof' operatörüyle kontrol edilme davranışını özelleştirir.",
                detail: `
            class CiftSayi {
                static [Symbol.hasInstance](deger) {
                    return typeof deger === "number" && deger % 2 === 0;
                }
            }
            console.log(4 instanceof CiftSayi); // true
            console.log(3 instanceof CiftSayi); // false
        `
            },
            {
                not: "Symbol.toPrimitive",
                comment: "Bir nesnenin sayı (number), metin (string) veya varsayılan (default) primitif türe dönüşümünü kontrol eder.",
                detail: `
            const cuzdanim = {
                tl: 150,
                [Symbol.toPrimitive](hint) {
                    if (hint === "number") return this.tl;
                    if (hint === "string") return \`\${this.tl} TL\`;
                    return this.tl;
                }
            };
            console.log(+cuzdanim);       // 150
            console.log(\`\${cuzdanim}\`); // "150 TL"
        `
            },
            {
                not: "Symbol.asyncIterator",
                comment: "Nesneyi 'for await...of' döngüsüyle asenkron olarak gezilebilir (async iterable) hale getirir.",
                detail: `
            const akis = {
                async *[Symbol.asyncIterator]() {
                    yield "Paket 1";
                    yield "Paket 2";
                }
            };
            (async () => {
                for await (const veri of akis) {
                    console.log(veri);
                }
            })();
        `
            },
            {
                not: "Symbol.unscopables",
                comment: "Eski 'with' bloğunda dış kapsamdan gizlenmesini istediğiniz özellik adlarını belirler.",
                detail: `
            const ayar = {
                tema: "koyu",
                gizliAlan: "dahili",
                [Symbol.unscopables]: {
                    gizliAlan: true
                }
            };
            console.log(ayar[Symbol.unscopables].gizliAlan); // true
        `
            },
            {
                not: "Symbol.split",
                comment: "String.prototype.split() çağrıldığında nesnenin kendi özel bölme mantığını çalıştırmasını sağlar.",
                detail: `
            const tireAyirici = {
                [Symbol.split](metin) {
                    return metin.split("-");
                }
            };
            console.log("2026-11-22".split(tireAyirici)); // ["2026", "11", "22"]
        `
            },
            {
                not: "Symbol.search",
                comment: "String.prototype.search() çağrıldığında nesnenin özel arama mantığını tanımlar.",
                detail: `
            const kelimeArayici = {
                [Symbol.search](metin) {
                    return metin.indexOf("JS");
                }
            };
            console.log("Modern JS Notları".search(kelimeArayici)); // 7
        `
            },
            {
                not: "Symbol.replace",
                comment: "String.prototype.replace() çağrıldığında nesnenin özel değiştirme davranışını belirler.",
                detail: `
            const sansur = {
                [Symbol.replace](metin, yeniDeger) {
                    return metin.replaceAll("gizli", yeniDeger);
                }
            };
            console.log("Bu gizli bir gizli not.".replace(sansur, "***"));
            // "Bu *** bir *** not."
        `
            },
            {
                not: "Symbol.match",
                comment: "String.prototype.match() çağrıldığında nesnenin eşleştirme davranışını özelleştirir.",
                detail: `
            const baslangicKontrol = {
                [Symbol.match](metin) {
                    return metin.startsWith("Merhaba") ? ["Merhaba"] : null;
                }
            };
            console.log("Merhaba Dünya".match(baslangicKontrol)); // ["Merhaba"]
        `
            },
            {
                not: "Symbol.isConcatSpreadable",
                comment: "Bir nesnenin Array.prototype.concat() sırasında elemanlarının tek tek yayılıp yayılmayacağını belirler.",
                detail: `
            const paket = {
                0: "a",
                1: "b",
                length: 2,
                [Symbol.isConcatSpreadable]: true
            };
            console.log(["x"].concat(paket)); // ["x", "a", "b"]
        `
            },
            {
                not: "Symbol.species",
                comment: "Türetilmiş sınıflarda (örneğin Array alt sınıflarında) yeni dizi üreten metotların hangi yapıcıyı kullanacağını seçer.",
                detail: `
            class OzelDizi extends Array {
                static get [Symbol.species]() {
                    return Array; // map/filter sonrası düz Array dönsün
                }
            }
            const d = new OzelDizi(1, 2, 3);
            const sonuc = d.map(x => x * 2);
            console.log(sonuc instanceof OzelDizi); // false
            console.log(sonuc instanceof Array);    // true
        `
            },
            {
                not: "with (obj) {}",
                comment: "Nesne özelliklerini yerel kapsamda gibi kullanmayı sağlar; scope belirsizliği ve performans sorunları nedeniyle önerilmez.",
                detail: `
            // Önerilmeyen kullanım (strict mode'da SyntaxError verir):
            // with (config) { console.log(host); }

            // Önerilen modern alternatif:
            const config = { host: "localhost", port: 3000 };
            const { host, port } = config;
            console.log(host, port);
        `
            },
            {
                not: "concat()",
                comment: "Dizileri veya string'leri birleştirir; orijinal diziyi veya string'i değiştirmeden yeni değer döndürür.",
                detail: `
            const diziSonuc = [1, 2].concat([3, 4]);
            const metinSonuc = "Merhaba".concat(" ", "JS");
            console.log(diziSonuc);  // [1, 2, 3, 4]
            console.log(metinSonuc); // "Merhaba JS"
        `
            },
            {
                title: "Proxy & Reflect",
            },
            {
                not: "new Proxy(target, handler)",
                comment: "Bir nesneye (veya fonksiyona) yapılan okuma, yazma, silme, çağrı gibi temel işlemleri yakalayıp özelleştirmeyi sağlar.",
                detail: `
            const hedef = { ad: "Ali" };
            const proxy = new Proxy(hedef, {
                get(obj, prop) {
                    return prop in obj ? obj[prop] : "Bulunamadı";
                }
            });
            console.log(proxy.ad);  // "Ali"
            console.log(proxy.yas); // "Bulunamadı"
        `
            },
            {
                not: "get(target, prop)",
                comment: "Proxy üzerinden bir özelliğe (property) erişildiğinde tetiklenen trap metodudur.",
                detail: `
            const kullanici = new Proxy({ ad: "Ayşe" }, {
                get(target, prop) {
                    console.log(\`'\${String(prop)}' özelliği okundu\`);
                    return Reflect.get(target, prop);
                }
            });
            console.log(kullanici.ad); // "Ayşe"
        `
            },
            {
                not: "set(target, prop, value)",
                comment: "Proxy üzerinden bir özelliğe değer atandığında çalışır; doğrulama veya yan etki eklemek için kullanılır.",
                detail: `
            const ayar = new Proxy({ hacim: 50 }, {
                set(target, prop, value) {
                    if (prop === "hacim" && (value < 0 || value > 100)) {
                        throw new Error("Hacim 0-100 arasında olmalıdır.");
                    }
                    return Reflect.set(target, prop, value);
                }
            });
            ayar.hacim = 80;
            console.log(ayar.hacim); // 80
        `
            },
            {
                not: "has(target, prop)",
                comment: "'in' operatörü kullanıldığında tetiklenir ve özelliğin varlığını boolean olarak döner.",
                detail: `
            const gizliNesne = { _gizli: 123, acik: 456 };
            const proxy = new Proxy(gizliNesne, {
                has(target, prop) {
                    if (String(prop).startsWith("_")) return false;
                    return prop in target;
                }
            });
            console.log("acik" in proxy);   // true
            console.log("_gizli" in proxy); // false
        `
            },
            {
                not: "deleteProperty(target, prop)",
                comment: "'delete proxy.prop' işlemi yapıldığında çalışır ve silmeye izin verilip verilmediğini boolean ile bildirir.",
                detail: `
            const sabitKayit = new Proxy({ id: 1, taslak: true }, {
                deleteProperty(target, prop) {
                    if (prop === "id") return false; // id silinemesin
                    return Reflect.deleteProperty(target, prop);
                }
            });
            delete sabitKayit.taslak; // true
            console.log(sabitKayit);  // { id: 1 }
        `
            },
            {
                not: "ownKeys(target)",
                comment: "Object.keys(), Reflect.ownKeys() veya for...in gibi anahtar listeleme işlemlerinde tetiklenir.",
                detail: `
            const veri = new Proxy({ _dahili: "x", isim: "Ürün" }, {
                ownKeys(target) {
                    return Reflect.ownKeys(target).filter(k => !String(k).startsWith("_"));
                }
            });
            console.log(Object.keys(veri)); // ["isim"]
        `
            },
            {
                not: "apply(target, thisArg, args)",
                comment: "Proxy ile sarılmış bir fonksiyon çağrıldığında çalışır.",
                detail: `
            function topla(a, b) {
                return a + b;
            }
            const izlenenTopla = new Proxy(topla, {
                apply(target, thisArg, args) {
                    console.log("Argümanlar:", args);
                    return Reflect.apply(target, thisArg, args);
                }
            });
            console.log(izlenenTopla(3, 5)); // 8
        `
            },
            {
                not: "construct(target, args)",
                comment: "Proxy ile sarılmış bir sınıf veya yapıcı fonksiyon 'new' anahtar kelimesiyle çağrıldığında çalışır.",
                detail: `
            class Kullanici {
                constructor(ad) {
                    this.ad = ad.trim();
                }
            }
            const GuvenliKullanici = new Proxy(Kullanici, {
                construct(target, args) {
                    if (!args[0]) throw new Error("Ad boş olamaz.");
                    return Reflect.construct(target, args);
                }
            });
            const u = new GuvenliKullanici("  Mert  ");
            console.log(u.ad); // "Mert"
        `
            },
            {
                not: "Proxy.revocable(target, {})",
                comment: "İptal edilebilir bir Proxy ve iptal fonksiyonunu ({ proxy, revoke }) birlikte üretir.",
                detail: `
            const { proxy, revoke } = Proxy.revocable({ mesaj: "Aktif" }, {});
            console.log(proxy.mesaj); // "Aktif"
            revoke(); // Proxy devre dışı bırakıldı
            // Bundan sonra proxy.mesaj erişimi TypeError fırlatır
        `
            },
            {
                not: "Reflect",
                comment: "Proxy trap'leri içinde hedef nesne üzerindeki varsayılan işlemleri standart ve güvenli biçimde yürütmek için kullanılan yerleşik nesnedir.",
                detail: `
            const nesne = { x: 10 };
            const proxy = new Proxy(nesne, {
                get(target, prop, receiver) {
                    return Reflect.get(target, prop, receiver);
                },
                set(target, prop, value, receiver) {
                    return Reflect.set(target, prop, value, receiver);
                }
            });
            proxy.x = 25;
            console.log(proxy.x); // 25
        `
            },
            {
                not: "Reflect.get(target, prop, receiver)",
                comment: "target[prop] değerini okur; varsa getter içindeki 'this' bağlamı için receiver kullanır.",
                detail: `
            const veri = { sayi: 42 };
            console.log(Reflect.get(veri, "sayi")); // 42
        `
            },
            {
                not: "Reflect.set()",
                comment: "target[prop] = value atamasını gerçekleştirir ve işlemin başarılı olup olmadığını boolean olarak döner.",
                detail: `
            const veri = {};
            const basarili = Reflect.set(veri, "durum", "hazir");
            console.log(basarili, veri.durum); // true "hazir"
        `
            },
            {
                not: "Reflect.has(target, prop)",
                comment: "'prop in target' kontrolünü fonksiyon olarak yapar ve boolean döner.",
                detail: `
            const veri = { ad: "Test" };
            console.log(Reflect.has(veri, "ad"));  // true
            console.log(Reflect.has(veri, "yok")); // false
        `
            },
            {
                not: "Reflect.deleteProperty(target, prop)",
                comment: "'delete target[prop]' işlemini yapar ve silmenin başarılı olup olmadığını boolean döner.",
                detail: `
            const veri = { gecici: 1, kalici: 2 };
            Reflect.deleteProperty(veri, "gecici");
            console.log(veri); // { kalici: 2 }
        `
            },
            {
                not: "Reflect.apply(target, thisArg, args)",
                comment: "Hedef fonksiyonu verilen this bağlamı ve argüman dizisiyle çağırır.",
                detail: `
            function carp(a, b) {
                return a * b;
            }
            console.log(Reflect.apply(carp, null, [4, 6])); // 24
        `
            },
            {
                not: "Reflect.construct(target, args)",
                comment: "Hedef yapıcı fonksiyonu veya sınıfı 'new' ile çağırarak yeni örnek oluşturur.",
                detail: `
            function Nokta(x, y) {
                this.x = x;
                this.y = y;
            }
            const p = Reflect.construct(Nokta, [10, 20]);
            console.log(p); // Nokta { x: 10, y: 20 }
        `
            },
            {
                not: "in",
                comment: "Belirtilen özelliğin nesnede veya prototip zincirinde bulunup bulunmadığını kontrol eden operatördür.",
                detail: `
            const araba = { marka: "Toyota" };
            console.log("marka" in araba);    // true
            console.log("toString" in araba); // true (prototipten gelir)
            console.log("yil" in araba);      // false
        `
            },
            {
                title: "JSON,Date,Int",
            },
            {
                not: "JSON",
                comment: "JavaScript Object Notation; veri alışverişi, API istekleri ve localStorage/sessionStorage saklama işlemlerinde kullanılan hafif metin formatıdır.",
                detail: `
            const kullanici = { ad: "Elif", aktif: true };
            const jsonMetin = JSON.stringify(kullanici);
            const geriNesne = JSON.parse(jsonMetin);
            console.log(geriNesne.ad); // "Elif"
        `
            },
            {
                not: "JSON.stringify(obj)",
                comment: "JavaScript nesnesini veya dizisini JSON formatında string'e çevirir.",
                detail: `
            const ayarlar = { tema: "koyu", bildirim: true };
            const jsonStr = JSON.stringify(ayarlar, null, 2);
            console.log(jsonStr);
        `
            },
            {
                not: "const now = new Date()",
                comment: "O anki yerel tarih ve saati temsil eden yeni bir Date nesnesi oluşturur.",
                detail: `
            const now = new Date();
            console.log("Şu an:", now);
        `
            },
            {
                not: "Date.now()",
                comment: "1 Ocak 1970 00:00:00 UTC'den itibaren geçen süreyi milisaniye (timestamp) cinsinden döner.",
                detail: `
            const baslangic = Date.now();
            // ... işlem ...
            console.log("Geçen ms:", Date.now() - baslangic);
        `
            },
            {
                not: 'Date.parse("2025-09-20")',
                comment: "Tarih içeren bir string'i milisaniye cinsinden timestamp değerine çevirir.",
                detail: `
            const ts = Date.parse("2025-09-20");
            console.log(ts); // milisaniye timestamp
            console.log(new Date(ts));
        `
            },
            {
                not: "Date.UTC(2025, 8, 20)",
                comment: "Verilen yıl, ay (0-11), gün ve isteğe bağlı saat bileşenlerine göre UTC zaman damgasını (ms) döner.",
                detail: `
            const utcMs = Date.UTC(2025, 8, 20, 16, 0, 0); // Ay 8 = Eylül
            console.log(new Date(utcMs).toUTCString());
        `
            },
            {
                not: "now.getFullYear()",
                comment: "Tarihin dört haneli yıl bilgisini yerel saate göre döner.",
                detail: `
            const now = new Date();
            console.log("Yıl:", now.getFullYear()); // örn: 2026
        `
            },
            {
                not: "now.getMonth()",
                comment: "Ay bilgisini 0'dan başlayan indeksle döner (0 = Ocak, 11 = Aralık).",
                detail: `
            const now = new Date();
            const ayIndex = now.getMonth();
            console.log("Ay indeksi:", ayIndex, "Gerçek ay:", ayIndex + 1);
        `
            },
            {
                not: "now.getDate()",
                comment: "Ayın gününü (1-31 arası) döner.",
                detail: `
            const now = new Date();
            console.log("Ayın günü:", now.getDate());
        `
            },
            {
                not: "now.getDay()",
                comment: "Haftanın gününü 0'dan başlayan değerle döner (0 = Pazar, 6 = Cumartesi).",
                detail: `
            const now = new Date();
            const gunler = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
            console.log("Gün:", gunler[now.getDay()]);
        `
            },
            {
                not: "now.getHours()",
                comment: "Saat bilgisini (0-23 arası) yerel saate göre döner.",
                detail: `
            const now = new Date();
            console.log("Saat:", now.getHours());
        `
            },
            {
                not: "now.getMinutes()",
                comment: "Dakika bilgisini (0-59 arası) döner.",
                detail: `
            const now = new Date();
            console.log("Dakika:", now.getMinutes());
        `
            },
            {
                not: "now.getSeconds()",
                comment: "Saniye bilgisini (0-59 arası) döner.",
                detail: `
            const now = new Date();
            console.log("Saniye:", now.getSeconds());
        `
            },
            {
                not: "now.getMilliseconds()",
                comment: "Milisaniye bilgisini (0-999 arası) döner.",
                detail: `
            const now = new Date();
            console.log("Milisaniye:", now.getMilliseconds());
        `
            },
            {
                not: "now.getTime()",
                comment: "Date nesnesinin temsil ettiği zamanın 1970-01-01T00:00:00Z'den beri geçen milisaniye karşılığını döner.",
                detail: `
            const now = new Date();
            console.log("Timestamp (ms):", now.getTime());
        `
            },
            {
                not: "now.getTimezoneOffset()",
                comment: "Yerel saat dilimi ile UTC arasındaki farkı dakika cinsinden döner (UTC+03:00 için -180).",
                detail: `
            const now = new Date();
            console.log("UTC farkı (dk):", now.getTimezoneOffset());
        `
            },
            {
                not: "now.toDateString()",
                comment: "Tarih kısmını İngilizce/standart kısa formatta (örneğin 'Sat Sep 20 2025') string olarak döner.",
                detail: `
            const tarih = new Date("2025-09-20T19:00:00+03:00");
            console.log(tarih.toDateString());
        `
            },
            {
                not: "now.toTimeString()",
                comment: "Saat ve saat dilimi bilgisini string olarak döner.",
                detail: `
            const tarih = new Date("2025-09-20T19:00:00+03:00");
            console.log(tarih.toTimeString());
        `
            },
            {
                not: "now.toISOString()",
                comment: "Tarihi her zaman UTC bazlı ISO 8601 formatında (YYYY-MM-DDTHH:mm:ss.sssZ) string olarak döner.",
                detail: `
            const tarih = new Date("2025-09-20T19:00:00+03:00");
            console.log(tarih.toISOString()); // "2025-09-20T16:00:00.000Z"
        `
            },
            {
                not: "now.toLocaleDateString()",
                comment: "Tarih kısmını belirtilen veya sistemdeki yerel (locale) biçime göre formatlar.",
                detail: `
            const tarih = new Date("2025-09-20");
            console.log(tarih.toLocaleDateString("tr-TR")); // "20.09.2025"
        `
            },
            {
                not: "now.toLocaleTimeString()",
                comment: "Saat kısmını belirtilen veya sistemdeki yerel biçime göre formatlar.",
                detail: `
            const tarih = new Date("2025-09-20T19:05:00");
            console.log(tarih.toLocaleTimeString("tr-TR", { hour: "2-digit", minute: "2-digit" }));
        `
            },
            {
                not: "now.toLocaleString()",
                comment: "Tarih ve saat bilgisini birlikte yerel biçime göre formatlar.",
                detail: `
            const tarih = new Date("2025-09-20T19:00:00");
            console.log(tarih.toLocaleString("tr-TR"));
        `
            },
            {
                not: "now.toUTCString()",
                comment: "Tarih ve saati UTC saat dilimine göre okunabilir string formatında döner.",
                detail: `
            const tarih = new Date("2025-09-20T19:00:00+03:00");
            console.log(tarih.toUTCString()); // "Sat, 20 Sep 2025 16:00:00 GMT"
        `
            },
            {
                not: "now.toString()",
                comment: "Date nesnesinin yerel saat dilimine göre tam metin temsilini döner.",
                detail: `
            const now = new Date();
            console.log(now.toString());
        `
            },
            {
                not: 'new Intl.DateTimeFormat("tr-TR", {weekday: "long", year: "numeric", month: "long", day: "numeric"})',
                comment: "Dil ve bölgesel kurallara uygun şekilde tarih ve saat biçimlendirici oluşturur.",
                detail: `
            const bicimlendirici = new Intl.DateTimeFormat("tr-TR", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric"
            });
            console.log(bicimlendirici.format(new Date("2025-09-20")));
        `
            },
            {
                not: 'new Intl.NumberFormat("tr-TR", {style: "currency", currency: "TRY"})',
                comment: "Sayıları para birimi, yüzde veya yerel basamak ayırıcı kurallarına göre biçimlendirir.",
                detail: `
            const paraFormat = new Intl.NumberFormat("tr-TR", {
                style: "currency",
                currency: "TRY"
            });
            console.log(paraFormat.format(1250.5)); // "₺1.250,50"
        `
            },
            {
                not: 'new Intl.RelativeTimeFormat("tr", {numeric: "auto"})',
                comment: "Zaman farklarını 'dün', '2 gün önce', 'yarın' gibi göreceli ifadelerle biçimlendirir.",
                detail: `
            const rtf = new Intl.RelativeTimeFormat("tr", { numeric: "auto" });
            console.log(rtf.format(-1, "day")); // "dün"
            console.log(rtf.format(-3, "day")); // "3 gün önce"
        `
            },
            {
                not: 'new Intl.PluralRules("tr-TR")',
                comment: "Bir dildeki çoğul/tekil sayı kurallarını ('one', 'other' vb.) belirler.",
                detail: `
            const pr = new Intl.PluralRules("tr-TR");
            console.log(pr.select(1)); // "other"
            console.log(pr.select(5)); // "other"
        `
            },
            {
                not: 'new Intl.Collator("tr", {sensitivity: "base"})',
                comment: "Metinleri dil kurallarına ve duyarlılık ayarlarına göre alfabetik/doğru sıralamak için kullanılır.",
                detail: `
            const collator = new Intl.Collator("tr", { sensitivity: "base" });
            const kelimeler = ["çilek", "armut", "şeker", "elma"];
            kelimeler.sort(collator.compare);
            console.log(kelimeler); // ["armut", "çilek", "elma", "şeker"]
        `
            },
            {
                title: "Asenkron & Fetch / Promise",
            },
            {
                not: "async function()",
                comment: "Fonksiyonun dönüş değerini otomatik olarak bir Promise'e sarar ve içinde await kullanımına izin verir.",
                detail: `
            async function veriGetir() {
                return "Hazır veri";
            }
            veriGetir().then(sonuc => console.log(sonuc)); // "Hazır veri"
        `
            },
            {
                not: "fetch('url')",
                comment: "Belirtilen URL'ye HTTP isteği başlatır ve Response nesnesiyle çözümlenen bir Promise döndürür.",
                detail: `
            fetch("https://jsonplaceholder.typicode.com/posts/1")
                .then(res => res.json())
                .then(veri => console.log(veri));
        `
            },
            {
                not: "await fetch('url')",
                comment: "async fonksiyon içinde Promise'in çözülmesini (veya reddedilmesini) bekler ve sonucunu döndürür.",
                detail: `
            async function postYukle() {
                const yanit = await fetch("https://jsonplaceholder.typicode.com/posts/1");
                const veri = await yanit.json();
                console.log(veri.title);
            }
        `
            },
            {
                not: "new Promise()",
                comment: "Asenkron bir işlemin tamamlanmasını veya hata ile sonuçlanmasını temsil eden Promise nesnesi oluşturur.",
                detail: `
            const bekle = (ms) => new Promise((resolve) => {
                setTimeout(() => resolve(\`\${ms}ms bitti\`), ms);
            });
            bekle(500).then(console.log);
        `
            },
            {
                not: "Promise.All()",
                comment: "Verilen Promise'lerin tamamı başarıyla çözümlendiğinde sonuç dizisini döner; biri bile reddedilirse anında reject olur.",
                detail: `
            async function paralelGetir() {
                const [r1, r2] = await Promise.all([
                    fetch("/api/kullanicilar"),
                    fetch("/api/ayarlar")
                ]);
                console.log(r1.status, r2.status);
            }
        `
            },
            {
                not: "Promise.any()",
                comment: "Verilen Promise'lerden ilk başarıyla çözümlenenin sonucunu döner; hepsi reddedilirse AggregateError fırlatır.",
                detail: `
            Promise.any([
                Promise.reject("Hata 1"),
                Promise.resolve("İlk başarılı cevap"),
                Promise.resolve("İkinci başarılı cevap")
            ]).then(sonuc => console.log(sonuc)); // "İlk başarılı cevap"
        `
            },
            {
                not: "Promise.allSettled()",
                comment: "Tüm Promise'lerin bitmesini (fulfilled veya rejected fark etmeksizin) bekler ve her birinin durumunu nesne dizisi olarak döner.",
                detail: `
            Promise.allSettled([
                Promise.resolve("Tamam"),
                Promise.reject("Başarısız")
            ]).then(sonuclar => console.log(sonuclar));
        `
            },
            {
                not: "AbortController()",
                comment: "fetch gibi iptal edilebilir web isteklerini veya işlemleri dışarıdan sonlandırmak için sinyal (signal) üretir.",
                detail: `
            const controller = new AbortController();
            fetch("/api/buyuk-veri", { signal: controller.signal })
                .catch(err => {
                    if (err.name === "AbortError") {
                        console.log("İstek iptal edildi.");
                    }
                });
            controller.abort();
        `
            },
            {
                not: "queueMicrotask(() => {})",
                comment: "Mevcut senkron kod bloğu bittikten hemen sonra, bir sonraki makro görevden önce çalışacak bir mikro görev (microtask) kuyruğa ekler.",
                detail: `
            console.log("1 - Senkron");
            queueMicrotask(() => {
                console.log("2 - Microtask");
            });
            console.log("3 - Senkron son");
        `
            },
            {
                not: ".then()",
                comment: "Promise çözüldüğünde (onFulfilled) ve isteğe bağlı olarak reddedildiğinde (onRejected) çalışacak callback'leri zincirler.",
                detail: `
            Promise.resolve(10)
                .then(sayi => sayi * 2)
                .then(sonuc => console.log("Sonuç:", sonuc)) // 20
                .catch(hata => console.error(hata));
        `
            },
            {
                title: "Blob, File, URL, Base64, History, Clipboard",
            },
            {
                not: "new Blob()",
                comment: "Dosya içeriği, metin veya binary veri gibi değişmez (immutable) veri bloklarını temsil eden Blob nesnesi oluşturur[cite: 14].",
                detail: `
            const blob = new Blob(["Merhaba Blob!"], { type: "text/plain" });
            console.log("Boyut (byte):", blob.size);
        `
            },
            {
                not: "Blob.text()",
                comment: "Blob içeriğini UTF-8 metin (string) olarak çözümleyen bir Promise döndürür[cite: 14].",
                detail: `
            const blob = new Blob(["Merhaba Blob!"], { type: "text/plain" });
            blob.text().then(metin => console.log(metin)); // "Merhaba Blob!"
        `
            },
            {
                not: "Blob.slice()",
                comment: "Blob verisinden başlangıç ve bitiş byte indekslerine göre yeni bir alt Blob parçası oluşturur[cite: 14].",
                detail: `
            const blob = new Blob(["0123456789"]);
            const parca = blob.slice(0, 5);
            parca.text().then(console.log); // "01234"
        `
            },
            {
                not: "Blob.stream()",
                comment: "Blob verisini parça parça (chunk) okunabilen bir ReadableStream akışı olarak döner[cite: 14].",
                detail: `
            const blob = new Blob(["Akış verisi örneği"]);
            const stream = blob.stream();
            console.log(stream instanceof ReadableStream); // true
        `
            },
            {
                not: "new File()",
                comment: "Blob özelliklerine ek olarak dosya adı (name) ve son değiştirilme zamanı (lastModified) taşıyan dosya nesnesi oluşturur[cite: 14].",
                detail: `
            const dosya = new File(["İçerik"], "notlar.txt", {
                type: "text/plain",
                lastModified: Date.now()
            });
            console.log(dosya.name, dosya.size);
        `
            },
            {
                not: "new FileReader()",
                comment: "Blob veya File nesnelerindeki verileri asenkron olarak okumak için kullanılan nesnedir[cite: 14].",
                detail: `
            const reader = new FileReader();
            reader.onload = () => console.log("Okunan veri:", reader.result);
        `
            },
            {
                not: "readAsText(file)",
                comment: "Dosya veya Blob içeriğini düz metin (string) olarak okur[cite: 14].",
                detail: `
            const dosya = new File(["Merhaba dosya"], "selam.txt", { type: "text/plain" });
            const reader = new FileReader();
            reader.onload = () => console.log(reader.result); // "Merhaba dosya"
            reader.readAsText(dosya);
        `
            },
            {
                not: "readAsDataURL(file)",
                comment: "Dosyayı 'data:...' ile başlayan Base64 kodlu Data URL formatında okur[cite: 14].",
                detail: `
            const dosya = new File(["abc"], "test.txt", { type: "text/plain" });
            const reader = new FileReader();
            reader.onload = () => console.log(reader.result); // "data:text/plain;base64,YWJj"
            reader.readAsDataURL(dosya);
        `
            },
            {
                not: "readAsArrayBuffer(file)",
                comment: "Dosya içeriğini ikili (binary) işlemler için ArrayBuffer olarak okur[cite: 14].",
                detail: `
            const dosya = new File(["ABC"], "binary.bin");
            const reader = new FileReader();
            reader.onload = () => {
                const view = new Uint8Array(reader.result);
                console.log(view); // Uint8Array(3) [65, 66, 67]
            };
            reader.readAsArrayBuffer(dosya);
        `
            },
            {
                not: "abort()",
                comment: "Devam eden FileReader okuma işlemini iptal eder[cite: 14].",
                detail: `
            const reader = new FileReader();
            reader.readAsText(buyukDosya);
            reader.abort();
            console.log("Okuma durumu:", reader.readyState); // 2 (DONE)
        `
            },
            {
                not: "URL.createObjectURL(blob)",
                comment: "Bir Blob veya File nesnesini işaret eden geçici bir bellek URL'si (blob:...) üretir[cite: 14].",
                detail: `
            const blob = new Blob(["<h1>Merhaba</h1>"], { type: "text/html" });
            const geciciUrl = URL.createObjectURL(blob);
            console.log("Geçici URL:", geciciUrl);
        `
            },
            {
                not: "URL.revokeObjectURL(url)",
                comment: "createObjectURL ile üretilen geçici URL'yi serbest bırakarak bellek sızıntısını önler[cite: 14].",
                detail: `
            const blob = new Blob(["veri"]);
            const url = URL.createObjectURL(blob);
            // İşlem bittiğinde belleği serbest bırak:
            URL.revokeObjectURL(url);
        `
            },
            {
                not: 'new URLSearchParams("a=1&b=2")',
                comment: "URL sorgu (query) parametrelerini okumayı, eklemeyi, güncellemeyi ve silmeyi kolaylaştırır[cite: 14].",
                detail: `
            const params = new URLSearchParams("a=1&b=2");
            console.log(params.get("a")); // "1"
            params.set("b", "20");
            params.append("c", "3");
            console.log(params.toString()); // "a=1&b=20&c=3"
        `
            },
            {
                not: "history.pushState()",
                comment: "Tarayıcı geçmişine (session history) sayfa yenilemeden (reload olmadan) yeni bir kayıt ve URL ekler[cite: 14].",
                detail: `
            history.pushState({ sayfa: 2 }, "", "/sayfa-2");
            console.log("Yeni yol:", location.pathname); // "/sayfa-2"
        `
            },
            {
                not: "history.replaceState()",
                comment: "Mevcut geçmiş kaydını ve URL'yi sayfa yenilemeden yenisiyle değiştirir[cite: 14].",
                detail: `
            history.replaceState({ filtre: "aktif" }, "", "/liste?filtre=aktif");
        `
            },
            {
                not: "history.back()",
                comment: "Tarayıcı geçmişinde bir adım geriye (önceki sayfaya) gider[cite: 14].",
                detail: `
            document.querySelector("#geriBtn")?.addEventListener("click", () => {
                history.back();
            });
        `
            },
            {
                not: "history.forward()",
                comment: "Tarayıcı geçmişinde bir adım ileriye (sonraki sayfaya) gider[cite: 14].",
                detail: `
            document.querySelector("#ileriBtn")?.addEventListener("click", () => {
                history.forward();
            });
        `
            },
            {
                not: "history.go(-1)",
                comment: "Geçmişte belirtilen sayı kadar ileri veya geri gider (örneğin -1 bir sayfa geri, 1 bir sayfa ileri)[cite: 14].",
                detail: `
            history.go(-1); // Bir sayfa geri
            // history.go(2); // İki sayfa ileri
        `
            },
            {
                not: "navigator.clipboard.readText()",
                comment: "Sistem panosundaki (clipboard) metni asenkron olarak okuyup Promise ile döner[cite: 14].",
                detail: `
            async function panodanOku() {
                try {
                    const metin = await navigator.clipboard.readText();
                    console.log("Panodaki metin:", metin);
                } catch (err) {
                    console.error("Pano okunamadı:", err);
                }
            }
        `
            },
            {
                not: "navigator.clipboard.writeText()",
                comment: "Verilen metni asenkron olarak sistem panosuna kopyalar[cite: 14].",
                detail: `
            async function panoyaKopyala(metin) {
                await navigator.clipboard.writeText(metin);
                console.log("Kopyalandı:", metin);
            }
            panoyaKopyala("Kopyalanacak metin");
        `
            },
            {
                not: "new PerformanceObserver()",
                comment: "Tarayıcı performans kayıtlarını (paint, layout, resource, longtask vb.) gerçek zamanlı gözlemler[cite: 14].",
                detail: `
            const perfObserver = new PerformanceObserver((list) => {
                for (const entry of list.getEntries()) {
                    console.log(entry.name, entry.duration);
                }
            });
            perfObserver.observe({ entryTypes: ["measure", "resource"] });
        `
            },
            {
                not: "getEntries()",
                comment: "PerformanceObserverListEntry üzerinde gözlemlenen performans girişlerini dizi olarak döner[cite: 14].",
                detail: `
            const observer = new PerformanceObserver((list) => {
                const kayitlar = list.getEntries();
                console.log("Yakalanan kayıt sayısı:", kayitlar.length);
            });
            observer.observe({ type: "mark", buffered: true });
        `
            },
            {
                not: "navigator.userAgent",
                comment: "Tarayıcı, işletim sistemi ve motor bilgilerini içeren User-Agent string'ini döner[cite: 14].",
                detail: `
            console.log("User-Agent:", navigator.userAgent);
        `
            },
            {
                not: "navigator.language",
                comment: "Kullanıcının tercih ettiği birincil dil kodunu (örneğin 'tr-TR') döner[cite: 14].",
                detail: `
            console.log("Tarayıcı dili:", navigator.language); // örn: "tr-TR"
        `
            },
            {
                not: "navigator.onLine",
                comment: "Tarayıcının ağ bağlantısı durumunu boolean olarak (true/false) bildirir[cite: 14].",
                detail: `
            console.log("Çevrimiçi mi?", navigator.onLine);
            window.addEventListener("offline", () => console.log("Bağlantı koptu."));
        `
            },
            {
                not: "screen.width, screen.height",
                comment: "Kullanıcının fiziksel/mantıksal ekranının toplam genişlik ve yükseklik değerlerini piksel cinsinden verir[cite: 14].",
                detail: `
            console.log(\`Ekran çözünürlüğü: \${screen.width}x\${screen.height}\`);
        `
            },
            {
                not: "window.innerWidth, window.innerHeight",
                comment: "Tarayıcı penceresinin iç görüntü alanının (viewport) genişlik ve yüksekliğini piksel cinsinden verir[cite: 14].",
                detail: `
            console.log(\`Pencere iç boyutu: \${window.innerWidth}x\${window.innerHeight}\`);
            window.addEventListener("resize", () => {
                console.log(window.innerWidth, window.innerHeight);
            });
        `
            },
            {
                title: "ES2020+ & Modern JavaScript",
            },
            {
                not: "matchAll(regex)",
                comment: "Regex ile eşleşen tüm sonuçları (yakalama gruplarıyla birlikte) bir iterator olarak döndürür[cite: 15].",
                detail: `
            const metin = "kod-101 ve kod-202";
            const eslesmeler = [...metin.matchAll(/kod-(\\d+)/g)];
            console.log(eslesmeler.map(m => m[1])); // ["101", "202"]
        `
            },
            {
                not: "new WeakRef(obj)",
                comment: "Hedef nesneye güçlü referans tutmadan zayıf (weak) referans verir; Garbage Collector nesneyi bellekten temizleyebilir[cite: 15].",
                detail: `
            let geciciNesne = { veri: "Önbellek" };
            const zayifRef = new WeakRef(geciciNesne);
            console.log(zayifRef.deref()?.veri); // "Önbellek"
        `
            },
            {
                not: "deref()",
                comment: "WeakRef nesnesinin tuttuğu orijinal hedef nesneyi döner; nesne GC tarafından toplandıysa undefined döner[cite: 15].",
                detail: `
            const ref = new WeakRef({ ad: "Kart" });
            const hedef = ref.deref();
            if (hedef) {
                console.log("Nesne hâlâ bellekte:", hedef.ad);
            }
        `
            },
            {
                not: "new FinalizationRegistry()",
                comment: "Kayıtlı bir nesne Garbage Collector tarafından bellekten temizlendiğinde temizlik callback'i çalıştırmayı sağlar[cite: 15].",
                detail: `
            const kayitDefteri = new FinalizationRegistry((temizlenenAnahtar) => {
                console.log("Bellekten temizlendi:", temizlenenAnahtar);
            });
            let nesne = { id: 1 };
            kayitDefteri.register(nesne, "nesne-1");
        `
            },
            {
                not: "import.meta.url",
                comment: "ES modül ortamında mevcut modül dosyasının tam URL bilgisini meta veri olarak döndürür[cite: 15].",
                detail: `
            // ES module içinde:
            console.log("Modül URL'si:", import.meta.url);
            // Örn: aynı dizindeki bir şablonun URL'sini türetmek için:
            const templateUrl = new URL("./template.html", import.meta.url);
            console.log(templateUrl.href);
        `
            },
            {
                not: "Array.prototype.at",
                comment: "Pozitif veya negatif indeks kullanarak dizideki elemana erişir (negatif indeks sondan sayar)[cite: 15].",
                detail: `
            const renkler = ["kırmızı", "yeşil", "mavi"];
            console.log(renkler.at(0));  // "kırmızı"
            console.log(renkler.at(-1)); // "mavi"
        `
            },
            {
                not: "new AggregateError()",
                comment: "Birden fazla hatayı tek bir Error nesnesi altında (errors dizisiyle) birleştirir[cite: 15].",
                detail: `
            try {
                throw new AggregateError(
                    [new Error("İlk hata"), new Error("İkinci hata")],
                    "Birden fazla işlem başarısız oldu"
                );
            } catch (err) {
                console.log(err.message);
                console.log(err.errors.map(e => e.message)); // ["İlk hata", "İkinci hata"]
            }
        `
            },
            {
                not: "new Intl.DisplayNames(['tr'], {type: 'region'})",
                comment: "Ülke, dil, bölge veya para birimi kodlarını belirtilen dildeki okunabilir isimlere çevirir[cite: 15].",
                detail: `
            const bolgeAdlari = new Intl.DisplayNames(["tr"], { type: "region" });
            console.log(bolgeAdlari.of("TR")); // "Türkiye"
            console.log(bolgeAdlari.of("US")); // "Amerika Birleşik Devletleri"
        `
            },
            {
                not: "displayNames.of('US')",
                comment: "Oluşturulan Intl.DisplayNames örneği üzerinden verilen kodun yerel karşılığını döndürür[cite: 15].",
                detail: `
            const displayNames = new Intl.DisplayNames(["tr"], { type: "region" });
            console.log(displayNames.of("US")); // "Amerika Birleşik Devletleri"
        `
            },
            {
                title: "Performans & Bellek",
            },
            {
                not: "new Worker('worker.js')",
                comment: "JavaScript kodunu ana thread (UI thread) dışında ayrı bir arka plan thread'inde çalıştırarak arayüzün donmasını önler[cite: 16].",
                detail: `
            const worker = new Worker("worker.js");
            worker.postMessage({ islem: "hesapla", limit: 1000000 });
            worker.onmessage = (e) => {
                console.log("Worker sonucu:", e.data);
            };
        `
            },
            {
                not: "new SharedArrayBuffer(1024)",
                comment: "Ana thread ve worker'lar arasında kopyalanmadan paylaşılan, bayt düzeyinde bellek alanı oluşturur[cite: 16].",
                detail: `
            const sab = new SharedArrayBuffer(1024);
            const view = new Int32Array(sab);
            console.log("Paylaşılan kapasite (eleman):", view.length);
        `
            },
            {
                not: "new ArrayBuffer(1024)",
                comment: "Sabit uzunlukta ham ikili (binary) veri tamponu oluşturur; transfer edilebilir yapısıyla worker'lara kopyasız aktarılabilir[cite: 16].",
                detail: `
            const buffer = new ArrayBuffer(1024);
            const bytes = new Uint8Array(buffer);
            bytes[0] = 255;
            // worker.postMessage(buffer, [buffer]); // Sahipliği worker'a aktarır
        `
            },
            {
                not: "Atomics.add(typedArray, index, value)",
                comment: "Paylaşılan TypedArray'de belirtilen indeksteki değere value ekler ve işlemden önceki eski değeri atomik olarak döner[cite: 16].",
                detail: `
            const sab = new SharedArrayBuffer(4);
            const arr = new Int32Array(sab);
            const eski = Atomics.add(arr, 0, 5);
            console.log("Eski değer:", eski, "Yeni değer:", Atomics.load(arr, 0)); // 0, 5
        `
            },
            {
                not: "Atomics.sub(typedArray, index, value)",
                comment: "Belirtilen indeksteki değerden value çıkarır ve işlemden önceki eski değeri atomik olarak döner[cite: 16].",
                detail: `
            const arr = new Int32Array(new SharedArrayBuffer(4));
            Atomics.store(arr, 0, 10);
            const eski = Atomics.sub(arr, 0, 3);
            console.log("Eski değer:", eski, "Yeni değer:", Atomics.load(arr, 0)); // 10, 7
        `
            },
            {
                not: "Atomics.and(typedArray, index, value)",
                comment: "Belirtilen indeksteki değere bit düzeyinde VE (&) işlemi uygular ve önceki değeri atomik olarak döner[cite: 16].",
                detail: `
            const arr = new Int32Array(new SharedArrayBuffer(4));
            Atomics.store(arr, 0, 0b1111);
            const eski = Atomics.and(arr, 0, 0b1010);
            console.log("Eski:", eski, "Yeni:", Atomics.load(arr, 0)); // 15, 10
        `
            },
            {
                not: "Atomics.or(typedArray, index, value)",
                comment: "Belirtilen indeksteki değere bit düzeyinde VEYA (|) işlemi uygular ve önceki değeri atomik olarak döner[cite: 16].",
                detail: `
            const arr = new Int32Array(new SharedArrayBuffer(4));
            Atomics.store(arr, 0, 0b1000);
            const eski = Atomics.or(arr, 0, 0b0010);
            console.log("Eski:", eski, "Yeni:", Atomics.load(arr, 0)); // 8, 10
        `
            },
            {
                not: "Atomics.wait(typedArray, index, value[, timeout])",
                comment: "İlgili indeksteki değer verilen value ile eşit olduğu sürece thread'i (genellikle worker içinde) bekletir[cite: 16].",
                detail: `
            // Genellikle bir Worker thread içinde kullanılır:
            // const durum = Atomics.wait(int32View, 0, 0, 2000); // "ok", "not-equal" veya "timed-out"
            console.log("Atomics.wait senkronizasyon için kullanılır.");
        `
            },
            {
                not: "Atomics.notify(typedArray, index[, count])",
                comment: "Atomics.wait ile bekleyen thread'lerden belirtilen count kadarına devam etme sinyali gönderir[cite: 16].",
                detail: `
            const arr = new Int32Array(new SharedArrayBuffer(4));
            Atomics.store(arr, 0, 1);
            const uyandirilanSayisi = Atomics.notify(arr, 0, 1);
            console.log("Uyandırılan thread sayısı:", uyandirilanSayisi);
        `
            },
            {
                not: "Atomics.compareExchange(typedArray, index, expectedValue, replacementValue)",
                comment: "İndeksteki değer expectedValue'a eşitse replacementValue ile değiştirir; her durumda eski değeri döner[cite: 16].",
                detail: `
            const arr = new Int32Array(new SharedArrayBuffer(4));
            Atomics.store(arr, 0, 20);
            const onceki = Atomics.compareExchange(arr, 0, 20, 99);
            console.log("Önceki:", onceki, "Güncel:", Atomics.load(arr, 0)); // 20, 99
        `
            },
            {
                not: "Atomics.load(typedArray, index)",
                comment: "Paylaşılan dizideki belirtilen indeksi yarış durumlarına (race condition) karşı güvenli şekilde okur[cite: 16].",
                detail: `
            const arr = new Int32Array(new SharedArrayBuffer(4));
            arr[0] = 42;
            console.log("Okunan değer:", Atomics.load(arr, 0)); // 42
        `
            },
            {
                not: "Atomics.store(typedArray, index, value)",
                comment: "Paylaşılan dizideki belirtilen indekse yeni değeri atomik olarak yazar ve yazılan değeri döner[cite: 16].",
                detail: `
            const arr = new Int32Array(new SharedArrayBuffer(4));
            const yazilan = Atomics.store(arr, 0, 77);
            console.log("Yazılan değer:", yazilan); // 77
        `
            },
            {
                not: "new OffscreenCanvas(200)",
                comment: "DOM'a bağlı olmadan çalışan ve ana thread veya Web Worker içinde çizim yapabilen tuval nesnesi oluşturur[cite: 16].",
                detail: `
            const offscreen = new OffscreenCanvas(200, 100);
            const ctx = offscreen.getContext("2d");
            ctx.fillStyle = "#3498db";
            ctx.fillRect(10, 10, 120, 60);
        `
            },
            {
                not: "new WeakMap()",
                comment: "Anahtar olarak yalnızca nesneleri (veya sembolleri) zayıf referansla tutan koleksiyon; anahtar nesne çöp toplandığında girdi otomatik silinir[cite: 16].",
                detail: `
            const cache = new WeakMap();
            let kullanici = { id: 1 };
            cache.set(kullanici, { sonGiris: "2026-11-22" });
            console.log(cache.get(kullanici));
        `
            },
            {
                not: "new WeakSet()",
                comment: "Benzersiz nesneleri zayıf referansla saklayan küme yapısı; nesneler dışarıda referanssız kaldığında bellekten temizlenebilir[cite: 16].",
                detail: `
            const islenenler = new WeakSet();
            const gorev = { ad: "Senkronizasyon" };
            islenenler.add(gorev);
            console.log(islenenler.has(gorev)); // true
        `
            },
            {
                not: "requestIdleCallback(() => {})",
                comment: "Tarayıcı ana thread'i boşta kaldığında düşük öncelikli işlemleri çalıştırarak kullanıcı etkileşimlerini korur[cite: 16].",
                detail: `
            const id = requestIdleCallback((deadline) => {
                if (deadline.timeRemaining() > 0) {
                    console.log("Boş zamanda arka plan görevi çalıştı.");
                }
            });
        `
            },
            {
                not: "cancelIdleCallback(id)",
                comment: "requestIdleCallback ile zamanlanmış boş zaman görevini çalışmadan önce iptal eder[cite: 16].",
                detail: `
            const bosGorevId = requestIdleCallback(() => {
                console.log("Bu görev iptal edildi.");
            });
            cancelIdleCallback(bosGorevId);
        `
            },
            {
                not: "navigator.serviceWorker.register('/sw.js')",
                comment: "Arka planda çalışan, ağ isteklerini yönetebilen ve çevrimdışı (offline) önbellekleme sağlayan Service Worker'ı kaydeder[cite: 16].",
                detail: `
            if ("serviceWorker" in navigator) {
                navigator.serviceWorker.register("/sw.js")
                    .then(reg => console.log("SW kayıtlı:", reg.scope))
                    .catch(err => console.error("SW hatası:", err));
            }
        `
            },
            {
                not: "caches.open('v1')",
                comment: "CacheStorage içinde belirtilen isimle bir önbellek alanı açar veya oluşturur ve Cache nesnesiyle çözümlenen Promise döner[cite: 16].",
                detail: `
            async function onbellekle() {
                const cache = await caches.open("v1");
                await cache.add("/index.html");
                console.log("Dosya v1 önbelleğine eklendi.");
            }
        `
            },
            {
                not: "structuredClone(obj)",
                comment: "Nesne ve dizilerin derin kopyasını (deep copy) çıkarır; döngüsel (circular) referansları ve Map/Set/Blob gibi türleri destekler[cite: 16].",
                detail: `
            const kaynak = { ad: "Proje" };
            kaynak.kendi = kaynak; // circular reference
            const kopya = structuredClone(kaynak);
            console.log(kopya.kendi === kopya); // true
        `
            },
            {
                not: "createImageBitmap(img)",
                comment: "Resim, Blob, Canvas veya Video kaynağından GPU/tuval işlemlerine hazır, performanslı bir ImageBitmap nesnesi üretir[cite: 16].",
                detail: `
            async function bitmapOlustur(imgElement) {
                const bitmap = await createImageBitmap(imgElement);
                console.log("Bitmap boyutu:", bitmap.width, bitmap.height);
            }
        `
            },
            {
                title: "AudioContext and Oscillator",
            },
            {
                not: "const audioCtx = new AudioContext()",
                comment: "Web Audio API üzerinde ses düğümlerini (nodes) oluşturmak ve yönetmek için yeni bir AudioContext nesnesi başlatır[cite: 17].",
                detail: `
            const audioCtx = new AudioContext();
            console.log("Ses bağlamı durumu:", audioCtx.state); // "running" veya "suspended"
        `
            },
            {
                not: "audioCtx.createOscillator()",
                comment: "Periyodik dalga formu (sine, square, sawtooth, triangle) üreten bir OscillatorNode oluşturur[cite: 17].",
                detail: `
            const audioCtx = new AudioContext();
            const osc = audioCtx.createOscillator();
            osc.type = "sine";
            osc.frequency.value = 440;
            osc.connect(audioCtx.destination);
            osc.start();
            osc.stop(audioCtx.currentTime + 0.5);
        `
            },
            {
                not: "osc.frequency.value = 440",
                comment: "Osilatörün üreteceği sesin frekansını Hertz (Hz) cinsinden ayarlar (440 Hz = La4 notası)[cite: 17].",
                detail: `
            const audioCtx = new AudioContext();
            const osc = audioCtx.createOscillator();
            osc.frequency.value = 440; // 440 Hz
            console.log("Frekans:", osc.frequency.value);
        `
            },
            {
                not: "audioCtx.createGain()",
                comment: "Ses sinyalinin genliğini (ses seviyesini) ayarlamak için bir GainNode oluşturur[cite: 17].",
                detail: `
            const audioCtx = new AudioContext();
            const gainNode = audioCtx.createGain();
            gainNode.gain.value = 0.5;
            gainNode.connect(audioCtx.destination);
        `
            },
            {
                not: "gainNode.gain.value = 0.5",
                comment: "Kazanç/ses seviyesini 0.0 (sessiz) ile 1.0 (tam ses, veya üzeri) aralığında ayarlar[cite: 17].",
                detail: `
            const audioCtx = new AudioContext();
            const gainNode = audioCtx.createGain();
            gainNode.gain.value = 0.5; // %50 ses seviyesi
            console.log("Gain değeri:", gainNode.gain.value);
        `
            },
            {
                not: "audioCtx.createAnalyser()",
                comment: "Ses verisini zaman ve frekans domeninde gerçek zamanlı analiz edebilen bir AnalyserNode oluşturur[cite: 17].",
                detail: `
            const audioCtx = new AudioContext();
            const analyser = audioCtx.createAnalyser();
            analyser.fftSize = 256;
            console.log("Frekans veri boyutu:", analyser.frequencyBinCount);
        `
            },
            {
                not: "audioCtx.createBiquadFilter()",
                comment: "Düşük geçiren (lowpass), yüksek geçiren (highpass), band-pass gibi ses filtreleri oluşturur[cite: 17].",
                detail: `
            const audioCtx = new AudioContext();
            const filter = audioCtx.createBiquadFilter();
            filter.type = "lowpass";
            filter.frequency.value = 1000; // 1000 Hz üzerini zayıflatır
        `
            },
            {
                not: "audioCtx.createBufferSource()",
                comment: "Daha önceden yüklenmiş veya çözümlenmiş bir AudioBuffer içeriğini oynatmak için kaynak düğümü oluşturur[cite: 17].",
                detail: `
            const audioCtx = new AudioContext();
            const source = audioCtx.createBufferSource();
            // source.buffer = decodedAudioBuffer;
            source.connect(audioCtx.destination);
        `
            },
            {
                not: "audioCtx.decodeAudioData(buffer)",
                comment: "ArrayBuffer içindeki sıkıştırılmış/ham ses verisini asenkron olarak çözerek (decode) AudioBuffer nesnesine dönüştürür[cite: 17].",
                detail: `
            async function sesYukle(url, audioCtx) {
                const yanit = await fetch(url);
                const arrayBuffer = await yanit.arrayBuffer();
                const audioBuffer = await audioCtx.decodeAudioData(arrayBuffer);
                return audioBuffer;
            }
        `
            },
            {
                not: "audioCtx.createPeriodicWave(real, imag)",
                comment: "Fourier katsayılarına (real ve imag dizileri) dayalı özel bir dalga formu (PeriodicWave) tanımlar[cite: 17].",
                detail: `
            const audioCtx = new AudioContext();
            const real = new Float32Array([0, 0.4, 0.2]);
            const imag = new Float32Array([0, 0, 0]);
            const wave = audioCtx.createPeriodicWave(real, imag);
            const osc = audioCtx.createOscillator();
            osc.setPeriodicWave(wave);
        `
            },
            {
                not: "audioCtx.getByteFrequencyData(dataArray)",
                comment: "AnalyserNode üzerinden anlık frekans verilerini (FFT) 0-255 aralığındaki Uint8Array dizisine yazar (not: bu metot analyser nesnesi üzerinde çağrılır)[cite: 17].",
                detail: `
            const audioCtx = new AudioContext();
            const analyser = audioCtx.createAnalyser();
            const freqData = new Uint8Array(analyser.frequencyBinCount);
            analyser.getByteFrequencyData(freqData);
            console.log("Frekans örnekleri:", freqData);
        `
            },
            {
                not: "audioCtx.getByteTimeDomainData(dataArray)",
                comment: "AnalyserNode üzerinden anlık dalga formu / zaman domeni verilerini Uint8Array dizisine yazar (not: bu metot analyser nesnesi üzerinde çağrılır)[cite: 17].",
                detail: `
            const audioCtx = new AudioContext();
            const analyser = audioCtx.createAnalyser();
            const timeData = new Uint8Array(analyser.fftSize);
            analyser.getByteTimeDomainData(timeData);
            console.log("Dalga formu örnekleri:", timeData);
        `
            },
            {
                title: "Advanced Web APIs & Browser Features",
            },
            {
                not: "navigator",
                comment: "Tarayıcıya gömülü nesnedir; kullanıcının tarayıcısı, cihazı, dili ve bağlantı özellikleri hakkında bilgi sağlar[cite: 18].",
                detail: `
            console.log("Platform:", navigator.platform);
            console.log("Dil:", navigator.language);
        `
            },
            {
                not: "navigator.geolocation",
                comment: "Kullanıcının coğrafi konumunu (enlem/boylam) almayı sağlayan Web API nesnesidir[cite: 18].",
                detail: `
            if ("geolocation" in navigator) {
                console.log("Konum API destekleniyor.");
            }
        `
            },
            {
                not: "navigator.geolocation.getCurrentPosition(success, error, options)",
                comment: "Kullanıcının mevcut konumunu tek seferlik olarak alır[cite: 18].",
                detail: `
            navigator.geolocation.getCurrentPosition(
                (pos) => {
                    const { latitude, longitude } = pos.coords;
                    console.log("Konum:", latitude, longitude);
                },
                (err) => console.error("Konum hatası:", err.message),
                { enableHighAccuracy: true, timeout: 5000 }
            );
        `
            },
            {
                not: "navigator.geolocation.watchPosition(success, error, options)",
                comment: "Kullanıcının konumu her değiştiğinde tetiklenen sürekli konum takibi başlatır ve bir watch ID döner[cite: 18].",
                detail: `
            const watchId = navigator.geolocation.watchPosition(
                (pos) => {
                    console.log("Güncel koordinat:", pos.coords.latitude, pos.coords.longitude);
                },
                (err) => console.error("Takip hatası:", err.message)
            );
        `
            },
            {
                not: "navigator.geolocation.clearWatch(id)",
                comment: "watchPosition ile başlatılmış sürekli konum izleme işlemini durdurur[cite: 18].",
                detail: `
            const watchId = navigator.geolocation.watchPosition((pos) => {
                console.log(pos.coords);
            });
            // Takibi sonlandırmak için:
            navigator.geolocation.clearWatch(watchId);
        `
            },
            {
                not: "error.PERMISSION_DENIED",
                comment: "GeolocationPositionError hata kodudur; kullanıcının konum iznini reddettiğini belirtir[cite: 18].",
                detail: `
            navigator.geolocation.getCurrentPosition(
                () => {},
                (err) => {
                    if (err.code === err.PERMISSION_DENIED) {
                        console.log("Kullanıcı konum izni vermedi.");
                    }
                }
            );
        `
            },
            {
                not: "error.POSITION_UNAVAILABLE",
                comment: "GeolocationPositionError hata kodudur; konum bilgisinin sensörler veya ağ nedeniyle alınamadığını belirtir[cite: 18].",
                detail: `
            navigator.geolocation.getCurrentPosition(
                () => {},
                (err) => {
                    if (err.code === err.POSITION_UNAVAILABLE) {
                        console.log("Konum bilgisi şu anda kullanılamıyor.");
                    }
                }
            );
        `
            },
            {
                not: "error.TIMEOUT",
                comment: "GeolocationPositionError hata kodudur; konum isteğinin belirlenen sürede tamamlanamadığını belirtir[cite: 18].",
                detail: `
            navigator.geolocation.getCurrentPosition(
                () => {},
                (err) => {
                    if (err.code === err.TIMEOUT) {
                        console.log("Konum isteği zaman aşımına uğradı.");
                    }
                },
                { timeout: 3000 }
            );
        `
            },
            {
                not: "Notification",
                comment: "Kullanıcıya sistem/tarayıcı bildirimleri göstermeye yarayan Notifications API sınıfıdır[cite: 18].",
                detail: `
            if (Notification.permission === "granted") {
                new Notification("Yeni Mesaj", { body: "Sistem bildirimi örneği" });
            }
        `
            },
            {
                not: "Notification.requestPermission()",
                comment: "Kullanıcıdan bildirim gösterme izni ister ve izin durumunu ('granted', 'denied', 'default') Promise ile döner[cite: 18].",
                detail: `
            async function bildirimIzniIste() {
                const izin = await Notification.requestPermission();
                console.log("Bildirim izni:", izin);
                if (izin === "granted") {
                    new Notification("Hazır!", { body: "Bildirimler aktif edildi." });
                }
            }
        `
            },
            {
                not: "navigator.matchMedia()",
                comment: "CSS medya sorgularını JavaScript ile değerlendirmeyi sağlar (not: genellikle window.matchMedia() üzerinden çağrılır)[cite: 18].",
                detail: `
            const darkModeQuery = window.matchMedia("(prefers-color-scheme: dark)");
            console.log("Koyu tema aktif mi?", darkModeQuery.matches);
            darkModeQuery.addEventListener("change", (e) => {
                console.log("Tema değişti, dark mode:", e.matches);
            });
        `
            },
            {
                not: "navigator.connection",
                comment: "Ağ bağlantısının hızı ve tipi hakkında bilgi sunan Network Information API nesnesidir[cite: 18].",
                detail: `
            const conn = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
            if (conn) {
                console.log("Bağlantı tipi:", conn.effectiveType);
            }
        `
            },
            {
                not: "navigator.deviceMemory",
                comment: "Cihazdaki tahmini RAM miktarını gigabayt (GB) cinsinden verir[cite: 18].",
                detail: `
            const ram = navigator.deviceMemory;
            console.log("Tahmini RAM (GB):", ram); // örn: 8
        `
            },
            {
                not: "connection.effectiveType",
                comment: "Ağın etkin bağlantı türünü ('slow-2g', '2g', '3g', '4g') döndürür[cite: 18].",
                detail: `
            const baglantiTipi = navigator.connection?.effectiveType;
            console.log("Etkin bağlantı:", baglantiTipi); // örn: "4g"
        `
            },
            {
                not: "connection.downlink",
                comment: "Tahmini indirme bant genişliğini megabit/saniye (Mbps) cinsinden verir[cite: 18].",
                detail: `
            const hiz = navigator.connection?.downlink;
            console.log("Tahmini indirme hızı (Mbps):", hiz);
        `
            },
            {
                not: "connection.saveData",
                comment: "Kullanıcının tarayıcı veya sistem düzeyinde veri tasarrufu modunu açıp açmadığını boolean olarak döner[cite: 18].",
                detail: `
            if (navigator.connection?.saveData) {
                console.log("Veri tasarrufu açık; yüksek çözünürlüklü medya yükleme.");
            }
        `
            }

        ],
    },
    {
        langueName: "JQUERY",
        notes: [
            {
                title: "jquery DOM"
            },
            {
                not: '$("#idAdi")',
                comment: "Belirtilen id değerine sahip elementi seçer (ID seçici).",
                detail: `
            const baslik = $("#idAdi");
            baslik.text("Güncellenmiş Başlık");
        `
            },
            {
                not: '$(".classAdi")',
                comment: "Belirtilen CSS sınıfına sahip elementleri seçer (Class seçici)[cite: 19].",
                detail: `
            $(".classAdi").css("opacity", "0.9");
        `
            },
            {
                not: '$("p")',
                comment: "Belirtilen HTML etiketine sahip tüm elementleri seçer (Etiket seçici)[cite: 19].",
                detail: `
            $("p").addClass("metin-blogu");
        `
            },
            {
                not: '$("#container p")',
                comment: "#container içindeki tüm p alt elementlerini seçer (İç içe seçim)[cite: 19].",
                detail: `
            $("#container p").css("line-height", "1.6");
        `
            },
            {
                not: '$("h1, h2, .baslik")',
                comment: "Virgülle ayrılmış birden fazla seçiciye uyan tüm elementleri seçer[cite: 19].",
                detail: `
            $("h1, h2, .baslik").addClass("sayfa-basligi");
        `
            },
            {
                not: '$("#item").css("color", "red")',
                comment: "Seçili elementin CSS stil özelliğini okur veya değiştirir[cite: 19].",
                detail: `
            $("#item").css("color", "red");
            // Çoklu stil: $("#item").css({ color: "red", backgroundColor: "#111" });
        `
            },
            {
                not: '$("#item").addClass("aktif")',
                comment: "Seçili elemente bir veya birden fazla CSS sınıfı ekler[cite: 19].",
                detail: `
            $("#item").addClass("aktif");
        `
            },
            {
                not: '$("#item").removeClass("aktif")',
                comment: "Seçili elementten belirtilen CSS sınıfını kaldırır[cite: 19].",
                detail: `
            $("#item").removeClass("aktif");
        `
            },
            {
                not: '$("#item").toggleClass("aktif")',
                comment: "Sınıf varsa kaldırır, yoksa ekler[cite: 19].",
                detail: `
            $("#item").toggleClass("aktif");
        `
            },
            {
                not: '$("#item").hasClass("aktif")',
                comment: "Elementin belirtilen sınıfa sahip olup olmadığını boolean olarak kontrol eder[cite: 19].",
                detail: `
            if ($("#item").hasClass("aktif")) {
                console.log("Öğe şu an aktif.");
            }
        `
            },
            {
                not: '$("#item").append("Li En sona ekle li")',
                comment: "Seçili elementin içeriğinin sonuna HTML veya metin ekler[cite: 19].",
                detail: `
            $("#item").append("<li>En sona eklenen öğe</li>");
        `
            },
            {
                not: '$("#item").prepend("li En sona ekle li")',
                comment: "Seçili elementin içeriğinin en başına HTML veya metin ekler[cite: 19].",
                detail: `
            $("#item").prepend("<li>En başa eklenen öğe</li>");
        `
            },
            {
                not: '$("#item").appendTo("#container")',
                comment: "Seçili elementi hedef kapsayıcının sonuna taşır veya ekler[cite: 19].",
                detail: `
            $("#item").appendTo("#container");
        `
            },
            {
                not: '$("#item").prependTo("#container")',
                comment: "Seçili elementi hedef kapsayıcının en başına taşır veya ekler[cite: 19].",
                detail: `
            $("#item").prependTo("#container");
        `
            },
            {
                not: '$("#item li:first").remove()',
                comment: "Eşleşen ilk elementi (örneğin ilk li öğesini) DOM'dan tamamen kaldırır[cite: 19].",
                detail: `
            $("#item li:first").remove();
        `
            },
            {
                not: '$("#item").empty()',
                comment: "Seçili elementin kendisini tutarak içindeki tüm alt element ve metinleri temizler[cite: 19].",
                detail: `
            $("#item").empty();
        `
            },
            {
                not: '$("#item").parent()',
                comment: "Seçili elementin doğrudan üst (ebeveyn) elementini döner[cite: 19].",
                detail: `
            const ebeveyn = $("#item").parent();
            ebeveyn.addClass("kapsayici");
        `
            },
            {
                not: '$("#item").parents()',
                comment: "Document köküne kadar tüm üst (ata) elementleri seçer[cite: 19].",
                detail: `
            const tumUstler = $("#item").parents();
            console.log("Üst element sayısı:", tumUstler.length);
        `
            },
            {
                not: '$("#item").children()',
                comment: "Seçili elementin doğrudan alt (çocuk) elementlerini seçer[cite: 19].",
                detail: `
            $("#item").children().addClass("alt-oge");
        `
            },
            {
                not: '$("#item").find("li.active")',
                comment: "Seçili elementin alt hiyerarşisinde belirtilen seçiciye uyan tüm torun elementleri bulur[cite: 19].",
                detail: `
            const aktifler = $("#item").find("li.active");
            console.log("Aktif li sayısı:", aktifler.length);
        `
            },
            {
                not: '$("#item").siblings()',
                comment: "Seçili elementle aynı ebeveyni paylaşan tüm kardeş (sibling) elementleri seçer[cite: 19].",
                detail: `
            $("#item").siblings().removeClass("aktif");
        `
            },
            {
                not: '$("#item").next()',
                comment: "Seçili elementten hemen sonra gelen kardeş elementi seçer[cite: 19].",
                detail: `
            $("#item").next().addClass("sonraki");
        `
            },
            {
                not: '$("#item").prev()',
                comment: "Seçili elementten hemen önce gelen kardeş elementi seçer[cite: 19].",
                detail: `
            $("#item").prev().addClass("onceki");
        `
            },
            {
                not: '$("#item").click(function(){})',
                comment: "Elemente tıklandığında çalışacak olay (click) dinleyicisi bağlar[cite: 19].",
                detail: `
            $("#item").click(function() {
                console.log("Öğeye tıklandı:", $(this).text());
            });
        `
            },
            {
                not: '$("#item").dblclick(function(){})',
                comment: "Elemente çift tıklandığında (double click) çalışacak olayı tanımlar[cite: 19].",
                detail: `
            $("#item").dblclick(function() {
                $(this).toggleClass("buyuk");
            });
        `
            },
            {
                not: '$("#item").hover(function(){})',
                comment: "Fare elementin üzerine geldiğinde ve ayrıldığında çalışacak hover davranışını bağlar[cite: 19].",
                detail: `
            $("#item").hover(
                function() { $(this).addClass("uzerinde"); },
                function() { $(this).removeClass("uzerinde"); }
            );
        `
            },
            {
                not: '$("#item").keydown(function(){})',
                comment: "Klavyede bir tuşa basıldığı anda (keydown) tetiklenen olayı yakalar[cite: 19].",
                detail: `
            $("#item").keydown(function(e) {
                if (e.key === "Enter") {
                    console.log("Enter tuşuna basıldı.");
                }
            });
        `
            },
            {
                not: '$("#item").keyup(function(){})',
                comment: "Klavyede basılı tutulan tuş bırakıldığında (keyup) tetiklenen olayı yakalar[cite: 19].",
                detail: `
            $("#item").keyup(function() {
                console.log("Güncel değer:", $(this).val());
            });
        `
            },
            {
                not: '$("#item").change(function(){})',
                comment: "Form elemanının değeri değişip odak kaybedildiğinde/onaylandığında change olayını çalıştırır[cite: 19].",
                detail: `
            $("#item").change(function() {
                console.log("Seçim değişti:", $(this).val());
            });
        `
            },
            {
                not: '$("#item").submit(function(){})',
                comment: "Bir form gönderildiğinde (submit) çalışacak olayı yakalar[cite: 19].",
                detail: `
            $("#item").submit(function(e) {
                e.preventDefault();
                console.log("Form gönderimi yakalandı.");
            });
        `
            },
            {
                not: '$("#item").clone().appendTo("#kopyalanacak-yer")',
                comment: "Elementin kopyasını oluşturur ve hedef alana ekler[cite: 19].",
                detail: `
            $("#item").clone().appendTo("#kopyalanacak-yer");
        `
            },
            {
                not: '$("#item").data()',
                comment: "Elementle ilişkili özel veri (data-* veya JS üzerinden saklanan veri) okur veya yazar[cite: 19].",
                detail: `
            $("#item").data("kullaniciId", 42);
            console.log($("#item").data("kullaniciId")); // 42
        `
            },
            {
                not: '$("#item").closest()',
                comment: "Elementin kendisinden başlayarak yukarı doğru seçiciye uyan en yakın üst (parent/ancestor) elementi bulur[cite: 19].",
                detail: `
            const kart = $("#item").closest(".kart");
            kart.addClass("secili-kart");
        `
            },
            {
                not: '$("#item").parentsUntil()',
                comment: "Seçili elementten başlayarak belirtilen seçiciye kadar olan tüm üst elementleri alır (hedef seçici hariç)[cite: 19].",
                detail: `
            const aradakiUstler = $("#item").parentsUntil("#ana-kapsayici");
            console.log("Aradaki üstler:", aradakiUstler.length);
        `
            },
            {
                not: "$.each(fruits, function(index, fruit){})",
                comment: "Dizi veya nesneler üzerinde indeks ve değer alarak döngü kurar (forEach benzeri).",
                detail: `
            const fruits = ["elma", "armut", "kiraz"];
            $.each(fruits, function(index, fruit) {
                console.log(\`\${index}: \${fruit}\`);
            });
        `
            },
            {
                not: '$("#item").filter(":even")',
                comment: "Eşleşen elemanlar arasından 0 tabanlı indeksi çift olanları (0, 2, 4...) seçer[cite: 15].",
                detail: `
            $("#item").filter(":even").addClass("cift-satir");
        `
            },
            {
                not: '$("#item").filter(":odd")',
                comment: "Eşleşen elemanlar arasından 0 tabanlı indeksi tek olanları (1, 3, 5...) seçer[cite: 15].",
                detail: `
            $("#item").filter(":odd").addClass("tek-satir");
        `
            },
            {
                not: '$("#item li").first()',
                comment: "Eşleşen eleman grubundaki ilk elemanı seçer[cite: 15].",
                detail: `
            $("#item li").first().addClass("ilk-oge");
        `
            },
            {
                not: '$("#item li").last()',
                comment: "Eşleşen eleman grubundaki son elemanı seçer[cite: 15].",
                detail: `
            $("#item li").last().addClass("son-oge");
        `
            },
            {
                not: '$("#item li").eq(2)',
                comment: "Belirtilen indeksteki (0'dan başlayan) elemanı seçer[cite: 15].",
                detail: `
            $("#item li").eq(2).addClass("ucuncu-oge");
        `
            },
            {
                not: '$("#item li").filter(aktif)',
                comment: "Belirtilen seçici veya fonksiyona uyan elemanları filtreleyerek seçer[cite: 15].",
                detail: `
            $("#item li").filter(".aktif").css("font-weight", "bold");
        `
            },
            {
                not: '$("#item li").not(aktif)',
                comment: "Belirtilen seçici veya koşula uymayan elemanları kümeden çıkarır[cite: 15].",
                detail: `
            $("#item li").not(".aktif").css("opacity", "0.6");
        `
            },
            {
                not: '$("#item").load()',
                comment: "Uzak bir URL'den HTML içeriğini alır ve seçili elementin içine yerleştirir[cite: 15].",
                detail: `
            $("#item").load("/partials/icerik.html", function(response, status) {
                if (status === "success") {
                    console.log("İçerik başarıyla yüklendi.");
                }
            });
        `
            },
            {
                not: '$("#item").map(function(){}).get()',
                comment: "Elemanlardan yeni bir değer kümesi üretir ve .get() ile standart JavaScript dizisine (Array) çevirir[cite: 15].",
                detail: `
            const metinler = $("#item li").map(function() {
                return $(this).text().trim();
            }).get();
            console.log(metinler);
        `
            },
            {
                not: '$(document).on("click", ".btn", function() {})',
                comment: "Event delegation sağlar; sonradan DOM'a dinamik eklenen .btn elemanlarında da çalışır[cite: 15].",
                detail: `
            $(document).on("click", ".btn", function() {
                console.log("Tıklanan buton metni:", $(this).text());
            });
        `
            },
            {
                not: '$("#item").one("click", function() {})',
                comment: "Olay dinleyicisini yalnızca tek bir kez çalıştırır ve ardından otomatik kaldırır[cite: 15].",
                detail: `
            $("#item").one("click", function() {
                console.log("Bu işlem sadece ilk tıklamada çalışır.");
            });
        `
            },
            {
                not: '$("#item").off("click")',
                comment: "Elemente bağlı olay dinleyicilerini kaldırır[cite: 15].",
                detail: `
            $("#item").off("click");
        `
            },
            {
                not: '$("#item").trigger("click")',
                comment: "Belirtilen olayı element üzerinde programatik olarak tetikler[cite: 15].",
                detail: `
            $("#item").trigger("click");
        `
            },
            {
                not: '$.get("data.json", function(data){})',
                comment: "Sunucuya HTTP GET isteği göndererek veri alır[cite: 15].",
                detail: `
            $.get("data.json", function(data) {
                console.log("Gelen veri:", data);
            });
        `
            },
            {
                not: '$.post("data.json", function(data){})',
                comment: "Sunucuya HTTP POST isteği ile veri gönderir[cite: 15].",
                detail: `
            $.post("data.json", { ad: "Yeni Kayıt" }, function(response) {
                console.log("Sunucu yanıtı:", response);
            });
        `
            },
            {
                not: '$.getJSON("data.json", function(data){})',
                comment: "GET isteğiyle JSON formatında veri çeker ve otomatik olarak nesneye/diziye ayrıştırır[cite: 15].",
                detail: `
            $.getJSON("data.json", function(data) {
                console.log("JSON veri:", data);
            });
        `
            },
            {
                not: "$.ajax({})",
                comment: "HTTP metodu, başlıklar, zaman aşımı ve hata yönetimi için tam yapılandırma sunan AJAX metodudur[cite: 15].",
                detail: `
            $.ajax({
                url: "/api/kayit",
                method: "POST",
                contentType: "application/json",
                data: JSON.stringify({ aktif: true }),
                success: function(res) { console.log("Başarılı:", res); },
                error: function(err) { console.error("Hata:", err); }
            });
        `
            },
            {
                not: '$("#item").hide()',
                comment: "Elementi anında gizler (display: none)[cite: 15].",
                detail: `
            $("#item").hide();
        `
            },
            {
                not: '$("#item").show(1000)',
                comment: "Gizli elementi belirtilen sürede (1000 ms = 1 sn) animasyonlu olarak görünür hale getirir[cite: 15].",
                detail: `
            $("#item").show(1000);
        `
            },
            {
                not: '$("#item").toggle(1000)',
                comment: "Element görünürse gizler, gizliyse gösterir[cite: 15].",
                detail: `
            $("#item").toggle(1000);
        `
            },
            {
                not: '$("#item").fadeIn(1000)',
                comment: "Elementi opaklığını 0'dan 1'e çıkararak yumuşak geçişle görünür yapar[cite: 15].",
                detail: `
            $("#item").fadeIn(1000);
        `
            },
            {
                not: '$("#item").fadeOut(1000)',
                comment: "Elementi opaklığını 1'den 0'a indirerek saydamlaşıp kaybolmasını sağlar[cite: 15].",
                detail: `
            $("#item").fadeOut(1000);
        `
            },
            {
                not: '$("#item").fadeToggle(1000)',
                comment: "fadeIn ve fadeOut geçişleri arasında durumuna göre geçiş yapar[cite: 15].",
                detail: `
            $("#item").fadeToggle(1000);
        `
            },
            {
                not: '$("#item").slideDown(1000)',
                comment: "Gizlenmiş elementi yukarıdan aşağıya kaydırarak açar[cite: 15].",
                detail: `
            $("#item").slideDown(1000);
        `
            },
            {
                not: '$("#item").slideUp(1000)',
                comment: "Görünür elementi aşağıdan yukarıya kaydırarak toplar/gizler[cite: 15].",
                detail: `
            $("#item").slideUp(1000);
        `
            },
            {
                not: '$("#item").slideToggle(1000)',
                comment: "slideDown ve slideUp animasyonları arasında geçiş yapar[cite: 15].",
                detail: `
            $("#item").slideToggle(1000);
        `
            },
            {
                not: '$("#item").stop()',
                comment: "Element üzerinde o an devam eden animasyonu durdurur[cite: 15].",
                detail: `
            $("#item").stop().fadeToggle(400);
        `
            }
        ]
    },
    {
        langueName: "THREE",
        notes: [
            {
                title: "Three JS Render"
            },
            {
                not: "new THREE.Scene()",
                comment: "3B nesnelerin, ışıkların ve kameraların eklendiği ana sahne kapsayıcısını oluşturur.",
                detail: `
            const scene = new THREE.Scene();
            scene.background = new THREE.Color(0x111111);
        `
            },
            {
                not: "new THREE.PerspectiveCamera()",
                comment: "İnsan gözüne yakın derinlik algısı sunan perspektif kamerayı (FOV, aspect, near, far) oluşturur.",
                detail: `
            const camera = new THREE.PerspectiveCamera(
                75,
                window.innerWidth / window.innerHeight,
                0.1,
                1000
            );
            camera.position.z = 5;
        `
            },
            {
                not: "new THREE.WebGLRenderer()",
                comment: "Sahneyi ve kamerayı WebGL kullanarak tarayıcıdaki canvas üzerine çizer.",
                detail: `
            const renderer = new THREE.WebGLRenderer({ antialias: true });
            renderer.setSize(window.innerWidth, window.innerHeight);
            document.body.appendChild(renderer.domElement);
        `
            },
            {
                not: "new THREE.BoxGeometry()",
                comment: "Belirtilen genişlik, yükseklik ve derinliğe sahip dikdörtgen prizma/küp geometrisi oluşturur.",
                detail: `
            const geometry = new THREE.BoxGeometry(1, 1, 1);
            console.log("Küp geometrisi hazır:", geometry);
        `
            },
            {
                not: "new THREE.SphereGeometry()",
                comment: "Yarıçap ve segment değerlerine göre küresel 3B geometri oluşturur.",
                detail: `
            const sphereGeo = new THREE.SphereGeometry(1.5, 32, 32);
            console.log("Küre geometrisi hazır:", sphereGeo);
        `
            },
            {
                not: "new THREE.PlaneGeometry()",
                comment: "Zemin, duvar veya ekran yüzeyi gibi düzlemsel 3B geometri oluşturur.",
                detail: `
            const planeGeo = new THREE.PlaneGeometry(10, 10);
            console.log("Düzlem geometrisi hazır:", planeGeo);
        `
            },
            {
                not: "new THREE.MeshBasicMaterial()",
                comment: "Sahnedeki ışıklardan etkilenmeyen, sabit renk veya doku gösteren temel malzeme oluşturur.",
                detail: `
            const material = new THREE.MeshBasicMaterial({ color: 0x00ff88 });
        `
            },
            {
                not: "new THREE.MeshStandardMaterial()",
                comment: "PBR (Physically Based Rendering) tabanlı, roughness ve metalness değerleriyle ışığa gerçekçi tepki veren malzeme oluşturur.",
                detail: `
            const pbrMaterial = new THREE.MeshStandardMaterial({
                color: 0x3498db,
                roughness: 0.4,
                metalness: 0.6
            });
        `
            },
            {
                not: "new THREE.MeshPhongMaterial()",
                comment: "Parlak yüzeyler ve belirgin yansıma noktaları (shininess/specular) için kullanılan malzeme türüdür.",
                detail: `
            const phongMaterial = new THREE.MeshPhongMaterial({
                color: 0xe74c3c,
                shininess: 100
            });
        `
            },
            {
                not: "new THREE.Mesh()",
                comment: "Geometri ve malzemeyi birleştirerek sahneye eklenebilir 3B nesne (mesh) üretir.",
                detail: `
            const geometry = new THREE.BoxGeometry(1, 1, 1);
            const material = new THREE.MeshStandardMaterial({ color: 0xf1c40f });
            const cube = new THREE.Mesh(geometry, material);
            scene.add(cube);
        `
            },
            {
                not: "new THREE.PointLight()",
                comment: "Belirli bir noktadan her yöne eşit yayılan noktasal ışık kaynağı oluşturur.",
                detail: `
            const pointLight = new THREE.PointLight(0xffffff, 10, 50);
            pointLight.position.set(2, 4, 4);
            scene.add(pointLight);
        `
            },
            {
                not: "new THREE.AmbientLight()",
                comment: "Sahnedeki tüm nesnelere yönsüz ve gölgesiz genel ortam ışığı sağlar.",
                detail: `
            const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
            scene.add(ambientLight);
        `
            },
            {
                not: "new THREE.DirectionalLight()",
                comment: "Güneş ışığı gibi belirli bir yönden paralel ışınlar gönderen ve gölge üretebilen ışık kaynağıdır.",
                detail: `
            const dirLight = new THREE.DirectionalLight(0xffffff, 1.2);
            dirLight.position.set(5, 10, 7);
            scene.add(dirLight);
        `
            },
            {
                not: "new THREE.SpotLight()",
                comment: "Belirli bir noktadan koni şeklinde odaklanmış spot ışık kaynağı oluşturur.",
                detail: `
            const spotLight = new THREE.SpotLight(0xffffff, 15);
            spotLight.position.set(0, 8, 5);
            spotLight.angle = Math.PI / 6;
            scene.add(spotLight);
        `
            },
            {
                not: "new THREE.HemisphereLight()",
                comment: "Gökyüzü renginden zemin rengine yumuşak geçişli iki yönlü ortam aydınlatması sağlar.",
                detail: `
            const hemiLight = new THREE.HemisphereLight(0x87ceeb, 0x2c3e50, 0.8);
            scene.add(hemiLight);
        `
            },
            {
                not: "OrbitControls()",
                comment: "Kamerayı fare veya dokunmatik hareketlerle yörünge etrafında döndürmeyi, yakınlaştırmayı ve kaydırmayı sağlar.",
                detail: `
            const controls = new OrbitControls(camera, renderer.domElement);
            controls.enableDamping = true;
            controls.update();
        `
            },
            {
                not: "THREE.TextureLoader()",
                comment: "Harici resim dosyalarını yükleyip malzeme (map) içinde kullanılabilecek Texture nesnesine dönüştürür.",
                detail: `
            const textureLoader = new THREE.TextureLoader();
            const mapTexture = textureLoader.load("/textures/albedo.jpg");
            const mat = new THREE.MeshStandardMaterial({ map: mapTexture });
        `
            },
            {
                not: "GLTFLoader()",
                comment: "Hazır .gltf veya .glb formatındaki 3B modelleri, animasyonları ve sahneleri yüklemek için kullanılır.",
                detail: `
            const loader = new GLTFLoader();
            loader.load("/models/karakter.glb", (gltf) => {
                scene.add(gltf.scene);
            });
        `
            },
            {
                not: "updateProjectionMatrix()",
                comment: "Kameranın aspect veya fov değeri değiştiğinde (örneğin pencere yeniden boyutlandırıldığında) projeksiyon matrisini günceller.",
                detail: `
            window.addEventListener("resize", () => {
                camera.aspect = window.innerWidth / window.innerHeight;
                camera.updateProjectionMatrix();
                renderer.setSize(window.innerWidth, window.innerHeight);
            });
        `
            }
        ]
    },
    {
        langueName: "xxx",
        notes: [
            {
                title: "XXXXXXX"
            },
            {
                not: "xxx",
                comment: "xxxxx",
                detail: `
                    xxxxxxxxx
                `
            }
        ]
    },
];

const codeFragment = document.createDocumentFragment();
const codeContainer = document.querySelector('.q-cards');
const codeDetailContainer = document.querySelector('.kt-kod');
const codeDetailRelative = document.querySelector('.kt-kod-relative');
const notType = document.querySelectorAll('[quasar-not-type]');
const langTitle = document.querySelector('.q-langue-title');
let filterData = codeData.find(c => c.langueName === "Javascript");

notType.forEach(f => {
    f.addEventListener('click', () => {
        let langType = f.getAttribute('quasar-not-type');
        langTitle.textContent = langType;
        createCodeDom(langType)
    })
})

function createCodeNode(t){

    const card = document.createElement('div');
    card.className = "q-card";


    const not = document.createElement('span');
    not.className = "q-not";
    not.textContent = t.not;
    const comment = document.createElement('span');
    comment.className = "q-not-comment";
    comment.setAttribute('quasar-code', t.detail);
    comment.textContent = t.comment;
    comment.addEventListener('click', () => {showCode(t.detail);})
    not.appendChild(comment);
    card.appendChild(not);
    if (t.title) {
        const title = document.createElement('span');
        not.className = "q-not-title";
        not.textContent = t.title;
        card.appendChild(title);
    }
    return card
}


function createCodeDom(langType){
    codeContainer.innerHTML = ""
    filterData = codeData.find(c => c.langueName === langType)
    QuasarInfiniteScroll(filterData.notes, codeContainer, createCodeNode, 20);
}

createCodeDom("JAVASCRİPT")

function showCode(code) {
    codeDetailRelative.classList.add('kt-active');
    if (typeof window.ktShow === 'function') {
        window.ktShow(codeDetailContainer, code);
        return;
    }
    codeDetailContainer.textContent = code;

    let waited = 0;
    const wait = setInterval(() => {
        waited++;
        if (typeof window.ktShow === 'function') {
            clearInterval(wait);
            window.ktShow(codeDetailContainer, code);
        } else if (waited > 100) {
            clearInterval(wait);
        }
    }, 100);
}

window.addEventListener('click', (e) => {
    if (codeDetailRelative.classList.contains('kt-active') && !e.target.matches('.q-not-comment')){
        codeDetailRelative.classList.remove('kt-active');
    }
})
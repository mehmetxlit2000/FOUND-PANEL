export const template = `

<div class="q-cards">
    <p class="q-not-title">1. HAFTA</p>
    <div class="q-card">
        <span class="q-not"> <span class="q-not-title">Power Supply:</span>  Güç kaynağı, bir sistem ya da düzeneğin gereksinimi olan enerjiyi sağlamak için kullanılan birimlerin genel adı.</span>
        <span class="q-not"> <span class="q-not-title">Elektrostatik Deşarj (ESD):</span> farklı elektrik potansiyeline sahip iki nesnenin birbirine temas etmesi veya yakınlaşması sonucu aralarında biriken statik elektriğin ani ve kısa süreli olarak akması olayıdır.</span>
        <span class="q-not">Bir kişinin ESD'yi hissedebilmesi için en az 3.000 volt statik elektrik birikmesi gerekir.</span>
        <span class="q-not">Deşarj acıya neden olur veya ses çıkarırsa, şarj muhtemelen 10.000 voltun üzerindedir.</span>
        <span class="q-not">30 volttan daha az statik elektrik bir bilgisayar bileşenine zarar verebilir.</span>
        <p class="q-not-title">Kasa Türleri</p>
        <span class="q-not"> <span class="q-not-title">Yatay Kasa:</span>  Genellikle masa üstüne konumlandırılan ve monitörün üzerine konulabileceği şekilde tasarlanmış, yatay formdaki geleneksel bilgisayar kasasıdır.</span>
        <span class="q-not"> <span class="q-not-title">Tam Kule (Full Tower):</span>  Dikey odaklı bir kasadır ve genellikle zeminde, masanın altında ya da yanında bulun</span>
        <span class="q-not"> <span class="q-not-title">Kompak Kasa:</span> Kompak Kasa: Tam boyutlu kulenin daha küçük bir versiyonudur ve yaygın olarak kurumsal ortamda bulunur.</span>
        <span class="q-not"> <span class="q-not-title">Hepsi Bir Yerde:</span>  Tüm bilgisayar sistemi bileşenleri ekrana entegre edilmiştir.</span>
        <span>Duvar prizlerinden gelen elektrik alternatif akımdır (AC) . Ancak, bilgisayarın içindeki tüm bileşenler doğru akım (DC) gücüne ihtiyaç duyar. Burada gösterildiği gibi bilgisayarlar, DC güç elde etmek için, AC gücünü daha düşük gerilimli DC gücüne dönüştürmek amacıyla bir güç kaynağı kullanır. </span>
        <p class="q-not-title">Güç Kaynağı (PSU)</p>
        <span class="q-not"> <span class="q-not-title">Gelişmiş Teknoloji (AT)</span>  Bu, artık kullanılmayan eski bilgisayarsistemleri için orijinal güç kaynağıdır</span>
        <span class="q-not"> <span class="q-not-title">AT Genişletilmiş (ATX)</span> AT'nin güncellenmiş sürümüdür ancak yine de eski olarak kabul edilir.</span>
        <span class="q-not"> <span class="q-not-title">ATX12V</span> Günümüzde piyasadaki en yaygın güç kaynağıdır. CPU'ya özel güç sağlamak için ikinci bir anakart konektörü içerir. ATX12V'nin çeşitli versiyonları vardır.</span>
        <span class="q-not"> <span class="q-not-title">EPS12V</span>  Başlangıçta ağ sunucuları için tasarlanmıştır, ancak şimdi yaygın olarak üst düzey masaüstümodellerinde kullanılmaktadır.</span>
        <p class="q-not-title">Konektörler</p>
        <span class="q-not"> <span class="q-not-title">20 pinli veya 24 pinli slotlu konektör:</span> Ana karta ana güç sağlayan temel ve en büyük konektördür.</span>
        <span class="q-not"> <span class="q-not-title">SATA anahtarlı bağlayıcılar:</span> Sabit sürücüler (HDD/SSD) ve optik sürücüler gibi depolama birimlerini beslemek için kullanılır.</span>
        <span class="q-not"> <span class="q-not-title">Molex anahtarlı konektör:</span> Eski tip sabit sürücüler, optik sürücüler veya fanlar gibi bileşenler için kullanılan klasik 4 pinli güç konektörüdür</span>
        <span class="q-not"> <span class="q-not-title">Berg anahtarlı konektör:</span> Genellikle eski nesil disket sürücüleri (floppy disk) beslemek için kullanılan küçük tipte bir konektördür.</span>
        <span class="q-not"> <span class="q-not-title">4 pinli - 8 pinli yardımcı güç konektörü:</span> İşlemciye (CPU) ek güç sağlamak amacıyla anakart üzerindeki ilgili yuvaya takılır.</span>
        <span class="q-not"> <span class="q-not-title">6/8 pinli PCIe güç konektörü:</span> Ekran kartlarının (GPU) ihtiyaç duyduğu yüksek elektriksel gücü doğrudan karşılamak için kullanılır.</span>
        <span class="q-not"> <span class="q-not-title">Gerilim Değerleri:</span> En yaygın gerilimler 3,3 V, 5 V (dijital devreler için) ve 12 V'tur (motorlar, disk sürücüleri ve fanlar için).</span>
        <span class="q-not"> <span class="q-not-title">Güç Kaynağı Rayları:</span> Güç kaynakları tek raylı, çift raylı veya çok raylı olabilir. Ray, harici kabloların bağlı olduğu içindeki baskılı devre kartıdır (PCB).</span>
        <span class="q-not"> <span class="q-not-title">Ray Yapısı Farkı:</span> Tek rayda tüm konektörler aynı PCB'ye bağlanırken, çok raylı sistemde her konektör için ayrı PCB bulunur.</span>
        <span class="q-not"> <span class="q-not-title">Güç Dalgalanmaları:</span> Bilgisayar hafif dalgalanmaları tolere edebilir, ancak önemli sapmalar güç kaynağının arızalanmasına yol açabilir.</span>
        <p class="q-not-title">Anakart</p>
        <span class="q-not">Elektronik bileşenleri birbirine bağlayan yolları (bus) veya elektrik yollarını içeren bir baskı devre kartıdır (PCB).</span>
        <span class="q-not"> <span class="q-not-title">Merkezi İşlem Birimi (CPU):</span> Bilgisayarın beyni olarak kabul edilir.</span>
        <span class="q-not"> <span class="q-not-title">Rastgele Erişimli Bellek (RAM):</span> Verileri ve uygulamaları depolamak için kullanılan geçici bir alandır</span>
        <span class="q-not"> <span class="q-not-title">Yonga Seti (Chipset):</span> Sistem donanımının CPU ve anakart ile nasıl etkileşime girdiğini kontrol eden entegre devrelerdir. Ayrıca anakarta ve konektör türlerine ne kadar bellek eklenebileceğini belirler.</span>
        <span class="q-not"> <span class="q-not-title">BIOS:</span> Bilgisayarı önyükler ve donanımlar arası veri akışını yönetir.</span>
        <span class="q-not"> <span class="q-not-title">UEFI:</span> Önyükleme için modern bir arabirim sağlar</span>
        <span class="q-not">Çoğu Çip Seti İki Tipten Oluşur çip seti yapısı iki ana köprüden meydana gelir.</span>
        <p class="q-not-title">Kuzey Köprüsü (Northbridge):</p>
        <span class="q-not">RAM ve ekran kartına yüksek hızlı erişimi denetler.</span>
        <span class="q-not">CPU'nun bilgisayardaki diğer tüm bileşenlerle iletişim kurma hızını kontrol eder.</span>
        <span class="q-not">Video yeteneği bazen Kuzey Köprüsü'ne entegre edilir.</span>
        
        <p class="q-not-title">Güney Köprüsü (Southbridge):</p>
        <span class="q-not">CPU'nun sabit diskler, Evrensel Seri Veri Yolu (USB) bağlantı noktaları ve genişletme yuvaları gibi daha yavaş cihazlarla iletişim kurmasına izin verir.</span>
        
        <p class="q-not-title">Anakart Form Faktörleri</p>
        <span class="q-not">Kartın boyutu, şekli ve bileşenlerin fiziksel düzenini açıklar. Güç kaynağı türünü ve kasa şeklini doğrudan belirler.</span>
        <span class="q-not"> <span class="q-not-title">ATX:</span> En yaygın form faktörüdür. 12 x 9,6 inç boyutlarındadır ve tek bir 20 pinli konektörle bağlanır.</span>
        <span class="q-not"> <span class="q-not-title">Mikro-ATX:</span> ATX ile geriye dönük uyumlu, daha küçük (9,6 x 9,6 inç) bir form faktörüdür. Aynı çip setlerini kullanabilir ve standart ATX kasalara sığabilir; ancak daha az genişleme yuvasına sahiptir.</span>
        <span class="q-not"> <span class="q-not-title">ITX / Mini-ITX:</span> Küçük boyutlu cihazlar için tasarlanmış, çok az güç kullanan ve fan soğutmasına gerek duyulmayan popüler bir form faktörüdür. Genişleme için yalnızca tek bir PCI yuvası bulunur</span>
        <p class="q-not-title">CPU</p>
        <span class="q-not">Komutların yorumlanmasından ve çalıştırılmasından sorumludur. Donanım ve yazılımlardan gelen talimatları işler, yorumlar ve bilgileri monitöre iletir.</span>
        <span class="q-not">CPU, bir paket içinde bulunan küçük bir mikroçiptir. Her stil anakart üzerinde belirli bir soket gerektirir. Yaygın üreticileri Intel ve AMD'dir.</span>
        <span class="q-not"> <span class="q-not-title">CPU Soketi:</span> Anakart ile işlemci arasındaki bağlantıdır.</span>
        <span class="q-not"> <span class="q-not-title">Pin Izgara Dizisi (PGA):</span> Pinler işlemci paketinin alt tarafındadır ve sıfır ekleme kuvveti (ZIF) kullanılarak ana kart CPU soketine yerleştirilir.</span>
        <span class="q-not"> <span class="q-not-title">Kara Izgara Dizisi (LGA):</span> PGA'nın aksine, LGA mimarisinde pinler işlemci üzerinde değil sokette bulunur.</span>
        <p class="q-not-title">Bellek Türleri</p>
        <span class="q-not"> <span class="q-not-title">ROM (Salt Okunur Bellek):</span> Anakart ve devre kartlarında bulunur. Bilgisayarı önyükleme ve işletim sistemini yükleme gibi temel talimatları içerir. Kalıcıdır; bilgisayar kapatıldığında içerikleri silinmez</span>
        <span class="q-not"> <span class="q-not-title">Dinamik Rastgele Erişimli Bellek (RAM):</span> CPU tarafından erişilen veri ve programlar için geçici çalışma deposudur.  Uçucu bir bellek olup bilgisayar kapatıldığında içeriği silinir. Daha fazla RAM eklemek performansı artırır; az RAM olduğunda sistem sabit disk ile veri takası yapmak zorunda kalır. Takılabilecek maksimum miktar anakart ile sınırlıdır.</span>
        <p class="q-not-title">ROM Türleri</p>
        <span class="q-not"> <span class="q-not-title">ROM (Read-Only Memory):</span> Bilgisayarı önyükleme (boot) ve işletim sistemini başlatma gibi temel talimatları içeren, bilgisayar kapatıldığında bile verileri kalıcı olarak saklayan salt okunur bellek türüdür.</span>
        <span class="q-not"> <span class="q-not-title">PROM: </span> Üretim sonrası yalnızca bir kez programlanabilen (yazılabilen) ve bir daha değiştirilemeyen ROM türüdür.</span>
        <span class="q-not"> <span class="q-not-title">EPROM: </span> Ultraviyole (UV) ışık kullanılarak üzerindeki verilerin silinebileceği ve yeniden programlanarak tekrar kullanılabilen ROM türüdür.</span>
        <span class="q-not"> <span class="q-not-title">EEPROM: </span> Ultraviyole ışığa gerek duyulmadan, tamamen elektriksel sinyaller yardımıyla silinip tekrar programlanabilen ROM türüdür.</span>
        <p class="q-not-title">RAM ve DRAM türleri</p>
        <span class="q-not"> <span class="q-not-title">Statik RAM (SRAM):</span> Bilgisayarlarda önbellek (cache) olarak kullanılan, DRAM'e kıyasla daha hızlı olan ve elektriksel yenileme gerektirmeyen bellek türüdür.</span>
        <span class="q-not"> <span class="q-not-title">SDRAM (Synchronous DRAM):</span> İşlemcinin (CPU) hızına senkronize olarak çalışan, böylece veri aktarım hızını artıran senkronize dinamik RAM türüdür.</span>
        <span class="q-not"> <span class="q-not-title">DDR SDRAM (Double Data Rate SDRAM):</span> Saat sinyalinin hem yükselen hem de düşen kenarında veri aktarımı yaparak standart SDRAM'e göre veri bant genişliğini iki katına çıkaran bellek türüdür. Konnektöründe 184 pin ve tek bir çentik bulunur.  Standart voltaj olarak 2,5 V kullanır.</span>
        <span class="q-not"> <span class="q-not-title">DDR2 SDRAM:</span> DDR'a kıyasla daha yüksek hızlarda çalışırken daha düşük güç tüketimi sunan, saat döngüsü başına daha fazla veri aktarabilen ikinci nesil bellek teknolojisidir. Konnektöründe 240 pin bulunur. Daha düşük standart voltaj olarak 1,8 V kullanır.</span>
        <span class="q-not"> <span class="q-not-title">DDR3 SDRAM: </span> DDR2'ye göre daha düşük voltajla çalışarak enerji tasarrufu sağlayan ve daha yüksek veri aktarım hızlarına ulaşan üçüncü nesil bellek türüdür. 800 MHz'e kadar daha yüksek saat hızlarında çalışır. Konnektöründe 240 pin bulunur.</span>
        <span class="q-not"> <span class="q-not-title">DDR4 SDRAM:</span> Daha yüksek veri kapasiteleri, artırılmış bant genişliği ve daha düşük güç tüketimi (genellikle 1.2V) sunarak uzun süre endüstri standardı olmuş bellek teknolojisidir. 1600 MHz'e kadar daha yüksek saat hızlarında çalışır. Konnektöründe 288 pin bulunur. Birden çok bit hatasını algılamak için hata düzeltme kodu belleği (ECC bellek) gibi gelişmiş hata düzeltme özellikleri mevcuttur.</span>
        <span class="q-not"> <span class="q-not-title">GDDR SDRAM:</span> Özellikle ekran kartlarının (GPU) yoğun grafik ve video işleme ihtiyaçları için özel olarak optimize edilmiş, yüksek bant genişliğine sahip grafik bellek türüdür. </span>
        <p class="q-not-title">Bellek Modülleri</p>
        <span class="q-not"> <span class="q-not-title">DIP (Dual Inline Paketi):</span> Bireysel bir bellek yongasıdır ve anakarta bağlı çift sıra pinleri bulunur.</span>
        <span class="q-not"> <span class="q-not-title">SIMM (Tek Sıralı Bellek Modülü):</span> Birkaç bellek yongasını tutan küçük bir devre kartıdır; 30-pin veya 72-pin konfigürasyonları vardır.</span>
        <span class="q-not"> <span class="q-not-title">DIMM Bellek (Çift Sıralı Bellek Modülü):</span> SDRAM ve DDR türlerindeki yongaları tutan devre kartıdır. 168-pin (SDRAM), 184-pin (DDR), 240-pin (DDR2 ve DDR3) ve 288-pin (DDR4) çeşitleri bulunur.</span>
        <span class="q-not"> <span class="q-not-title">SODIMM:</span> Küçük Anahat DIMM olarak geçer. Genellikle 72, 100, 144, 200, 204 ve 260 pinli konfigürasyonlara sahiptir. Alan tasarrufu sağladığı için laptop, yazıcı ve benzeri cihazlarda tercih edilir.</span>
        <p class="q-not-title">Adaptör Kartları</p>
        <span class="q-not">Bilgisayara ek özellikler kazandırmak için anakart üzerindeki genişletme yuvalarına takılan kartlardır; bazıları anakarta tümleşik de gelebilir. Adaptör kartı konektörünün türü, anakart üzerindeki genişletme yuvasıyla tam olarak eşleşmelidir.</span>
        <span class="q-not"> <span class="q-not-title">Ses Adaptörü:</span> Bilgisayarın ses giriş ve çıkışlarını (mikrofon, hoparlör vb.) yönetmeyi sağlar.</span>
        <span class="q-not"> <span class="q-not-title">eSATA Kartı: </span> Harici SATA cihazlarının harici bağlantı noktaları üzerinden yüksek hızda bağlanmasına olanak tanır.</span>
        <p class="q-not-title">Genişletme yuvası türleri</p>
        <span class="q-not"> <span class="q-not-title">PCI: </span>  standart genişleme yuvası</span>
        <span class="q-not"> <span class="q-not-title">PCIe (PCI Express):</span> x1, x4, x8 ve x16 yuvaları vardır</span>
        <span class="q-not"> <span class="q-not-title">Mini PCI:</span> Dizüstü bilgisayarlarda kullanılan PCI yuvası sürümü; Tip I, Tip II ve Tip III form faktörleri vardır</span>
        <span class="q-not"> <span class="q-not-title">Yükseltici (riser) kart:</span> Bilgisayara ek genişleme yuvaları ekleyen karttır.</span>
        <p class="q-not-title">Depolama Cihazları Türleri</p>
        <span class="q-note">Verilerin kalıcı olarak depolanmasını sağlar. Güç kaybettiğinde veriler saklanır ve bir sonraki güç verilişinde kullanılabilir. Bazı sürücüler sabit, bazıları çıkarılabilir medyaya sahiptir. Okuma/yazma veya yalnızca erişim (yazılamaz) özellikleri değişebilir. Manyetik Sürücüler: HDD ve teyp sürücüleri, Diğer Türler: Katı hal (SSD) veya optik gibi</span>
        <p class="q-not-title">Depolama Cihazı Arabirimleri</p>
        <span class="q-not"> <span class="q-not-title">SATA (Seri ATA):</span> Dahili depolama aygıtlarını anakarta bağlar; veri aktarım biçimini, hızını, kablo ve konektör özelliklerini tanımlar.</span>
        <span class="q-not">Paralel ATA (PATA): Eski bağlantı yöntemlerindendir; IDE 8.3 Mb/s ve EIDE 16.6 Mb/s standartlarını içerir.</span>
        <span class="q-not">SCSI / SAS: Küçük Bilgisayar Sistemi Arabirimi (SCSI) orijinalinde paralel kullanan eski bir standartken, sunucu depolamada kullanılan popüler yeni sürümü Seri Bağlı SCSI (SAS) olarak geliştirilmiştir.</span>
        <span class="q-not">SATA 1: Maksimum 1.5 Gb/s veri aktarım hızına sahiptir.</span>
        <span class="q-not">SATA 2: Maksimum 3.0 Gb/s veri aktarım hızına sahiptir.</span>
        <span class="q-not">SATA 3: Maksimum 6.0 Gb/s hız sunan en hızlı versiyondur.</span>

    </div>
    <p class="q-not-title">2. HAFTA</p>
    <div class="q-cards">
        <p class="q-not-title">İşlemci Hızı ve Özellikleri</p>
        <span class="q-not">İşlemci Hızı GHz cinsinden ifade edilir.</span>
        <span class="q-not">Performans Sınırlayıcılar İşlemci performansını sınırlayan temel faktörler iletim gecikmesi ve ısı üretimidir; hız arttıkça üretilen ısı miktarı da artar.</span>
        <span class="q-not">FSB (Ön Veri Yolu) CPU ile diğer bileşenler arasındaki veri iletişimini sağlayan veriyoludur; frekansı MHz cinsinden ölçülür ve CPU çalışma frekansı saat çarpanı ile ilişkilidir.</span>
        <span class="q-not">Veri İşleme Kapasitesi İşlemciler, veri işleme kapasitelerine göre 32 bit ve 64 bit olarak sınıflandırılır</span>
        <span class="q-not"> <span class="q-not-title">Kasa ve Güç Kaynağı Uyumu:</span> Güvenli ve verimli bir sistem oluşturmak için doğru kasa, uyumlu anakart ve yeterli güç kaynağı bir arada seçilmelidir. Güç kaynağı (PSU), AC gerilimi DC'ye dönüştürerek sistemin güç ihtiyacını karşılar; olası bileşen eklemeleri göz önüne alınarak toplam güç ihtiyacının üzerine en az %25 daha fazla kapasite içermelidir.</span>
        <span class="q-not"> <span class="q-not-title">Anakart, İşlemci ve Soğutma:</span> Anakart seçimi yapılırken işlemci soket yapısının uyumlu olmasına dikkat edilmeli, işlemci yuvaya doğru şekilde oturtulup sabitlenmelidir. Çalışma sırasında yüksek sıcaklıklara ulaşabilen işlemciler için uygun miktarda termal macun uygulanmalı, soket türüne ve kasa boyutuna uygun bir soğutma sistemi tercih edilmelidir.</span>
        <span class="q-not"> <span class="q-not-title">Bellek (RAM) ve Depolama Sürücüleri:</span> RAM modülleri anakart üzerindeki yuvalara doğru hizalanarak kilitlenmeli, olası sistem kilitlenmelerinde bellek testi yapılmalıdır. Verilerin kalıcı olarak saklanmasını sağlayan sabit sürücüler (HDD, SSD veya SSHD) anakart arabirimleriyle uyumlu seçilmeli ve kasadaki uygun genişlikteki 3.5 inç veya 2.5 inçlik yuvalara monte edilmelidir.</span>
        <span class="q-not"> <span class="q-not-title">Genişletme Kartları ve Ön Panel Bağlantıları:</span> Bilgisayara ek işlevler kazandırmak amacıyla ekran kartı, ses kartı veya ağ kartı gibi adaptörler PCIe yuvalarına takılır. Kasa üzerindeki güç ve reset düğmeleri, LED lambalar ve USB kabloları anakart üzerindeki sistem paneli konektörlerine pin numaralarına ve artı yönlerine dikkat edilerek bağlanmalıdır</span>
        <p class="q-not-title">Özel Notlar</p>
        <span class="q-not">SSHD = SSD + HDD</span>
        <span class="q-not">. Bellek kartı formatları: SD, microSD, CompactFlash, Memory Stick.</span>
        <span class="q-not">Ön panel: PWR_SW, RESET, PWR_LED, HDD_LED, SPEAKER; 1. pin = ok / + işareti;konektörlerde yönlendirme yok.</span>
    </div>
        <p class="q-not-title">3. HAFTA</p>
    <div class="q-cards">
        <p class="q-not-title">BIOS’un görevi</p>
        <span class="q-not">BIOS, anakartın çalışması için gerekli temel yazılım bileşenidir.</span>
        <span class="q-not">POST ile birlikte sürücüleri, belleği ve genişletme yuvalarını kontrol ede</span>
        <span class="q-not">SATA ve USB bağlantı noktalarının yapılandırılmasını sağlar, Anakartın güç yönetimi ayarlarını kontrol eder.</span>
        <span class="q-not"> <span class="q-not-title"> POST (Açılışta Otomatik Test): </span> Bilgisayar açıldığında BIOS temel donanım bileşenlerini kontrol eder; bu kontrole denir. Donanım sorunları hata mesajları veya bip kodları ile bildirilir. POST kontrolünü test etmek için RAM modülleri çıkarılarak bip kodu dinlenebilir.</span>
        <span class="q-not"> <span class="q-not-title">CMOS: </span> BIOS yapılandırma ayarları CMOS belleğinde saklanır.  CMOS belleği ayarların korunması için bir pil ile desteklenir (CMOS pili). Saat ve tarihin sürekli yanlış olmas → CMOS pilinin zayıfladığını gösterebilir.</span>
        <span class="q-not"> <span class="q-not-title">UEFI: </span> Birleşik Genişletilebilir Ürün Yazılımı Arayüzü. Günümüzde çok sayıdabilgisayar kullanır. Geleneksel BIOS’a göre daha gelişmiş yapılandırma ve güvenlik özellikleri sunar.</span>
        <span class="q-not"> <span class="q-not-title">Secure Boot</span> Sadece güvenilir yazılım başlatır</span>
        <span class="q-not"> <span class="q-not-title">LoJack</span> Kayıp/çalıntı cihaz izleme</span>
        <span class="q-not"> <span class="q-not-title">TPM</span> Şifreleme anahtarlarını saklayan güvenlik çipi</span>
        <span class="q-not"> <span class="q-not-title">Flashing the BIOS </span> BIOS’u yazılımsal güncelleme</span>
        <p class="q-not-title">Güç Dalgalanmaları ve Koruma</p>
        <span class="q-not"> <span class="q-not-title">Blackout (Elektrik kesintisi)</span> AC gücünün tamamen kesilmesi.</span>
        <span class="q-not"> <span class="q-not-title">Brownout  (Gerilim düşüşü): </span> Bir süre devam eden AC güç gerilim seviyesinin azalması</span>
        <span class="q-not"> <span class="q-not-title">Noise  (Gürültü): </span> Jeneratörlerden ve yıldırımdan kaynaklanan parazit.</span>
        <span class="q-not"> <span class="q-not-title">Spike  (Gerilim sıçraması): </span> Kısa süre süren, hattaki normal gerilimin %100’ünü aşan ani artış.</span>
        <span class="q-not"> <span class="q-not-title">Power Surge  (Aşırı gerilim): </span> Normal elektrik akımının üzerinde ani ve şiddetli gerilim artışı.</span>
        <p class="q-not-title">Koruma cihazları</p>
        <span class="q-not"> <span class="q-not-title">Aşırı gerilim koruyucu (Surge Protector): </span>  Hat üzerindeki fazla gerilimi toprağa yönlendirir.</span>
        <span class="q-not"> <span class="q-not-title">Kesintisiz güç kaynağı (UPS): </span> Elektrik kesintilerine karşı korur; voltaj düşüşü veya tam kesintide istikrarlı güç kalitesi sunar.</span>
        <span class="q-not"> <span class="q-not-title">Yedek güç kaynağı (SPS – Standby Power Supply): </span> Normal çalışmada bekleme modunda olan yedek pil sağlar. Pile geçiş zaman aldığı için UPS kadar güvenilir değildir.</span>
        <p class="q-not-title"> İşlemci(CPU) Mimarileri ve Özellikleri</p>
        <span class="q-not"> <span class="q-not-title">RISC: </span> komut seti nispeten küçük, özelliği Komutlar çok hızlı yürütülecek şekilde tasarlanır.</span>
        <span class="q-not"> <span class="q-not-title">CISC: </span> Karmaşık Komut Seti Bilgisayarı, </span>
        <span class="q-not"> <span class="q-not-title">Hyper-Threading (Intel): </span> CPU’da birden fazla kod parçası (iş parçacığı / thread) aynı anda yürütülür; tek CPU sanki iki CPU varmış gibi çalışır.</span>
        <span class="q-not"> <span class="q-not-title">HyperTransport (AMD): </span>  CPU ile Northbridge yongası arasında kurulan yüksek hızlı bağlantı.</span>
        <span class="q-not">CPU Tek seferde işleyebileceği veri miktarı → ön taraf veriyolu (FSB) boyutuna bağlıdır; bu veriyoluna CPU veriyolu veya işlemci veri veriyolu da denir.</span>
        <p class="q-not-title"> Çok çekirdekli işlemciler</p>
        <span class="q-not"> <span class="q-not-title">Single Core</span> Tüm işlemleri yürüten tek çekirdek. Anakart, birden fazla tekli işlemci için soketlere sahip olup çok işlemcili (multiprocessor) bilgisayar kurabilir</span>
        <span class="q-not"> <span class="q-not-title">Dual Core </span> Her iki çekirdek de aynı anda bilgi işleyebilir.</span>
        <span class="q-not"> <span class="q-not-title">Triple Core</span> Çekirdeklerinden biri devre dışı bırakılmış dört çekirdekli işlemci.</span>
        <span class="q-not"> <span class="q-not-title">Quad Core</span> Tek CPU içinde dört çekirdek.</span>
        <span class="q-not"> <span class="q-not-title">Hexa-Core</span> Altı çekirdek.</span>
        <span class="q-not"> <span class="q-not-title">Octa-Core</span> Sekiz çekirdek.</span>
        <span class="q-not"> <span class="q-not-title">GPU:</span> grafik işlemleri için gerekli matematiksel hesaplamaları yapan işlem birim</span>
        <span class="q-not"> <span class="q-not-title">Entegre GPU</span> CPU ile birlikte çalışır, sistem RAM’ini kullanır; düşük maliyetli ve enerji verimli.</span>
        <span class="q-not"> <span class="q-not-title">Ayrık (discrete) GPU:</span> grafik işlemleri için kendi video belleğine sahiptir.</span>
        <span class="q-not"> <span class="q-not-title">NX biti:</span> Bellek alanlarını belirli kötü amaçlı yazılım saldırılarına karşı korumaya yardımcı olur.</span>
        <p class="q-not-title">RAID Teknolojisi</p>
        <span class="q-not">RAID, verileri birden fazla depolama aygıtına dağıtarak performans, kapasite ve veri güvenilirliği sağlar.</span>
        <span class="q-not"> <span class="q-not-title">Şeritleme (Striping):</span> Verileri birden fazla sürücüye dağıtarak performansı artırır.</span>
        <span class="q-not"> <span class="q-not-title">Yansıtma / Aynalama (Mirroring):</span> Verilerin kopyalarını oluşturarak yedeklilik sağlar.</span>
        <span class="q-not"> <span class="q-not-title">Parite (Parity):</span>  Hata toleransi sağlar; kaybolan verilerin yeniden oluşturulmasına yardımcı olur</span>
        <span class="q-not"> <span class="q-not-title">Çift Parite (Double Parity):</span> Aynı anda iki sürücünün arızalanmasına karşı koruma.</span>
        <p class="q-not-title">RAID Seviyeleri</p>
        <span class="q-not"> <span class="q-not-title">RAID 0:</span> minimum 2 sürücüyle veriyi disklere bölerek maksimum hız ve tam kapasite sunar; ancak tek bir disk arızasında tüm veriler kaybolur.</span>
        <span class="q-not"> <span class="q-not-title">RAID 1:</span> en az 2 sürücü kullanarak veriyi birebir aynalar ve yüksek güvenlik sunar; bir disk bozulsa da sistem çalışır fakat kullanılabilir kapasite yarıya düşer.</span>
        <span class="q-not"> <span class="q-not-title">RAID 5:</span> en az 3 sürücüyle veriyi ve eşlik (parity) bilgisini dağıtarak okuma hızını ve depolama verimini artırır; tek disk toleransı sağlasa da yazma performansı düşüktür.</span>
        <span class="q-not"> <span class="q-not-title">RAID 6:</span> minimum 4 sürücü gerektirip çift eşlik bilgisi işleyerek aynı anda 2 diskin birden bozulmasına karşı koruma sağlar; fakat yazma hızı ve maliyeti olumsuz etkilenir.</span>
        <span class="q-not"> <span class="q-not-title">RAID 10:</span> en az 4 sürücüyle aynalama ve bölmeyi birleştirip hem en yüksek hızı hem de yüksek güvenliği sunar; ancak kapasitenin yalnızca %50'si kullanılabilir.</span>
        <span class="q-not">RAID 5 ve 6 gibi yüksek seviyeler hız ve büyük birimler için şeritleme + pariteyi birlikte kullanır.</span>
        <span class="q-not">10’dan yüksek RAID seviyeleri, daha düşük seviyeleri birleştirir.</span>
        <p class="q-not-title">Görüntü bağlantı noktaları</p>
        <span class="q-not"> <span class="q-not-title">VGA</span> Analog görüntü aktarımı; eski nesil bağlantı</span>
        <span class="q-not"> <span class="q-not-title">DVI</span> Sıkıştırılmamış dijital görüntü. Türleri</span>
        <span class="q-not"> <span class="q-not-title">HDMI </span> Dijital görüntü + ses ve kontrol sinyalleri.</span>
        <span class="q-not"> <span class="q-not-title">DisplayPort</span> VGA ve DVI’ın yerini almak üzere geliştirilmiş; yüksek bant genişliği ile görüntü ve ses</span>
        <p class="q-not-title">USB ve Lightning</p>
        <span class="q-not"> <span class="q-not-title">USB Tip-A</span> Dikdörtgen; masaüstü/dizüstü, televizyon, çeşitli cihazlarda yaygın.</span>
        <span class="q-not"> <span class="q-not-title">Mini-USB</span> Küçük cihazlarda; artık büyük ölçüde Micro-USB ve USB-C ile değişti.</span>
        <span class="q-not"> <span class="q-not-title">Micro-USB</span> Akıllı telefon, tablet vb. küçük boyutlu.</span>
        <span class="q-not"> <span class="q-not-title">USB Tip-B</span> Kare yapılı; özellikle yazıcı gibi çevre birimleri.</span>
        <span class="q-not"> <span class="q-not-title">USB Tip-C</span> Yuvarlatılmış dikdörtgen; çift yönlü takılabilir, modern; çevre birimleri ve mobil cihazlar</span>
        <span class="q-not"> <span class="q-not-title">Lightning</span> Apple tarafından geliştirilen 8 pimli tescilli konektör; güç ve veri aktarımı.</span>
        <p class="q-not-title">SATA / eSATA</p>
        <span class="q-not"> <span class="q-not-title">SATA veri kablosu:</span> anakart ile dahili depolama arasında veri aktarır; güç sağlamaz → depolama için ayrıca SATA güç kablosu kullanılır.</span>
        
        <p class="q-not-title">Kablo türleri</p>
        <span class="q-not"> <span class="q-not-title">Bükümlü çift (twisted pair)</span> Ethernet ağları ve telefon sistemlerinde kullanılan bakır kablolar:</span>
        <span class="q-not"> <span class="q-not-title">UTP (Korumasız Bükümlü Çift): </span> Yalıtımlı ve renk kodlu bakır teller; ağ bağlantılarında yaygın</span>
        <span class="q-not"> <span class="q-not-title">STP (Korumalı Bükümlü Çift):</span> Elektromanyetik girişimi azaltmak için folyo veya örgü ekranlama</span>
        <span class="q-not"> <span class="q-not-title">RJ-45: </span> Ethernet bağlantıları; UTP/STP sonlandırma konektörü.</span>
        <span class="q-not"> <span class="q-not-title">RJ-11: </span> Geleneksel telefon bağlantıları.</span>
        <span class="q-not"> <span class="q-not-title">Koaksiyel kablo</span> merkez iletken, yalıtım ve dış iletken ekran katmanları; dış ekran kabloyu EMI (elektromanyetik parazit)’ye karşı korur.</span>
        <span class="q-not"> <span class="q-not-title">RG-6:</span>  İnternet, Kablo TV, Uydu TV; yüksek bant genişliği/frekans</span>
        <span class="q-not"> <span class="q-not-title">RG-59:</span>  RG-6’ya göre daha ince; analog video ve CCTV gibi düşük bant genişliği.</span>
        <span class="q-not"> <span class="q-not-title">BNC:</span> Dijital veya analog ses ve video bağlantılarında konektör.</span>
        <span class="q-not"> <span class="q-not-title">SCSI (Small Computer System Interface): </span> çevre birimleri ve depolama aygıtlarını zincirleme (daisy chain) bağlayan eski standart. Harici SCSI kablosu eski tarayıcı ve yazıcıların bağlantısında. Dahili SCSI kablosu 50 pinli.</span>
        <span class="q-not"> <span class="q-not-title">IDE kablosu:</span> dahili SCSI kablosuna benzer, genellikle 40 pinli konektörler. Bir konektör anakarta, diğerleri IDE sürücülerine bağlanır.</span>
        <p class="q-not-title">Görüntü çözünürlükleri</p>
        <span class="q-not"> <span class="q-not-title">CGA</span> Renkli Grafik Adaptörü</span>
        <span class="q-not"> <span class="q-not-title">VGA</span> Video Grafik Dizisi</span>
        <span class="q-not"> <span class="q-not-title">SVGA</span> Süper Video Grafik Dizisi</span>
        <span class="q-not"> <span class="q-not-title">HD </span> Yüksek Çözünürlük (720p)</span>
        <span class="q-not"> <span class="q-not-title">FHD</span> Tam Yüksek Çözünürlük (1080p)</span>
        <span class="q-not"> <span class="q-not-title">QHD</span> Dörtlü Yüksek Çözünürlük (1440p)</span>
        <span class="q-not"> <span class="q-not-title">UHD </span> Ultra Yüksek Çözünürlük (4K)</span>
<!--        <p class="q-not-title">xxxxx</p>-->
<!--        <span class="q-not">xxxxx</span>-->
<!--        <span class="q-not"> <span class="q-not-title">xxxx</span> xxxxx</span>-->
    </div>
</div>

`
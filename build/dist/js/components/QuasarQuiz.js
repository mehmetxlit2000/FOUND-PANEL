export const template = `

<!--bilişim-->
<div class="q-cards">
<!--    <p class="q-not-title">1. HAFTA</p>-->
<!--    <div class="q-card">-->
<!--        <span class="q-not-groups"> <span class="q-not">Power Supply:</span>  Güç kaynağı, bir sistem ya da düzeneğin gereksinimi olan enerjiyi sağlamak için kullanılan birimlerin genel adı.</span>-->
<!--        <span class="q-not-groups"> <span class="q-not">Elektrostatik Deşarj (ESD):</span> farklı elektrik potansiyeline sahip iki nesnenin birbirine temas etmesi veya yakınlaşması sonucu aralarında biriken statik elektriğin ani ve kısa süreli olarak akması olayıdır.</span>-->
<!--        <span class="q-not-groups">Bir kişinin ESD'yi hissedebilmesi için en az 3.000 volt statik elektrik birikmesi gerekir.</span>-->
<!--        <span class="q-not-groups">Deşarj acıya neden olur veya ses çıkarırsa, şarj muhtemelen 10.000 voltun üzerindedir.</span>-->
<!--        <span class="q-not-groups">30 volttan daha az statik elektrik bir bilgisayar bileşenine zarar verebilir.</span>-->
<!--        <p class="q-not-title">Kasa Türleri</p>-->
<!--        <span class="q-not-groups"> <span class="q-not">Yatay Kasa:</span>  Genellikle masa üstüne konumlandırılan ve monitörün üzerine konulabileceği şekilde tasarlanmış, yatay formdaki geleneksel bilgisayar kasasıdır.</span>-->
<!--        <span class="q-not-groups"> <span class="q-not">Tam Kule (Full Tower):</span>  Dikey odaklı bir kasadır ve genellikle zeminde, masanın altında ya da yanında bulun</span>-->
<!--        <span class="q-not-groups"> <span class="q-not">Kompak Kasa:</span> Kompak Kasa: Tam boyutlu kulenin daha küçük bir versiyonudur ve yaygın olarak kurumsal ortamda bulunur.</span>-->
<!--        <span class="q-not-groups"> <span class="q-not">Hepsi Bir Yerde:</span>  Tüm bilgisayar sistemi bileşenleri ekrana entegre edilmiştir.</span>-->
<!--        <span>Duvar prizlerinden gelen elektrik alternatif akımdır (AC) . Ancak, bilgisayarın içindeki tüm bileşenler doğru akım (DC) gücüne ihtiyaç duyar. Burada gösterildiği gibi bilgisayarlar, DC güç elde etmek için, AC gücünü daha düşük gerilimli DC gücüne dönüştürmek amacıyla bir güç kaynağı kullanır. </span>-->
<!--        <p class="q-not-title">Güç Kaynağı (PSU)</p>-->
<!--        <span class="q-not-groups"> <span class="q-not">Gelişmiş Teknoloji (AT)</span>  Bu, artık kullanılmayan eski bilgisayarsistemleri için orijinal güç kaynağıdır</span>-->
<!--        <span class="q-not-groups"> <span class="q-not">AT Genişletilmiş (ATX)</span> AT'nin güncellenmiş sürümüdür ancak yine de eski olarak kabul edilir.</span>-->
<!--        <span class="q-not-groups"> <span class="q-not">ATX12V</span> Günümüzde piyasadaki en yaygın güç kaynağıdır. CPU'ya özel güç sağlamak için ikinci bir anakart konektörü içerir. ATX12V'nin çeşitli versiyonları vardır.</span>-->
<!--        <span class="q-not-groups"> <span class="q-not">EPS12V</span>  Başlangıçta ağ sunucuları için tasarlanmıştır, ancak şimdi yaygın olarak üst düzey masaüstümodellerinde kullanılmaktadır.</span>-->
<!--        <p class="q-not-title">Konektörler</p>-->
<!--        <span class="q-not-groups"> <span class="q-not">20 pinli veya 24 pinli slotlu konektör:</span> Ana karta ana güç sağlayan temel ve en büyük konektördür.</span>-->
<!--        <span class="q-not-groups"> <span class="q-not">SATA anahtarlı bağlayıcılar:</span> Sabit sürücüler (HDD/SSD) ve optik sürücüler gibi depolama birimlerini beslemek için kullanılır.</span>-->
<!--        <span class="q-not-groups"> <span class="q-not">Molex anahtarlı konektör:</span> Eski tip sabit sürücüler, optik sürücüler veya fanlar gibi bileşenler için kullanılan klasik 4 pinli güç konektörüdür</span>-->
<!--        <span class="q-not-groups"> <span class="q-not">Berg anahtarlı konektör:</span> Genellikle eski nesil disket sürücüleri (floppy disk) beslemek için kullanılan küçük tipte bir konektördür.</span>-->
<!--        <span class="q-not-groups"> <span class="q-not">4 pinli - 8 pinli yardımcı güç konektörü:</span> İşlemciye (CPU) ek güç sağlamak amacıyla anakart üzerindeki ilgili yuvaya takılır.</span>-->
<!--        <span class="q-not-groups"> <span class="q-not">6/8 pinli PCIe güç konektörü:</span> Ekran kartlarının (GPU) ihtiyaç duyduğu yüksek elektriksel gücü doğrudan karşılamak için kullanılır.</span>-->
<!--        <span class="q-not-groups"> <span class="q-not">Gerilim Değerleri:</span> En yaygın gerilimler 3,3 V, 5 V (dijital devreler için) ve 12 V'tur (motorlar, disk sürücüleri ve fanlar için).</span>-->
<!--        <span class="q-not-groups"> <span class="q-not">Güç Kaynağı Rayları:</span> Güç kaynakları tek raylı, çift raylı veya çok raylı olabilir. Ray, harici kabloların bağlı olduğu içindeki baskılı devre kartıdır (PCB).</span>-->
<!--        <span class="q-not-groups"> <span class="q-not">Ray Yapısı Farkı:</span> Tek rayda tüm konektörler aynı PCB'ye bağlanırken, çok raylı sistemde her konektör için ayrı PCB bulunur.</span>-->
<!--        <span class="q-not-groups"> <span class="q-not">Güç Dalgalanmaları:</span> Bilgisayar hafif dalgalanmaları tolere edebilir, ancak önemli sapmalar güç kaynağının arızalanmasına yol açabilir.</span>-->
<!--        <p class="q-not-title">Anakart</p>-->
<!--        <span class="q-not-groups">Elektronik bileşenleri birbirine bağlayan yolları (bus) veya elektrik yollarını içeren bir baskı devre kartıdır (PCB).</span>-->
<!--        <span class="q-not-groups"> <span class="q-not">Merkezi İşlem Birimi (CPU):</span> Bilgisayarın beyni olarak kabul edilir.</span>-->
<!--        <span class="q-not-groups"> <span class="q-not">Rastgele Erişimli Bellek (RAM):</span> Verileri ve uygulamaları depolamak için kullanılan geçici bir alandır</span>-->
<!--        <span class="q-not-groups"> <span class="q-not">Yonga Seti (Chipset):</span> Sistem donanımının CPU ve anakart ile nasıl etkileşime girdiğini kontrol eden entegre devrelerdir. Ayrıca anakarta ve konektör türlerine ne kadar bellek eklenebileceğini belirler.</span>-->
<!--        <span class="q-not-groups"> <span class="q-not">BIOS:</span> Bilgisayarı önyükler ve donanımlar arası veri akışını yönetir.</span>-->
<!--        <span class="q-not-groups"> <span class="q-not">UEFI:</span> Önyükleme için modern bir arabirim sağlar</span>-->
<!--        <span class="q-not-groups">Çoğu Çip Seti İki Tipten Oluşur çip seti yapısı iki ana köprüden meydana gelir.</span>-->
<!--        <p class="q-not-title">Kuzey Köprüsü (Northbridge):</p>-->
<!--        <span class="q-not-groups">RAM ve ekran kartına yüksek hızlı erişimi denetler.</span>-->
<!--        <span class="q-not-groups">CPU'nun bilgisayardaki diğer tüm bileşenlerle iletişim kurma hızını kontrol eder.</span>-->
<!--        <span class="q-not-groups">Video yeteneği bazen Kuzey Köprüsü'ne entegre edilir.</span>-->
<!--        -->
<!--        <p class="q-not-title">Güney Köprüsü (Southbridge):</p>-->
<!--        <span class="q-not-groups">CPU'nun sabit diskler, Evrensel Seri Veri Yolu (USB) bağlantı noktaları ve genişletme yuvaları gibi daha yavaş cihazlarla iletişim kurmasına izin verir.</span>-->
<!--        -->
<!--        <p class="q-not-title">Anakart Form Faktörleri</p>-->
<!--        <span class="q-not-groups">Kartın boyutu, şekli ve bileşenlerin fiziksel düzenini açıklar. Güç kaynağı türünü ve kasa şeklini doğrudan belirler.</span>-->
<!--        <span class="q-not-groups"> <span class="q-not">ATX:</span> En yaygın form faktörüdür. 12 x 9,6 inç boyutlarındadır ve tek bir 20 pinli konektörle bağlanır.</span>-->
<!--        <span class="q-not-groups"> <span class="q-not">Mikro-ATX:</span> ATX ile geriye dönük uyumlu, daha küçük (9,6 x 9,6 inç) bir form faktörüdür. Aynı çip setlerini kullanabilir ve standart ATX kasalara sığabilir; ancak daha az genişleme yuvasına sahiptir.</span>-->
<!--        <span class="q-not-groups"> <span class="q-not">ITX / Mini-ITX:</span> Küçük boyutlu cihazlar için tasarlanmış, çok az güç kullanan ve fan soğutmasına gerek duyulmayan popüler bir form faktörüdür. Genişleme için yalnızca tek bir PCI yuvası bulunur</span>-->
<!--        <p class="q-not-title">CPU</p>-->
<!--        <span class="q-not-groups">Komutların yorumlanmasından ve çalıştırılmasından sorumludur. Donanım ve yazılımlardan gelen talimatları işler, yorumlar ve bilgileri monitöre iletir.</span>-->
<!--        <span class="q-not-groups">CPU, bir paket içinde bulunan küçük bir mikroçiptir. Her stil anakart üzerinde belirli bir soket gerektirir. Yaygın üreticileri Intel ve AMD'dir.</span>-->
<!--        <span class="q-not-groups"> <span class="q-not">CPU Soketi:</span> Anakart ile işlemci arasındaki bağlantıdır.</span>-->
<!--        <span class="q-not-groups"> <span class="q-not">Pin Izgara Dizisi (PGA):</span> Pinler işlemci paketinin alt tarafındadır ve sıfır ekleme kuvveti (ZIF) kullanılarak ana kart CPU soketine yerleştirilir.</span>-->
<!--        <span class="q-not-groups"> <span class="q-not">Kara Izgara Dizisi (LGA):</span> PGA'nın aksine, LGA mimarisinde pinler işlemci üzerinde değil sokette bulunur.</span>-->
<!--        <p class="q-not-title">Bellek Türleri</p>-->
<!--        <span class="q-not-groups"> <span class="q-not">ROM (Salt Okunur Bellek):</span> Anakart ve devre kartlarında bulunur. Bilgisayarı önyükleme ve işletim sistemini yükleme gibi temel talimatları içerir. Kalıcıdır; bilgisayar kapatıldığında içerikleri silinmez</span>-->
<!--        <span class="q-not-groups"> <span class="q-not">Dinamik Rastgele Erişimli Bellek (RAM):</span> CPU tarafından erişilen veri ve programlar için geçici çalışma deposudur.  Uçucu bir bellek olup bilgisayar kapatıldığında içeriği silinir. Daha fazla RAM eklemek performansı artırır; az RAM olduğunda sistem sabit disk ile veri takası yapmak zorunda kalır. Takılabilecek maksimum miktar anakart ile sınırlıdır.</span>-->
<!--        <p class="q-not-title">ROM Türleri</p>-->
<!--        <span class="q-not-groups"> <span class="q-not">ROM (Read-Only Memory):</span> Bilgisayarı önyükleme (boot) ve işletim sistemini başlatma gibi temel talimatları içeren, bilgisayar kapatıldığında bile verileri kalıcı olarak saklayan salt okunur bellek türüdür.</span>-->
<!--        <span class="q-not-groups"> <span class="q-not">PROM: </span> Üretim sonrası yalnızca bir kez programlanabilen (yazılabilen) ve bir daha değiştirilemeyen ROM türüdür.</span>-->
<!--        <span class="q-not-groups"> <span class="q-not">EPROM: </span> Ultraviyole (UV) ışık kullanılarak üzerindeki verilerin silinebileceği ve yeniden programlanarak tekrar kullanılabilen ROM türüdür.</span>-->
<!--        <span class="q-not-groups"> <span class="q-not">EEPROM: </span> Ultraviyole ışığa gerek duyulmadan, tamamen elektriksel sinyaller yardımıyla silinip tekrar programlanabilen ROM türüdür.</span>-->
<!--        <p class="q-not-title">RAM ve DRAM türleri</p>-->
<!--        <span class="q-not-groups"> <span class="q-not">Statik RAM (SRAM):</span> Bilgisayarlarda önbellek (cache) olarak kullanılan, DRAM'e kıyasla daha hızlı olan ve elektriksel yenileme gerektirmeyen bellek türüdür.</span>-->
<!--        <span class="q-not-groups"> <span class="q-not">SDRAM (Synchronous DRAM):</span> İşlemcinin (CPU) hızına senkronize olarak çalışan, böylece veri aktarım hızını artıran senkronize dinamik RAM türüdür.</span>-->
<!--        <span class="q-not-groups"> <span class="q-not">DDR SDRAM (Double Data Rate SDRAM):</span> Saat sinyalinin hem yükselen hem de düşen kenarında veri aktarımı yaparak standart SDRAM'e göre veri bant genişliğini iki katına çıkaran bellek türüdür. Konnektöründe 184 pin ve tek bir çentik bulunur.  Standart voltaj olarak 2,5 V kullanır.</span>-->
<!--        <span class="q-not-groups"> <span class="q-not">DDR2 SDRAM:</span> DDR'a kıyasla daha yüksek hızlarda çalışırken daha düşük güç tüketimi sunan, saat döngüsü başına daha fazla veri aktarabilen ikinci nesil bellek teknolojisidir. Konnektöründe 240 pin bulunur. Daha düşük standart voltaj olarak 1,8 V kullanır.</span>-->
<!--        <span class="q-not-groups"> <span class="q-not">DDR3 SDRAM: </span> DDR2'ye göre daha düşük voltajla çalışarak enerji tasarrufu sağlayan ve daha yüksek veri aktarım hızlarına ulaşan üçüncü nesil bellek türüdür. 800 MHz'e kadar daha yüksek saat hızlarında çalışır. Konnektöründe 240 pin bulunur.</span>-->
<!--        <span class="q-not-groups"> <span class="q-not">DDR4 SDRAM:</span> Daha yüksek veri kapasiteleri, artırılmış bant genişliği ve daha düşük güç tüketimi (genellikle 1.2V) sunarak uzun süre endüstri standardı olmuş bellek teknolojisidir. 1600 MHz'e kadar daha yüksek saat hızlarında çalışır. Konnektöründe 288 pin bulunur. Birden çok bit hatasını algılamak için hata düzeltme kodu belleği (ECC bellek) gibi gelişmiş hata düzeltme özellikleri mevcuttur.</span>-->
<!--        <span class="q-not-groups"> <span class="q-not">GDDR SDRAM:</span> Özellikle ekran kartlarının (GPU) yoğun grafik ve video işleme ihtiyaçları için özel olarak optimize edilmiş, yüksek bant genişliğine sahip grafik bellek türüdür. </span>-->
<!--        <p class="q-not-title">Bellek Modülleri</p>-->
<!--        <span class="q-not-groups"> <span class="q-not">DIP (Dual Inline Paketi):</span> Bireysel bir bellek yongasıdır ve anakarta bağlı çift sıra pinleri bulunur.</span>-->
<!--        <span class="q-not-groups"> <span class="q-not">SIMM (Tek Sıralı Bellek Modülü):</span> Birkaç bellek yongasını tutan küçük bir devre kartıdır; 30-pin veya 72-pin konfigürasyonları vardır.</span>-->
<!--        <span class="q-not-groups"> <span class="q-not">DIMM Bellek (Çift Sıralı Bellek Modülü):</span> SDRAM ve DDR türlerindeki yongaları tutan devre kartıdır. 168-pin (SDRAM), 184-pin (DDR), 240-pin (DDR2 ve DDR3) ve 288-pin (DDR4) çeşitleri bulunur.</span>-->
<!--        <span class="q-not-groups"> <span class="q-not">SODIMM:</span> Küçük Anahat DIMM olarak geçer. Genellikle 72, 100, 144, 200, 204 ve 260 pinli konfigürasyonlara sahiptir. Alan tasarrufu sağladığı için laptop, yazıcı ve benzeri cihazlarda tercih edilir.</span>-->
<!--        <p class="q-not-title">Adaptör Kartları</p>-->
<!--        <span class="q-not-groups">Bilgisayara ek özellikler kazandırmak için anakart üzerindeki genişletme yuvalarına takılan kartlardır; bazıları anakarta tümleşik de gelebilir. Adaptör kartı konektörünün türü, anakart üzerindeki genişletme yuvasıyla tam olarak eşleşmelidir.</span>-->
<!--        <span class="q-not-groups"> <span class="q-not">Ses Adaptörü:</span> Bilgisayarın ses giriş ve çıkışlarını (mikrofon, hoparlör vb.) yönetmeyi sağlar.</span>-->
<!--        <span class="q-not-groups"> <span class="q-not">eSATA Kartı: </span> Harici SATA cihazlarının harici bağlantı noktaları üzerinden yüksek hızda bağlanmasına olanak tanır.</span>-->
<!--        <p class="q-not-title">Genişletme yuvası türleri</p>-->
<!--        <span class="q-not-groups"> <span class="q-not">PCI: </span>  standart genişleme yuvası</span>-->
<!--        <span class="q-not-groups"> <span class="q-not">PCIe (PCI Express):</span> x1, x4, x8 ve x16 yuvaları vardır</span>-->
<!--        <span class="q-not-groups"> <span class="q-not">Mini PCI:</span> Dizüstü bilgisayarlarda kullanılan PCI yuvası sürümü; Tip I, Tip II ve Tip III form faktörleri vardır</span>-->
<!--        <span class="q-not-groups"> <span class="q-not">Yükseltici (riser) kart:</span> Bilgisayara ek genişleme yuvaları ekleyen karttır.</span>-->
<!--        <p class="q-not-title">Depolama Cihazları Türleri</p>-->
<!--        <span class="q-note">Verilerin kalıcı olarak depolanmasını sağlar. Güç kaybettiğinde veriler saklanır ve bir sonraki güç verilişinde kullanılabilir. Bazı sürücüler sabit, bazıları çıkarılabilir medyaya sahiptir. Okuma/yazma veya yalnızca erişim (yazılamaz) özellikleri değişebilir. Manyetik Sürücüler: HDD ve teyp sürücüleri, Diğer Türler: Katı hal (SSD) veya optik gibi</span>-->
<!--        <p class="q-not-title">Depolama Cihazı Arabirimleri</p>-->
<!--        <span class="q-not-groups"> <span class="q-not">SATA (Seri ATA):</span> Dahili depolama aygıtlarını anakarta bağlar; veri aktarım biçimini, hızını, kablo ve konektör özelliklerini tanımlar.</span>-->
<!--        <span class="q-not-groups">Paralel ATA (PATA): Eski bağlantı yöntemlerindendir; IDE 8.3 Mb/s ve EIDE 16.6 Mb/s standartlarını içerir.</span>-->
<!--        <span class="q-not-groups">SCSI / SAS: Küçük Bilgisayar Sistemi Arabirimi (SCSI) orijinalinde paralel kullanan eski bir standartken, sunucu depolamada kullanılan popüler yeni sürümü Seri Bağlı SCSI (SAS) olarak geliştirilmiştir.</span>-->
<!--        <span class="q-not-groups">SATA 1: Maksimum 1.5 Gb/s veri aktarım hızına sahiptir.</span>-->
<!--        <span class="q-not-groups">SATA 2: Maksimum 3.0 Gb/s veri aktarım hızına sahiptir.</span>-->
<!--        <span class="q-not-groups">SATA 3: Maksimum 6.0 Gb/s hız sunan en hızlı versiyondur.</span>-->

<!--    </div>-->
<!--    <p class="q-not-title">2. HAFTA</p>-->
<!--    <div class="q-cards">-->
<!--        <p class="q-not-title">İşlemci Hızı ve Özellikleri</p>-->
<!--        <span class="q-not-groups">İşlemci Hızı GHz cinsinden ifade edilir.</span>-->
<!--        <span class="q-not-groups">Performans Sınırlayıcılar İşlemci performansını sınırlayan temel faktörler iletim gecikmesi ve ısı üretimidir; hız arttıkça üretilen ısı miktarı da artar.</span>-->
<!--        <span class="q-not-groups">FSB (Ön Veri Yolu) CPU ile diğer bileşenler arasındaki veri iletişimini sağlayan veriyoludur; frekansı MHz cinsinden ölçülür ve CPU çalışma frekansı saat çarpanı ile ilişkilidir.</span>-->
<!--        <span class="q-not-groups">Veri İşleme Kapasitesi İşlemciler, veri işleme kapasitelerine göre 32 bit ve 64 bit olarak sınıflandırılır</span>-->
<!--        <span class="q-not-groups"> <span class="q-not">Kasa ve Güç Kaynağı Uyumu:</span> Güvenli ve verimli bir sistem oluşturmak için doğru kasa, uyumlu anakart ve yeterli güç kaynağı bir arada seçilmelidir. Güç kaynağı (PSU), AC gerilimi DC'ye dönüştürerek sistemin güç ihtiyacını karşılar; olası bileşen eklemeleri göz önüne alınarak toplam güç ihtiyacının üzerine en az %25 daha fazla kapasite içermelidir.</span>-->
<!--        <span class="q-not-groups"> <span class="q-not">Anakart, İşlemci ve Soğutma:</span> Anakart seçimi yapılırken işlemci soket yapısının uyumlu olmasına dikkat edilmeli, işlemci yuvaya doğru şekilde oturtulup sabitlenmelidir. Çalışma sırasında yüksek sıcaklıklara ulaşabilen işlemciler için uygun miktarda termal macun uygulanmalı, soket türüne ve kasa boyutuna uygun bir soğutma sistemi tercih edilmelidir.</span>-->
<!--        <span class="q-not-groups"> <span class="q-not">Bellek (RAM) ve Depolama Sürücüleri:</span> RAM modülleri anakart üzerindeki yuvalara doğru hizalanarak kilitlenmeli, olası sistem kilitlenmelerinde bellek testi yapılmalıdır. Verilerin kalıcı olarak saklanmasını sağlayan sabit sürücüler (HDD, SSD veya SSHD) anakart arabirimleriyle uyumlu seçilmeli ve kasadaki uygun genişlikteki 3.5 inç veya 2.5 inçlik yuvalara monte edilmelidir.</span>-->
<!--        <span class="q-not-groups"> <span class="q-not">Genişletme Kartları ve Ön Panel Bağlantıları:</span> Bilgisayara ek işlevler kazandırmak amacıyla ekran kartı, ses kartı veya ağ kartı gibi adaptörler PCIe yuvalarına takılır. Kasa üzerindeki güç ve reset düğmeleri, LED lambalar ve USB kabloları anakart üzerindeki sistem paneli konektörlerine pin numaralarına ve artı yönlerine dikkat edilerek bağlanmalıdır</span>-->
<!--        <p class="q-not-title">Özel Notlar</p>-->
<!--        <span class="q-not-groups">SSHD = SSD + HDD</span>-->
<!--        <span class="q-not-groups">. Bellek kartı formatları: SD, microSD, CompactFlash, Memory Stick.</span>-->
<!--        <span class="q-not-groups">Ön panel: PWR_SW, RESET, PWR_LED, HDD_LED, SPEAKER; 1. pin = ok / + işareti;konektörlerde yönlendirme yok.</span>-->
<!--    </div>-->
<!--        <p class="q-not-title">3. HAFTA</p>-->
<!--    <div class="q-cards">-->
<!--        <p class="q-not-title">BIOS’un görevi</p>-->
<!--        <span class="q-not-groups">BIOS, anakartın çalışması için gerekli temel yazılım bileşenidir.</span>-->
<!--        <span class="q-not-groups">POST ile birlikte sürücüleri, belleği ve genişletme yuvalarını kontrol ede</span>-->
<!--        <span class="q-not-groups">SATA ve USB bağlantı noktalarının yapılandırılmasını sağlar, Anakartın güç yönetimi ayarlarını kontrol eder.</span>-->
<!--        <span class="q-not-groups"> <span class="q-not"> POST (Açılışta Otomatik Test): </span> Bilgisayar açıldığında BIOS temel donanım bileşenlerini kontrol eder; bu kontrole denir. Donanım sorunları hata mesajları veya bip kodları ile bildirilir. POST kontrolünü test etmek için RAM modülleri çıkarılarak bip kodu dinlenebilir.</span>-->
<!--        <span class="q-not-groups"> <span class="q-not">CMOS: </span> BIOS yapılandırma ayarları CMOS belleğinde saklanır.  CMOS belleği ayarların korunması için bir pil ile desteklenir (CMOS pili). Saat ve tarihin sürekli yanlış olmas → CMOS pilinin zayıfladığını gösterebilir.</span>-->
<!--        <span class="q-not-groups"> <span class="q-not">UEFI: </span> Birleşik Genişletilebilir Ürün Yazılımı Arayüzü. Günümüzde çok sayıdabilgisayar kullanır. Geleneksel BIOS’a göre daha gelişmiş yapılandırma ve güvenlik özellikleri sunar.</span>-->
<!--        <span class="q-not-groups"> <span class="q-not">Secure Boot</span> Sadece güvenilir yazılım başlatır</span>-->
<!--        <span class="q-not-groups"> <span class="q-not">LoJack</span> Kayıp/çalıntı cihaz izleme</span>-->
<!--        <span class="q-not-groups"> <span class="q-not">TPM</span> Şifreleme anahtarlarını saklayan güvenlik çipi</span>-->
<!--        <span class="q-not-groups"> <span class="q-not">Flashing the BIOS </span> BIOS’u yazılımsal güncelleme</span>-->
<!--        <p class="q-not-title">Güç Dalgalanmaları ve Koruma</p>-->
<!--        <span class="q-not-groups"> <span class="q-not">Blackout (Elektrik kesintisi)</span> AC gücünün tamamen kesilmesi.</span>-->
<!--        <span class="q-not-groups"> <span class="q-not">Brownout  (Gerilim düşüşü): </span> Bir süre devam eden AC güç gerilim seviyesinin azalması</span>-->
<!--        <span class="q-not-groups"> <span class="q-not">Noise  (Gürültü): </span> Jeneratörlerden ve yıldırımdan kaynaklanan parazit.</span>-->
<!--        <span class="q-not-groups"> <span class="q-not">Spike  (Gerilim sıçraması): </span> Kısa süre süren, hattaki normal gerilimin %100’ünü aşan ani artış.</span>-->
<!--        <span class="q-not-groups"> <span class="q-not">Power Surge  (Aşırı gerilim): </span> Normal elektrik akımının üzerinde ani ve şiddetli gerilim artışı.</span>-->
<!--        <p class="q-not-title">Koruma cihazları</p>-->
<!--        <span class="q-not-groups"> <span class="q-not">Aşırı gerilim koruyucu (Surge Protector): </span>  Hat üzerindeki fazla gerilimi toprağa yönlendirir.</span>-->
<!--        <span class="q-not-groups"> <span class="q-not">Kesintisiz güç kaynağı (UPS): </span> Elektrik kesintilerine karşı korur; voltaj düşüşü veya tam kesintide istikrarlı güç kalitesi sunar.</span>-->
<!--        <span class="q-not-groups"> <span class="q-not">Yedek güç kaynağı (SPS – Standby Power Supply): </span> Normal çalışmada bekleme modunda olan yedek pil sağlar. Pile geçiş zaman aldığı için UPS kadar güvenilir değildir.</span>-->
<!--        <p class="q-not-title"> İşlemci(CPU) Mimarileri ve Özellikleri</p>-->
<!--        <span class="q-not-groups"> <span class="q-not">RISC: </span> komut seti nispeten küçük, özelliği Komutlar çok hızlı yürütülecek şekilde tasarlanır.</span>-->
<!--        <span class="q-not-groups"> <span class="q-not">CISC: </span> Karmaşık Komut Seti Bilgisayarı, </span>-->
<!--        <span class="q-not-groups"> <span class="q-not">Hyper-Threading (Intel): </span> CPU’da birden fazla kod parçası (iş parçacığı / thread) aynı anda yürütülür; tek CPU sanki iki CPU varmış gibi çalışır.</span>-->
<!--        <span class="q-not-groups"> <span class="q-not">HyperTransport (AMD): </span>  CPU ile Northbridge yongası arasında kurulan yüksek hızlı bağlantı.</span>-->
<!--        <span class="q-not-groups">CPU Tek seferde işleyebileceği veri miktarı → ön taraf veriyolu (FSB) boyutuna bağlıdır; bu veriyoluna CPU veriyolu veya işlemci veri veriyolu da denir.</span>-->
<!--        <p class="q-not-title"> Çok çekirdekli işlemciler</p>-->
<!--        <span class="q-not-groups"> <span class="q-not">Single Core</span> Tüm işlemleri yürüten tek çekirdek. Anakart, birden fazla tekli işlemci için soketlere sahip olup çok işlemcili (multiprocessor) bilgisayar kurabilir</span>-->
<!--        <span class="q-not-groups"> <span class="q-not">Dual Core </span> Her iki çekirdek de aynı anda bilgi işleyebilir.</span>-->
<!--        <span class="q-not-groups"> <span class="q-not">Triple Core</span> Çekirdeklerinden biri devre dışı bırakılmış dört çekirdekli işlemci.</span>-->
<!--        <span class="q-not-groups"> <span class="q-not">Quad Core</span> Tek CPU içinde dört çekirdek.</span>-->
<!--        <span class="q-not-groups"> <span class="q-not">Hexa-Core</span> Altı çekirdek.</span>-->
<!--        <span class="q-not-groups"> <span class="q-not">Octa-Core</span> Sekiz çekirdek.</span>-->
<!--        <span class="q-not-groups"> <span class="q-not">GPU:</span> grafik işlemleri için gerekli matematiksel hesaplamaları yapan işlem birim</span>-->
<!--        <span class="q-not-groups"> <span class="q-not">Entegre GPU</span> CPU ile birlikte çalışır, sistem RAM’ini kullanır; düşük maliyetli ve enerji verimli.</span>-->
<!--        <span class="q-not-groups"> <span class="q-not">Ayrık (discrete) GPU:</span> grafik işlemleri için kendi video belleğine sahiptir.</span>-->
<!--        <span class="q-not-groups"> <span class="q-not">NX biti:</span> Bellek alanlarını belirli kötü amaçlı yazılım saldırılarına karşı korumaya yardımcı olur.</span>-->
<!--        <p class="q-not-title">RAID Teknolojisi</p>-->
<!--        <span class="q-not-groups">RAID, verileri birden fazla depolama aygıtına dağıtarak performans, kapasite ve veri güvenilirliği sağlar.</span>-->
<!--        <span class="q-not-groups"> <span class="q-not">Şeritleme (Striping):</span> Verileri birden fazla sürücüye dağıtarak performansı artırır.</span>-->
<!--        <span class="q-not-groups"> <span class="q-not">Yansıtma / Aynalama (Mirroring):</span> Verilerin kopyalarını oluşturarak yedeklilik sağlar.</span>-->
<!--        <span class="q-not-groups"> <span class="q-not">Parite (Parity):</span>  Hata toleransi sağlar; kaybolan verilerin yeniden oluşturulmasına yardımcı olur</span>-->
<!--        <span class="q-not-groups"> <span class="q-not">Çift Parite (Double Parity):</span> Aynı anda iki sürücünün arızalanmasına karşı koruma.</span>-->
<!--        <p class="q-not-title">RAID Seviyeleri</p>-->
<!--        <span class="q-not-groups"> <span class="q-not">RAID 0:</span> minimum 2 sürücüyle veriyi disklere bölerek maksimum hız ve tam kapasite sunar; ancak tek bir disk arızasında tüm veriler kaybolur.</span>-->
<!--        <span class="q-not-groups"> <span class="q-not">RAID 1:</span> en az 2 sürücü kullanarak veriyi birebir aynalar ve yüksek güvenlik sunar; bir disk bozulsa da sistem çalışır fakat kullanılabilir kapasite yarıya düşer.</span>-->
<!--        <span class="q-not-groups"> <span class="q-not">RAID 5:</span> en az 3 sürücüyle veriyi ve eşlik (parity) bilgisini dağıtarak okuma hızını ve depolama verimini artırır; tek disk toleransı sağlasa da yazma performansı düşüktür.</span>-->
<!--        <span class="q-not-groups"> <span class="q-not">RAID 6:</span> minimum 4 sürücü gerektirip çift eşlik bilgisi işleyerek aynı anda 2 diskin birden bozulmasına karşı koruma sağlar; fakat yazma hızı ve maliyeti olumsuz etkilenir.</span>-->
<!--        <span class="q-not-groups"> <span class="q-not">RAID 10:</span> en az 4 sürücüyle aynalama ve bölmeyi birleştirip hem en yüksek hızı hem de yüksek güvenliği sunar; ancak kapasitenin yalnızca %50'si kullanılabilir.</span>-->
<!--        <span class="q-not-groups">RAID 5 ve 6 gibi yüksek seviyeler hız ve büyük birimler için şeritleme + pariteyi birlikte kullanır.</span>-->
<!--        <span class="q-not-groups">10’dan yüksek RAID seviyeleri, daha düşük seviyeleri birleştirir.</span>-->
<!--        <p class="q-not-title">Görüntü bağlantı noktaları</p>-->
<!--        <span class="q-not-groups"> <span class="q-not">VGA</span> Analog görüntü aktarımı; eski nesil bağlantı</span>-->
<!--        <span class="q-not-groups"> <span class="q-not">DVI</span> Sıkıştırılmamış dijital görüntü. Türleri</span>-->
<!--        <span class="q-not-groups"> <span class="q-not">HDMI </span> Dijital görüntü + ses ve kontrol sinyalleri.</span>-->
<!--        <span class="q-not-groups"> <span class="q-not">DisplayPort</span> VGA ve DVI’ın yerini almak üzere geliştirilmiş; yüksek bant genişliği ile görüntü ve ses</span>-->
<!--        <p class="q-not-title">USB ve Lightning</p>-->
<!--        <span class="q-not-groups"> <span class="q-not">USB Tip-A</span> Dikdörtgen; masaüstü/dizüstü, televizyon, çeşitli cihazlarda yaygın.</span>-->
<!--        <span class="q-not-groups"> <span class="q-not">Mini-USB</span> Küçük cihazlarda; artık büyük ölçüde Micro-USB ve USB-C ile değişti.</span>-->
<!--        <span class="q-not-groups"> <span class="q-not">Micro-USB</span> Akıllı telefon, tablet vb. küçük boyutlu.</span>-->
<!--        <span class="q-not-groups"> <span class="q-not">USB Tip-B</span> Kare yapılı; özellikle yazıcı gibi çevre birimleri.</span>-->
<!--        <span class="q-not-groups"> <span class="q-not">USB Tip-C</span> Yuvarlatılmış dikdörtgen; çift yönlü takılabilir, modern; çevre birimleri ve mobil cihazlar</span>-->
<!--        <span class="q-not-groups"> <span class="q-not">Lightning</span> Apple tarafından geliştirilen 8 pimli tescilli konektör; güç ve veri aktarımı.</span>-->
<!--        <p class="q-not-title">SATA / eSATA</p>-->
<!--        <span class="q-not-groups"> <span class="q-not">SATA veri kablosu:</span> anakart ile dahili depolama arasında veri aktarır; güç sağlamaz → depolama için ayrıca SATA güç kablosu kullanılır.</span>-->
<!--        -->
<!--        <p class="q-not-title">Kablo türleri</p>-->
<!--        <span class="q-not-groups"> <span class="q-not">Bükümlü çift (twisted pair)</span> Ethernet ağları ve telefon sistemlerinde kullanılan bakır kablolar:</span>-->
<!--        <span class="q-not-groups"> <span class="q-not">UTP (Korumasız Bükümlü Çift): </span> Yalıtımlı ve renk kodlu bakır teller; ağ bağlantılarında yaygın</span>-->
<!--        <span class="q-not-groups"> <span class="q-not">STP (Korumalı Bükümlü Çift):</span> Elektromanyetik girişimi azaltmak için folyo veya örgü ekranlama</span>-->
<!--        <span class="q-not-groups"> <span class="q-not">RJ-45: </span> Ethernet bağlantıları; UTP/STP sonlandırma konektörü.</span>-->
<!--        <span class="q-not-groups"> <span class="q-not">RJ-11: </span> Geleneksel telefon bağlantıları.</span>-->
<!--        <span class="q-not-groups"> <span class="q-not">Koaksiyel kablo</span> merkez iletken, yalıtım ve dış iletken ekran katmanları; dış ekran kabloyu EMI (elektromanyetik parazit)’ye karşı korur.</span>-->
<!--        <span class="q-not-groups"> <span class="q-not">RG-6:</span>  İnternet, Kablo TV, Uydu TV; yüksek bant genişliği/frekans</span>-->
<!--        <span class="q-not-groups"> <span class="q-not">RG-59:</span>  RG-6’ya göre daha ince; analog video ve CCTV gibi düşük bant genişliği.</span>-->
<!--        <span class="q-not-groups"> <span class="q-not">BNC:</span> Dijital veya analog ses ve video bağlantılarında konektör.</span>-->
<!--        <span class="q-not-groups"> <span class="q-not">SCSI (Small Computer System Interface): </span> çevre birimleri ve depolama aygıtlarını zincirleme (daisy chain) bağlayan eski standart. Harici SCSI kablosu eski tarayıcı ve yazıcıların bağlantısında. Dahili SCSI kablosu 50 pinli.</span>-->
<!--        <span class="q-not-groups"> <span class="q-not">IDE kablosu:</span> dahili SCSI kablosuna benzer, genellikle 40 pinli konektörler. Bir konektör anakarta, diğerleri IDE sürücülerine bağlanır.</span>-->
<!--        <p class="q-not-title">Görüntü çözünürlükleri</p>-->
<!--        <span class="q-not-groups"> <span class="q-not">CGA</span> Renkli Grafik Adaptörü</span>-->
<!--        <span class="q-not-groups"> <span class="q-not">VGA</span> Video Grafik Dizisi</span>-->
<!--        <span class="q-not-groups"> <span class="q-not">SVGA</span> Süper Video Grafik Dizisi</span>-->
<!--        <span class="q-not-groups"> <span class="q-not">HD </span> Yüksek Çözünürlük (720p)</span>-->
<!--        <span class="q-not-groups"> <span class="q-not">FHD</span> Tam Yüksek Çözünürlük (1080p)</span>-->
<!--        <span class="q-not-groups"> <span class="q-not">QHD</span> Dörtlü Yüksek Çözünürlük (1440p)</span>-->
<!--        <span class="q-not-groups"> <span class="q-not">UHD </span> Ultra Yüksek Çözünürlük (4K)</span>-->
<!--&lt;!&ndash;        <p class="q-not-title">xxxxx</p>&ndash;&gt;-->
<!--&lt;!&ndash;        <span class="q-not-groups">xxxxx</span>&ndash;&gt;-->
<!--&lt;!&ndash;        <span class="q-not-groups"> <span class="q-not">xxxx</span> xxxxx</span>&ndash;&gt;-->
<!--    </div>-->
<!--</div>-->

<!--yz-->
<!--<div class="q-cards">-->
<!--    <div class="q-card">-->
<!--        <span class="q-not">İnsan gibi düşünen sistemler: Beynin ve zihnin nasıl çalıştığını modeller.</span>-->
<!--        <span class="q-not">Rasyonel düşünen sistemler: Mantık kurallarıyla doğru sonuca ulaşır.</span>-->
<!--        <span class="q-not">İnsan gibi davranan sistemler: Dışarıdan bakıldığında insandan ayırt edilemez davranış. Ölçütü Turing testidir.</span>-->
<!--        <span class="q-not">Rasyonel davranan sistemler: Hedefe ulaşmak için mevcut bilgiyle en iyi kararı veren sistemler.</span>-->
<!--        <span class="q-not">Otomasyon: Önceden belirlenmiş adımların insan müdahalesi olmadan tekrarlanması.</span>-->
<!--        <span class="q-not">Yapay Zeka: Yeniden öğrenen, belirsizlik altında karar veren, yeni durumlara uyum sağlayan sistemlerdir.</span>-->
<!--        <span class="q-not">Turing Testi: Sorgulayıcı sadece yazışarak (ses ve görüntü olmadan) her iki tarafa istediği bilgileri sorar.</span>-->
<!--        <span class="q-not">Çin Odası (John Searle, 1980): Sembolleri kurala göre işlemek anlamak değildir. Bilgisayar da aynı şeyi yapar; Turing testinin eleştirisidir.</span>-->
<!--        <span class="q-not">1956 Dartmouth Konferansı: YZ'nin doğum günü; Yapay Zeka terimi 1955'te McCarthy'nin yazdığı proje önerisinde ilk kez kullanıldı.</span>-->
<!--        <span class="q-not">ELIZA (1966): MIT'de Joseph Weizenbaum'un geliştirdiği, bir psikoterapisti taklit eden ilk sohbet programlarından biri.</span>-->
<!--        <span class="q-not">ELIZA Etkisi: İnsanların anlamadığı hâlde anlıyormuş gibi görünen makinelere gerçek anlama ve duygu atfetme eğilimi.</span>-->
<!--        <span class="q-not">Birinci YZ Kışı (1974–1980): Abartılı beklentilerin karşılanmaması.</span>-->
<!--        <span class="q-not">Uzman Sistemler Dönemi: Genel zeka yerine dar bir alandaki uzman bilgisini binlerce "EĞER ... İSE..." kuralına dökmek.</span>-->
<!--        <span class="q-not">İkinci YZ Kışı: Uzman sistemlerde kural sayısı arttıkça kurallar birbirine karıştı.</span>-->
<!--        <span class="q-not">Dar YZ: Tek bir görevde veya dar bir alanda çok başarılı. Bugünkü tüm YZ türleri dardır.</span>-->
<!--        <span class="q-not">Genel YZ: İnsan gibi her türlü zihinsel görevi öğrenip yapan görev.</span>-->
<!--        <span class="q-not">Süper YZ: İnsanı aşan zeka.</span>-->
<!--        <span class="q-not">Reaktif makineler: Geçmişi hatırlamaz, sadece anlık duruma tepki verir.</span>-->
<!--        <span class="q-not">Sınırlı hafızalı makineler: Yakın geçmişteki verileri kısa süre kullanır.</span>-->
<!--        <span class="q-not">Zihin kuramı: Başkalarının duygularını, inançlarını ve niyetlerini anlar.</span>-->
<!--        <span class="q-not">Öz farkındalık: Kendi varlığının ve iç durumlarının bilincinde dar...</span>-->
<!--        <span class="q-not">Makine öğrenmesi: YZ'nin, açıkça programlanmadan veriden öğrenen alt küme.</span>-->
<!--        <span class="q-not">Derin öğrenme: Çok katmanlı yapay sinir ağlarını kullanan makine öğrenmesi.</span>-->
<!--        <span class="q-not">Denetimli öğrenme: Doğru cevabı belli örneklerle öğrenme.</span>-->
<!--        <span class="q-not">Denetimsiz öğrenme: Etiket olmadan verideki gizli grupları ve kalıpları bulma.</span>-->
<!--        <span class="q-not">Pekiştirmeli öğrenme: Deneme-yanılma ve ödül-ceza ile öğrenme.</span>-->
<!--        <span class="q-not">Bilgisayarlı görü: Görüntü ve videodan anlamlı bilgi çıkaran YZ ajanı.</span>-->
<!--        <span class="q-not">Doğal dil işleme: Yazılı ve sözlü insan dilini işleyen, anlayan, üreten YZ türü.</span>-->
<!--        <span class="q-not">Etiket: Bir örneğin doğru cevabı.</span>-->
<!--        <span class="q-not">Büyük dil modeli: Devasa modellerle eğitilmiş, metin anlayan ve üreten model.</span>-->
<!--        <span class="q-not">Halüsinasyon: Modelin gerçek olmayan bilgiyi doğruymuş gibi üretmesi.</span>-->
<!--        <span class="q-not">Ajan: Çevresini algılayıp hedefe göre eylem yapan sistem.</span>-->
<!--        <span class="q-not">Algı dizisi: Ajanın başlangıçtan o ana kadar aldığı tüm algıların kaydıdır; rasyonel ajan sonucu önceden bilmese de elindeki bilgiyle en iyi kararı seçer.</span>-->
<!--        <span class="q-not">PEAS: Performance (başarı ölçütü), Environment (ortam), Actuators (eyleyiciler: ortama etki eden parçalar), Sensors (algılayıcılar: ortamdan veri toplayan parçalar).</span>-->
<!--        <span class="q-not">Basit refleks ajan: Hafızasızdır; sadece anlık algıya bakıp "eğer-ise" kuralıyla tepki verir, ortamı tam göremezse hata yapabilir.</span>-->
<!--        <span class="q-not">Model tabanlı ajan: Göremediği kısımlar için dünyanın nasıl değiştiğine dair iç durum ve hafıza tutar.</span>-->
<!--        <span class="q-not">Hedef tabanlı ajan: Belirlenen hedefe ulaşmak için eylemlerini planlar.</span>-->
<!--        <span class="q-not">Fayda tabanlı ajan: Hedefe giden yolları fayda puanıyla değerlendirip en iyisini seçer.</span>-->
<!--        <span class="q-not">Öğrenen ajan: Deneyimlerinden geri bildirim alarak performansını zaman içinde iyileştirir.</span>-->
<!--        <span class="q-not">Gözlemlenebilirlik: Tüm durum görünüyorsa tam gözlemlenebilir (satranç); gizli bilgi/kör nokta/ölçülemeyen veri varsa kısmen gözlemlenebilirdir (poker, trafik, serada kök nemi).</span>-->
<!--        <span class="q-not">Belirlilik: Eylem sonucu kesinse belirli/determinist; şans veya aniden değişen hava gibi etkenler varsa belirsiz/stokastiktir.</span>-->
<!--        <span class="q-not">Statik ve Dinamik ortam: Ajan düşünürken ortam değişmiyorsa statik (bulmaca), değişiyorsa dinamiktir (trafik, akıllı sera).</span>-->
<!--        <span class="q-not">Epizodik ve Ardışık ortam: Kararlar birbirinden bağımsızsa epizodik (kusurlu parça ayıklama), sonraki durumları etkiliyorsa ardışıktır.</span>-->
<!--        <span class="q-not">Ayrık ve Sürekli ortam: Durum ve hamleler sayılı/sınırlıysa ayrık (satranç); hız, konum veya zaman gibi değerler kesintisizse süreklidir (otonom araç).</span>-->
<!--        <span class="q-not">BFS (Genişlik öncelikli arama): Düğümleri kuyruk (FIFO) yapısında tutar, ağacı seviye seviye dolaşır; adım maliyetleri eşitse en az adımlı çözümü garanti eder, ancak yol uzunlukları farklıysa adım sayısı az olan yol en kısa mesafeli olmayabilir (geniş ağaçlarda bellek kullanımı daha yüksektir).</span>-->
<!--        <span class="q-not">DFS (Derinlik öncelikli arama): Düğümleri yığın (LIFO) yapısında tutar, bir dalın sonuna kadar iner ve komşu sırasına göre ilerler; belleği daha tutumlu kullanabilir ancak sonsuz derinlikte veya ziyaret kontrolü olmayan döngülü graflarda takılabilir.</span>-->
<!--        <span class="q-not">Sınıflandırma: Çıktının sınırlı sayıda kategoriden biri olduğu problemdir (örneğin kredi geri ödemesi evet/hayır veya kargo gecikmesi 0/1).</span>-->
<!--        <span class="q-not">Regresyon: Tahmin edilen çıktının sürekli bir sayı olduğu problemdir (örneğin gelecek ayki elektrik tüketimi veya gecikme süresi).</span>-->
<!--        <span class="q-not">Aşırı öğrenme (Overfitting): Eğitim verisini ezberleyip yeni/test verisinde başarısız olmaktır (örneğin eğitim %99, test %62); daha çok ve çeşitli veriyle (ve modeli sadeleştirerek) azaltılabilir.</span>-->
<!--        <span class="q-not">Eksik öğrenme (Underfitting): Modelin eğitim verisinde bile başarısız olup örüntüyü yakalayamamasıdır (örneğin eğitim %55, test %53).</span>-->
<!--    </div>-->
<!--</div>-->

<!--veri-->
<div class="q-cards">
    <div class="q-card">
        <span class="q-not">Veri Bilimine Giriş</span>
        <span class="q-not">Veri: İşlenmemiş, tek başına anlamı sınırlı ham sayı, metin veya kayıtlardır. (Örn: 38,5, Kırmızı, 14:00)</span>
        <span class="q-not">Enformasyon: Verinin bağlam kazanmış, düzenlenmiş ve sınıflandırılmış halidir ("Ne, nerede, ne zaman?" sorularını yanıtlar). (Örn: "Ahmet'in saat 14:00'teki vücut ateşi 38,5°C'dir.")</span>
        <span class="q-not">Bilgi: Enformasyonun deneyim ve kurallarla birleşip yorumlanmasıdır ("Nasıl?" sorusunu yanıtlar). (Örn: "38°C üzerindeki ateş enfeksiyon belirtisi olabilir, dinlenme ve sıvı takviyesi gerekir.")</span>
        <span class="q-not">Bilgelik: Bilgiye dayalı öngörü ve doğru karar alma yeteneğidir ("Neden ve ne yapılmalı?" sorularını yanıtlar). (Örn: "Hastanın geçmiş alerjilerini de dikkate alarak en uygun tedavi planını uygulamak.")</span>
        <span class="q-not">Veri Bilimi Yaşam Döngüsünün Aşamaları</span>
        <span class="q-not">İş Problemini Anlama: "Hangi müşteriler aboneliği iptal etme riski taşıyor?" hedefini belirlemek.</span>
        <span class="q-not">Veri Toplama: Müşteri sipariş geçmişi, site ziyaret sıklığı ve çağrı merkezi kayıtlarını bir araya getirmek.</span>
        <span class="q-not">Veri Hazırlama ve Ön İşleme: Eksik değerleri doldurmak, aykırı değerleri düzenlemek, kategorik verileri kodlamak (en çok zaman alan aşamadır).</span>
        <span class="q-not">Keşifçi Veri Analizi (EDA): Grafikler ve özet istatistiklerle iptal eden müşterilerin ortak davranışlarını incelemek.</span>
        <span class="q-not">Modelleme ve Değerlendirme: Makine öğrenmesi algoritması eğitmek ve test verisi üzerinde doğruluk/başarı ölçümü yapmak.</span>
        <span class="q-not">Yayına Alma (Deployment) ve İzleme: Modeli canlı sisteme entegre edip riskli müşterilere otomatik indirim kuponu tanımlamak ve zamanla performansını takip etmek.</span>
        <span class="q-not">Veri Bilimine Giriş</span>
        <span class="q-not">Tanımlayıcı Analitik (Descriptive): "Ne oldu?" — Geçmiş verileri özetler. (Örn: Geçen ay satışlar %15 arttı.)</span>
        <span class="q-not">Teşhis Edici Analitik (Diagnostic): "Neden oldu?" — Olayın kök nedenlerini araştırır. (Örn: Satış artışı sadece belirli bir bölgedeki kampanyadan kaynaklandı.)</span>
        <span class="q-not">Tahminleyici Analitik (Predictive): "Ne olacak?" — Geçmiş örüntülerden geleceği öngörür. (Örn: Önümüzdeki ay 250 müşterinin aboneliğini iptal etmesi bekleniyor.)</span>
        <span class="q-not">Kural Koyucu / Yönlendirici Analitik (Prescriptive): "Ne yapmalıyız?" — En iyi eylem planını önerir. (Örn: İptal riski yüksek müşterilere %10 sadakat indirimi sun.)</span>
        <span class="q-not">Büyük Verinin 5V Kuralı (5 Bileşeni)</span>
        <span class="q-not">Volume (Hacim): Üretilen ve depolanan verinin devasa boyutunu ifade eder (terabaytlar, petabaytlar). (Örn: Sosyal medyada her gün yüklenen milyarlarca fotoğraf ve video.)</span>
        <span class="q-not">Velocity (Hız): Verinin üretilme, akma ve gerçek zamanlı işlenme hızıdır. (Örn: Banka kartı harcamalarının saniyeler içinde dolandırıcılık kontrolünden geçmesi veya canlı GPS konum verileri.)</span>
        <span class="q-not">Variety (Çeşitlilik): Verinin yalnızca tablo (sayısal) formatında değil; metin, ses, video, sensör kaydı ve log gibi çok farklı yapısal ve yapısal olmayan türlerde gelmesidir.</span>
        <span class="q-not">Veracity (Doğruluk / Güvenilirlik): Verinin kalitesi, tutarlılığı, eksik veya hatalı kayıt içerip içermemesidir. (Örn: Sosyal medyadaki sahte hesaplar veya bozuk sensör ölçümleri güvenilirliği düşürür.)</span>
        <span class="q-not">Value (Değer): Toplanan bu devasa verinin işlenerek kurum veya toplum için somut bir faydaya, kâra veya doğru karara dönüştürülmesidir (en kritik "V" olarak kabul edilir).</span>
        <p class="q-not-title">Veri Türleri</p>
        <span class="q-not">Sayısal Veri: Ölçülen veya sayılan büyüklüklerdir; toplama/ortalama gibi işlemler anlamlıdır</span>
        <span class="q-not">- Kesikli: Sayılarak bulunur, tam sayıdır, ara değer almaz (örn. sepetteki ürün sayısı, kişi sayısı).</span>
        <span class="q-not">- Sürekli: Ölçülerek elde edilir, ondalıklı/ara değer alabilir (örn. teslim süresi, sıcaklık, tutar).</span>
        <span class="q-not">Kategorik Veri: Grup, sınıf veya etiket bildiren verilerdir</span>
        <span class="q-not">- Nominal: Sıra veya büyüklük ilişkisi yoktur (örn. cinsiyet, kan grubu, şehir, ödeme yöntemi).</span>
        <span class="q-not">- Ordinal: Doğal sıra vardır, fakat aralıkların eşit olması şart değildir (örn. üyelik seviyesi, beden, oda tipi).</span>
        <span class="q-not">Sayısal Görünümlü Kategorik Veri: Değerleri rakamdan oluşsa da etiket/kimlik niteliğindedir; ortalaması alınmaz (örn. alan kodu 0384, müşteri numarası).</span>
        <p class="q-not-title">Binning</p>
        <span class="q-not">Binning (Gruplama): Sayısal veriyi belirli aralıklara bölüp gruplara ayırma işlemidir.</span>
        <span>Neden yaparız? Çok dağınık veya çok sayıda farklı sayısal değeri daha sade gruplar halinde özetlemek, aykırı uç değerlerin etkisini yumuşatmak ya da bazı modellerin/analizlerin daha rahat çalışmasını sağlamak için kullanılır.</span>
        <span class="q-not">Eşit Genişlik: Her grubun aralık uzunluğu (Genişlik = (max - min) /k) eşittir; çarpık veride boş/kalabalık gruplar oluşabilir. </span>
        <span class="q-not">Eşit Frekans: Her gruptaki veri (satır) sayısı eşittir; aynı değerlerin çok tekrarlandığı yerlerde sınırlar hassaslaşabilir.</span>
        <span class="q-not">Alan Bilgisine Göre: Sınırlar uzmanlık/iş bilgisine göre konur (örn. yaş grupları); yorumlaması en anlamlı yöntemdir.</span>
        <p class="q-not-title">Encoding Yöntemleri</p>
        <span class="q-not">Encoding: Kategorik verileri modelin işleyebileceği sayılara çevirme işlemidir.</span>
        <span class="q-not">Ordinal Encoding: Doğal sırası olan kategorilere sırayı koruyan sayılar verir (S=0, M=1, L=2).</span>
        <span class="q-not">Label Encoding: Kategorilere alfabetik 0, 1, 2... verir; nominal veride sahte sıra oluşturma riski vardır.</span>
        <span class="q-not">One-Hot Encoding: Her kategori için ayrı 0/1 sütunu açar; sahte sırayı önler ama kategori çoksa sütun sayısını şişirir.</span>
        <span class="q-not">Frekans Encoding: Kategorinin yerine verideki görülme sayısını (veya oranını) yazar; tek sütun üretir.</span>
        <span class="q-not">Target Encoding: Kategorinin yerine o kategorideki hedef değişken ortalamasını yazar; sızıntıyı önlemek için yalnızca eğitim setinden hesaplanır.</span>
        <span class="q-not-title">Tuzaklar ve Riskler</span>
        <span class="q-not">Dummy Tuzağı: One-hot encoding'de $k$ kategori için k sütun açıldığında bir sütunun diğerlerinden hesaplanabilmesi (tam doğrusal bağımlılık) sorunudur. Çözüm: k-1 sütun kullanmak.</span>
        <span class="q-not">Boyut Patlaması: Sütun sayısı aşırı arttıkça verinin uzayda seyrekleşmesi, eğitim süresinin uzaması ve aşırı öğrenme (overfitting) riskinin artmasıdır. Çözüm: Nadir kategorileri "Diğer" yapmak veya frekans/target encoding kullanmak</span>
        <span class="q-not">Veri Sızıntısı (Data Leakage): Test bilgisinin veya hedefi ele veren bilginin eğitime karışmasıdır. Testte yapay yüksek, gerçek hayatta düşük başarı verir. Çözüm: Önce veriyi böl, istatistikleri sadece eğitimden hesapla.</span>
        <span class="q-not">Sızıntı Türleri: Hedef sızıntısı (sonuçtan sonra oluşan özellik), Eğitim-test bulaşması (bölmeden önce tüm veriye ön işleme), Zaman sızıntısı (gelecekle geçmişi tahmin), Grup/kopya sızıntısı (aynı hastanın kayıtlarının iki sete bölünmesi).</span>
        <span class="q-not">Yanlılık (Bias): Verinin evreni temsil etmemesi (seçim yanlılığı), hatalı ölçülmesi (ölçüm yanlılığı) veya geçmiş önyargıları taşıması (tarihsel yanlılık) nedeniyle modelin sistematik hata yapmasıdır.</span>
        <span class="q-not">Seçim / Örnekleme Yanlılığı: Verinin hedef kitlenin tamamını temsil etmemesi (örn. sadece sadakat kartlı müşteriler).</span>
        <span class="q-not">Hayatta Kalan Yanlılığı: Sadece elenmeyenleri görüp kaybedenleri hesaba katmamak (örn. üsse dönen uçaklar veya sadece başarılı girişimciler).</span>
        <span class="q-not">Temsil Yanlılığı: Bazı grupların veri setinde çok az yer alması nedeniyle o gruplarda yüksek hata oluşması.</span>
        <span class="q-not">Tarihsel Yanlılık: Verinin geçmişteki toplumsal ayrımcılık ve önyargıları taşıması.</span>
        <span class="q-not">Ölçüm Yanlılığı: Ölçüm aracının veya yönteminin sistematik hata yapması (örn. hep 2 kg fazla gösteren tartı).</span>
        <span class="q-not">Etiket / Vekil Yanlılığı: Gerçek hedef yerine kusurlu bir vekilin kullanılması (örn. hastalık yerine sağlık harcaması).</span>
        <span class="q-not">Yanıt / Öz Bildirim Yanlılığı: İnsanların kendileri hakkında eksik veya yanlış bilgi vermesi (örn. kilo, gelir gizleme).</span>
        <span class="q-not">Smoothing (Düzgünleştirme): Az gözlemli (n küçük) kategorilerin güvenilmeyen ortalamasını genel ortalamaya doğru çekme işlemidir.</span>
        <span class="q-not-title">Eksik Veri Analizi</span>
        <span class="q-not">MCAR (Tamamen Rastgele): Eksiklik hiçbir değişkene bağlı değildir (örn. forma kahve dökülmesi). Silmek yanlılık yaratmaz ama veri kaybı olur.</span>
        <span class="q-not">MAR (Rastgele Eksik): Eksiklik tablodaki başka bir değişkene bağlıdır (örn. gençlerin geliri boş bırakması). Çözüm: Grup bazlı doldurma.</span>
        <span class="q-not">MNAR (Rastgele Olmayan): Eksiklik doğrudan eksik değerin kendisine bağlıdır (örn. yüksek gelirlilerin gelirini yazmaması). En zor durumdur; eksikliği ayrı bir bilgi olarak işaretlemek gerekir.</span>
        <span class="q-not">Ortalama (Mean): Tüm değerlerin toplamının veri adedine bölünmesiyle bulunur; sayısal ve aykırı değeri olmayan sütunlarda kullanılır.</span>
        <span class="q-not">Medyan (Ortanca): Küçükten büyüğe sıralanmış verinin tam ortasındaki değerdir; sayısal ve aykırı değeri olan / çarpık sütunlarda kullanılır, uç değerlerden etkilenmez.</span>
        <span class="q-not">Mod (Tepe Değer): Veri setinde en sık tekrar eden değerdir; kategorik sütunlarda en sık tekrar eden değerle doldurma sağlar.</span>
        <span class="q-not">Sabit / "Bilinmiyor": Kategorik sütunlarda eksikliğin özel bir anlamı varsa (MNAR) kullanılır; yeni bir kategori ekler.</span>
        <span class="q-not">Grup Bazlı Doldurma: Eksiklik başka bir değişkene bağlıysa (MAR) her boşluğu kendi grubunun medyan/ortalamasıyla doldurur; küçük gruplarda güvenilmezdir.</span>
        <span class="q-not">KNN / İteratif Doldurma: Sayısal değişkenler birbiriyle ilişkiliyse en benzer satırlara veya tahmine göre doldurur; hesaplama maliyeti yüksektir.</span>
        <span class="q-not">Zayıf Yönler: Ortalama ve medyan veri çeşitliliğini (varyansı) düşürür; mod ise çoğunluk sınıfını şişirir.</span>
        <span class="q-not">Altın Kural: Doldurma değeri sadece eğitim setinden hesaplanıp test setine uygulanır (veri sızıntısını önler).</span>
        <span class="q-not-title">Aykırı Değer Hesaplama</span>
        <span class="q-not">Nokta anomalisi: Tek bir değer diğerlerinden çok uzak: bekleme süreleri 12–25 dk iken 60 dk.</span>
        <span class="q-not">Bağlamsal anomali: Değer bağlama göre anormal: Temmuz'da 30 °C normal, Ocak'ta Kapadokya'da anormal.</span>
        <span class="q-not">Toplu anomali: Tek tek normal, birlikte anormal: gece 03.00'te art arda 20 küçük kart harcaması.</span>
        <span class="q-not">Normal Dağılım: Veriler merkeze dengeli yayılır; Ortalama ≈ Medyan ≈ Mod olur ve çarpıklık 0 civarındadır.</span>
        <span class="q-not">Sağa Çarpık Dağılım: Kuyruk sağa uzar (büyük uç değerler vardır); Ortalama > Medyan olur ve çarpıklık pozitiftir.</span>
        <span class="q-not">Sola Çarpık Dağılım: Kuyruk sola uzar (küçük uç değerler vardır); Ortalama < Medyan olur ve çarpıklık negatiftir.</span>
        <span class="q-not">IQR Amacı: Verinin ortadaki %50'lik yayılımını ölçer ve uç değerlerden etkilenmeden aykırı değer sınırlarını belirlemeye yarar.</span>
        <span class="q-not">σ büyüdükçe ortalamadan uzak değerler daha "olağan" hâle gelir.</span>
        <span class="q-not">IQR $= Q3 - Q1$</span>
        <span class="q-not">Alt Sınır $= Q1 - 1,5 \\times \\text{IQR}$</span>
        <span class="q-not">Üst Sınır $= Q3 + 1,5 \\times \\text{IQR}$</span>
        <span class="q-not">$$X = \\{x_1, x_2, \\dots, x_n\\} \\wedge n \\in \\mathbb{Z}^+$$</span>
        <span class="q-not">$$\\mu = \\frac{1}{n} \\sum_{i=1}^{n} x_i$$</span>
        <span class="q-not">$$\\sigma^2 = \\frac{1}{n} \\sum_{i=1}^{n} (x_i - \\mu)^2 \\lor s^2 = \\frac{1}{n - 1} \\sum_{i=1}^{n} (x_i - \\mu)^2$$</span>
        <span class="q-not">$$\\sigma = \\sqrt{\\frac{1}{n} \\sum_{i=1}^{n} (x_i - \\mu)^2} \\lor s = \\sqrt{\\frac{1}{n - 1} \\sum_{i=1}^{n} (x_i - \\mu)^2}$$</span>
        <span class="q-not">$$r = \\frac{\\sum_{i=1}^{n} (x_i - \\bar{x})(y_i - \\bar{y})}{\\sqrt{\\sum_{i=1}^{n} (x_i - \\bar{x})^2} \\sqrt{\\sum_{i=1}^{n} (y_i - \\bar{y})^2}}$$</span>
        <span class="q-not">Z-skoru, bir gözlemin ($\\text{x}$) ortalamadan ($\\mu$) kaç standart sapma ($\\sigma$) uzakta olduğunu söyler.   </span>
        <span class="q-not">$$z = \\frac{x - \\mu}{\\sigma}$$</span>
        <span class="q-not">$z = 0$: Değer tam ortalamada demektir ($x = \\mu$). </span>
        <span class="q-not">$z = +2$: Değer ortalamanın $2\\sigma$ üstünde demektir.  </span>
        <span class="q-not">$z = -1{,}5$: Değer ortalamanın $1{,}5\\sigma$ altında demektir (eksi işaret ortalamanın altında olunduğunu gösterir).</span>
        <span class="q-not">$\\vert{}z\\vert{} > 3$: Aykırı değer adayı kabul edilir (bazen 2 veya 2,5 gibi farklı eşikler de kullanılabilir).  </span>
        <span class="q-not">Standardizasyon Amacı: Z-skoru farklı ölçeklerdeki değerleri ortak bir birime çevirerek farklı dağılımlar/dersler arasında adil karşılaştırma yapmayı sağlar.</span>
        <span class="q-not">Değiştirilmiş Z-Skoru Amacı: Klasik Z-skoru aykırı değerlerden etkilenip uç değerleri kaçırabildiği için ortalama yerine medyan, standart sapma yerine MAD (Medyan Mutlak Sapma) kullanılır.</span>
        <span class="q-not">$$M = \\frac{0{,}6745 \\times (x - \\text{medyan})}{\\text{MAD}}$$</span>
        <span class="q-not">MAD Hesabı: Önce verinin medyanı bulunur, her değerin medyandan mutlak farkı (|x - medyan|) alınır ve oluşan sapmaların medyanı MAD değerini verir.</span>
         <span class="q-not">Aykırı değerleri tespit ettikten sonra "onlarla ne yapacağız?"</span>
        <span class="q-not">Silme (Trimming): Sınır dışındaki satırları çıkarır; hata kesinse ve oran %1-2 gibi çok düşükse uygundur ancak bilgi kaybı ve diğer sütunların silinmesi riskini taşır.</span>
        <span class="q-not">Sınırlandırma (Capping / Winsorizing): Satırı silmeden sınır dışındaki değeri alt/üst sınıra (IQR sınırları veya %1-%99 yüzdelikleri) çeker; sınırlar eğitim setinden hesaplanıp teste uygulanır.</span>
        <span class="q-not">Aykırı Değer - Log Dönüşümü: Sağa çarpık verilerde (gelir, harcama vb.) uzun kuyruğu sıkıştırır ve sıralamayı bozmaz; sıfır değeri varsa tanımsızlığı önlemek için log(1 + x), negatif değer varsa Yeo-Johnson kullanılır.</span>
        <span class="q-not-title">Min-Max Normalizasyon</span>
        <span class="q-not">Ölçekleme Gerekliliği: Farklı ölçekteki değişkenlerde (örn. Yaş 20-60, Maaş 30.000-100.000) büyük sayılara sahip sütun uzaklık hesabını domine eder ve küçük ölçekli sütunu etkisiz bırakır.</span>
        <span class="q-not">Uzaklık Tuzağı: Öklid uzaklığı gibi mesafe tabanlı yöntemlerde (KNN, K-Means, SVM) farkların karesi alındığı için büyük ölçekli özellik küçük ölçekli özelliği ezer; bu yüzden tüm özellikler ortak ölçeğe çekilir.</span>
        <span class="q-not">$$x_{\\text{norm}} = \\frac{x - \\min}{\\max - \\min}$$</span>
        <span class="q-not">Değer en küçük değere ($x = \\min$) eşitse sonuç 0 olur</span>
        <span class="q-not">Değer en büyük değere ($x = \\max$) eşitse sonuç 1 olur.</span>
        <span class="q-not">Aradaki değerler bu iki uç arasında oransal bir konum alır.</span>
        <span class="q-not">[0, 1] Dışına Çıkma: Min ve max eğitim verisinden öğrenilip test verisine uygulandığında, testteki değer eğitimin max değerinden büyükse sonuç 1'i aşar, min değerinden küçükse 0'ın altına iner.</span>
        <span class="q-not-title">Robust Scaling (Dayanıklı Ölçekleme)</span>
        <span class="q-not">$$x' = \\frac{x - \\text{medyan}}{\\text{IQR}}$$</span>
        <span class="q-not">Robust ölçeklemede ise merkez ve yayılım (medyan ve IQR) uç değerden bozulmadığı için normal gözlemler kendi doğal aralığında dengeli kalır; aykırı değer (12) ise yalnızca kendi gerçek uzaklığıyla görünür.</span>
        <span class="q-not">Normalizasyon vs. Robust Scaling: Normalizasyon (Min-Max) değerleri [0, 1] aralığına çeker ama uç değerlerden etkilenip normal verileri sıkıştırır; Robust Scaling ise medyan ve IQR kullanarak uç değerlere dayanıklı kalır.</span>
        <span class="q-not-title">Excel ile Uygulama</span>
        <span class="q-not">Excel Temel İstatistikler: Ortalama için ORTALAMA(), medyan için ORTANCA(), mod için ENÇOK_OLAN.TEK(), popülasyon standart sapması için STDSAPMA.P() ve çarpıklık için ÇARPIKLIK() kullanılır.</span>
        <span class="q-not">Excel IQR ve Capping: Q1 için DÖRTTEBİRLİK.DHL(aralık;1), Q3 için DÖRTTEBİRLİK.DHL(aralık;3), alt/üst sınır için Q1-1,5IQR ve Q3+1,5IQR, sınırlandırma (capping) için ise MİN(MAK(değer;alt);üst) formülü yazılır.</span>
        <span class="q-not">Excel Z-Skoru ve Mz: Klasik z-skoru için STANDARTLAŞTIRMA(x;ort;ss) kullanılır; değiştirilmiş z-skoru için önce MUTLAK(x-medyan) ile sapmalar bulunur, sapmaların ORTANCA değeri MAD olur ve Mz = 0,6745*(x-medyan)/MAD hesaplanır.</span>
        <span class="q-not">Excel Ölçekleme ve Log: Min-Max için (x-min)/(max-min), Robust Scaling için (x-medyan)/IQR, 10 tabanında log için LOG10(x) ve sıfır içeren verilerde log dönüşümü için LN(1+x) kullanılır.</span>
        <span class="q-not">Excel Encoding ve Eksik Oranı: Frekans encoding için EĞERSAY(aralık;hücre), target encoding için EĞERORTALAMA(kategori;hücre;hedef), eksik oranı için ise BOŞLUKSAY(aralık)/SATIRSAY(aralık) formülü uygulanır.</span>
        <span class="q-not-title">Pandas ile Uygulama</span>
        <span class="q-not">df.shape $\\rightarrow$ Veri setinin boyutunu (satır_sayısı, sütun_sayısı) olarak verir. </span>
        <span class="q-not">df.columns $\\rightarrow$ Veri setindeki tüm sütun adlarını listeler.</span>
        <span class="q-not">df.head() $\\rightarrow$ Veri setinin ilk 5 satırını gösterir.</span>
        <span class="q-not">df.tail() $\\rightarrow$ Veri setinin son 5 satırını gösterir.</span>
        <span class="q-not">df.info() $\\rightarrow$ Her sütunun adını, eksik olmayan (dolu) değer sayısını (Non-Null Count) ve veri türünü (Dtype) tek çıktıda gösterir.</span>
        <span class="q-not">df['fiyat'] $\\rightarrow$ Yalnızca fiyat sütununu seçer</span>
        <span class="q-not">object $\\rightarrow$ Pandas'ta genellikle metin (kategorik) değerler içeren sütunlarda görülür.</span>
        <span class="q-not">count $\\rightarrow$ Yalnızca dolu (eksik olmayan) hücreleri sayar.</span>
        <span class="q-not">50% $\\rightarrow$ Medyanı gösterir</span>
        <span class="q-not">25% ve 75% $\\rightarrow$ Sırasıyla Q1 ve Q3 çeyrek değerlerini gösterir. </span>
        <span class="q-not">df.isnull() $\\rightarrow$ Her hücreyi tek tek kontrol eder; hücre eksikse True, doluysa False döndürür.</span>
        <span class="q-not">df.isnull().sum() $\\rightarrow$ df.isnull() içindeki True değerleri sütun bazında toplar ve her sütundaki eksik hücre sayısını verir.</span>
        <span class="q-not">pd.get_dummies() $\\rightarrow$ Kategorik sütunlara One-Hot Encoding uygulamak için kullanılır; kategorileri 0/1 (veya True/False) sütunlarına dönüştürür.</span>
        <span class="q-not-title">lOGARİTMA</span>
        <span class="q-not">$$\\log_a x = y \\iff a^y = x \\quad , \\quad (a > 0) \\land (a \\neq 1) \\land (x > 0)$$</span>
        <span class="q-not">$$\\log_{10} x = \\log x \\quad , \\quad \\log_e x = \\ln x \\quad , \\quad \\log_a 1 = 0 \\quad , \\quad \\log_a a = 1$$</span>
        <span class="q-not">$$\\log_{a^m}(x^n) = \\frac{n}{m}\\log_a x \\quad , \\quad \\log_a(x^n) = n\\log_a x \\quad , \\quad a^{\\log_a x} = x$$</span>
        <span class="q-not">$$\\log_a(u \\cdot v) = \\log_a u + \\log_a v \\quad , \\quad \\log_a\\!\\left(\\frac{u}{v}\\right) = \\log_a u - \\log_a v$$</span>
        <span class="q-not">$$\\log_a b = \\frac{\\log_c b}{\\log_c a} = \\frac{1}{\\log_b a} \\quad , \\quad \\log_a b \\cdot \\log_b c = \\log_a c \\quad , \\quad a^{\\log_b c} = c^{\\log_b a}$$</span>
        <span class="q-not">$$\\log_a f(x) = \\log_a g(x) \\implies f(x) = g(x) \\land f(x) > 0 \\land g(x) > 0$$</span>
        <span class="q-not">$$\\big(a > 1 \\land \\log_a f(x) > \\log_a g(x)\\big) \\implies f(x) > g(x) > 0$$</span>
        <span class="q-not">$$\\big(0 < a < 1 \\land \\log_a f(x) > \\log_a g(x)\\big) \\implies 0 < f(x) < g(x)$$</span>
    </div>
</div>
`
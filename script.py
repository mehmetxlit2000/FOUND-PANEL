# print(): Ekrana yazı yazdırır.
# input(): Kullanıcıdan veri alır.
# type(): Verinin türünü söyler.
# str: Metin (Örn: "Ahmet").
# int: Tam sayı (Örn: 25).
# float: Ondalıklı sayı (Örn: 3.14).
# bool: Mantıksal durum (True / False).
# //: Bölümün tam kısmını verir.
# %: Bölümden kalanı verir (Mod).
# **: Üs alır.
# f"...": Metin içine {değişken} yazmayı sağlar.
# if: Eğer (koşul doğruysa çalışır).
# elif: Değilse eğer (ek koşul).
# else: Değilse (hiçbiri tutmazsa çalışır).
# Girinti (Indent): Kod bloğunu belirtmek için bırakılan boşluk.
# [] (Liste): Birden fazla veriyi bir arada tutan yapı.
# İndeks ([0]): Listenin içindeki elemanların sırasıdır (0'dan başlar).
# append(): Listeye yeni eleman ekler.
# remove(): Listeden eleman siler.
# len(): Listenin eleman sayısını verir.
# for: Belirli bir liste veya aralık üzerinde döngü kurarak tek tek işlem yapmayı sağlar.
# range(): Belirtilen sayı aralığında ardışık sayılar üretir (Örn: range(5) $\rightarrow$ 0'dan 4'e kadar).
# while: Koşul doğru olduğu sürece dönen döngü.
# break: Döngüyü tamamen durdurur/kırar.
# continue: Döngünün o anki turunu atlayıp sonrakine geçer.
# def: Yeni bir fonksiyon tanımlamak için kullanılır.
# Parametre: Fonksiyonun içine dışarıdan gönderdiğimiz değişkenlerdir.
# return: Fonksiyonun ürettiği sonucu dışarıya döndürür.
# {} (Sözlük / Dictionary): Anahtar ve değer çiftlerinden oluşan veri yapısı ("anahtar": "değer").
# try: Hata çıkartabilecek riskli kodları deneme bloğu.
# except: Hata oluştuğunda programın çökmesini engelleyip alternatif işlem yapmasını sağlayan blok.
# enumerate(): Bir listenin içindeki elemanları gezerken yanına otomatik sıra numarası
# pop(index): Listeden belirtilen sıradaki elemanı siler ve silinen elemanı bize verir.
# in: Bir elemanın liste veya sözlük içinde var olup olmadığını kontrol eder (True / False döndürür).
# del: Sözlük veya listeden bir elemanı doğrudan (döngüye gerek kalmadan) siler.
# isdigit(): Bir metnin sadece rakamlardan oluşup oluşmadığını kontrol eder.
# ValueError: Kullanıcı sayı beklenirken harf girdiğinde oluşan özel hata türü.
# lower(): Bütün harfleri küçük harfe çevirir
# upper(): Bütün harfleri büyük harfe çevirir
# strip(): Kullanıcının yanlışlıkla bıraktığı sağdaki ve soldaki boşlukları siler
# zip(): İki Listeyi Eşzamanlı Gezmek
# split(ayraç): Bir metni belirtilen karakterden parçalara ayırıp liste yapar.
# join(liste): Bir listenin elemanlarını araya karakter koyarak birleştirip metin
# sum(liste): Listedeki tüm sayıları toplar.
# min(liste) / max(liste): Listedeki en küçük ve en büyük elemanı bulur.
# sorted() — Sıralama Yapmak
# any(): Listedeki en az bir eleman True ise True döndürür.
# all(): Listedeki tüm elemanlar True ise True döndürür.
# replace(): Metin içindeki bir ifadeyi başka bir ifadeyle değiştirir.
# round(): Ondalıklı sayıları belirtilen basamak sayısına göre yuvarlar.
# startswith(): Metnin belirtilen ifadeyle başlayıp başlamadığını kontrol eder (True / False).
# endswith(): Metnin belirtilen ifadeyle bitip bitmediğini kontrol eder (True / False).
# get(): Sözlükten güvenli veri çeker; anahtar yoksa hata vermek yerine varsayılan değeri döndürür.
# items(): Sözlüğün içindeki anahtar ve değer ikilisini aynı anda döngüde gezmeyi sağlar.
# f"{deger:.2f}": Ondalıklı sayıları virgülden sonra 2 basamak olacak şekilde biçimlendirir (Fiyatlar için süperdir).
# abs(): Bir sayının mutlak değerini (pozitif halini) alır.



kisi = {"name": "Mehmet"}

print(kisi.get("name","bilgi yok"))


# products = []
#
# def men():
#     print("0. Menü yardımcısı")
#     print("1. Ürün ekle")
#     print("2. Ürün sil")
#     print("3. Ürünleri görüntele")
#     print("4. çık")
#
#
# while True:
#
#     try:
#         secim = int(input("Menüden yapmak istediğinizi seçin (Menü yardımcısı için 0'a basın): "))
#     except ValueError:
#         print("Hata: Lütfen bir sayı gir!")
#         continue
#
#     if secim == 0:
#         men()
#     elif secim == 1:
#         product_name = str(input("Ürün Adı: "))
#         product_price = float(input("Ürün Fiyatı: "))
#         products.append({"name": product_name, "price": product_price})
#         print("Ürün Eklendi")
#     elif secim == 2:
#         if len(products) > 0:
#             for product in products:
#                 print(f"{product['name']}")
#             product_delete = str(input("Silmek istediğiniz ürünün adını yazın"))
#             for product in products:
#                 if product["name"] == product_delete:
#                     products.remove(product)
#                     break
#         else:
#             print('Silinecek ürün bulunamadı')
#         print("Ürün Silindi")
#     elif secim == 3:
#         if len(products) > 0:
#             for product in products:
#                 print(f"İsim: {product['name']}, Fiyat: {product['price']}")
#             print("Ürünler listelendi")
#         else:
#             print('Listelenecek ürün bulunamadı')
#
#     elif secim == 4:
#         print("Menüden çıkıldı")
#         break
#     else:
#         print("Lütfen geçerli seçim yapın")




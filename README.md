# LANKASTAY

## Proje Notları

- Projeyi ilk kez clonladığınızda `npm install` komutunu çalıştırarak gerekli olan tüm kütüphaneleri yükleyin.
- Projeyi çalıştırmak için `npm run dev` komutunu çalıştırın.
- Projede sass yapısı kullanılmaktadır. Kullanılacak tüm scss yardımcı dosyalarını styles dosyası altında bulabilirsiniz. Gerekli olan yerde kullanırken index.scss dosyasını import etmeniz yeterlidir.
  - index.sccs doğrudan import etmek yerine `import 'index.scss' as i` şeklinde import etmelisiniz. Daha sonra çağrılmak istenilen değişken `i.$white` şeklinde çağrılmalıdır. Bu sayede değişkenlerin hangi dosyadan geldiği daha anlaşılır olacaktır.
  - Animasyonlar için yukarıdaki çağırma şekline gerek yoktur. Doğrudan import edilmiş `index.scss` içinden adları ile çağrılabilir.
  - Scss de kullanılacak breakpointsler için mixin içinden gelen yapı kullanılacaktır.
    Örnek kullanım:
  ```scss
  @include max($desktop-l) {
    background-color: green;
  }
  ```
- Projede tüm component yapıları `components` klasörü altında bulunmaktadır. Her component kendi içinde ayrı bir klasör yapısına sahiptir. Bu sayede componentler arasında karışıklık olmadan daha düzenli bir yapı oluşturulmuştur.
  - UI componentleri `components/ui` altında bulunmaktadır. Bu componentler doğrudan kullanılabilir. Ancak UI componentleri için bir wrapper componenti oluşturulmuştur. Bu sayede UI componentleri daha kolay kullanılabilir hale getirilmiştir.
- Yardımcı kütüphaneler `utils` klasörü altında bulunmaktadır. Bu kütüphaneler doğrudan kullanılabilir. Ancak bu kütüphaneler için bir wrapper componenti oluşturulmuştur. Bu sayede yardımcı kütüphaneler daha kolay kullanılabilir hale getirilmiştir.
- Yardımcı fonskiyonlar `libs` klasörü altında bulunmaktadır. filters
- Static tüm dosyalar `public` klasörü altında barıdırılacaktır.

  - Images dosyları için `public/images` klasörü kullanılacaktır. Bu klasör altında tüm resimler barındırılacaktır.
  - Fonts dosyları için `public/fonts` klasörü kullanılacaktır. Bu klasör altında tüm fontlar barındırılacaktır.
  - Icons dosyları için `public/icons` klasörü kullanılacaktır. Bu klasör altında tüm ikonlar barındırılacaktır.
  - Videos dosyları için `public/videos` klasörü kullanılacaktır. Bu klasör altında tüm videolar barındırılacaktır.
  - Audio dosyları için `public/audio` klasörü kullanılacaktır. Bu klasör altında tüm ses dosyaları barındırılacaktır.
    Not: Yaptığınız ticket için kendinize ait bir klasörü ilgili klasörün altında oluşturabilirsiniz. Bu sayede diğer ticketler ile karışıklık olmadan çalışabilirsiniz.

- Kütüphane kullanımında özgürsünüz ancak çok ufak bir şey için büyük bir kütüphane eklemek yerine kendiniz yazmayı deneyin. Sadece tam kapasitesine yakın kullanacağınız bir kütüphane ekleyin. Küçük kütüphane kullanımında ise kütüphane eklemekten çekinmeyin.
- `global.scss` yapısınında yazılan reset css kısmını proje liderinden habersiz bir şekilde deiştirmeyin. Ekleme yapmak istediğiniz tüm yapılar için proje lideri ile iletişime geçin. Proje lideri ile iletişime geçmeden yapılan değişiklikler kabul edilmeyecektir.

## Commit Notları:

- Commit mesajları `[MA-<ticket number>] - <commit message>` şeklinde olmalıdır.
- Commit mesajları yaptığınız değişiklikleri açıklayıcı bir şekilde yazılmalıdır. Bu sayede diğer ekip arkadaşlarınız yaptığınız değişiklikleri daha iyi anlayabilirler.
- Şu an için commit mesajları için GitHub üzerinde bir kontrol yapılmamaktadır. Ancak ilerleyen zamanlarda commit mesajları için bir kontrol yapılacaktır. Bu nedenle commit mesajlarınıza dikkat etmeniz gerekmektedir.
- Commit mesajını göndermeden önce iki kere kontrol edin ve kurallara uymayan mesaj attığınızı fark ederseniz hemen source control kısmından commit mesajınızı geri alın ve düzenleyerek gönderin.
  Örnek: `[MA-1] - Created header component`

## API Notları:

Otel verilerini almak için aşağıdaki MockAPI endpoint’i kullanılır:

https://6829efb0ab2b5004cb3543e3.mockapi.io/api/v1/hotels
Bu endpoint’e GET isteği göndererek otellerin tüm bilgilerine ulaşabilirsiniz. Dönen veri bir dizi (array) şeklindedir ve her bir otel aşağıdaki gibi detaylı bir nesne (object) olarak gelir:
{
"name": "Blue Origin Fams",
"city": "Galle",
"country": "Sri Lanka",
"coverImage": "https://agaparwxrjnkmqfglytl.supabase.co/storage/v1/object/public/lankastay/hotels/blue-origin-fams-cover.png",
"gallery": [
"https://agaparwxrjnkmqfglytl.supabase.co/storage/v1/object/public/lankastay/hotels/blue-origin-fams-int-1.jpg",
"https://agaparwxrjnkmqfglytl.supabase.co/storage/v1/object/public/lankastay/hotels/blue-origin-fams-int-2.jpg"
],
"price": 267,
"rating": 3.4,
"description": "A cozy beachfront hotel with modern amenities and a stunning view of the Indian Ocean. Guests can enjoy nearby attractions, authentic cuisine, and relaxing environments. Every stay is crafted to ensure peace and comfort.",
"features": {
"bedroom": 3,
"livingRoom": 1,
"bathroom": 1,
"internet": "50 mbps/s",
"television": 2,
"refrigerator": 1,
"unitReady": 10
},
"treasures": [
{
"title": "Green Lake",
"type": "Nature",
"image": "https://agaparwxrjnkmqfglytl.supabase.co/storage/v1/object/public/lankastay/treasures/green-lake.png",
"popular": true
},
{
"title": "Snorkeling",
"type": "Beach",
"image": "https://agaparwxrjnkmqfglytl.supabase.co/storage/v1/object/public/lankastay/treasures/snorkeling.png",
"popular": false
}
],
"id": "1"
}
Alan Açıklamaları
• name: Otelin adı
• city ve country: Otelin bulunduğu şehir ve ülke
• coverImage: Otelin kapak fotoğrafı (URL)
• gallery: Otelin iç ve dış mekan görselleri (dizi halinde URL’ler)
• price: Gecelik fiyat (USD)
• rating: Otelin kullanıcı puanı (0-5 arası)
• description: Otel açıklaması (kısa tanıtım metni)
• features:
• bedroom: Yatak odası sayısı
• livingRoom: Salon sayısı
• bathroom: Banyo sayısı
• internet: İnternet hızı veya türü
• television: Televizyon sayısı
• refrigerator: Buzdolabı sayısı
• unitReady: Kullanıma hazır birim/adet
• treasures: Otelin yakınındaki önemli/doğal/aktivite mekanları
• title: Mekan veya aktivite adı
• type: Türü (ör. Nature, Beach, Shopping, Pool)
• image: İlgili yerin görseli (URL)
• popular: Popülerlik durumu (true/false)
• id: Otelin benzersiz ID’si

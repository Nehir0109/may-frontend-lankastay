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

Otel verileri, projede hazır bulunan useData adlı custom hook aracılığıyla SWR kullanılarak çekilmektedir.
Hook içinde MockAPI’deki temel URL (baseURL) sabit olarak tanımlanmıştır. Bu sayede sadece endpoint adı verilerek veri çekmek mümkündür.

```js
import useData from "@/hooks/useData";
const { data, loading, error } = useData("hotels");
```

Bu kullanımda:
• useData otomatik olarak https://.../api/v1/hotels adresine istek gönderir.
• Gelen veriler localStorage’a kaydedilir.
• Sayfa yenilense bile, varsa veri önce localStorage’dan alınır; ardından arka planda güncel veri çekilir.

Dönen veri yapısı şu alanları içerir:
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

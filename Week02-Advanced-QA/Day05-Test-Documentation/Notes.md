### Test Documentation

- Test documentation, test sürecinde yapılan tüm faaliyetlerin yazılı kayıt altına alınmasıdır.
- Amaç; test sürecinin şeffaf, izlenebilir ve tekrarlanabilir olmasını sağlamaktır.
- İyi dokümantasyon, ekipler arası iletişimi güçlendirir ve kaliteyi artırır.
- QA Engineer, test sonuçlarını doğru dokümante ederek ürün kalitesine katkı sağlar.


### Severity vs Priority — Real Life QA Thinking
- Severity refers to the impact of a defect on the system.
- Priority refers to how urgently the defect should be fixed from a business perspective.


### Bug Impact Analysis Examples
| Bug Summary | Severity | Priority | Reason |
|-------------|----------|----------|--------|
| Login button active when fields are empty| Medium | Medium | Kullanıcı yanlış yönlendirilir ama login engellenir|
| Error message not cleared after successful login| Low | Medium |  İşlev çalışıyor ama UX bozuk


### Test Summary Report — SauceDemo Login

- Test edilen modül: Login
- Test türleri: Functional, Regression, Smoke
- Toplam test case sayısı: 4
- Başarılı test case: 3
- Başarısız test case: 1
- Açık bug sayısı: 0


#### Genel Değerlendirme:
Login fonksiyonu temel senaryolarda çalışmaktadır.
Ancak boş alanlarda login butonunun aktif olması ve hata mesajlarının temizlenmemesi gibi kullanıcı deneyimini etkileyen problemler tespit edilmiştir.

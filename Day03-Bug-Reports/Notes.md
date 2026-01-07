### Bug / Defect Nedir?
- Bug: Yazılımın çalışması sırasında beklenmeyen veya hatalı davranışa neden olan kodlama hatasıdır.
- Defect: Yazılımın beklenen gereksinimlerden veya tanımlanan özellliklerden sapmasını ifade eden daha geniş bir terimdir.
- Her bug bir defecttir, ancak her defect mutlaka bir bug olmayabilir (eksik veya yanlış gereksinimler de defecttir).
- "Hata buldum" demek yeterli değildir; önemli olan bu hatayı doğru ve anlaşılır şekilde raporlamaktır.
- QA'nın sorumluluğu, hatayı çözmek değil; geliştiricinin problemi net şekilde anlayabilmesi için doğru bug raporu hazırlamaktır.
- Profesyonel bir bug raporunda genellikle şu bilgiler yer alır:
   - Bug ID
   - Summary / Description
   - Environment / Version
   - Steps to Reproduce
   - Expected Result
   - Actual Result
   - Severity & Priority

### Bug Lifecycle
- Bug lifecycle, bir hatanın ilk raporlanmasından kapatılmasına kadar geçtiği tüm aşamaları ifade eder
- Genel akış şu şekildedir:
  New —> Assigned —> Open —> Fixed —> Retest —> Closed / Reopened
  
Örnek (Login Bug):
- Kullanıcı geçerli bilgilerle login olamıyorsa, QA bu durumu bir bug olarak raporlar ve bug durumu NEW olarak atanır.
- Bug ile ilgili geliştiriciye atandığında durum ASSIGNED olur.
- Geliştirici hatayı incelemeye başladığında bug durumu OPEN olarak güncellenir.
- Hata geliştirici tarafından düzeltildiğinde bug durumu FIXED olarak işaretlenir.
- QA, düzeltmenin doğru çalışıp çalışmadığını kontrol etmek için yeniden test yapar (RETEST).
- Eğer login başarılı çalışıyorsa bug CLOSSED durumuna getirilir; sorun devam ediyorsa bug REOPENED olarak tekrar açılır.

Severity & Priority
- Severity: Hatanın uygulama üzerindeki etkisini açıklar (Önem derecesi).
- Priority: Hata giderme aciliyetiyle ilgilidir (Düzeltilme önceliği).
- Severity & Priority: Sorunun önemi ve giderilme aciliyetine bağlı olarak öncelik derecesi yüksek / orta / düşük olabilir.

| Bug              | Severity | Priority |
| ---------------- | -------- | -------- |
| Login çalışmıyor | Critical | High     |
| UI hizası bozuk  | Low      | Low      |

**Örnek:**
Login butonu bazı tarayıcılarda çalışmıyorsa:
- Severity: High (kullanıcı login olamaz)
- Priority: Medium (sadece belirli tarayıcıyı etkiliyor)

Bu örnek, bir bug'un etkisinin yüksek olmasına rağmen aciliyetinin orta seviyede olabileceğini gösterir.

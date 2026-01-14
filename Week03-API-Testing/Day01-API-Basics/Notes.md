### API Testing Fundamentals
- API (Application Programming Interface), farklı yazılım bileşenlerinin birbiriyle iletişim kurmasını sağlar.
- API testing, frontend'e bağlı kalmadan backend servislerinin doğruluğunu test etmeyi amaçlar.
- API testlerinde genellikle HTTP protokolü kullanır.
- En yakın HTTP metotları:
   - GET — Veri almak
   - POST — Veri oluşturmak
   - PUT — Veri güncellemek
   - DELETE — Veri silmek
- API testleri hızlıdr, otomasyona uygundur ve erken bug yakalamayı sağlar.
- Manual QA'lar için API testing, sistemin gerçek davranışını anlamada kritik rol oynar.


### First API Request Observation
- GET request sent successfully.
- Status code returned: 200 OK.
- Response body is in JSON format.
- Each object represents a post with userId, id, title, and body fields.
- The GET request returned 100 objects in the response body.


### Endpoint
- Endpoint, API'de belirli bir kaynağa erişilen URL yoludur.
- Base URL + endpoint birlikte tam API adresini oluşturur.
- Örnek: GET /posts —> post verilerini getirir.


### POST Request
- POST request, sunucuya yeni veri göndermek için kullanılır.
- Request body içinde gönderilen veriler JSON formatındadır.
- Başarılı bir POST genellikle 201 Created status code döner.

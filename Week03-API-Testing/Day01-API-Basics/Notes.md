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

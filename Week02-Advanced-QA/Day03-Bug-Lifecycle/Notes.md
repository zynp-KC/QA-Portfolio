### Bug Lifecycle (Real Project Flow)

- Bug, test sırasında tespit edilir ve Jira'da oluşturulur (To Do).
- Bug ilgili developer'a assign edilir.
- Developer fix üzerinde çalışır (In Progress).
- Fix tamamlandığında issue review / retest için QA'ya gönderilir.
- QA bug'ı yeniden test eder (Retest).
- Eğer problem çözülmüşse issue Closed / Done yapılır.
- Eğer devam ediyorsa bug Reopened edilir.



### Jira Status Meanings

- To Do: Bug newly reported and waiting for action.
- In Progress: Developer is working on the fix.
- In Review: Fix completed, waiting for QA verification.
- Done: Bug is verified and closed.
- Reopened: Bug still exists after fix. 
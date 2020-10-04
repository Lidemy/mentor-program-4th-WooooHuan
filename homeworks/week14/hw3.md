## 什麼是 DNS？

- Domain Name System 網域名稱系統

- 提供 Domain Name 與 ip 的 mapping 功能

- 其中，以 [record types](https://en.wikipedia.org/wiki/List_of_DNS_record_types) 形式，為不同用途的對映關係進行細分

<br>


## Google 有提供的公開的 DNS，對 Google 的好處以及對一般大眾的好處是什麼？

- 一般大眾

    - 快，還要更快

    - 相對更安全

    - ~~免費~~

- Google

    - 在規章範圍內，蒐集並分析使用者行為

        - 用於改善搜尋引擎的使用體驗

        - 用於開發及設計時的依據

        - 令廣告投放更加精準

        - ~~總之先蒐集了，用不用得到再說~~

<br>

> 參考自 [域名系統](https://zh.wikipedia.org/wiki/%E5%9F%9F%E5%90%8D%E7%B3%BB%E7%BB%9F)

<br>

---

## 什麼是資料庫的 lock？

- 鎖定資料，限制其存取功能

- 依據用途細分
    
    - 多種等級 (ex: Row-Level, Key-Level, Page-Level...

    - 多種模式 (ex: Shared (S), Update (U), Exclusive (X)...

- 模式運作的方式

    - Shared (S) 

        - 多用於讀取資料

        - 允許同時多筆交易讀取

    - Update (U)

        - 用於讀取即將更新的資料

        - 不允許同時多筆更新，但允許讀取階段時與 S Lock 同時讀取

        - 寫入階段時轉為 X Lock

    - Exclusive (X)

        - 啟用於寫入、修改資料階段

        - 不允許同一時間對同一筆資料進行修改

        - 不允許讀取正在寫入中的資料

        <br>

## 為什麼我們需要 lock？

- 使每一筆 transaction 對資料庫進行存取時，不受干涉

- 過程中，其中一方產生錯誤時，讓資料有能力回到訪問前的狀態

- Database transaction

    - 是資料庫管理系統執行過程中的一個邏輯單位

    - 其作用詳見 [資料庫交易](https://zh.wikipedia.org/wiki/%E6%95%B0%E6%8D%AE%E5%BA%93%E4%BA%8B%E5%8A%A1) 中的「概要」段落

        <br>

> 參考自 [資料庫的交易鎖定 Locks](https://www.qa-knowhow.com/?p=383)

<br>

---

## NoSQL 跟 SQL 的差別在哪裡？

||SQL|NoSQL|
|:-:|:-:|:-:|
|資料的一致性|一致|不定|
|結構化|必須|可選|
|更新部分內容|容易|較難|
|複雜的條件查詢|容易|較難
|擴展彈性|低|高|
|讀寫效率|較差|較佳|
|儲存成本|較高|較低|

<br>

> 參考自 [关于NoSQL与SQL的区别](https://blog.csdn.net/xlgen157387/article/details/47908797)

<br>

---

## 資料庫的 ACID 是什麼？

- 原子性（Atomicity）

    - 將 transaction 視為一個整體執行，不可分割
    
    - 狀態只有已完整執行、或未執行，沒有模糊空間

- 一致性（Consistency）

    - 在 transaction 執行的前後，資料內容仍保持完整，並符合預設標準

- 隔離性（Isolation）

    - 多個 transaction 並行時，不應相互影響

- 永續性（Durability）

    - 當 transaction 執行完畢後，其改寫內容應該被永久儲存在資料庫中

    - 保證內容不因預期外的狀況，而永久毀損或丟失（~~總之要能復原啦~~

        <br>

> 參考自 [資料庫交易](https://zh.wikipedia.org/wiki/%E6%95%B0%E6%8D%AE%E5%BA%93%E4%BA%8B%E5%8A%A1)

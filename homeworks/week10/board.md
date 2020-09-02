## Conn.php

- 記錄伺服器登入內容，負責提供 `mysqli()` 資訊，讓其他有需要的腳本引用

- 設置編碼與時區

    - `$conn->query('SET NAMES UTF8');`
    - `$conn->query('SET time_zone = "+8:00"');`

<br>

---

## index.php

- 留言板首頁，顯示既存的留言，根據登入狀況顯示不同內容

- 從 `$_SESSION['username']` 獲取 $username, 可判斷是否已登入

- 從 `$conn->query("SELECT * FROM comments ORDER BY id DESC");` 獲取既存留言

- 如果 `$_SESSION['username']` 不存在

    - 顯示註冊及登入按鈕
    - 顯示請登入發布留言

-  如果 `$_SESSION['username']` 存在

    - 顯示登出按鈕，以及 "你好, $username" 內容
    - 顯示發送留言按鈕

- 發布留言相關

    - 以 `<form method="POST">` 作為留言內容的提交管道
    - 以 `<input type="submit">` 提交內容

- 透過 $_GET 獲取 errCode, 若 errCode 不為空，進行 error code 判斷

- 仰賴 `<a href="*.php">` 進行頁面轉跳

<br>

---

## register.php & handle_register.php

- 透過 `$_GET` 獲取 errCode, 若 errCode 不為空，進行 error code 判斷

    - 資料不齊全或帳號已被註冊

- 提交註冊內容相關

    - 以 `<form method="POST">` 作為註冊內容的提交管道
    - 以 `<input type="submit">`  提交內容

- 檢測註冊內容相關

    - 透過 `$_POST` 接收 form 提交的內容
    - 判斷「使用者名稱」、「密碼」、「暱稱」內容是否為空
    - 若其中一者為空，則透過 `header()` 方法轉跳頁面，並 query errCode 到網址中
    - 若資料齊全，則宣告對應變數，並透過 sql 指令為資料庫新增使用者資訊
    - 最後透過 `$result` 判斷結果是否異常


<br>

---

## login.php, handle_login.php, logout.php

- 透過 `$_GET` 獲取 errCode, 若 errCode 不為空，進行 error code 判斷
    
    - 資料不齊全
    - 帳號或是密碼輸入錯誤

- 提交登入內容相關

    - 以 `<form method="POST">` 作為登入內容的提交管道
    - 以 `<input type="submit">` 提交內容

- 檢測註冊內容相關

    - 透過 `$_POST` 接收 form 提交的內容
    - 判斷「使用者名稱」、「密碼」內容是否為空
    - 若其中一者為空，則透過  `header()` 方法轉跳頁面，並 query errCode 到網址中
    - 若資料齊全，則宣告對應變數，並透過 sql 指令比對是否有符合的使用者資料
    - 最後透過 `$result` 判斷結果是否異常
    - 若登入成功，則寫入 `$_SESSION['username'] = $username;` 供首頁判斷登入狀態

- 登出

    - 透過 `session_destroy();` 清空 session 實現登出
    - 清空後轉跳回首頁  

<br>

---

## handle_add_comment

- 以 `$_POST` 接收 form 提交的內容

- 判斷「留言」內容是否為空

- 若為空，則透過 `header()` 方法轉跳頁面，並 query errCode 到網址中

- 若資料齊全，則宣告 `$content = $_POST['content'];`

- 透過 SESSION 從全域函式取得使用者資訊 (暱稱、帳號、密碼)

    - `$user = getUserFromUsername($_SESSION['username']);`

- 透過 sql 為資料庫新增留言資訊

- 最後以 $result 判斷結果是否異常

- 發布成功後轉跳回首頁，將會看到新增的留言內容

<br>

---

[返回 hw1.md](./hw1.md)
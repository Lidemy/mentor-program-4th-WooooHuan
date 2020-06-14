## 交作業流程

1. `git branch week-1`
    - 創建當週作業分支，以 `week-1` 為例

2. `git checkout week-1`
    - 切換至分支 `week-1`

3. 對作業進行編輯
    - 開始編輯作業內容直到完成

4. `git add .`
    - 將要 commit 的內容進行 stage
    - 此處指令 `.` 指所有變更過的對象

5. `git commit -m "commit message"`
    - 進行 commit 
    - `-m ""` → 對本次變更的內容進行簡單描述

6. `git push -u origin week-1`
    - 推送 commit 內容至遠端分支
    - `origin` → 如果遠端不存在 `week-1` 分支，就創建一個
    - `-u` → 設定 upstream 方便之後 `push` 不必再指定分支

7. Pull Request
    - 確認該週作業已全數完成並執行過 `commit`
    - 至 GitHub 執行 Pull Request 要求合併分支 `week-1` 至 `master`
    - 簡單寫下本次 Pull Request 的內容

8. Lidemy Homeworks
    - 至作業列表新增作業
    - 附上 GitHub PR 連結

9. 等候作業批改
    - 確認作業是否已被批改
    - 確認 PR 是否被已被核准
    - 如果被駁回，回到 `3.`

10. `git checkout master`
    - 在 PR 批准後，本地端切回 `master` 準備進行遠端同步

11. `git pull origin master`
    - 使本地獲取遠端 `master` 的內容

12. `git branch -d week-1`
    - 確認 `week-1` 已合併至 `master` 後，即可刪除 `week-1`

---

## Note

- `git checkout -b "BranchName"`
    - 建立 branch 的同時切換至建立好的新分支

- 當課綱內容有所改動時
    - 將更新過後 https://github.com/Lidemy/mentor-program-4th.git `repo` 的內容 `pull` 至本地
    - 將本地的內容 `push` 至個人的 GitHub 遠端 - ex : https://github.com/Lidemy/mentor-program-4th-WooooHuan.git

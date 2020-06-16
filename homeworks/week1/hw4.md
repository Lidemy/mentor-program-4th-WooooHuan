## 跟你朋友介紹 Git

>目標 - 使用 **Git** 管理笑話檔案

---

## Initialization - 對想要列管的目錄進行初始化目錄（設目錄名稱為 **Jokes**）

- `git init`

    - >指令 `git init` → 對當前所在目錄**進行 git 的初始化**，將該目錄下的檔案進行列管

    - 確認 ***菜哥*** 已詳閱並記住 `hw3.md` 的內容

    - 請 ***菜哥*** 使用指令 `cd` 以及 `pwd` 轉跳並確認已位於 **Jokes** 目錄中

    - 請 ***菜哥*** 輸入指令 `git init` 對目錄 **Jokes** 進行 git 的初始化


- `git status`

    - >指令 `git status` → 查看當前狀態

    - 確認 ***菜哥*** 在需要確認當前狀態時，知道要輸入 `git status` 進行狀態查詢（後續不再特別提起）

---

## Edited File - 新增、變更、刪除檔案的場合（設案例為**新增**，對象為 'Joke_01.md'）

- `git add`

    - >指令 `git add '檔名'` → stage 指定檔名的檔案，將檔案標記為即將 commit 的狀態

    - >若在檔名位置輸入 `.` 將 stage 所有進行過變更的對象（適用於 git 2.x 以後版本，1.x 請改用 `--all`）
    
    - >檔名適用萬用字元 `*`, 如果想指定特定副檔名，可以輸入 `git add *.extension`
    
    - >反悔時，輸入指令 `git reset HEAD '檔名'` 可以將指定檔案進行 unstage, 未指定檔名時將全數進行 unstage

    - 請 ***菜哥*** 使用指令 `git add Joke_01.md` 或 `git add .` 對 **Joke_01.md** 進行 stage

- `git commit`

    - >指令 `git commit -m "'commit message'"` → 將 stage 的檔案進行 commit, 並簡單描述本次進行的變更
    - >需要修正 commit message 內容時，使用指令 `git commit --amend -m "'edited commit message'"` 進行修正
    -  請 ***菜哥*** 使用指令 `git commit -m "add new joke file - Joke_01.md"` 將本次新增的檔案進行 commit, 完成目錄變更的記錄

---

## Update Remote Repository - 將遠端與本地同步的場合（設已協助 ***菜哥*** 完成遠端 Repository 的環境架設）

- `git push`

    - >指令 `git push -u origin 'branch name'` → 將當前分支已 commit 內容推送至遠端 Repository
    - >`origin` → 如果遠端不存在 `branch name` 分支，就創建一個
    - >`-u` → 設定 upstream 方便之後 `push` 不必再指定分支
    - 請 ***菜哥*** 使用指令 `git push -u origin master` 將已 commit 內容推送至遠端

---

## Update Local Repository - 將本地與遠端同步的場合

- `git pull`
    - 指令 `git pull` 使本地獲取遠端 Repository 的內容
    - 請 ***菜哥*** 使用指令 `git pull origin master` 更新遠端最新的 `master` 分支內容

---
## Extra - 補充

- 若 ***菜哥*** 還有其它疑問，可以請他參閱 hw1.md 的交作業流程

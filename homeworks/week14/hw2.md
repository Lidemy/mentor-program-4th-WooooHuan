## 主機選擇



由於本週作業只要求將網頁成功部署，並沒有指定部署環境，  

經過一些條件篩選（是否有免費試用、使用體驗、未來發展性等…），　　

決定在 AWS 跟 GCP 之間做選擇，以下是當時考慮的幾個因素：


<br>

- Amazon Web Services (AWS)

    - 由 Amazon 提供的網路服務

    - 發跡早，環境成熟
    
    - 討論度高，社群資源豐富（~~很重要~~

    - 服務項目多元（~~但現階段用不到~~

    - 看到課程中不少作業都採用此方案


<br>

- Google Cloud Platform (GCP)

    - 由 Google 提供的網路服務

    - 相對經濟實惠

    - 主機在國內

    - 課程中沒啥人採用

    - ~~保證超額或過期時，不會自動續訂，不會自動扣款~~

<br>

考慮到 AWS 的相關資訊，在課程中已經相當豐富且完整，  

~~也因為 google 再三保證絕不自動扣款，~~

最後決定採用 GCP 作為本週作業的部署環境！

<br>

---

## Google Cloud Platform 部署筆記

- 註冊 Google Cloud Platform 

- 在 GCP 主控台新增專案並命名
 
- 在主控的 Compute Engine 項目中，新增 VM Instance

    - 指定 VM 的名稱

    - 指定 VM 的 DEFAULT_ZONE & DEFAULT_REGION（選擇 asia-east1 即可連至位於國內的主機

    - 指定 VM 的硬體規格（CPU 等級、記憶體、儲存空間等

    - 指定 VM 的作業系統（ubuntu

    - 允許 HTTP & HTTPS 流量

    - 大部分設定其實跟 AWS 大同小異

    <br>

- 在主控的 VPC Network 項目中，進行防火牆設定

    - 設定新規則，命名為 'mysql', 為 mysql 提供訪問權限

    - 設定「篩選規則」為「ip 範圍」，並將範圍指定為 0.0.0.0/0 （我全都要

    - 設定通訊協定 / 通訊埠 tcp: 3306

    - 在創建 VM 時已允許 HTTP & HTTPS 流量，不必再特別設定

    <br>

- 安裝 Google Cloud SDK（可選

    - 能在本地透過 CLI 進行一系列的 gcloud 指令

    - 可透過指令生成金鑰並與 GCP 連動

    - 可透過指令以 SSH 操作 VM

    <br>

- VM Instance 初始化

    - 以 SSH 操作 VM（多選項

        - 透過 gcloud 指令

        - 透過 VM Instance 面板中選擇操作方式
        

    - 更新 ubuntu
        
        > sudo apt update && sudo apt upgrade && sudo apt dist-upgrade
    
    - 安裝 Tasksel 工具

        > sudo apt install tasksel

    - 安裝 lamp-server

        > sudo tasksel install lamp-server
    
    - 安裝 phpmyadmin

        > sudo apt install phpmyadmin

    - 更改 phpmyadmin 登入設定

        > sudo mysql -u root mysql

        > UPDATE user SET plugin='mysql_native_password' WHERE User='root';

        > FLUSH PRIVILEGES;

        > exit
        
    - 設定 root 密碼

        > sudo mysql_secure_installation

        <br>

- 設定 VM 金鑰

    - 可透過以下方式進行設定

        - gcloud 指令連動 GCP 建立認證金鑰

        - PuTTYgen 手動建立認證金鑰

        <br>

---

## FTP 上傳網頁內容

- 透過 SFTP 協定配合金鑰訪問主機

    - 使用由 gcloud 指令生成的金鑰

        - 使用 gcloud 指令，可以生成本機使用者的同名認證金鑰
    
        - 使用金鑰配合 ip 位址訪問主機，即可透過 FileZilla 上傳檔案
        
        - 目前的嘗試結果，權限並非全域，只能將檔案上傳到權限範圍內的路徑

        - 最後再透過 SSH 方式連到 VM 中，將檔案搬到指定位置

    - 使用由 PuTTYgen 手動建立的金鑰

        - 目前的實驗結果，使用 PuTTYgen 可以生成不同權限的認證金鑰

        - 在金鑰的建立過程中，將 Key comment 內容設為 root, 即可生成擁有全域權限的金鑰

        - 為使金鑰生效，必須回到 GCP 控制面板，選擇 VM Instance 的 SSH 金鑰清單項目
        
        - 於金鑰清單新增使用者 root, 並將 PuTTYgen 生成的公鑰內容，貼到使用者 root 所對應的金鑰內容

        - 使用金鑰配合 ip 位址訪問主機，即可透過 FileZilla 以全域權限上傳檔案

        <br>

---

## 註冊網域

- 使用與課程配合的 gandi.net 註冊網域

- 選定並註冊網域後，選擇該網域進行區域檔關聯設定

- 將網域中類型 A 的對照值改為 VM 主機的 ipv4 位址

- 等候一段時間，即可以網域名稱訪問主機

- 完成！

> http://woooohuan.tw/gcp-practice-todolist/index.html

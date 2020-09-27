## Webpack 是做什麼用的？

- ~~webpack is a module bundler.~~

- webpack 是一套模組打包工具

- 用途視設定檔而定

- 能將目標所引用的內容，進行統整與最佳化

- 能將目標所引用的資源，透過對應的 Loader 轉化為模組

<br>

## 可以不用它嗎？

- ~~可以~~

- 視專案需求與規模而定

<br>

---

## gulp 跟 webpack 有什麼不一樣？

- gulp

    - 主要進行各項條列任務自動化

- webpack 

    - 主要協助打包前端開發環境的各種資源引用

<br>

---

## CSS Selector 權重的計算方式為何？

| weight | \| | |||
|:-:|:-:|:-:|:-:|:-:|
|Lv.5| \| | !important |
|Lv.4| \| | inline style |
|Lv.3| \| | ID |
|Lv.2| \| | Class | Pseudo-clas | attribute	 |
|Lv.1| \| | Element | Pseudo-elements |
|Lv.0| \| | * |

<br>

### 優先比較權重級別，級別大者優先 
> Lv.5 (1) > Lv.3 (3)

<br>

### 若最大級別相同，判斷級別累計量
> Lv.3 (3) > Lv.3 (1)

<br>

### 若最大級別與累計量相同，利用上述標準判斷次級內容 
> Lv.3 (1) + Lv.2 (2) > Lv.3 (1) + Lv.2 (1)

<br>

### 若級別與累計完全相同，判斷撰寫時的先後順序，**後者優先**


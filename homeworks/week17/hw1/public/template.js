function getSimpleDate(date) {
  const d = new Date(date);
  return `${d.getMonth() + 1}/${d.getDate()}`;
}

function getFullDate(date) {
  const d = new Date(date);
  const dStr = d.toDateString().split(' ');
  const time = d.toTimeString().split(' ');
  return `${dStr[0]} ${dStr[1]} ${dStr[2]} ${time[0]} ${dStr[3]}`;
}

function getTitle(post) {
  const title = post.isDelete ? 
    `<span class="deleted">(本文已被刪除) [woo]</span>` : 
    `<a href="post.html?id=${post.id}">${post.title}</a>`
  return title;
}

function getPostTmp(post, isLogin) {
  const postTemplate = 
  `<div class="r-ent">
    <div class="nrec"><span class="hl f2"></span></div>
    <div class="title">${getTitle(post)}</div>
    <div class="meta">
      <div class="author">${post.author}</div>
      <div class="article-menu">${getArticleMenu(post, isLogin)}</div>
      <div class="date">${getSimpleDate(post.createdAt)}</div>
      <div class="mark"></div>
    </div>
  </div>`;
  return postTemplate;
}

function getArticleMenu(post, isLogin) {
  return isLogin && !post.isDelete ?
    `<a href="edit_post.html?id=${post.id}" class="trigger">⋯</a>`: 
    ``;
}

function getPaging(currPage, totalPage) {
  const isFirstPage = currPage === 1;
  const isLastPage = currPage === totalPage;
  const lastPage = isLastPage ?
    `<a class="btn wide disabled">最舊</a>` :
    `<a class="btn wide" href="index.html?page=${totalPage}">最舊</a>`;
  const prePage = isLastPage ?
    `<a class="btn wide disabled">‹ 上頁</a>` :
    `<a class="btn wide" href="index.html?page=${currPage + 1}">‹ 上頁</a>`;
  const nextPage = isFirstPage ? 
    `<a class="btn wide disabled">下頁 ›</a>` :
    `<a class="btn wide" href="index.html?page=${currPage - 1}">下頁 ›</a>`;
  const firstPage = isFirstPage ? 
    `<a class="btn wide disabled">最新</a>` :
    `<a class="btn wide" href="index.html?page=1">最新</a>`;
  return `${lastPage}${prePage}${nextPage}${firstPage}`;
}

function getIndexFooter() {
  const footer = 
  `<div id="navigation" class="bbs-content">
    <a class="board" href="add_post.html">新增文章</a>
    <div class="bar"></div>
  </div>`;
  return footer;
}

function getTopBarContent(isLogin) {
  const anchor = isLogin ?
    `<a class="right small" href="logout.html">管理員登出</a>` :
    `<a class="right small" href="login.html">管理員登入</a>`;
  const content = 
  `<div id="topbar" class="bbs-content">
    <a id="logo" href="index.html">Lidemy實業坊</a>
    <span>›</span>
    <a class="board" href="index.html"><span class="board-label">看板 </span>Woo's_Board</a>
    ${anchor}
  </div>`
  return content;
}

function getPostContent(post) {
  const content = `<div id="main-content" class="bbs-screen bbs-content"><div class="article-metaline"><span class="article-meta-tag">作者</span><span class="article-meta-value">${post.author}</span></div><div class="article-metaline-right"><span class="article-meta-tag">看板</span><span class="article-meta-value">Woo's_Board</span></div><div class="article-metaline"><span class="article-meta-tag">標題</span><span class="article-meta-value">${post.title}</span></div><div class="article-metaline"><span class="article-meta-tag">時間</span><span class="article-meta-value">${getFullDate(post.createdAt)}</span></div>
${post.content}<br>
--<span class="f2">
※ 發信站: Lidemy實業坊(Lidemy.cc)</span></div><div id="article-polling">推文自動更新已關閉，也沒辦法推文哦～</div>`
  return content;
}

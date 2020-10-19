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

function getTitle(post) {
  const title = post.isDelete ? 
    `<span class="deleted">(本文已被刪除) [woo]</span>` : 
    `<a href="post.html?id=${post.id}">${post.title}</a>`
  return title;
}

function getSimpleDate(date) {
  const d = new Date(date);
  return `${d.getMonth() + 1}/${d.getDate()}`;
}

function getArticleMenu(post, isLogin) {
  return isLogin ?
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
    <a class="board" href="add_post.php">新增文章</a>
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

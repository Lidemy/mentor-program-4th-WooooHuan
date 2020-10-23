const postsRoot = $('.post-root');
const pagingRoot = $('.btn-group-paging');
const footerRoot = $('#navigation-container');
const inputSearch = $('.input-search');
const currPage = getPage();
const postsPerPage = 20;

init().then(renderIndex);

async function renderIndex(data) {
  const isLogin = data.session.isLogin;
  const posts = await getPosts();
  renderPosts(posts, isLogin);
  renderPaging(posts);
  renderFooter(isLogin);
  inputSearch.keyup((e) => onEnterKeyUp(e, onSearch));
}

function renderPosts(posts, isLogin) {
  const offset = (currPage - 1) * postsPerPage;
  for (let i = offset; i < offset + postsPerPage; i++) {
    if (!posts[i]) break;
    const postTmp = getPostTmp(posts[i], isLogin);
    postsRoot.append(postTmp);
  }
}

function renderPaging(posts) {
  const totalPage = Math.ceil(posts.length / postsPerPage);
  const paging = getPaging(currPage, totalPage);
  pagingRoot.append(paging);
}

function renderFooter(isLogin) {
  if (!isLogin) return;
  const footer = getIndexFooter();
  footerRoot.append(footer);
}

function onSearch() {
  if (!inputSearch.val()) return;
  document.location = `search.html?key=${inputSearch.val()}`;
}

function getPage() {
  if (!getParam('page')) setParam('page', 1);
  return parseInt(getParam('page'), 10);
}

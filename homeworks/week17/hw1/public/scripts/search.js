const postsRoot = $('.post-root');
const footerRoot = $('#navigation-container');
const inputSearch = $('.input-search');

init().then(renderSearch);

async function renderSearch(data) {
  const isLogin = data.session.isLogin;
  const key = getParam('key');
  const posts = await searchPost(key);
  renderPosts(posts, isLogin);
  renderFooter(isLogin);
  inputSearch.keyup((e) => onEnterKeyUp(e, onSearch));
}

function renderPosts(posts, isLogin) {
  for (let i = 0; i < posts.length; i++) {
    const postTmp = getPostTmp(posts[i], isLogin);
    postsRoot.append(postTmp);
  }
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

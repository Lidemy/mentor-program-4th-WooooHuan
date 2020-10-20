const postsRoot = $('.post-root');
const pagingRoot = $('.btn-group-paging');
const footerRoot = $('#navigation-container');
const currPage = getPage();
const postsPerPage = 20;

function getPage() {
  if (!getParam('page')) setParam('page', 1);
  return parseInt(getParam('page'));
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
  console.log(footer);
  footerRoot.append(footer);
}

async function renderIndex(data) {
  console.log(data);
  const isLogin = data.session.isLogin;
  const posts = await getPosts();
  renderPosts(posts, isLogin);
  renderPaging(posts);
  renderFooter(isLogin);
}

init().then(renderIndex);

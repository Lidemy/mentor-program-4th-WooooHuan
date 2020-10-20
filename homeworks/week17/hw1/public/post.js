const contentRoot = $('#main-container');

async function renderPost() {
  const id = getParam('id');
  const post = await getPost(id);
  const content = getPostContent(post);
  contentRoot.append(content);
  console.log(contentRoot);
}

init().then(renderPost);

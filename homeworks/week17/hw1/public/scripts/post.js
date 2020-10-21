const contentRoot = $('#main-container');

init().then(renderPost);

async function renderPost() {
  const id = getParam('id');
  const post = await getPost(id);
  const content = getPostContent(post);
  contentRoot.append(content);
}

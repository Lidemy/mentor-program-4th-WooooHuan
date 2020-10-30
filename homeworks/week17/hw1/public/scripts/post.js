const contentRoot = $('#main-container');
awakeQueue.add(renderPost);

async function renderPost() {
  const id = getParam('id');
  const post = await getPost(id);
  const content = getPostContent(post);
  contentRoot.append(content);
}

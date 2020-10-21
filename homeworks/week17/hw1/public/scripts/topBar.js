function renderTopBar(data) {
  const root = $('#topbar-container');
  const content = getTopBarContent(data.session.isLogin);
  root.append(content);
}

init().then(renderTopBar);

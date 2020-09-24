export function template(siteKey) {
  return `
    <div class="list-cover">
      <div class="list-area">
        <div class="list-main common-convex">

          <div class="list-title">📝${siteKey} Board</div>
          <div class="list-new-task">
            <input class="new-task-input common-concave ${siteKey}-input-nickname input-nickname" type="text" placeholder="Nickname">
            <input class="new-task-input common-concave ${siteKey}-input-content input-content" type="text" placeholder="Write somthing...">
            <button class="${siteKey}-new-task-btn new-task-btn common-btn" value="newBtn">📄</button>
          </div>

          <div class="${siteKey}-list-tasks"></div>

          <div class="${siteKey}-more-element">
            <div class="new-task-divider common-concave"></div>
            <div class="task-content list-more">
              <button class="${siteKey}-more-btn more-btn common-btn" value="moreBtn">Show More</button>
            </div>
          </div>

        </div>
      </div>
    </div>

    <div class="task-element ${siteKey}-task-template task-template">
      <div class="new-task-divider common-concave"></div>
      <div class="task-content">
        <div class="task-nickname"></div>
        <span class="input-diliver">:</span>
        <div class="task-text"></div>
        <button class="task-btn common-btn del-btn" value="delBtn">❌</button>
      </div>
    </div>

    <div class="input-blocker"></div>`;
}

export const css = `
<style type='text/css'>

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
    outline: none;
  }

  ::placeholder {
    color: #afafaf;
  }

  body {
    background: #008080;
  }

  .input-blocker {
    position: absolute;
    top: 0;
    left: 10vw;
    width: 80vw;
    height: 180vh;
  }

  .input-blocker::after{
    content: "";
    position: absolute;
    height: 100%;
    width: 100%;
    background: #008080;
  }

  .common-convex {
    border-width: 2px;
    border-style: solid;
    border-color: white #393939 #393939 white;
  }

  .common-concave {
    border-width: 2px;
    border-style: solid;
    border-color:#393939 white white #393939;
  }

  .common-btn {
    position: relative;
    border-width: 2px;
    border-style: solid;
    border-color: #a0a0a0 #4c4c4c #4c4c4c #a0a0a0;
    background: #bdbdbd;
  }

  .common-btn::before {
    content: "";
    position: absolute;
    top: 0px;
    left: 0px;
    bottom: 0px;
    right: 0px;
    border-width: 2px;
    border-style: solid;
    border-color: white #858585 #858585 white;
    background: transparent;
  }

  .common-btn:active {
    border-color:#4c4c4c #a0a0a0 #a0a0a0 #4c4c4c;
    padding-left: 3px;
    padding-top: 3px;
  }

  .common-btn:active::before {
    border-color:#858585 white white #858585;
  }

  .list-cover {
    display: flex;
    justify-content: center;
  }

  .list-area {
    margin-top: 150px;
    width: 640px;
    max-width: 640px;
  }

  .list-main {
    background: #bdbdbd;
    margin-bottom: 150px;
  }

  .list-title {
    display: flex;
    align-items: center;
    height: 32px;
    margin: 2px;
    padding-left: 4px;
    color: white;
    background: #000181;
  }

  .list-new-task {
    display: flex;
    align-items: center;
    height: 64px;
  }

  .new-task-input {
    height: 36px;
  }

  .input-nickname {
    max-width: 100px;
    margin-left: 18px;
    font-size: 16px;
    text-align: center;
  }

  .input-content {
    flex: 1;
    margin-left: 18px;
    padding-left: 12px;
    font-size: 16px;
  }

  .input-diliver {
    margin-left: 6px;
    font-size: 18px;
    font-weight: bold;
  }

  .new-task-btn {
    flex-shrink: 0;
    margin-left: 18px;
    margin-right: 18px;
    width: 48px;
    height: 36px;
  }

  .task-content {
    position: relative;
    display: flex;
    align-items: center;
    margin: 24px 18px;
  }

  .task-sign {
    margin-top: -8px;
    margin-left: 6px;
    font-size: 24px;
    width: 0px;
  }

  .task-nickname {
    max-width: 100px;
    flex: 1;
    text-align: center;
    font-size: 18px;
    font-weight: bold;
    word-break: break-all;
  }

  .task-text {
    display: flex;
    flex: 1;
    margin-left: 18px;
    margin-right: 4px;
    font-size: 18px;
    word-break: break-all;
  }

  .task-btn {
    justify-content: start;
    flex-shrink: 0;
    width: 48px;
    height: 32px;
    margin-left: 12px;
  }

  .task-template {
    display: none;
  }

  .checked-text {
    color: #808080;
    text-decoration: line-through;
  }

  .checked-sign::after {
    position: relative;
    content: "Done!";
    font-size: 12px;
    font-weight: bold;
    top: -8;
    left: -2px;
  }

  .list-more {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 18px;
  }

  .more-btn {
    height: 36px;
    width: 120px;
  }

  @media(max-width: 640px) {
    .input-blocker {
      left: 0vw;
      width: 100vw;
    }

    .list-area {
      margin-top: 0;
    }

    .list-main {
      margin-bottom: 0;
    }
  }

</style>

`;

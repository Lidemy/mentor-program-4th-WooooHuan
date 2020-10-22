function getRewardHtml(reward) {
  const tmp = 
  `<tr class="tr-reward">
    <td align="center">
    <input type="text" style="width:400px;" value="${reward.imgUrl}">
    </td>
    <td align="center">
      <input type="text" style="width:240px;" value="${reward.description}">
    </td>
    <td align="center">
      <input type="text" style="width:60px;" value="${reward.weight}">
    </td>
    <td align="center">
      <button>Delete</button>
    </td>
  </tr>`;
  return tmp;
}

function getCreateRewardHtml() {
  const tmp = 
    `<tr class="tr-create-reward">
      <td align="center">
        <input type="text" style="width:400px;" placeholder="Image URL...">
      </td>
      <td align="center">
        <input type="text" style="width:240px;" placeholder="Description...">
      </td>
      <td align="center">
        <input type="text" style="width:60px;" placeholder="Weight...">
      </td>
      <td align="center">
        <button>Create</button>
      </td>
    </tr>`;
  return tmp;
}

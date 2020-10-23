function getRewardHtml(reward) {
  const tmp = 
  `<tr class="reward-template">
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

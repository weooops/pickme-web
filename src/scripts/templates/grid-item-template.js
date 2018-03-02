export default data => {
  return `<li class="grid-item" style="background-image:url('${data.image}')">
    <a href="/w/${data.id}">
      <div class="title">${data.title}</div>
    </a>
  </li>`;
};

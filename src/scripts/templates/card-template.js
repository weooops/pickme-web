export default data => {
  return `<section class="card">
    <div class="card-image">
      <img src="${data.image}" alt="${data.name}">
    </div>
    <div class="card-info">
      <div class="name">${data.name}</div>
      <div class="status">${data.description}</div>
      <div class="social">
        <img src="/images/facebook.svg" alt="facebook" style="width:27px;height:27px">
        <img src="/images/instagram.svg" alt="instagram" style="width:27px;height:27px">
        <img src="/images/twitter.svg" alt="twitter" style="width:27px;height:27px">
      </div>
    </div>
  </section>`;
};

const createNav = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `
     <div class="nav">
        <img class="brand-logo" src="img/dark-logo.png" alt="logo_image " />
        <div class="nav-items">
          <div class="search">
            <input
              type="text"
              class="search-box"
              placeholder="search, brand and product"
            />
            <button class="search-btn">search</button>
          </div> 
          <a href="#"><img src="img/user.png" alt=""></a>
          <a href="#"><img src="img/cart.png" alt=""></a>
        </div>
    </div>
    <ul class="links-container">
        <li class="link-item"><a href="#" class="link">home</a></li>
        <li class="link-item"><a href="#" class="link">women</a></li>
        <li class="link-item"><a href="#" class="link">men</a></li>
        <li class="link-item"><a href="#" class="link">kids</a></li>
        <li class="link-item"><a href="#" class="link">accessories</a></li>
    </ul>
    `

}
createNav(); 
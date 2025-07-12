const createrFooter = () => {

    let footer = document.querySelector('footer');

    footer.innerHTML = `
    <div class="footer-content">
        <img src="img/light-logo.png" class="logo" alt="" />
        <div class="footer-ul-container">
          <ul class="category">
            <li class="category-title">men</li>

            <li><a class="footer-link" href="#">t-shirts</a></li>
            <li><a class="footer-link" href="#">sweatshirts</a></li>
            <li><a class="footer-link" href="#">shirts</a></li>
            <li><a class="footer-link" href="#">jeans</a></li>
            <li><a class="footer-link" href="#">trousers</a></li>
            <li><a class="footer-link" href="#">shoes</a></li>
            <li><a class="footer-link" href="#">casuals</a></li>
            <li><a class="footer-link" href="#">formals</a></li>
            <li><a class="footer-link" href="#">sports</a></li>
            <li><a class="footer-link" href="#">watches</a></li>
          </ul>

          <ul class="category">
            <li class="category-title">women</li>

            <li><a class="footer-link" href="#">t-shirts</a></li>
            <li><a class="footer-link" href="#">sweatshirts</a></li>
            <li><a class="footer-link" href="#">shirts</a></li>
            <li><a class="footer-link" href="#">jeans</a></li>
            <li><a class="footer-link" href="#">trousers</a></li>
            <li><a class="footer-link" href="#">shoes</a></li>
            <li><a class="footer-link" href="#">casuals</a></li>
            <li><a class="footer-link" href="#">formals</a></li>
            <li><a class="footer-link" href="#">sports</a></li>
            <li><a class="footer-link" href="#">watches</a></li>
          </ul>
        </div>
      </div>
      <p class="footer-title">about company</p>
      <p class="info">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur esse
        ducimus deleniti dignissimos veniam vitae. Saepe similique dolor omnis
        sapiente? Assumenda nostrum veritatis non earum recusandae et in,
        inventore voluptatum. Voluptatem atque ullam neque, est odio cumque aut
        tempore, voluptatum iste reiciendis quasi, cum eum in facere delectus
        ducimus quis omnis eligendi. Aperiam atque tempore expedita dolore
        suscipit excepturi possimus, laborum necessitatibus dolorum sit delectus
        reprehenderit facere corrupti quisquam itaque quas commodi non qui
        maiores mollitia error pariatur minus. Veritatis hic fugit sequi neque
        ipsam maiores odio, accusamus a ullam officia nulla illum porro,
        consequuntur provident iure voluptatem harum rerum!
      </p>
      <p class="info">
        support emails - help@seaoaksclothing.com,
        customersupport@seaoaksclothing.com
      </p>
      <p class="info">telephone - 180 00 11 001, 180 00 012 22</p>

      <div class="footer-social-container">
        <div>
          <a href="#" class="social-link">terms & services</a>
          <a href="#" class="social-link">privacy page</a>
        </div>
        <div>
          <a href="#" class="social-link">instagram</a>
          <a href="#" class="social-link">twitter</a>
          <a href="#" class="social-link">facebook</a>
        </div>
      </div>
      <p class="footer-credit">Clothing, Best apparels online store</p>
    
     `;
}

createrFooter();
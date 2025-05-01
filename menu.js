function createMenu() {
    const menuHTML = `
      <div class="navbar">
        <a href="/index.html">Главная</a>
        <a href="/ykt.html">Якутия в космосе</a>
        
        <div class="dropdown">
          <button class="dropbtn">Выдающиеся личности <i class="fa fa-caret-down"></i></button>
          <div class="dropdown-content">
            <a href="/stranitzy/vidaushiesya-lichnosty/letchiki-cosmonavty.html">Летчики-космонавты</a>
            <a href="/stranitzy/vidaushiesya-lichnosty/inzenery-constryktory.html">Инженеры-конструкторы</a>
            <a href="/stranitzy/vidaushiesya-lichnosty/drygie.html">Другие</a>
          </div>
        </div>
        
        <div class="dropdown">
          <button class="dropbtn">Космические программы <i class="fa fa-caret-down"></i></button>
          <div class="dropdown-content">
            <a href="/stranitzy/cosmicheskie-programmi/neypravliaemie-poleti.html">Неуправляемые полеты</a>
            <a href="/stranitzy/cosmicheskie-programmi/ypravliaemie-poleti.html">Полеты с космонавтами</a>
            <a href="/stranitzy/cosmicheskie-programmi/drygie.html">Другие</a>
          </div>
        </div>
        
        <div class="dropdown">
          <button class="dropbtn">Важнейшие события <i class="fa fa-caret-down"></i></button>
          <div class="dropdown-content">
            <a href="/stranitzy/vazneisie-sobitiya/spurnik-1.html">Первый спутник</a>
            <a href="/stranitzy/vazneisie-sobitiya/perviy-polet.html">Первый человек в космосе</a>
            <a href="/stranitzy/vazneisie-sobitiya/mir.html">Станция Мир</a>
          </div>
        </div>
      </div>
    `;

    document.body.insertAdjacentHTML('afterbegin', menuHTML);
    
    highlightCurrentPage();
  }
  
  function highlightCurrentPage() {
    const links = document.querySelectorAll('.navbar a');
    const currentUrl = window.location.pathname;
    
    links.forEach(link => {
      if (link.getAttribute('href') === currentUrl) {
        link.classList.add('active');
      }
    });
  }
  
  document.addEventListener('DOMContentLoaded', createMenu);
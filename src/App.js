import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className='header'>
        <nav className='nav'>
          <img src="https://png.pngtree.com/png-clipart/20220923/original/pngtree-chef-and-spatula-logo-png-image_8628649.png" alt="" />
          <h1 className='title-page'>
            Recetas de comida
          </h1>
          <input type="text" />
          <button>Buscar</button>
        </nav>
      </header>
      <div className='father'>
        <div className='product'>
          <div className='content'>
            <h1 className='product-title'>
              Producto 1
            </h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos
              atque harum optio sed, nulla cumque repellendus aperiam saepe quibusdam rem,
            </p>
          </div>
        </div>
        <div className='product'>
          <img src="https://i5.walmartimages.com.mx/gr/images/product-images/img_large/00750100010306L.jpg" alt="" />
          <div className='content'>
            <h1 className='product-title'>
              Producto 2
            </h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos
              atque harum optio sed, nulla cumque repellendus aperiam saepe quibusdam rem,
            </p>
          </div>
          <button>Ver</button>
        </div>
        <div className='product'>
          <div className='content'>
            <h1 className='product-title'>
              Producto 3
            </h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos
              atque harum optio sed, nulla cumque repellendus aperiam saepe quibusdam rem,
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

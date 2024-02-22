import './App.css';
import Button from './Button';
import Input from './Input';
import Content from './Content';

function App() {
  return (
    <div className="App">
      <header className='header'>
        <nav className='nav'>
          <img src="https://png.pngtree.com/png-clipart/20220923/original/pngtree-chef-and-spatula-logo-png-image_8628649.png" alt="" />
          <h1 className='title-page'>
            Recetas de comida
          </h1>
          <Input disabled={false} type={"text"} />
          <Button disabled={false} text={"Buscar"} />
        </nav>
      </header>
      <div className='father'>
        <div className='product'>
          <Content
            link="https://cdn7.kiwilimon.com/brightcove/8631/640x640/8631.jpg.webp"
            title="Tacos al pastor"
            paragraph="Unos ricos tacos al pastor que consiguen encantarte con su gran sabor"
          />
          <form action="submit">
            <Button disabled={false} text={"Ver"} />
          </form>
        </div>
        <div className='product'>
          <Content
            link="https://i0.wp.com/thesweetmolcajete.com/wp-content/uploads/2018/12/Receta-de-Pozole-Rojo-2.jpg?fit=733%2C1100&ssl=1"
            title="Pozole"
            paragraph="Un rico pozole para los amigos, haciendo que te sientas muy feliz disgustandolo"
          />
          <form action="submit">
            <Button disabled={false} text={"Ver"} />
          </form>
        </div>
        <div className='product'>
          <Content
            link="https://cdn7.kiwilimon.com/brightcove/10158/640x640/10158.jpg.webp"
            title="Pozole blanco"
            paragraph="Lo mismo que el anterior pero blanco y creo que sabe peor :v"
          />
          <form action="submit">
            <Button disabled={false} text={"Ver"} />
          </form>
        </div>
        <div className='product'>
          <Content
            link="https://cdn0.recetasgratis.net/es/posts/7/4/1/ceviche_peruano_18147_600_square.jpg"
            title="Ceviche"
            paragraph="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos
            atque harum optio sed, nulla cumque repellendus aperiam saepe quibusdam rem,"
          />
          <form action="submit">
            <Button disabled={false} text={"Ver"} />
          </form>
        </div>
        <div className='product'>
          <Content
            link="https://imag.bonviveur.com/ceviche-de-camaron.jpg"
            title="Coctel"
            paragraph="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos
            atque harum optio sed, nulla cumque repellendus aperiam saepe quibusdam rem,"
          />
          <form action="submit">
            <Button disabled={false} text={"Ver"} />
          </form>
        </div>
        <div className='product'>
          <Content
            link="https://i5.walmartimages.com.mx/gr/images/product-images/img_large/00750100010306L.jpg"
            title="Producto"
            paragraph="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos
            atque harum optio sed, nulla cumque repellendus aperiam saepe quibusdam rem,"
          />
          <form action="submit">
            <Button disabled={false} text={"Ver"} />
          </form>
        </div>
        <div className='product'>
          <Content
            link="https://i5.walmartimages.com.mx/gr/images/product-images/img_large/00750100010306L.jpg"
            title="Producto"
            paragraph="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos
            atque harum optio sed, nulla cumque repellendus aperiam saepe quibusdam rem,"
          />
          <form action="submit">
            <Button disabled={false} text={"Ver"} />
          </form>
        </div>
        <div className='product'>
          <Content
            link="https://i5.walmartimages.com.mx/gr/images/product-images/img_large/00750100010306L.jpg"
            title="Producto"
            paragraph="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos
            atque harum optio sed, nulla cumque repellendus aperiam saepe quibusdam rem,"
          />
          <form action="submit">
            <Button disabled={false} text={"Ver"} />
          </form>
        </div>
        <div className='product'>
          <Content
            link="https://i5.walmartimages.com.mx/gr/images/product-images/img_large/00750100010306L.jpg"
            title="Producto"
            paragraph="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos
            atque harum optio sed, nulla cumque repellendus aperiam saepe quibusdam rem,"
          />
          <form action="submit">
            <Button disabled={false} text={"Ver"} />
          </form>
        </div>
        <div className='product'>
          <Content
            link="https://i5.walmartimages.com.mx/gr/images/product-images/img_large/00750100010306L.jpg"
            title="Producto"
            paragraph="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos
            atque harum optio sed, nulla cumque repellendus aperiam saepe quibusdam rem,"
          />
          <form action="submit">
            <Button disabled={false} text={"Ver"} />
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;

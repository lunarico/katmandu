import './components/_general.scss'
import {AnimationProvider} from './context/animationContext'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import {Cart} from './components/cart/cart'
import {CartProvider} from './context/cartContext'
import {Footer} from './components/footer/footer'
import {Form} from './components/form/form'
import {ItemDetailContainer} from './components/itemDetailContainer/itemDetailContainer'
import {ItemListContainer} from './components/itemListContainer/itemListContainer'
import {Navbar} from './components/navBar/navBar'
import Logo from './logo.png'

function App() {
  return (
    <CartProvider>
    <AnimationProvider>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path='/'>
            <ItemListContainer logo={Logo}/>
          </Route>
          <Route path="/category/:categoryId">
            <ItemListContainer logo={Logo}/>
          </Route>
          <Route path="/item/:itemId">
            <ItemDetailContainer/>
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path='/form'>
            <Form />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </AnimationProvider>
    </CartProvider>
  )
}
export default App;
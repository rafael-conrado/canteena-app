import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import Home from './pages/Home/index'
import Vitrine from './pages/Vitrine/index'
import Cart from './pages/Cart/index'
import Cadastro from './pages/Cadastro/index'

export const Routes = createAppContainer(
    createSwitchNavigator({
        Home,
        Vitrine,
        Cart,
        Cadastro,
    })
)
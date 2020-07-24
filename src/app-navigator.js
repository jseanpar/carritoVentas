import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import CharactersList from './containers/characters-list'
import SalesCart from './containers/sales-cart'


const SwitchNavigator = createSwitchNavigator(
    {
        App: CharactersList,
        CharactersList: CharactersList,
        SalesCart: SalesCart,
    },
    {
        initialRouteName: 'CharactersList', //ruta inicial
    }
)

export default createAppContainer(SwitchNavigator)
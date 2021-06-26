// Create the base store used by the elements
export default {
    // stored shared state that can be accessed from all components
    state: {
        primaryColor: 'pink'
    },
    mutations: {
        switchToProductsBackground(state){
            state.primaryColor = '#FFFFFF'
        },
        switchToHomeBackground(state){
            state.primaryColor = '#FFD6D6'
        }
    }
}
  
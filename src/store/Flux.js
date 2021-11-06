
 const getState =({getStore, getActions, setStore})=>{

    return {
store: {
 listaFav: [],
 countFav:0,
}
,

actions: {

    getAdd: (valor) => {
        setStore({
            listaFav: getStore().listaFav.concat(valor)
        })
        setStore({
        
            countFav: getStore().countFav + 1
        })
    }
    ,

    getDetele: (valor) => {
setStore({
    listaFav: getStore().listaFav.filter(item=>item !== valor)
    
})
        setStore({
         
            countFav: getStore().countFav - 1
            
        })
    }
    

}
    }

 }

 export default getState;
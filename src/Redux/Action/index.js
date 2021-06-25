export const addCart = (product)=>{

    return {
        type:"addCart",
        payload:product
    }
}
export const fetchCart = ()=>{

    return {
        type:"fetchCart",
    }
}
export const updateCart = (product)=>{

    return {
        type:"updateCart",
        payload:product
    }
}
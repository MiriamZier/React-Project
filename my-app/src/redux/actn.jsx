export const SetCurentUsername=(val)=>{
    // {type:'שם שבחרתי',payload:val}
    return {type:'SET-USER-NAME',payload:val}
}

export const AddUserList=(val)=>{
    return {type:'ADD-USER-TO-LIST',payload:val}
}
export const set_all_r=(list)=>{
    return {type:"SET_ALL_R",payload:list}
}
export const show_all_u=(ulist)=>{
    return {type:"SHOW_ALL_U",payload:ulist}
}
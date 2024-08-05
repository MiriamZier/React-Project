// פעולה זו מגדירה את שם המשתמש הנוכחי.
// היא מחזירה אובייקט עם type של 'SET-USER-NAME' ו-payload שמכיל את הערך (val) שהתקבל.
// ניתן להשתמש בה כדי לעדכן את שם המשתמש במצב הגלובלי של Redux.
export const SetCurentUsername=(val)=>{
    // {type:'שם שבחרתי',payload:val}
    return {type:'SET-USER-NAME',payload:val}
}
// פעולה זו מוסיפה משתמש לרשימת המשתמשים.
// היא מחזירה אובייקט עם type של 'ADD-USER-TO-LIST' ו-payload שמכיל את הערך (val) שהתקבל.
// ניתן להשתמש בה כדי לעדכן את רשימת המשתמשים במצב הגלובלי של Redux.
export const AddUserList=(val)=>{
    return {type:'ADD-USER-TO-LIST',payload:val}
}
// פעולה זו מגדירה את כל המתכונים.
// היא מחזירה אובייקט עם type של 'SET_ALL_R' ו-payload שמכיל את הרשימה (list) שהתקבלה.
// ניתן להשתמש בה כדי לעדכן את רשימת המתכונים במצב הגלובלי של Redux.
export const set_all_r=(list)=>{
    return {type:"SET_ALL_R",payload:list}
}
// פעולה זו מציגה את כל המשתמשים.
// היא מחזירה אובייקט עם type של 'SHOW_ALL_U' ו-payload שמכיל את רשימת המשתמשים (ulist) שהתקבלה.
// ניתן להשתמש בה כדי לעדכן את רשימת המשתמשים במצב הגלובלי של Redux.
export const show_all_u=(ulist)=>{
    return {type:"SHOW_ALL_U",payload:ulist}
}
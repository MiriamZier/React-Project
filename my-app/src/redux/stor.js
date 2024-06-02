import { createStore } from 'redux'; 
import produce from 'immer'; 
const Mystate={
    listUsers:[],
    listRecipes:[
        // {
        //     "name": "עוגה בחושה",
        // "img": "pic1.jpg",
        // "level": "קל",
        // "time": "דקות 10",
        // "type": "פרווה",
        // "code": "12345",
        // "ingrediens": [
        //   {
        //     "name": "קמח",
        //     "amount": "3 כוסות"
        //   },
        //   {
        //     "name": "סוכר",
        //     "amount": "כוס"
        //   },
        //   {
        //     "name": "שמן",
        //     "amount": "כוס"
        //   },
        //   {
        //     "name": "מיץ תפוזים",
        //     "amount": "כוס"
        //   },
        //   {
        //     "name": "אבקת אפיה",
        //     "amount": "שקית 1"
        //   },
        //   {
        //     "name": "קקאו",
        //     "amount": "3 כפות"
        //   },
        //   {
        //     "name": "פודינג וניל",
        //     "amount": "3 כפות"
        //   }]
        // },
        // {
        //     "name": "סופלה",
        //     "img":"pic2.jpg",
        //     "type": "פרווה",
        //     "level": "קל",
        //     "time": "חצי שעה",
        //     "code": "15698",
        //     "ingredients": [
        //       {
        //         "name": "קמח",
        //         "amount": "כוס"
        //       },
        //       {
        //         "name": "סוכר",
        //         "amount": "כוס"
        //       },
        //       {
        //         "name": "שמן",
        //         "amount": "כוס"
        //       },
        //       {
        //         "name": "ביצים",
        //         "amount": "3"
        //       },
        //       {
        //         "name": "כפה",
        //         "amount": "כף 1"
        //       },
        //       {
        //         "name": "שוקולד מריר",
        //         "amount": "200 גרם"
        //       },
        //       {
        //         "name": "אבקת אפיה ",
        //         "amount": "שקית 1"
        //       }
        //     ]
        //   } ,
        //   {"name": "עוגת שמרים",
        //   "img": "pic3.jpg",
        //   "type": "פרווה",
        //   "level": "בינוני",
        //   "time": " שעתיים",
        //   "code": "25469",
        //   "ingredients": [
        //     {
        //       "name": "קמח",
        //       "amount": "קילו 1"
        //     },
        //     {
        //       "name": "סוכר",
        //       "amount": "כוס"
        //     },
        //     {
        //       "name": "שמן",
        //       "amount": "כוס"
        //     },
        //     {
        //       "name": "שמרים ",
        //       "amount": "2.5 כפות"
        //     },
        //     {
        //       "name": "מלח ",
        //       "amount": "כף 1"
        //     },
        //     {
        //       "name": "מים",
        //       "amount": "4 כוסות"
        //     },
        //     {
        //       "name": " שוקולד פרה למריחה",
        //       "amount": "קופסא אחת"
        //     }
        //   ]
        // }
    ]
}
const reducer = produce( 
     (state, action) => { 
     switch (action.type) { 
     
    case 'SET-USER-NAME': {debugger; state.curentUser.name=action.payload ;break}
    case  'ADD-USER-TO-LIST':{debugger; state.listUsers.push(action.payload);break}
    case  'SET_ALL_R':{debugger; state.listRecipes= action.payload;break}
    case 'SHOW_ALL_U':{debugger;state.listUsers=action.payload;break}
     } 
     }, Mystate) 
    const stor =createStore( 
     reducer); 
     //יצירת מחסן הנתונים
    window.store = stor; 
export default stor;

import { createStore } from 'redux'; 
import produce from 'immer'; 

// מצב התחלתי של האפליקציה שמכיל שני מערכים: listUsers ו-listRecipes.
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
// המפחית (Reducer) הוא פונקציה שמקבלת את המצב הנוכחי ואת הפעולה המבוקשת ומחזירה את המצב החדש.
// produce מimmer: מקבל את הפונקציה האימפרטיבית לעדכון מצב (draft) ואת המצב ההתחלתי (base state).
// switch (action.type): בודק את סוג הפעולה ומעדכן את המצב בהתאם.
// פעולות במפחית:
const reducer = produce( 
     (state, action) => { 
     switch (action.type) { 
     // SET-USER-NAME: מעדכן את שם המשתמש הנוכחי בנתון שהתקבל ב-payload.
    case 'SET-USER-NAME': {debugger; state.curentUser.name=action.payload ;break}
    // ADD-USER-TO-LIST: מוסיף משתמש לרשימת המשתמשים.
    case  'ADD-USER-TO-LIST':{debugger; state.listUsers.push(action.payload);break}
    // ADD-USER-TO-LIST: מוסיף משתמש לרשימת המשתמשים.
    case  'SET_ALL_R':{debugger; state.listRecipes= action.payload;break}
    // SHOW_ALL_U: מגדיר את רשימת המשתמשים בנתון שהתקבל ב-payload.
    case 'SHOW_ALL_U':{debugger;state.listUsers=action.payload;break}
     } 
     }, Mystate) 
    const stor =createStore( 
     reducer); 
     //יצירת מחסן הנתונים
    //  מחבר את המחסן (store) לאובייקט הגלובלי window כדי לאפשר גישה למחסן מכל מקום באפליקציה לצורך
    //  בדיקות או ניפוי שגיאות (debugging).
    window.store = stor; 
    // מייצא את המחסן לשימוש בקבצים אחרים באפליקציה.
export default stor;

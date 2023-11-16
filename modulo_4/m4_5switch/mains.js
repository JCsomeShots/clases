let day = new Date().getDay();
let today = ''; 
let hora

console.log(day)

switch (day) {
    case 0: 
        today = 'Domingo'
        break;
    case 1:
        today = 'Lunes'
        break;
    case 2:
        today = 'martes'
        break;
    case 3:
        today = 'Miércoles'
        break;
    default :
        today = 'Los que quedan'
        break
}

console.log('Hoy es ' + today);





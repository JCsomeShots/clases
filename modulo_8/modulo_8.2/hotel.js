export class Hotel {

    constructor(nom, hab, floor, area) {
        this._nom  = nom,
        this._hab = hab,
        this._floor = floor,
        this._area = area,
        this._service = null,
        this._costService = null
    }

    // nom del Hotel
    get nom(){
        return this._nom
    }
    // set nom(name){
    //     this._nom = name;
    // }
    
    // Número de habitaciones
    get hab(){
        return this._hab
    }
    set hab(num){
        this._hab = num;
    }
    
    // Número de Plantas
    get floor(){
        return this._floor
    }
    set floor(num){
        this._floor = num;
    }

     // Área
    get area(){
        return this._area
    }
    set area(num){
        this._area = num
    }

    calcularMantenimiento() {
        const nhxp = 20 // Número habitaciones per persona
        this._service = Math.ceil(this._hab / nhxp)
        this._costService = this._service * 1500

        return {
            service : this._service,
            costService : this._costService
        }
    }

    toString() {
        return 'Soy un string bla bla ...'
    }


}

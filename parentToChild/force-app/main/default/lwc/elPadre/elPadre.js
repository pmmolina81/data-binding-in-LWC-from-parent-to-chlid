import { LightningElement } from 'lwc';

export default class ElPadre extends LightningElement {
    loQueEnviamos = 'Pasando datos entre componentes';

    handleTextChange(event){
        this.loQueEnviamos = event.detail.value;
    }
}
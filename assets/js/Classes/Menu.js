export class Menu{

    constructor(list, trigger){
        this.list = list;
        this.trigger = trigger;
    }


handle()
{
    this.trigger.addEventListener('click', event=>{
        event.preventDefault();

        if(!this.list.classList.contains('active')){
            this.list.classList.add('active');
            console.log('acerto')
        } else{
            this.list.classList.remove('active');
            console.log('removeu');
        }
    })
}


}
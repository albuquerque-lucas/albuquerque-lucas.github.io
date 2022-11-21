export class TecnogyHoverEffect {

    constructor(tecnologyCard, tecnologyContent, tecnologyBrief, color, idSelector) {

        this.tecnologyCard = tecnologyCard;
        this.tecnologyContent = tecnologyContent;
        this.tecnologyBrief = tecnologyBrief;
        this.color = color;
        this.idSelector = idSelector;
    }

    iluminateCard() {

        //CORES USADAS PARA CADA TECNOLOGIA

        const borderThickness = '2px';

        const card = this.tecnologyCard;
        const content = this.tecnologyContent;

        let tecnologyBriefChild = this.tecnologyBrief.querySelector(this.idSelector);

        card.addEventListener('mouseover', event => {
            event.preventDefault();

            this.changeProperties(tecnologyBriefChild, this.tecnologyContent, this.color, content, borderThickness);


        })

        card.addEventListener('mouseout', event => {
            event.preventDefault();

            this.tecnologyBrief.style.boxShadow = 'none';
            this.tecnologyBrief.style.border = 'none';
            content.style.display = 'none';
        })

    }


    changeProperties(listItem, itemWithId, color, content, borderThickness) {

        if (listItem === itemWithId) {
            this.tecnologyBrief.style.boxShadow = `0 0 15px ${color}`;
            this.tecnologyBrief.style.border = `${borderThickness} solid ${color}`;
            this.tecnologyBrief.style.borderLeft = 'none';
            content.style.display = 'block';
        } else{
            console.log('Não foi possível alterar as propriedades.')
        }
    }

}
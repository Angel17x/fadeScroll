export default class FadeScroll{
    
    constructor({
        tag,
        direction,
        overflow
    }){
        window.addEventListener('scroll', () => {
            this.tag = tag
            this.direction = direction
            this.overflow = overflow
            this.validateDateTipe(this.direction, 'string')
            this.validateDateTipe(this.tag, 'string')
            this.tagFadeScroll(this.tag, this.direction, this.overflow)
        })
    }
    validateDateTipe(val, prop){
        if(typeof val != prop){
            return console.error(`valor => ${val} no es un tipo de dato valido (tipo de dato valido => ${prop})`)
        }
    }

    tagFadeScroll(tag, direction, overflow){
        if(document.querySelectorAll(tag).length === 0){
            return console.error(`etiqueta html invalida, vacia o no existente`)
        }
        switch(direction){
            case 'up':
                Array.from(document.querySelectorAll(tag)).map((tag) => {
                    
                    if(overflow === true){
                        tag.classList.add('overflow')
                    }else{
                        tag.classList.remove('overflow')
                    }
                    tag.classList.add('transform_Up')
                    if(tag.getBoundingClientRect().top <= window.innerHeight / 1.3){
                        tag.classList.add('appear')
                    }else{
                        tag.classList.remove('appear')
                    }
                })
            break;
            case 'left':
                Array.from(document.querySelectorAll(tag)).map((tag) => {
                    if(overflow === true){
                        tag.classList.add('overflow')
                    }else{
                        tag.classList.remove('overflow')
                    }
                    tag.classList.add('transform_Left')
                    if(tag.getBoundingClientRect().top <= window.innerHeight / 1.3){
                        tag.classList.add('appear')
                    }else{
                        tag.classList.remove('appear')
                    }
                })    
            break;
            case 'right':
                Array.from(document.querySelectorAll(tag)).map((tag) => {
                    if(overflow === true){
                        tag.classList.add('overflow')
                    }else{
                        tag.classList.remove('overflow')
                    }
                    tag.classList.add('transform_Right')
                    if(tag.getBoundingClientRect().top <= window.innerHeight / 1.3){
                        tag.classList.add('appear')
                    }else{
                        tag.classList.remove('appear')
                    }
                })
            break;
            case 'down':
                Array.from(document.querySelectorAll(tag)).map((tag) => {
                    if(overflow === true){
                        tag.classList.add('overflow-hidden')
                    }
                    tag.classList.add('transform_Down')
                    if(tag.getBoundingClientRect().top <= window.innerHeight / 1.3){
                        tag.classList.add('appear')
                    }else{
                        tag.classList.remove('appear')
                    }
                })
            break;
            default:
                return console.error(`la direccion para el fadeScroll no es valido`)
        }
    }
    
}

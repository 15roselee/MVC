import EventBus from "./EventBus"

class Model extends EventBus{
    constructor(options){
        super()//EventBus#constructor()
        const keys=['data','update','create','delete','get']
        keys.forEach((key)=>{
          if (key in options) {
            this[key]=options[key]
          }
        })
    }
    create(){
        console && console.error && console.error('还未实现create')
    }
    delete(){
        console && console.error && console.error('还未实现delete')
    }
    update(){
        console && console.error && console.error('还未实现update')

    }
    get(){
        console && console.error && console.error('还未实现get')

    }
}

export default Model
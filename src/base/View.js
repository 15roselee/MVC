import $ from 'jQuery'
import EventBus from './EventBus'

class View extends EventBus{
    constructor(options){
      super() //EventBus#constructor()
        Object.assign(this,options)
        this.el=$(this.el)
        this.render(this.data)
        this.autoBindEvents()
        this.on("m:updated", () => {
            this.render(this.data);
          })
           }
        //    自动绑定事件
    autoBindEvents() {
        
        for (let key in this.events) {
          const value = this[this.events[key]];
          const spaceIndex = key.indexOf(" ");
          const part1 = key.slice(0, spaceIndex);
          const part2 = key.slice(spaceIndex + 1);
          this.el.on(part1, part2, value);
    
          // console.log(key);
        }
      }
}
export default View
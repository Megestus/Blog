import{af as i}from"./app-C8rAUWGV.js";import{H as r,a as s}from"./vidstack-DuY_sHvx-CY-wlIbf.js";import"./vidstack-C-clE4br-BqraSnY2.js";class u extends r{constructor(t,e){super(t,e),this.$$PROVIDER_TYPE="AUDIO",i(()=>{this.airPlay=new s(this.media,e)},this.scope)}get type(){return"audio"}setup(){super.setup(),this.type==="audio"&&this.b.delegate.c("provider-setup",this)}get audio(){return this.a}}export{u as AudioProvider};
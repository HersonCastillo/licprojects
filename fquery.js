/*
	******** fakeQuery ******** 
	Herson Castillo
*/

'use strict';
const w = window;
const d = document;

class fQuery{
	constructor(o){
		this.o = o;
		if(this.o !== undefined){
			this.o = this.o.trim();
			if(this.o[0] != '#'){
				this.q = d.querySelectorAll(this.o);
				this.a = true;
			}else{
				this.q = d.querySelector(this.o);
				this.a = false;
			}
		}else return false;
	}
	object(){
		return this.q;
	}
	ready(f){
		f = f || undefined;
		if(f === undefined) console.error('Error: An error occurred in the $:ready() function, an argument is missing.');
		else if(typeof f == "function"){
			if(this.o == undefined){
				d.onload = f();
			}else{
				if(this.a) this.q[0].onload = f();
				else this.q.onload = f;
			}
		}else console.error('Error: The argument set is not a function.')
	}
	html(h){
		h = h || undefined;
		if(h == undefined){
			if(this.a) return this.q[0].textContent;
			else return this.q.textContent;
		}else{
			if(!this.a)this.q.innerHTML = h;
			else for(var i = 0; i <= (this.q.length - 1); i++) this.q[i].innerHTML = h;
		}
		return;
	}
	attr(elem, value){
		if(elem !== undefined){
			value = value || undefined;
			var x = null, selected = false;
			if(this.a) x = this.q[0];
			else x = this.q;
			if(value == undefined)for(var i = 0; i <= (x.attributes.length - 1); i++) if(x.attributes[i]["name"] == elem){
				return x.attributes[i]["value"];
			} else continue;
			else for(var i = 0; i <= (x.attributes.length - 1); i++) if(x.attributes[i]["name"] == elem){
					x.attributes[i]["value"] = value;
					selected = true;
				} else continue;
			if(!selected){
				var nv = value == undefined ? "" : value;
				x.setAttribute(elem, nv);
				return;
			}
		}else{
			if(this.a) return this.q[0].attributes;
			else return this.q.attributes;
		}
	}
	val(value){
		var x = null, y = x;
		if(this.a){
			x = this.q[0];
			y = this.q;
		}else x = this.q;
		value = value || undefined;
		if(value === undefined) return x.value;
		else{
			if(this.a) for(var i = 0; i <= (y.length - 1); i++) y[i].value = value;
			else x.value = value;
			return;
		}
	}
	addClass(clss){
		clss = clss || undefined;
		if(clss !== undefined){
			var x = null;
			if(this.a) x = this.q[0];
			else x = this.q;
			x.classList.add(clss);
			return;
		}else console.error('Error: An error occurred in the $:addClass() function, an argument is missing.');
	}
	removeClass(clss){
		clss = clss || undefined;
		if(clss !== undefined){
			var x = null;
			if(this.a) x = this.q[0];
			else x = this.q;
			x.classList.remove(clss);
			return;
		}else console.error('Error: An error occurred in the $:addClass() function, an argument is missing.');	
	}
	css(prop){
		if(prop !== undefined){
			var x = null;
			if(this.a) x = this.q[0];
			else x = this.q;
			if(typeof prop === "string") return x.style.getPropertyValue(prop.toString());
			else if(typeof prop === "object"){
				var transform = JSON
									.stringify(prop)
									.replace(/["{]/g,"")
									.replace(/[,}]/g,";");
				if(this.a){
					var y = this.q;
					for(var i = 0; i <= (y.length - 1); i++) y[i].style = transform;
				}else this.q.style = transform;
			}else console.error('Error: An error occurred in the $:css() function, a type argument is incorrect.');
		}else console.error('Error: An error occurred in the $:css() function, an argument is missing.');
	}
	on(event, f){
		event = event || undefined;
		f = f || undefined;
		if(event !== undefined && f !== undefined){
			if(typeof f === "function"){
				event = 'on' + event;
				if(this.a) for(var i = 0; i <= (this.q.length - 1); i++) this.q[i][event] = f;
				else this.q[event] = f;
			}else console.error('Error: The argument set is not a function.')
		}else console.error('Error: An error occurred in the $:on(,) function, two arguments are missing.');
	}
}
var $ = (elem) => {
	return new fQuery(elem);
}

(function(window, undefined){
	var document = window.document;
	JSPT = function(el){
		return new JSPT.fn.init(el);
	}

	JSPT.fn = JSPT.prototype = {
		init: function(selector){
			var elems;
			if(!selector){
				return this;
			}
			if(typeof selector === "string"){
				selector = selector.replace(/^\s+|\s+$/g, '');
				//handle a class
				if(selector[0] === "."){
					elems = document.getElementsByClassName(selector.slice(1));
					for(var i=0; i<elems.length; i++){
						this[i] = elems[i];
						this.length = elems.length;
					}
				}
				else if(selector[0] === "#"){
					elems = document.getElementById(selector.slice(1));
					if(elems){
						this[0] = elems;
						this.length = 1;
					}
					
				}
				else{
					elems = document.getElementsByTagName(selector);
					for(var i=0; i<elems.length; i++){
						this[i] = elems[i];
						this.length = elems.length;
					}
				}
				
				
			}
			else if(selector.nodeType){
				this[0] = selector;
				this.length = 1;
			}
			else if(selector instanceof JSPT){
				return selector;
			}
			this.selector = selector;
			return this;
		}, 
		selector:"",
		length:0,
	}
	JSPT.fn.init.prototype = JSPT.fn;
	JSPT.extend = JSPT.fn.extend = function(object){
		console.log(this);
		if(typeof object !== "object"){
			return;
		}
		for( key in object ){
			this[key] = object[key];
		}
	}
	JSPT.fn.extend({
		hide:function(){
			for(var i = 0; i<this.length; i++){
				this[i].style.display = "none";
			}
			return this;
		},
		show: function(){
			for(var i = 0; i<this.length; i++){
				this[i].style.display = "";
			}
			return this;
		},
		//Make this take a callback when we get promises set up!
		fadeOut: function(time){
			for(var i = 0; i<this.length; i++){
				doFadeout.call(this, this[i], time);
			}
			return this;
		},
		click: function(callback){
			var that = this;
			for(var i = 0; i<this.length; i++){
				(function(el){

					el.onclick = function(e){
						callback.call(el, e);
					}
				}(this[i]))
				
			}
		}

	})
	function doFadeout(el, time){
		var iterations;
		var opacity;
		var totalLoops = 0;
		var chunk = 50;
		var that = this;
		time = time || 500;
		iterations = time/chunk;
		opacity = 1/iterations;
		el.style.opacity = el.style.opacity || 1;
		var inter = setInterval(function(){
			if(+el.style.opacity <= 0 || totalLoops === iterations - 1){
				el.style.display = "none";
				clearInterval(inter);
			}
			else{
				el.style.opacity -= opacity;
			}
			totalLoops++;
		}, chunk)
	}
}(window))




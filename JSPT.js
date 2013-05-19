
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
				
				
			}
			else if(selector.nodeType){
				this[0] = nodeType;
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
		fadeOut: function(){
			var opacity;
			for(var i = 0; i<this.length; i++){
				//opacity = parseInt(this[i].style.opacity) || 1;
				if(parseInt(this[i].style.opacity) === 0)
					this[i].style.display = "none";
				else
					this[i].style.opacity -= .1;
			}
			setInterval(function(){clock()},1000);
			return this;
		}
	})

}(window))
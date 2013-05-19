
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
					elems = document.getElementsByClassName(selector.splice(1));
					for(var i=0; i<elems.length; i++){
						this[i] = elems[i];
						this.length = elems.length;
					}
				}
				else if(selector[0] === "#"){
					elems = document.getElementById(selector.splice(1));
					if(elems){
						this[0] = elems;
						this.length = 1;
					}
					
				}
				else if(selector instanceof JSPT){
					return selector;
				}
				else if(selector.nodeType){
					this[0] = nodeType;
					this.length = 1;
				}
			}
			this.selector = selector;
			return this;
		}, 
		selector:"",
		length:0,
	}
	JSPT.fn.init.prototype = JSPT.fn;
	JSPT.fn.extend = function(object){
		if(typeof object !== "object"){
			return;
		}
		for( key in object ){
			JSPT[key] = object[key];
		}
	}
	
}(window))




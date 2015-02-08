(function (){

	var app = angular.module('gemStore', []); 

	app.controller('StoreController', function(){
		this.products = gems;

	});


	var gems = [ 
	{

		name: 'Dodecahedron',
		price : 2.15,
		description : 'description of Dodecaheron',
		canPurchase : true, 
		soldOut : true, 
		images : [
			 "img/Dode_full.png",
					 ["img/Dode_thumb.png",  
						"img/Dode_thumb1.png",
						"img/Dode_thumb2.png" 
					]
				]

	},  
	
	{
		name: 'Azurit',
		price : 3.95,
		description : 'description of Azurit',
		canPurchase : true, 
		soldOut : false,
		images : [
				"img/Azurit_full.png",
					[	"img/Azurit_thumb.png",  
						"img/Azurit_thumb1.png",
						"img/Azurit_thumb2.png" 
					]
  				]
		
	}
	] ;

	
})();
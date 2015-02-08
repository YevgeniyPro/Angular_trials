(function (){

	var app = angular.module('store', []); 

	app.controller('StoreController', function(){
		this.products = gems;

	});


	var gems = [ 
	{

		name: 'Dodecahedron',
		price : 2.95,
		description : 'description of Dodecaheron',
		canPurchase : true, 
		soldOut : true

	},  
	
	{
		name: 'Azurit',
		price : 3.95,
		description : 'description of Azurit',
		canPurchase : true, 
		soldOut : false
	}
	] ;

	
})();
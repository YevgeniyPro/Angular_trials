(function (){

	var app = angular.module('gemStore', ['store-products']); 

	app.controller('StoreController', function(){
		this.products = gems;

	});

	
	

	var gems = [ 
	{

		name: 'Dodecahedron',
		price : 2.15,
		description : 'description of Dodecaherondescription of Dodecaherondescription of Dodecaherondescription of Dodecaherondescription of Dodecaherondescription of Dodecaherondescription of Dodecaherondescription of Dodecaherondescription of Dodecaherondescription of Dodecaherondescription of Dodecaherondescription of Dodecaherondescription of Dodecaherondescription of Dodecaherondescription of Dodecaherondescription of Dodecaheron  ',
		canPurchase : true, 
		soldOut : true, 
		images : [
			 "img/Dode_full.png",
					 ["img/Dode_thumb.png",  
						"img/Dode_thumb1.png",
						"img/Dode_thumb2.png" 
					]
				],
		specification: "size: 12, weight 17, color : black",
		reviews : []



	},  
	
	{
		name: 'Azurit',
		price : 3.95,
		description : 'description of Azuritdescription of Azuritdescription of Azuritdescription of Azuritdescription of Azuritdescription of Azuritdescription of Azuritdescription of Azuritdescription of Azuritdescription of Azuritdescription of Azuritdescription of Azuritdescription of Azuritdescription of Azuritdescription of Azurit',
		canPurchase : true, 
		soldOut : false,
		images : [
				"img/Azurit_full.png",
					[	"img/Azurit_thumb.png",  
						"img/Azurit_thumb1.png",
						"img/Azurit_thumb2.png" 
					]
  				],
		specification: "size: 12, weight 17, color : black" ,
		reviews : [ { stars : 5, author: "Tom@gmail.com", body: "Very nice!"}, {stars : 4, author : "Cecil", body : "Geil!!"} 
					]
	}
	] ;

	
})();
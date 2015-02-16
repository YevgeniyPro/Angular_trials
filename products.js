	
(function() {	
	var app = angular.module('store-products', []);
	app.controller('ReviewController', function() {
		this.review = {};
		
    this.addReview = function(product){
    	product.reviews.push(this.review);
      this.review = {};
    };

	});

	
	app.directive('productGallery', function() {
		return {

			restrict : 'E',
			templateUrl: 'product-gallery.html'
		};

	});
	app.directive('productTitle', function() {
		return {

			restrict : 'E',
			templateUrl: 'product-title.html'
		};

	});
	app.directive('productDescription', function() {
		return {

			restrict : 'E',
			templateUrl: 'product-description.html'
		};

	});
	app.directive('productSpecification', function() {
		return {

			restrict : 'A',
			templateUrl: 'product-specification.html'
		};

	});
	app.directive('submitReview', function() {
		return {

			restrict : 'E',
			templateUrl: 'submit-review.html'
		};

	});
	app.directive('productPanels', function(){
		return {
			restrict :'E',
			templateUrl: 'product-panels.html',
			controller: function() {
		
		this.tab = 1;

		this.setTab = function(setTab) {
			this.tab = setTab;
		};
		this.isSelected = function(checkTab) {
			return (this.tab === checkTab);
		};
		this.showTab = function() {
			return this.tab;
		}; 
	},
		controllerAs: 'tab'
		};

	});

})();
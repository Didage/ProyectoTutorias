(function(){
	var app = angular.module('tutorias', []);
	
	var currentSelection = 0;
	
	app.directive('pageHeader', function(){
		return {
			restrict: 'E',
			templateUrl: '../pages/page-header.html',
			controller: function(){
				this.content = exampleStudent;
				this.logged = false;
				this.login = function(){
					this.logged = true
				};
				this.setCurrentSelection = function(num){
					currentSelection = num;
				};
			},
			controllerAs: 'log'
		};
	});
	
	
	
	
	var exampleStudent = {
		name: 'da.tovar10',
		code: 201512531
	}
		
})();

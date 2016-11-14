var app = angular.module('angularTable', ['angularUtils.directives.dirPagination']);

app.controller('listdata',function($http){
	var vm = this;
	vm.users = []; //declare an empty array
	vm.pageno = 1; // initialize page no to 1
	vm.total_count = 0;
	vm.itemsPerPage = 5; //this could be a dynamic value from a drop down
	
	vm.getData = function(pageno){ // This would fetch the data on page change.
		//In practice this should be in a factory.
		vm.users = [];
		url = 'http://localhost/projects/ssp/mockJson/mock.json';
		//url = "http://code.ciphertrick.com/api/list/page/"+vm.itemsPerPage+"/"+pageno
		$http.get(url).success(function(response){ 
			alert('success'+response);
			vm.users = response;  //response.data //ajax request to fetch data into vm.data
			vm.total_count = 100;//response.total_count;
		}).error(function(data) { 
				alert('failure'); 
		});
	};
	vm.getData(vm.pageno); // Call the function to fetch initial data on page load.
});

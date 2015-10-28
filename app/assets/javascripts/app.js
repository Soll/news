angular.module('flapperNews',['ui.router', 'templates'])
  
  .config([
  '$stateProvider',
  '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider){
    
    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'home/_home.html',
        controller: 'MainCtrl',
        resolve: {
          postPromise: ['posts', function(posts) {
          return posts.getAll();
        }]
    }
      })

      .state('posts', {
        url: '/posts/{id}',
        templateUrl: 'posts/_posts.html',
        controller: 'PostsCtrl',
        resolve: {
          post: ['$stateParams', 'posts', function($stateParams, posts) {
            return posts.get($stateParams.id);
          }]
        }  
      })

    $urlRouterProvider.otherwise('home')

  }])


 /* .factory('posts',[function(){
    var o = {
      posts: []
    };
    return o;
  }])*/

 /* .controller('MainCtrl', [
  '$scope',
  'posts',
  function($scope, posts){
  	$scope.posts = posts.posts;
  
    $scope.addPost = function(){
  	  if (!$scope.title || $scope.title == "") { return; }
  	  $scope.posts.push({
  		  title: $scope.title, 
  		  link: $scope.link,
  		  upvotes: 0,
  		  comments: [
          {author: 'Joe', body: 'Cool post!', upvotes: 0},
          {author: 'Jim', body: 'Fuck yeah!', upvotes: 0},
  		  ]
  	  });
  	  $scope.title = "";
  	  $scope.link = "";
    };

    $scope.incrementUpvotes = function(post){
      post.upvotes += 1;
    };
 
  }])*/
  
  /*.controller('PostsCtrl',[
  '$scope',
  '$stateParams',
  'posts',
  function($scope, $stateParams, posts){
    $scope.post = posts.posts[$stateParams.id];

    $scope.incrementUpvotes = function(comment){
      comment.upvotes += 1;
    };

    $scope.addComment = function(){
      if($scope.body === '') { return; }
      $scope.post.comments.push({
      	body: $scope.body,
      	author: 'user',
      	upvotes: 0
      });

      $scope.body = "";
    };
  
  }]);*/

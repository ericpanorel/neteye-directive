neteye-directive
================

angularJS directive for NETEYE Activity Indicator

This is an experiment, on creating directives for angularJS targeted to http://neteye.github.io/activity-indicator.html

<h1>Depends on</h1>
1.) jQuery, as NETEYE uses jQuery

2.) angularJS

To use (as an attribute):

    <div class="indicator" indicator="isBusy"></div>

where "isBusy" is one of your $scope variables....

<h1>Example</h1>
<h2>HTML</h2>
    <form class="form-inline" role="form">
        <div class="checkbox">
            <label>
                <input type="checkbox" ng-model="vm.isBusy">
                Check me to toggle the busy indicator
            </label>
        </div>
     </form>
     <div class="indicator" indicator="vm.isBusy"></div>
<h2>Controller</h2>
    (function () {
        'use strict';
        var controllerId = 'usersController';
        angular.module('app').controller(controllerId,
    		['$scope',  usersController]);
    
        function usersController($scope) {
            var vm = this;
            vm.isBusy = false;
        }
    })();
<h1>License</h1>
MIT license - http://www.opensource.org/licenses/mit-license.php

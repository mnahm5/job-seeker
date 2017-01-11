(function () {
  'use strict';

  angular
    .module('jobs')
    .run(menuConfig);

  menuConfig.$inject = ['Menus'];

  function menuConfig(Menus) {
    // Set top bar menu items
      Menus.addMenuItem('topbar', {
      title: 'Create Job',
      state: 'jobs.create'
    });
  }
}());

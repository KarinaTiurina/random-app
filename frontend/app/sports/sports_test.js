'use strict';

describe('myApp.sports module', function() {

  beforeEach(module('myApp.sports'));

  describe('sports controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var view2Ctrl = $controller('SportsCtrl');
      expect(view2Ctrl).toBeDefined();
    }));

  });
});

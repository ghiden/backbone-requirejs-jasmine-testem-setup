define(['models/todo'], function(Todo) {
  describe("Todo Model", function() {
    it("should have a default title, completed, and timestamp", function() {
      var t = new Todo()
      expect(t.get('title')).toEqual("");
      expect(t.get('completed')).toEqual(false);
      expect(t.get('timestamp')).toEqual(jasmine.any(Number));
    });

    describe('validation', function() {
      it('should not save with empty title', function() {
        var errorSpy = jasmine.createSpy('error_event'),
            t = new Todo();

        t.collection = {url: '/collection'}
        // HEAD
        //t.on('invalid', errorSpy);
        // 0.9.2
        t.on('error', errorSpy);

        t.save({title: ''});

        expect(errorSpy).toHaveBeenCalled();
        expect(errorSpy.mostRecentCall.args[1]).toEqual('cannot have an empty title');
      });
    });

  });
});

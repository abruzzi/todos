describe("interact with specified remote resource ", function(){

    beforeEach(function(){
        var fixtures = jasmine.getFixtures();

        fixtures.fixturesPath = 'base/spec/fixtures/';
        fixtures.load('templ.html');
    });

    describe("read", function(){
       it("should read data from specified remote resource", function(){
           spyOn($, 'ajax').andCallThrough();

           $("input").todoify({
               resource: "http://resource",
               data: "/todos",
               container: "#todos"
           });

           expect($.ajax).toHaveBeenCalled();
           expect($.ajax.mostRecentCall.args[0]["url"]).toEqual("http://resource/todos");
       });
    });

    describe("create", function(){});

    describe("update", function(){});

    describe("delete", function(){});
});
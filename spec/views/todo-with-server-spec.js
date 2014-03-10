describe("interact with backend server", function() {
    beforeEach(function(){
        var fixtures  = jasmine.getFixtures();

        jasmine.getFixtures().fixturesPath = 'base/spec/fixtures/';
        fixtures.load('templ.html');
    });

    describe("with data reqeusted from server", function() {
        beforeEach(function() {
            spyOn($, 'ajax').andCallFake(function (params) {
                params.success(["foo", "bar"]);
            });
        });

        beforeEach(function() {
            $("input").todoify({
                data: "/todos",
                container: "#todos"
            });
        });

        it("should request resource from server", function() {
            expect($.ajax).toHaveBeenCalled(); 
            expect($.ajax.mostRecentCall.args[0]["url"]).toEqual('/todos');
        });

        it("should render pre-defined data to list", function() {
            expect($("#todos").find(".todo").length).toBe(2);
        });

    });

    describe("with data requested from server, but the data need to be plucked", function() { 
        beforeEach(function() {
            spyOn($, 'ajax').andCallFake(function (params) {
                params.success([{"id": 1, "description": "foo"}, {"id": 1, "description": "bar"}]);
            });
        });

        beforeEach(function() {
            $("input").todoify({
                data: "/todos",
                dataKey: "description",
                container: "#todos"
            });
        });

        it("should render pre-defined data to list", function() {
            expect($("#todos").find(".todo").length).toBe(2);
            expect($("#todos").find(".todo").first()).toContainText("foo");
        });

    });
});

$.fn.pressEnter = function () {
    var e = $.Event("keypress");
    e.keyCode = 13;
    $(this).trigger(e);
};

describe("todo view", function(){

    beforeEach(function(){
        var fixtures  = jasmine.getFixtures();

        jasmine.getFixtures().fixturesPath = 'base/spec/fixtures/';
        fixtures.load('templ.html');
    });

    describe("with empty list", function() {

        beforeEach(function() {
            $("input").todoify({
                container: "#todos"
            });
        });

        it("should render an empty list", function() {
            expect($("#todos").find(".todo").length).toBe(0);
        });

        it("should be able to add new item to list", function() {
            $("input").val("new item added.").pressEnter();

            expect($("#todos").find(".todo").length).toBe(1);
            expect($("#todos").find(".todo").first()).toContainText("new item added.");
        });

    });

    describe("with pre-defined data", function() {

        beforeEach(function() {
            $("input").todoify({
                data: [1, 2, 3],
                container: "#todos"
            });
        });

        it("should render pre-defined data to list", function() {
            expect($("#todos").find(".todo").length).toBe(3);
        });

        it("should be able to remove item", function() {
            $("#todos span:first").click();
            expect($("#todos").find(".todo").length).toBe(2);
        });

    });

});


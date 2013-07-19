jasmine.getFixtures().fixturesPath = 'spec/fixtures';
describe("todo view", function(){
    beforeEach(function(){
        loadFixtures('templ.html');
    });

    it("should render an empty list", function() {
        $("input").todoify({
            container: "#todos"
        });
        expect($("#todos").find(".todo").length).toBe(0);
    });

    it("should render pre-defined data to list", function() {
        $("input").todoify({
            data: [1, 2, 3],
            container: "#todos"
        });
        expect($("#todos").find(".todo").length).toBe(3);
    });

    // it("should be able to add new item to list", function() {
    //     $("input").todoify({
    //         container: "#todos"
    //     });
    //     expect($("#todos").find(".todo").length).toBe(0);

    //     $("input").val("new item added.").;
    //     expect($("#todos").find(".todo").length).toBe(1);
    // });
})

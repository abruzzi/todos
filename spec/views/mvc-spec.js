describe("test mvc", function() {
    var data;
    beforeEach(function(){
        data = [
            "Apple",
            "Borland",
            "Cisco"
        ];
    });

    describe("model", function() {
        it("get data from model", function() {
            var model = new Model(data);
            expect(model.getData().length).toBe(3);
        });

        it("add item from model", function() {
            var model = new Model(data);
            model.add("Dell");
            expect(model.getData().length).toBe(4);
        });

        it("remove item from model", function() {
            var model = new Model(data);
            model.remove("Apple");
            expect(model.getData().length).toBe(2);
        });
    });

    describe("view", function() {
        
    });
});

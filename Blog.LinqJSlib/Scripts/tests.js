
//REPO
var objArray = [
    {
        id: 1,
        description: "Cuba libre",
        price: 6.00
    },
        {
            id: 2,
            description: "Beer",
            price: 3.50
        },
            {
                id: 3,
                description: "Vodka Lemon",
                price: 5.00
            },
            {
                id: 4,
                description: "Long island",
                price: 5.50
            },
              {
                  id: 5,
                  description: "Caipiroska",
                  price: 7.50
              }

]


//SIMPLE QUERY

var testResult1= Enumerable.From(objArray)
    .Where(function (x) { return x.price >= 5.00 })
.Select(function (x) { return x.description }).ToArray();


QUnit.test("Test Where() and Select()", function (assert) {
    assert.ok(testResult1[0] == "Cuba libre", "Passed!");
});

//LAMBDA EXP
var testResult2 = Enumerable.From(objArray)
    .Where("$.price >= 5.00")
.Select("$.description").ToArray();

QUnit.test("Test Where() and Select() using LAMBDA selector", function (assert) {
    assert.ok(testResult2[0] == "Cuba libre", "Passed!");
});



//LAMBDA EXP
var testResult3 = Enumerable.From(objArray)
    .Where("$.price >= 5.00")
    .OrderBy("$.price")
.Select(function (x) {
       return x.description
}).ToArray();

QUnit.test("Test ORDERBY() using LAMBDA selector", function (assert) {
    assert.ok(testResult3[0] == "Vodka Lemon", "Passed!");
});







$(document).ready(() => {
    var card = new ClozeCard("David", "David Wright");
    console.log(card.partial);

    GenerateBasicCard("What is the captital of Jamaica?", "Kingston");
    GenerateClozeCard("Kingston", "The capital of Jamaica is Kingston");

    //flip basic card event
    $(".basic-card").click(e => {
        var card = $(e.currentTarget);
        var context = card.children(".context");
        var displayFront = context.data("displayFront");

        if (displayFront) {
            context.html(context.data("back"));
            context.data("displayFront", false);
        } else if (!displayFront) {
            context.html(context.data("front"));
            context.data("displayFront", true);
        }
    });
});

function GenerateClozeCard(cloze, text) {
    var cardInfo = new ClozeCard(cloze, text);

    var card = $("<div>").addClass("card cloze-card");

    var partialText = $("<p>").html(cardInfo.partial);
    var input = $("<input>").addClass("input");
    var button = $("<button>")
        .addClass("submit")
        .html("Check");

    card.append(partialText, input, button);
    $("#cards").append(card);
}

function GenerateBasicCard(front, back) {
    var cardInfo = new BasicCard(front, back);

    var card = $("<div>").addClass("card basic-card");

    var context = $("<p>")
        .addClass("context")
        .data("front", cardInfo.front)
        .data("back", cardInfo.back)
        .data("displayFront", true)
        .html(cardInfo.front);

    card.append(context);
    $("#cards").append(card);
}
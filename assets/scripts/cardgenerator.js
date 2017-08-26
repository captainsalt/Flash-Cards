function GenerateClozeCard(cloze, text) {
    var cardInfo = new ClozeCard(cloze, text);

    var card = $("<div>")
        .addClass("card cloze-card")
        .data("answer", cardInfo.cloze);

    var partialText = $("<p>").html(cardInfo.partial);
    var input = $("<input>").addClass("answer");
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
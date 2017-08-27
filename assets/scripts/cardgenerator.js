function GenerateClozeCard(cloze, text) {
    var cardInfo = new ClozeCard(cloze, text);

    var card = $("<div>")
        .addClass("card cloze-card")
        .data("answer", cardInfo.cloze);
        
    var input = $("<input>").addClass("answer");
    var partialText = $("<p>")
        .html(cardInfo.partial)
        .addClass("partial");
    var button = $("<button>")
        .addClass("submit button")
        .html("Check Answer");

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
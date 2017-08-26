$(document).ready(() => {
    var card = new ClozeCard("David", "David Wright");
    console.log(card.partial);

    GenerateBasicCard("David", "Wright");

    //flip basic card
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
    var card = new ClozeCard(cloze, text);
}

function GenerateBasicCard(front, back) {
    var cardInfo = new BasicCard(front, back);

    var card = $(`<div>`).addClass("basic-card");

    var context = $(`<p>`)
        .addClass("context")
        .data("front", cardInfo.front)
        .data("back", cardInfo.back)
        .data("displayFront", true)
        .html(cardInfo.front);

    card.append(context);
    $("#cards").append(card);
}
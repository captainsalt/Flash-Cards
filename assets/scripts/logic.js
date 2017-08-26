$(document).ready(() => {
    GenerateBasicCard("What is the captital of Jamaica?", "Kingston");
    GenerateClozeCard("Kingston", "The capital of Jamaica is Kingston");

    $(".generate").click(() => {
        GenerateBasicCard("What is the captital of Jamaica?", "Kingston");
    });

    //basic card click event
    $("#cards").on("click", ".basic-card", e => {
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

    //cloze card submit event
    $("#cards").on("click", ".cloze-card .submit", e => {
        var card = $(e.currentTarget.parentElement);
        var answer = card.children(".answer").val().toLowerCase();
        var correctAnswer = card.data("answer").toLowerCase();

        if (answer !== correctAnswer) {
            alert("Incorrect");
        } else if (answer === correctAnswer) {
            alert("Correct");
        }
    });
});

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
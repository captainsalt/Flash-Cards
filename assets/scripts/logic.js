$(document).ready(() => {
    //set the mode to basic
    $("#submit-card").data("mode", "basic");

    //basic card click event
    $("#cards").on("click", ".basic-card", e => onBasicCardClick(e));
    //cloze card submit event
    $("#cards").on("click", ".cloze-card .submit", e => onClozeCardSubmit(e));
    //clicked on create basic button
    $("#create-basic").click(e => onModeBasic(e));
    //clicked on create cloze button
    $("#create-cloze").click(e => onModeCloze(e));
    //When you submit a card
    $("#submit-card").click(e => onSubmitCard(e));
});

function onBasicCardClick(e) {
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
}

function onClozeCardSubmit(e) {
    var card = $(e.currentTarget.parentElement);
    var answer = card.children(".answer").val().toLowerCase();
    var correctAnswer = card.data("answer").toLowerCase();

    if (answer !== correctAnswer) {
        alert("Incorrect");
    } else if (answer === correctAnswer) {
        alert("Correct");
    }
}

function onSubmitCard(e) {
    var mode = $(e.currentTarget).data("mode");
    var values = $("#card-input").children("input").get();

    for (let i = 0; i < values.length; i++) {
        var val = $(values[i]).val();

        if (!val)
            return console.log("Cannot have a null value");
    }

    var firstArgument = $(values[0]).val();
    var secondArgument = $(values[1]).val();

    if (mode === "basic")
        GenerateBasicCard(firstArgument, secondArgument);
    else if (mode === "cloze")
        GenerateClozeCard(firstArgument, secondArgument);
}

function onModeBasic(e) {
    $("#first-label").html("Front");
    $("#second-label").html("Back");
    $("#submit-card").data("mode", "basic");
}

function onModeCloze(e) {
    $("#first-label").html("Cloze");
    $("#second-label").html("Full Text");
    $("#submit-card").data("mode", "cloze");
}

function clearText() {
    var values = $("#card-input").children("input").get();
    for (let i = 0; i < values.length; i++)
        var val = $(values[i]).val(null);
}
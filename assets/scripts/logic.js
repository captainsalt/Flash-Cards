$(document).ready(() => {
    //Flip the card when you click on it
    $("#cards").on("click", ".basic-card", e => onBasicCardClick(e));
    //Check answer when you submit
    $("#cards").on("click", ".cloze-card .submit", e => onClozeCardSubmit(e));
    //Initializes setup for a basic card
    $("#create-basic").click(e => onModeBasic(e));
    //Inistalizes setup for a cloze card
    $("#create-cloze").click(e => onModeCloze(e));
    //Submit a card
    $("#submit-card").click(e => onSubmitCard(e));
    //Cancel making a card
    $("#cancel").click(e => onTemplateCancel(e));
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

    //catches errors with creating cards
    try {
        if (mode === "basic")
            GenerateBasicCard(firstArgument, secondArgument);
        else if (mode === "cloze")
            GenerateClozeCard(firstArgument, secondArgument);
    } catch (error) {
        return alert(error);
    }

    clearText();
    showCardTemplate(false);
}

function onModeBasic(e) {
    $("#first-label").html("Front");
    $("#second-label").html("Back");
    $("#submit-card").data("mode", "basic");
    showCardTemplate(true);
}

function onModeCloze(e) {
    $("#first-label").html("Cloze");
    $("#second-label").html("Full Text");
    $("#submit-card").data("mode", "cloze");
    showCardTemplate(true)
}

function onTemplateCancel() {
    showCardTemplate(false);
}

function clearText() {
    var values = $("#card-input").children("input").get();
    for (let i = 0; i < values.length; i++)
        var val = $(values[i]).val("");
}

//Switches between creation options
function showCardTemplate(isDisplay) {
    if (isDisplay) {
        $("#card-creation").addClass("hidden");
        $("#card-input").removeClass("hidden");
    } else {
        $("#card-creation").removeClass("hidden");
        $("#card-input").addClass("hidden");
    }
}
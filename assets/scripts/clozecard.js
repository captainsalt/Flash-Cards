function ClozeCard(cloze, fullText) {
    if (!(this instanceof ClozeCard))
        return new ClozeCard(cloze, partial, fullText);

    this.cloze = cloze;
    this.fullText = this.checkCloze(cloze, fullText);
    this.partial = this.fullText.replace(cloze, "...");
}

ClozeCard.prototype.checkCloze = function(cloze, fullText) {
    if (fullText.includes(cloze))
        return fullText;
    else
        throw new Error("Full text does not contain close\nNote: Case sensitive!");
}

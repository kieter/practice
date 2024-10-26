const markdownString =
`
This is a paragraph with a soft
line break.

This is another paragraph that has
> Some text that
> is in a
> block quote.

This is another paragraph with a ~~strikethrough~~ word.
Line with **bold** and *italics*.
`

const convertMarkdownToHTML = (markdown) => {
    let html = ""
    const root = document.getElementById("root");
    root.innerText = "root";
    const markdownLines = markdown.split("\n");
    markdownLines.forEach((line) => {
        if (line.includes("> ")) {
            const caretIndex = line.indexOf("> ")
            html += `<blockquote>${line.slice(caretIndex + 1)}</blockquote>`
        }
        else if (line.includes("**") || line.includes("*") || line.includes("~~")) {
            html += handleInlineFormatting(line);
        }
        // just text
        else {
            html += `<p>${line}</p>`
        }
    })
    root.innerHTML = html;
}

const handleStrikeThrough = (line) => {
    const startIndex = line.indexOf("~~")
    const endIndex = line.indexOf("~~", startIndex + 2);
    console.log(line[startIndex]);
    console.log(line[endIndex]);
    return `<p>${line.slice(0, startIndex)}<s>${line.slice(startIndex + 2, endIndex)}</s>${line.slice(endIndex + 2)}</p>`;
}

const handleInlineFormatting = (line) => {
    let result = "";
    for (let i = 0; i < line.length; i++) {
        // ** bold case
        if (line[i] === "*" && line[i + 1] === "*") {
            const endingBoldIndex = line.indexOf("**", i + 2)
            result += "<strong>" + line.slice(i + 2, endingBoldIndex) + "</strong>";
            i = endingBoldIndex + 1;

        // * italic case
        } else if (line[i] === "*") {
            const endingItalicIndex = line.indexOf("*", i + 1)
            result += "<i>" + line.slice(i + 1, endingItalicIndex) + "</i>";
            i = endingItalicIndex;

        // ~~ strikethrough case
        } else if (line[i] === "~" && line[i + 1] === "~") {
            const endingStrikeIndex = line.indexOf("~~", i + 2);
            result += "<s>" + line.slice(i + 2, endingStrikeIndex) + "</s>";
            i = endingStrikeIndex + 1;
        } else {
            result += line[i]
        }
    }
    result += "<br/><br/>"
    return result;
}

convertMarkdownToHTML(markdownString)
const linkReplacer = require("./replace4chanLinks");

window.onload = () => {
  const buttonId = "update-links-button";
  const textareaId = "textarea-body";

  const button = document.getElementById(buttonId);
  button.addEventListener("click", () => {
    const textarea = document.getElementById(textareaId);
    renumberTextarea(textarea);
  });
};

// Perform checkFormat on textarea, renumber its text, and paste it into textarea
function renumberTextarea(textarea) {
  const oldText = textarea.value;
  const newText = linkReplacer.updateDeadLinks(oldText);

  const originalStartPosition = textarea.selectionStart;
  const originalEndPosition = textarea.selectionEnd;

  textarea.selectionStart = 0;
  textarea.selectionEnd = textarea.value.length;
  textarea.focus();
  document.execCommand("insertText", false, newText);
  textarea.selectionStart = originalStartPosition;
  textarea.selectionEnd = originalEndPosition;
}

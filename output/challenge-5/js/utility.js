let lastSelectedCheckbox;

const checkMultipleCheckbox = (
  previouslySelectedCheckbox,
  currentSelectedCheckBox
) => {
  let Allepisodes = document.querySelectorAll("input");
  let selectCheckboxFrom = Array.prototype.indexOf.call(
    Allepisodes,
    previouslySelectedCheckbox
  );
  let selectCheckboxTo = Array.prototype.indexOf.call(
    Allepisodes,
    currentSelectedCheckBox
  );

  if (selectCheckboxFrom > selectCheckboxTo) {
    [selectCheckboxFrom, selectCheckboxTo] = [
      selectCheckboxTo,
      selectCheckboxFrom,
    ];
  }
  selectCheckboxFrom =
    selectCheckboxFrom > selectCheckboxTo
      ? selectCheckboxTo
      : selectCheckboxFrom;
  selectCheckboxTo =
    selectCheckboxFrom > selectCheckboxTo
      ? selectCheckboxFrom
      : selectCheckboxTo;

  let toBechecked = selectCheckboxFrom;
  while (toBechecked < selectCheckboxTo) {
    Allepisodes[toBechecked++].checked = true;
  }
};

export const updateSelectedCheckbox = (event) => {
  if (lastSelectedCheckbox && event.shiftKey) {
    checkMultipleCheckbox(lastSelectedCheckbox, event.target);
    console.log(1);
  }
  lastSelectedCheckbox = event.target;
  if (!lastSelectedCheckbox.checked) {
    lastSelectedCheckbox = undefined;
    console.log(3);
  }
};

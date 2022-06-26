import { updateSelectedCheckbox } from "./utility.js";

const createLabel = (episodeLabelName) => {
  const labelElement = document.createElement("label");
  labelElement.setAttribute("for", episodeLabelName);
  // console.log(labelElement);
  return labelElement;
};

const createCheckbox = (episodeLabelNameForUi) => {
  const checkBox = document.createElement("input");
  checkBox.setAttribute("type", "checkbox");
  checkBox.name = episodeLabelNameForUi;
  checkBox.setAttribute("id", episodeLabelNameForUi);
  checkBox.addEventListener("click", updateSelectedCheckbox);
  return checkBox;
};

const createSpanElement = (episodeName, episodeId) => {
  const spanElement = document.createElement("span");
  spanElement.innerHTML = episodeId + " || " + episodeName;
  return spanElement;
};

export const createEpisodeliElement = (episode) => {
  const episodeName = episode.name;
  const episodeId = episode.id;
  const episodeLabelName = `episode-${episodeId}`;
  const liElement = document.createElement("li");
  const labelElement = createLabel(episodeLabelName);
  const inputElement = createCheckbox(episodeLabelName);
  const spanElement = createSpanElement(episodeName, episodeId);
  labelElement.appendChild(inputElement);
  labelElement.appendChild(spanElement);
  liElement.appendChild(labelElement);
  return liElement;
};

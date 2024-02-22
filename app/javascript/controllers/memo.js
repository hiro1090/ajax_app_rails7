function post (){
  const form = document.getElementByid("form");
  form.addEventListener("submit",(e) => {
  e.preventDefalut();
  form.addEventListener("submit", () => {
  const formDate = new FormDate(form);
  const XHR = new XMLHttpsRequest();
  XHR.open("POST", "/posts", true);
  XHR.responseType = "json";
  XHR.send(formDate);
});
};

window.addEventListener('turbo:load', post);
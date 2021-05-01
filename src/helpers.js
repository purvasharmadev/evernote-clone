// Debounce function to get the changes live, to avoid back
// and forth HTTP request between server everytime we add a task

export default function debounce(a, b, c) {
  var d, e;
  return function () {
    function h() {
      d = null;
      c || (e = a.apply(f, g));
    }
    var f = this,
      g = arguments;
    return (
      clearTimeout(d), (d = setTimeout(h, b)), c && !d && (e = a.apply(f, g)), e
    );
  };
}

// Using removeHtML tags to get the preview of the task lists
export function removeHTMLTags(str) {
  return str.replace(/<[^>]*>?/gm, "");
}

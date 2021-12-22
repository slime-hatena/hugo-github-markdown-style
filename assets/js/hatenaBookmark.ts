interface HBBlogParts {
  commentInsertSelector: Array<string>;
  insertPosition: string;
  permalinkSelector: Array<string>;
  permalinkAttribute: string;
  permalinkPathRegexp: RegExp;
  permalinkURI: string;
  permalinkCommentLimit: number;
  listPageCommentLimit: number;
}

interface Window {
  HBBlogParts: HBBlogParts;
}

window.HBBlogParts.commentInsertSelector = ['div#hatena-bookmark-marker'];
window.HBBlogParts.insertPosition = 'after';
window.HBBlogParts.permalinkSelector = ['span#permalink'];
window.HBBlogParts.permalinkAttribute = 'href';
window.HBBlogParts.permalinkPathRegexp = /\/.*/;
window.HBBlogParts.permalinkURI = '{{ .Permalink }}';
window.HBBlogParts.permalinkCommentLimit = 10;
window.HBBlogParts.listPageCommentLimit = 10;

interface Window {
  Hatena: Object;
}

window.Hatena = {
  Star: {
    SiteConfig: {
      entryNodes: {
        main: [
          {
            uri: '#permalink',
            title: '#title',
            container: '#hatena-star-foot-marker'
          }
        ]
      }
    }
  }
};

const observer = new MutationObserver((_) => {
  const addFootButton: HTMLImageElement = document.querySelector(
    '#hatena-star-foot-marker > .hatena-star-star-container .hatena-star-add-button'
  );
  if (addFootButton) {
    addFootButton.src =
      'https://cdn.blog.st-hatena.com/images/theme/star/hatena-star-add-button.svg';
  }

  const starLinks: NodeListOf<HTMLAnchorElement> = document.querySelectorAll(
    '#hatena-star-foot-marker > .hatena-star-star-container > a'
  );
  if (starLinks) {
    starLinks.forEach((starLink) => {
      starLink.target = '_blank';
    });
  }

  const defaultStars: NodeListOf<HTMLImageElement> = document.querySelectorAll(
    'div#hatena-star-foot-marker>span.hatena-star-star-container>a>.hatena-star-star'
  );
  if (defaultStars) {
    defaultStars.forEach((defaultStar) => {
      if (!defaultStar.alt) return;
      defaultStar.outerHTML =
        '<span class="hatena-big-star-star-container"><img src="https://cdn.profile-image.st-hatena.com/users/' +
        defaultStar.alt +
        '/profile.png" class="hatena-star-user"><img src="https://s.hatena.ne.jp/images/star.gif" alt="' +
        defaultStar.alt +
        '" class="hatena-star-star-refined"></span>';
    });
  }
});
const hatenaStarFootMarker = document.querySelector('#hatena-star-foot-marker');
if (hatenaStarFootMarker != null) {
  observer.observe(hatenaStarFootMarker, {childList: true, subtree: true});
}

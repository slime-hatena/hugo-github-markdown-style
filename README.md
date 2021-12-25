# hugo-github-markdown


## Sample config

```yaml
baseurl: "http://localhost:1313"
title: "hugo-github-markdown sample"
theme: "hugo-github-markdown"
languageCode: "ja"
hasCJKLanguage: true
enableGitInfo: true
footnotereturnlinkcontents: "↩"

permalinks:
  posts: ":filename"

params:
  paginate: 50
  description: "Modify this to create a good config file."
  footer:
    poweredByHugo: true
    themeInformation: true
    text: "You can use Markdown here. For example, you may want to write the copyright or license. (&copy; 2022 [Name](https://example.com)"
  gtagId: "G-BP3FCQ5SPR" # If required, set a valid gtag(v4). e.g."G-XXXXXXXXXX"
  hatenaBookmark: true
  hatenaStar: true
  alternativeTweet: true

# Use shields.io. Set a value that it can interpret.
# https://shields.io/#your-badge
menu:
  main:
    - name: Categories
      url: "/categories/"
      params:
        color: "success"
      weight: 1
    - name: Tags
      url: "/tags/"
      params:
        color: "informational"
      weight: 2
    - name: "RSS Feed"
      url: "/index.xml"
      params:
        color: "orange"
      weight: 3
    - name: GitHub
      url: "https://github.com/github"
      params:
        label: / # If not specified, the url will be displayed.
        message: github # If not specified, name will be displayed.
        logo: github
        color: "181717"
        target: "_blank"
      weight: 11
    - name: Twitter
      url: "https://twitter.com/github"
      params:
        label: /
        message: github
        logo: twitter
        color: "1DA1F2"
        target: "_blank"
      weight: 12
    - name: "External link"
      url: "https://example.com"
      params:
        label: example--link # Dashes -- → - Dash
        color: "007BFF"
        target: "_blank"
      weight: 13

markup:
  highlight:
    codeFences: true
  tableOfContents:
    startLevel: 2
    endLevel: 6
    ordered: false
    # To hide the toc, make the startLevel larger than the endLevel (startLevel > endLevel). Or there may be a better way. If you know how to do this, please let us know in an issue.
```

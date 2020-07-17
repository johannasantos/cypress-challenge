# cypress challenge
Automated tests written with Cypress 

1. Design a QA strategy to verify our Mega Menu.
https://www.teachaway.com/

2. Implement QA Automation scripts using cypress.io or selenium.

# Steps to run 

- npm run cypress:open

- Go to integration/test

- Run menu.js and login.js to run every test


# challenge resolutions


Hi Teach Away team :)

I want it to let you know some things that can be improved to make the site more testable, accessible and also ways to improve the CEO of the website.

- The selectors in the Mega Menu can be improve adding IDs to the classes that are already in the selectors. By having an unique ID selector for every html tag, it will be easier to automated the site and will improve the CEO.

- The performance of "Job Aboard" (https://www.teachaway.com/teaching-jobs-abroad) is not the most efficience, it tooks 60 sec or more to load, that's something that can be improved, and doing the automated test I got error 504 often.

**CEO**
- Every page should have a title that isn't too long or too short. Well-written page titles of a suitable length will help your site stand out in search results and help search engines understand what your pages are about. Short titles are likely lacking in enough information for both users and search engines. Long titles aren't displayed in full in search results which can be unhelpful to users. I recommend pages titles are between 10 and 60 characters.

- All pages should specify a valid canonical URL to get more control over how duplicate URLs are treated by search engines. When a set of URLs on your site return duplicate or near duplicate content, search engines will select a single definitive URL for that content called the canonical URL. This URL will be crawled more often, will take priority in search results over URLs with duplicate content and search rank boosting backlinks to the URLs with duplicate content will be viewed as linking to the canonical URL. Note that "self-canonicalizing" a page by setting its canonical URL to itself is both valid and useful as it can help eliminate potential duplicates such as when pages may be linked to with tracking URL parameters. To suggest the canonical URL for a page you can 1) add a <link rel="canonical" href="..."> tag inside the page's <head> tag (most common) or 2) add a Link: <...>; rel="canonical" header to the page's response headers. Google suggest giving absolute canonical URLs over relative ones. Search engines are likely to ignore your canonical URL suggestion if you 1) include multiple canonical URL suggestions per page or 2) suggest a URL that is broken, redirects, isn't indexable or isn't itself canonical. Keep in mind that for exact duplicates you should consider if it is more appropiate to use 301 redirects over canonical URLs to consolidate duplicates instead.
  
- Every image included on a page using <img> tags should be given an accurate description using alt attributes. Well-written alt text can improve search rankings because search engines will check these for relevant keywords. Providing alt text is also important for accessibility because assistive technologies like screen readers rely on this text as an alternative to displaying images. 


**Accesibility**
- In here I'm gonna list a couple issues I've found in your website so you can improve the accesibility too :)


Title: Ensures aria-hidden elements do not contain focusable elements

Description of the issue: Ensures aria-hidden elements do not contain focusable elements

Target application: Teach Abroad or Online | Your Dream Teaching Job Awaits - https://www.teachaway.com/

Element path: #slick-views-what-s-new-teacher-dashboard-block-1-1-slider > .draggable.slick-list > .slick-track > .slide--4.slick__slide[data-slick-index="\34 "]

Snippet: <div class="slick__slide slide slide--4 slick-slide" data-slick-index="4" aria-hidden="true" style="width: 182px;" tabindex="0">

How to fix: 
Fix all of the following:
  Focusable content should have tabindex='-1' or be removed from the DOM

Environment: Chrome version 84.0.4147.89



====

Title: Ensures the contrast between foreground and background colors meets WCAG 2 AA contrast ratio thresholds 

Issue: Ensures the contrast between foreground and background colors meets WCAG 2 AA contrast ratio thresholds 

Target application: Teach Abroad or Online | Your Dream Teaching Job Awaits - https://www.teachaway.com/

Element path: #Homepage_Section1\.1_ViewTeachingJobs

Snippet: 

```<a class="btn btn-cta-front" id="Homepage_Section1.1_ViewTeachingJobs" href="/teaching-jobs-abroad" title="Teaching Jobs Abroad" tabindex="0">View Teaching Jobs</a>
```

How to fix: 
Fix any of the following:
  Element has insuficient color contrast of 2.19 (foreground color: #ffffff, background color: #68c441, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

Environment: Chrome version 84.0.4147.89

====

Title: Ensures every id attribute value is unique 
Tags: Accessibility, WCAG 4.1.1, duplicate-id

Issue: Ensures every id attribute value is unique 

Target application: Teach Abroad or Online | Your Dream Teaching Job Awaits - https://www.teachaway.com/

Element path: .nav-recruitment > .tb-megamenu-submenu.dropdown-menu.mega-dropdown-menu > .mega-dropdown-inner.container-fluid-md.container > .tb-megamenu-row.row-fluid > .span12.tb-megamenu-column[data-width="\31 2"]

Snippet:

```<div class="tb-megamenu-column span12 mega-col-nav" data-class="" data-width="12" data-hidewcol="0" id="tb-megamenu-column-12">
```

How to fix: 
Fix any of the following:
  Document has multiple static elements with the same id attribute

Environment: Chrome version 84.0.4147.89

====

Title: Ensures <iframe> and <frame> elements contain a non-empty title attribute (.ub-emb-iframe)

Issue: Ensures <iframe> and <frame> elements contain a non-empty title attribute 

Target application: Teach Abroad or Online | Your Dream Teaching Job Awaits - https://www.teachaway.com/

Element path: .ub-emb-iframe-wrapper.ub-emb-visible > .ub-emb-iframe

Snippet: 

```<iframe class="ub-emb-iframe" src="//1f20e04c15dd469d9594a2fa31cd66c7.pages.ubembed.com/4c183535-ae29-47f8-adea-a1ddd1fc6bb8/a.html?closedAt=0" style="width: 100% !important; height: 69px !important;"></iframe>
```

How to fix: 
Fix any of the following:
  aria-label attribute does not exist or is empty
  aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty
  Element has no title attribute or the title attribute is empty
  Element's default semantics were not overridden with role="presentation"
  Element's default semantics were not overridden with role="none"

Environment: Chrome version 84.0.4147.89

====

# Final words

Well, that's it!

I hope this information and the automated tests are useful to improve the website,


Thank you so much for your patience, 


Regards,


Johanna




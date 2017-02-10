//  REVIEW: Configure a view object, to hold all our functions for dynamic updates and article-related event handlers.
var articleView = {};

articleView.populateFilters = function() {
  $('article').not('.template').each(function() {
    var authorName, category, optionTag;
    authorName = $(this).find('address a').text();
    optionTag = '<option value="' + authorName + '">' + authorName + '</option>';
    $('#author-filter').append(optionTag);
    category = $(this).attr('data-category'); //'Kevin Bacon'
    optionTag = '<option value="' + category + '">' + category + '</option>';
    // console.log(category,$('#category-filter option[value="' + category + '"]').length);
    //If the category exists, do not append a duplicate <option> tag
    //If the category does not exist, append an <option> tag
    if ($('#category-filter option[value="' + category + '"]').length === 0) {
      // console.log('Since a option tag with a value attribute of ' + category + ' did not exist, we will append one with that value now.');
      $('#category-filter').append(optionTag);
    }
  });
};

articleView.handleAuthorFilter = function() {
  //anonymous callback functions
  $('#author-filter').on('change', function() {
    if ($(this).val()) {
      /* TODO: If the select box changes to an option that has a value, we should:
          1. Hide all of the articles
          2. Fade in only the articles that match based on on the author
            that was aselected. Hint: use an attribute selector to find
            those articles that match the value, and then fade them in.
        */
      $('article').hide();
      $('article[data-author="' + $(this).val() + '"]').fadeIn();
    } else {
    /* Otherwise, we should:
        1. Show all the articles except the template */
      $('article').fadeIn();
      $('article.template').hide();
    }
    $('#category-filter').val('');
  });
};

articleView.handleCategoryFilter = function() {
  /* TODO: Just like we do for #author-filter above, we should also handle
  change events on the #category-filter element. Be sure to reset the
  #author-filter while you're at it! */
  $('#category-filter').on('change', function() {
    if($(this).val()) {
      $('article').hide();
      $('article[data-category="' + $(this).val() + '"]').fadeIn();
    } else {
      $('article').fadeIn();
      $('article.template').hide();
    }
    $('#author-filter').val('');
  });
};

articleView.handleMainNav = function () {
  $('.main-nav').on('click', '.tab', function() {
    /* TODO:
      1. Hide all of the .tab-content sections
      2. Fade in the single .tab-content section that is
        associated with the .tab element's data-content attribute.
    */
    $('.tab-content').hide();
    $('#' + $(this).data('content')).fadeIn(); //data = method that cooks for data in html
  });
  $('.main-nav .tab:first').click();
};

//STRETCH GOAL
articleView.setTeasers = function() {
  // Truncate logic to show only first two elements (PARAGRAPHS) within the article body.
  $('.article-body *:nth-of-type(n+2)').hide();
  //Get first 2 children
  /* TODO: Add a delegated (click on one object but make another object respond) event handler to reveal the remaining paragraphs.
    When a .read-on link is clicked, we can:
    1. Prevent the default action of a link.
    2. Reveal everything in that particular article now.
    3. Hide that read-on link!

    // STRETCH GOAl!: change the 'Read On' link to 'Show Less'
  */
};

// TODO: Invoke all of the above functions (I mean, methods!):
articleView.populateFilters();
articleView.handleAuthorFilter();
articleView.handleCategoryFilter();
articleView.handleMainNav();
// articleView.setTeasers();

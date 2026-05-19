module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });
  eleventyConfig.addPassthroughCopy("avatar.jpg");
  eleventyConfig.addPassthroughCopy("card.jpg");
  eleventyConfig.addPassthroughCopy("card-social-20260519.jpg");
  eleventyConfig.addPassthroughCopy("CNAME");

  eleventyConfig.addFilter("readableDate", (value) => {
    return new Intl.DateTimeFormat("en", {
      year: "numeric",
      month: "long",
      day: "numeric"
    }).format(value);
  });

  eleventyConfig.addFilter("isoDate", (value) => {
    return new Date(value).toISOString();
  });

  eleventyConfig.addFilter("encodeURIComponent", (value) => {
    return encodeURIComponent(value);
  });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site"
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
};

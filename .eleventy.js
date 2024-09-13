module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("img");
  eleventyConfig.addPassthroughCopy("src/index.js");
  // Return your Object options:
  return {
    dir: {
      input: "src",
      output: "_site",
    },
  };
};

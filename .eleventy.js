module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("img");
  // Return your Object options:
  return {
    dir: {
      input: "src",
      output: "_site",
    },
  };
};

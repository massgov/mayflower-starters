/**
 * Configure paths to assets for client side rendering.
 */
var ma = ma || {};
// path to where the handlebar templates are being stored.
ma.themePath = "https://mayflower.digital.mass.gov/assets";
// path to where twig templates are being stored (for twigJS).
ma.twigPath = ma.themePath + "/patterns";
ma.iconPath = ma.themePath + "/images/svg-icons/"
ma.patternPaths = {
  '@base': ma.twigPath + "/00-base/",
  '@atoms': ma.twigPath + "/01-atoms/",
  '@molecules': ma.twigPath + "/02-molecules/",
  '@organisms': ma.twigPath + "/03-organisms/",
  '@templates': ma.twigPath + "/04-templates/",
  '@pages': ma.twigPath + "/05-pages/",
  '@meta': ma.twigPath + "/07-meta/"
};

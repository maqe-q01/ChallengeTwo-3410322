class SearchSuggestionSystem {
  constructor(products) {
    // Sort the products lexicographically for consistent suggestion results
    this.products = products.sort();
  }

  getSuggestions(searchWord) {
    const results = [];
    let prefix = "";

    for (let i = 0; i < searchWord.length; i++) {
      prefix += searchWord[i];
      const suggestions = [];

      // Filter products that start with the current prefix
      for (let product of this.products) {
        if (product.startsWith(prefix)) {
          suggestions.push(product);
        }

        // Only up to 3 suggestions needed
        if (suggestions.length === 3) break;
      }

      results.push(suggestions);
    }

    return results;
  }
}
// Example usage:
const products = ["mobile", "mouse", "moneypot", "monitor", "mousepad"];
const searchWord = "mouse";

const system = new SearchSuggestionSystem(products);
const suggestions = system.getSuggestions(searchWord);

console.log(suggestions);


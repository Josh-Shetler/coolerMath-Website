#include <fstream>
#include <iostream>
#include <regex>
#include <string>

int main() {
    // Read the content of the input file
    std::ifstream input_file("input_file.txt");
    std::string html_content((std::istreambuf_iterator<char>(input_file)),
                             std::istreambuf_iterator<char>());

    // Regex patterns to match image sources and iframe embed codes
    std::regex img_src_regex(R"(<img[^>]*src=\"([^\"]*)\"[^>]*>)");
    std::regex iframe_embed_regex(
        R"(window\.prompt\('Copy to clipboard: Ctrl\+C, Enter', '([^']*)'\);)");

    // Iterator and match objects for regex
    std::smatch match;
    std::sregex_iterator iter;

    // Open the output file for writing
    std::ofstream output_file("output_file.txt");

    // Extract image sources
    output_file << "Image assets:\n";
    iter = std::sregex_iterator(html_content.begin(), html_content.end(),
                                img_src_regex);
    for (; iter != std::sregex_iterator(); ++iter) {
        match = *iter;
        output_file << match[1] << std::endl;
    }

    // Extract iframe embed codes
    output_file << "\nIframe embed codes:\n";
    iter = std::sregex_iterator(html_content.begin(), html_content.end(),
                                iframe_embed_regex);
    for (; iter != std::sregex_iterator(); ++iter) {
        match = *iter;
        output_file << match[1] << std::endl;
    }

    // Close the output file
    output_file.close();

    return 0;
}

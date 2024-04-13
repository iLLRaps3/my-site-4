 @@ -1,10 +1,17 @@
// API Reference: https://www.wix.com/velo/reference/api-overview/introduction
// “Hello, World!” Example: https://learn-code.wix.com/en/article/hello-world

 $w.onReady(function () {
 $w.onReady(function () {
    // Write your JavaScript here
    // Assuming 'Products' dataset is connected and named "productsDataset"
    $w("#productsRepeater").onItemReady(($item, itemData, index) => {
        // Setup dynamic image
        $item("#productImage").src = itemData.imageUrl;
        $item("#productImage").alt = itemData.name;
 
 
    // To select an element by ID use: $w('#elementID')
        // Setup dynamic texts
        $item("#productName").text = itemData.name;
        $item("#productDescription").text = itemData.description;
 
 
    // Click 'Preview' to run your code
        // Setup dynamic link
        $item("#learnMoreButton").onClick(() => {
            wixLocation.to(itemData.productPageUrl); // Navigate to the product's URL
        });
    });
 });

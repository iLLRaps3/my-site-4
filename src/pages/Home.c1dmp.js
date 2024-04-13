$w.onReady(function () {
    // Assuming 'Products' dataset is connected and named "productsDataset"
    $w("#productsRepeater").onItemReady(($item, itemData, index) => {
        // Setup dynamic image
        $item("#productImage").src = itemData.imageUrl;
        $item("#productImage").alt = itemData.name;

        // Setup dynamic texts
        $item("#productName").text = itemData.name;
        $item("#productDescription").text = itemData.description;

        // Setup dynamic link
        $item("#learnMoreButton").onClick(() => {
            wixLocation.to(itemData.productPageUrl); // Navigate to the product's URL
        });
    });
});

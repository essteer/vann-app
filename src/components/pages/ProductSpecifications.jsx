import Page from "../Page";

const ProductSpecifications = () => {

    const title = 'Product specifications';
    const subtitles = [
        'Handmade',
        'Colours'
    ]
    const text = [
        'All of our products are handmade — naturally, forms may vary slightly from product to product and images on this website are for illustrative purposes only. Sizes, weights and measurements indicated on our website are subject to a 5% tolerance range.',
        'Although we make every effort to depict colours accurately, we cannot guarantee that images rendered on devices reflect the true colour of the products.',
    ];

    return (
        <Page title={title} subtitles={subtitles} text={text} />
    )
}

export default ProductSpecifications




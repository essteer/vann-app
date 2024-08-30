import Page from "../Page";

const ProductCare = () => {

    const title = 'Product care';
    const subtitles = [
        'Handmade', 
        'Plated and coloured jewellery',
        'Hollow jewellery',
        'Silver jewellery',
        'Storage'
    ]
    const text = [
        'Every product is carefully hand-finished with the highest possible standard of traditional craftsmanship. Each jewellery model is designed and created under careful processes that apply hand fabrication and traditional skills of carving, piercing and fine soldering, together with advanced computer technology.',
        'Exposure to water, sweat, and soap can cause plating to fade. Avoid spraying perfume, hairspray and other chemicals onto jewellery — the alcohol and acids in perfume will cause permanent damage. If cosmetics are applied while wearing jewellery they will build up on the surface, dulling its appearance. Keep away from heat sources and do not submerge in water. To clean, use a damp soft cloth and buff dry. Never use solvents, abrasive wadding or silver cleaning solution on plated and coloured jewellery.',
        'Avoid dropping or knocking hollow jewellery — it may permanently destroy the original form. Do not rinse hollow jewellery while cleaning — simply apply a damp soft cloth to buff dry. Never use tissues or toilet paper to wipe your jewellery as it may scratch the surface.',
        'Silver is a precious metal and may require cleaning from time to time. To polish silver jewellery, apply a small amount of silver polish to a soft cloth, firmly buff the item in a circular motion, rinse well in warm water, then dry thoroughly with a soft cloth.',
        'It is best to store jewellery separately in individual pouches or jewellery boxes. Do not put several plated jewellery pieces in a single bin — they may rub against or scratch each other and cause plating to fade faster. With time and wear, sterling silver and brass gold-plated items will naturally become oxidised and eventually tarnish. Do not keep jewellery in direct sunlight. We highly recommend that you store your jewellery in the original VANN packaging provided.'
    ];

    return (
        <Page title={title} subtitles={subtitles} text={text} />
    )
}

export default ProductCare
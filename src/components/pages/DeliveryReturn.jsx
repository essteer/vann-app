import Page from "../Page";

const DeliveryReturn = () => {

    const title = 'Delivery, returns and exchanges';
    const subtitles = [
        'Costs',
        'Logistics',
        'Delays',
        'Returns and exchanges'
    ]
    const text = [
        'Hong Kong — FREE via SF Express\nInternational < USD 350 — USD 5 via Spaceship Air\nInternational > USD 350 — FREE via Spaceship Air',
        'Goods are dispatched Monday to Friday, and all orders are shipped within 5-7 working days. A tracking number will be emailed to you once your order has shipped.',
        'We are not responsible for delays outside of our control — if your order is delayed by such an event then we will be in touch as soon as possible to let you know, and take steps to minimise the effect of the delay.',
        'Please email us if you would like to return an item — a refund or exchange will only be considered within 14 calendar days of delivery. Returned items must be unused, in perfect condition and in their original packaging in order to qualify for a refund. We will only cover return costs for faulty items — sale items, shipping costs, duties and import taxes are non-refundable. When returning an item, please retain proof of dispatch from a trackable shipping service and purchase shipping insurance — otherwise we cannot guarantee that we will receive the returned goods. After we have received returned goods, we will decide whether to approve or reject the refund — if approved, we will issue a refund receipt automatically via email and the refund will be applied to the credit card used for the original purchase.'
    ];

    return (
        <Page title={title} subtitles={subtitles} text={text} />
    )
}

export default DeliveryReturn
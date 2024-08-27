import Page from "../Page";

const PrivacyPolicy = () => {

    const title = 'Privacy policy';
    const text = [
        'We will use the personal information you provide to us through our website to supply product(s) to you; to process your payment for products; and to update you with our latest news when you subscribe to our mailing list.',
        'We will only give your personal information to other third parties where the law either requires or allows us to do so.'
    ];

    return (
        <Page title={title} text={text} />
    )
}

export default PrivacyPolicy